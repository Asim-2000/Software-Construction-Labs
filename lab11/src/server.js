var { ApolloServer, gql } = require("apollo-server");


//GraphQL Scehma

var schema =gql`
     type Query{
        message: String 
    }
`
;

// Resolver : Attach a function that is called each time the query from our schema needs to be executed

//Root Resolver

//Each time the query is exected Hello World is returned
var root = {
    Query:{
    message: () => 'Hello World!'

}
}

const server = new ApolloServer({ typeDefs:schema, resolvers:root });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url+0}`);
});

