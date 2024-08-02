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
      return db.authors.map((author) => ({
        ...author,
        age: new Date().getFullYear() - author.year,
      }));
    },
    author(_, args) {
      const author = db.authors.find((author) => author.id === args.id);
      if (author) {
        return {
          ...author,
          age: new Date().getFullYear() - author.year,
        };
      }
      return null;
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
    addGame(_, args) {
      const { game } = args;
      db.games.push({
        id: db.games.length + 1,
        ...game,
      });
      return db.games[db.games.length - 1];
    },
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    updateGame(_, args) {
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
