import { gql } from 'apollo-server';

const typeDefs = gql`
  type Subscription {
    somethingChanged: Result
  }

  type Result {
    id: string
  }

  schema {
    subscription: Subscription
  }
`

module.exports = typeDefs;