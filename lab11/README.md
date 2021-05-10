# What is GraphQL?

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

GraphQL schema is used to describe the API type system.
It defines how a client can access a data. What operations are available to query. and each time client calls the API, validation runs against the schema and result is returned if the validation passes.

## Lab 11

### Run the following command to initialize the project 

```shell
$ npm init -y
```

### Instal dependencies

```shell
$ npm i apollo-server graphql --save
```

### Create a directory src and make a file server.js inside it

```shell
$ mkdir src
$ cd src
$ touch server.js
```
### Now code inside the server.js file:

Importing apollo server and gql
```javascript
var { ApolloServer, gql } = require("apollo-server");
```

### Defining Schema
```javascript

//GraphQL Scehma

var schema =gql`
     type Query{
        message: String 
    }
`
;
```
### Defining Resolver
```javascript

// Resolver : Attach a function that is called each time the query from our schema needs to be executed

//Root Resolver

//Each time the query is exected Hello World is returned
var root = {
    Query:{
    message: () => 'Hello World!'

}
}
```

### Initializing apollo server and calling listen 

```javascript

const server = new ApolloServer({ typeDefs:schema, resolvers:root });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url+0}`);
});

```
### Defining start command

```json
"scripts": {
    "start": "node src/server.js"
  },
```
### Now run the server

```shell
$ npm start
```


