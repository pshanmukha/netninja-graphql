import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./db.js";
import { typeDefs } from "./schema.js";
``;

const resolvers = {
  Query: {
    // Resolver for fetching all games.
    games(parent, args, contextValue, info) {
      return db.games; // Returns the list of all games from the database.
    },
    // Resolver for fetching a single game by its ID.
    game(_, args) {
      return db.games.find((game) => game.id === args.id); // Finds and returns the game with the specified ID.
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
  Game: {
    // Nested resolver for fetching all reviews related to a specific game.
    reviews(parent) {
      // parent refers to the result of the previous resolver i.e., Game Object
      return db.reviews.filter((review) => review.game_id === parent.id); // Filters and returns reviews related to the game with the ID from the Game object.
    },
  },
  Author: {
    // Nested resolver for fetching all reviews written by a specific author.
    reviews(parent) {
      // parent refers to the result of the previous resolver i.e., Author Object
      return db.reviews.filter((review) => review.author_id === parent.id); // Filters and returns reviews written by the author with the ID from the Author object.
    },
  },
  Review: {
    // Nested resolver for fetching the author of a specific review.
    author(parent) {
      // parent refers to the result of the previous resolver i.e., Review Object
      return db.authors.find((author) => author.id === parent.author_id); // Finds and returns the author of the review with the ID from the Review object.
    },
    // Nested resolver for fetching the game associated with a specific review.
    game(parent) {
      // parent refers to the result of the previous resolver i.e., Review Object
      return db.games.find((game) => game.id === parent.game_id); // Finds and returns the game associated with the review with the ID from the Review object.
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

// parent
// In nested resolvers, parent refers to the result of the previous resolver in the resolver chain.
// For example, if you query for a Game and request its reviews,
// the parent in the "Game.reviews" resolver will be the Game object returned by the Game resolver.
