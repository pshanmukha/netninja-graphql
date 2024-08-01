//core component for setting up a GraphQL server,it allows you to define your GraphQL schema, set up resolvers and configure the server
import { ApolloServer } from "@apollo/server";

//utility function to simplify the process of starting a GraphQL server as a standalone service
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import db from "./db.js";

//types
import { typeDefs } from "./schema.js";

//We've defined our data in db.js file, but Apollo Server doesn't know that it should use that data set when it's executing a query.
//To fix this, we create a resolver.

//Resolvers tell Apollo Server how to fetch the data associated with a particular type.

//We define all of your server's resolvers in a single JavaScript object (named resolvers below). This object is called the resolver map.
const resolvers = {
  Query: {
    // A resolver is a function that's responsible for populating the data for a single field in your schema.
    // It can populate that data in any way you define, such as by fetching data from a back-end database or a third-party API.
    // A resolver can optionally accept four positional arguments
    games(parent, args, contextValue, info) {
      return db.games;
    },

    // args

    // The args parameter is used to pass arguments from the client query to the server.

    //How args Works:

    // When a client sends a query or mutation to the GraphQL server, it can include arguments in the request.
    // These arguments are defined in the GraphQL schema and are accessible in the resolver through the args parameter.
    // look at schema definition
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
};

// server setup
// Create an instance of ApolloServer by Passing schema definition and resolvers to the
// ApolloServer constructor
const server = new ApolloServer({
  typeDefs, // GraphQL schema definition
  resolvers, // Resolvers for the schema
});

// Start the server and listen on a port and returns the URL where the server is accessible
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
