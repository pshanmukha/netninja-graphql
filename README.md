# GraphQL with Node.js Learning 🚀

This project is aimed at tracking my learning journey with GraphQL and Node.js. The project follows the tutorial series by Net Ninja, which can be found [here](https://www.youtube.com/watch?v=xMCnDesBggM&list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y&pp=iAQB).

The project is structured with different branches, each focusing on specific GraphQL topics. The combined code is merged into the `main` branch.

## Prerequisites 📋

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a basic understanding of JavaScript and Node.js.

## Installation 🛠️

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/pshanmukha/netninja-graphql.git
   cd <repository-directory>
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Install `nodemon` globally if you haven't already:
   ```bash
   npm install -D nodemon
   ```

Look at package.json file, inside scripts object the following script is defined:

```bash
"start:dev": "nodemon index.js"
```

This script uses nodemon to run the index.js file. nodemon is a utility that monitors for any changes in your source and automatically restarts the server. This is particularly useful during development as it eliminates the need to manually restart the server after every change.

## Running the Project

To run the project, use the following command:

```bash
npm run start:dev
```

We can now execute GraphQL queries on our server. To execute our first query, we can use Apollo Sandbox.

Visit http://localhost:4000 in your browser, which will open the Apollo Sandbox.

### Exploring the Branches

#### graphql-setup-schema-resolver-query

This branch sets up the initial GraphQL server with basic schemas and resolvers. It also includes simple queries to fetch data.

#### graphql-nested-queries

This branch adds support for nested queries, allowing you to fetch related data in a single query.

#### graphql-mutation-add-delete-update

This branch implements mutations for adding, deleting, and updating data.

## Concepts Covered

This project covers the following key concepts:

### 1. Setting Up Apollo Server 🚀

- Importing and configuring Apollo Server.
- Setting up a standalone server with Apollo.

### 2. GraphQL Schema Definition 📜

- Defining type definitions for the GraphQL schema.
- Creating resolvers to handle GraphQL queries.

### 3. Database Integration 🗄️

- Simulating a database with a simple JavaScript object.
- Querying data from the simulated database.

### 4. GraphQL Queries 🔍

- Implementing basic queries to fetch data.
- Using arguments in queries to filter data.

### 5. GraphQL Resolvers 🔧

- Writing resolver functions to handle queries.
- Understanding the resolver function parameters: parent, args, contextValue, and info.

### What is GraphQL? 🌐

GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.

Query Language for APIs: GraphQL is a way to ask your API for data. You can specify exactly what data you want in your request.

For example, you can ask for just the names and phone numbers of users without getting any extra information.

Runtime for Fulfilling Queries: Once you've made your request, GraphQL takes care of gathering the requested data from your data sources (like a database) and sends it back to you in the format you asked for.

### GraphQL vs. REST: Overcoming REST's Limitations ⚔️

#### Why GraphQL Emerged 🌟

GraphQL was created in 2012 to address the speed and efficiency needs of social media platforms. REST APIs were found to be too rigid and slow for delivering dynamic news feeds and other data-intensive services.

#### Key Challenges with REST 🚧

**Fixed-Structure Data Exchange:**

- REST APIs have a fixed structure for data requests.
- This structure can be inefficient as it often doesn't match the exact data needs of the client.

**Overfetching and Underfetching:**

- **Overfetching:** REST APIs return the entire dataset. For example, requesting a person’s information might return their name, date of birth, address, and phone number, even if only the phone number is needed.
- **Underfetching:** Multiple requests are needed to get related data. For example, to get a person’s phone number and their last purchase, separate requests to `/person` and `/purchase` endpoints are required.

### What is Apollo Server? 🚀

Apollo Server is a community-maintained open-source GraphQL server that works with any GraphQL schema. It is used to build a production-ready, self-documenting GraphQL API.

### GraphQL Schema 📜

A GraphQL schema defines the structure of the data that can be queried. It includes type definitions and relationships between types.

### Type Definitions 📝

Type definitions specify the types of data that can be queried, such as `Query`, `Mutation`, and custom types like `User` or `Post`.

### Queries 🔍

Queries are used to fetch data from the server. They specify what data is needed and can include arguments to filter or modify the data.

### Resolvers 🔧

Resolvers are functions that handle the logic for fetching the data specified in the queries. They are responsible for returning the data requested by the client.

### Resolver Function Parameters 🛠️

Resolver functions receive four parameters:

- **parent:** The result of the previous resolver in the chain.
- **args:** The arguments provided in the query.
- **contextValue:** A shared object passed to all resolvers, useful for authentication and other shared data.
- **info:** Information about the execution state of the query.

## References 📚

- [Net Ninja GraphQL Tutorial](https://www.youtube.com/watch?v=xMCnDesBggM&list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y&pp=iAQB)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [The Difference Between GraphQL and REST](https://aws.amazon.com/compare/the-difference-between-graphql-and-rest/)
