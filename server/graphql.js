const { ApolloServer } = require('apollo-server-lambda')
const graphql = require('graphql')

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: graphql.GraphQLString,
      resolve: () => 'Hello world!'
    }
  }
})
const schema = new graphql.GraphQLSchema({ query: queryType })

const server = new ApolloServer({ schema })

exports.getServerSchema = () => schema
exports.graphqlHandler = server.createHandler()
