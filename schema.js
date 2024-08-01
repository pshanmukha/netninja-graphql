export const typeDefs = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
}
type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Author{
    id: ID
    name: String!
    verified: Boolean!
}
type Query {
    reviews: [Review]
    review(id: ID!): Review  
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}
`;

//int, float, string, boolean, ID

// typeDefs - type definitions that define the structure of your GraphQL API's schema.
// This schema outlines the types of data that can be queried or mutated, the relationships between these types,
// and the operations that can be performed.

// Define the type with the fields it contains
// Each field has a type and some fields are marked as non-nullable using '!'

/*
const typeDefs = gql`
  # Define the Game type with fields it contains
  type Game {
    id: ID!          # The unique identifier for the game, non-nullable
    title: String!   # The title of the game, non-nullable
    platform: [String!]!  # A list of platforms the game is available on, each item in the list is non-nullable
  }

  # Define the Review type with fields it contains
  type Review {
    id: ID!          # The unique identifier for the review, non-nullable
    rating: Int!     # The rating given in the review, non-nullable
    content: String! # The content of the review, non-nullable
  }

  # Define the Author type with fields it contains
  type Author {
    id: ID           # The unique identifier for the author, nullable
    name: String!    # The name of the author, non-nullable
    verified: Boolean!  # Whether the author is verified, non-nullable
  }

  # Define the root type for queries that clients can execute
  # The Query type defines the entry points for read operations in your API.
  type Query {
    reviews: [Review]        # A query to get a list of reviews, which can be empty
    review(id: ID!): Review  # Query to get a single review by its unique identifier (id). The 'id' argument is required.
    games: [Game]            # A query to get a list of games, which can be empty
    game(id: ID!): Game      # Query to get a single game by its unique identifier (id). The 'id' argument is required.
    authors: [Author]        # A query to get a list of authors, which can be empty
    author(id: ID!): Author  # Query to get a single author by their unique identifier (id). The 'id' argument is required.
  }
`;
*/
