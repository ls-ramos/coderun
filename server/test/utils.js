const { ApolloServer } = require('apollo-server-lambda')
const { getServerSchema } = require('../graphql')

exports.graphqlRequest = (query, variables) => {
  const server = new ApolloServer({ schema: getServerSchema() })
  return server.executeOperation({ query, variables })
}
