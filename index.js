import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games(parent, args, contextValue, info) {
      return db.games;
    },

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
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },

    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    // Mutation resolver to add a new game
    addGame(_, args) {
      const { game } = args;
      db.games.push({
        id: db.games.length + 1,
        ...game,
      });
      return db.games[db.games.length - 1];
    },
    // Mutation resolver to delete a game by id
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    // Mutation resolver to update a game by id
    updateGame(_, args) {
      console.log(args);
      const { id, edit: { title, platform } = {} } = args;
      db.games = db.games.map((game) => {
        if (game.id === id) {
          const updatedGame = { ...game };
          if (title) {
            updatedGame.title = title[0].toUpperCase() + title.slice(1);
          }
          if (platform && platform.length != 0) {
            updatedGame.platform = [...platform];
          }
          return updatedGame;
        }
        return game;
      });
      return db.games.find((game) => game.id === id);
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

// Mutations are used to modify data on the server and return a result.
// This includes creating, updating, or deleting records.
// While queries are used for reading data, mutations handle the write operations.
