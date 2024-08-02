export const typeDefs = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}
type Author{
    id: ID
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Query {
    reviews: [Review]
    review(id: ID!): Review  
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}

# schema definition for the mutations:
type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edit: UpdateGameInput): Game
}

input AddGameInput {
    title: String!,
    platform: [String!]!
}

input UpdateGameInput {
    title: String,
    platform: [String!]
}
`;

// input types:

// Input types in GraphQL are special object types that allow you to
// pass complex objects as arguments to mutations or queries.
// They are defined similarly to regular object types but are used exclusively for input purposes.

// Input types are particularly useful for mutations,
// where you often need to pass structured data to create or update records.
// They help in maintaining a clean and clear schema by grouping related fields together.
