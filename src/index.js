import http from 'http';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';


import Schemas from "./graphql/index.graphql.js"
import Resolvers  from "./graphql/index.resolver.js"


const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs: Schemas,
    resolvers:Resolvers ,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();


app.use(
    '/',
    cors(),
    express.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }),
);


await new Promise((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
);


console.log(`🚀 Server ready at http://localhost:4000/`);