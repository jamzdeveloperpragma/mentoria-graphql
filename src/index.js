import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefsUser } from './graphql/users/schema.graphql.js'
import userQueryResolver from './graphql/users/query.resolver.js'
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// console.log(userSchema);
console.log(userQueryResolver)
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

 type Book{
    title:String
    Author:String
 }

 type Query {

    books:[Book]
 }
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];


const resolvers = {
    Query: {
        books: () => books,
    },
};



const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs: [typeDefsUser,typeDefs],
    resolvers: userQueryResolver,
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