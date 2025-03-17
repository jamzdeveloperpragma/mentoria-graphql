import http from 'http';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import Schemas from "./graphql/index.graphql.js"
import Resolvers from "./graphql/index.resolver.js"
import mongoose from './graphql/config/db/mongoose.db.js';


const app = express();
const httpServer = http.createServer(app);
app.use(cors());
app.use(express.json());
const server = new ApolloServer({
    typeDefs: Schemas,
    resolvers: Resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();




try {

    mongoose.connect('mongodb://127.0.0.1:27017/graphql');
    console.log('Connected db')
} catch (err) {
    console.log(err);
}


app.use(
    '/',
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
        ///agregar la logica de extraccion de usuario, validaciones de headers
        context: async ({ req }) => ({ token: req.headers.authorization }),
    }),
);


await new Promise((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
);


console.log(`🚀 Server ready at http://localhost:4000/`);