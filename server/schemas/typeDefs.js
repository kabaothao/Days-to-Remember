const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]
    cards: [Card]
  }

  type Card {
    _id: ID
    cardRecipient: String
    cardText: String
    cardSender: String
    createdAt: String
  }

  type Event {
    _id: ID
    title: String
    name: String
    phoneNum: String
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me : User
    user(username: String!): User
    events(username: String): [Event]
    event(eventId: ID!): Event
    cards(username: String): [Card]
    card(cardId: ID!): Card
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(title: String!, name: String, phoneNum: String, date: String): Event
    removeEvent(eventId: ID!): Event
    addCard(cardText: String!): Card
    removeCard(cardId: ID!): Card
  }
`;

module.exports = typeDefs;
