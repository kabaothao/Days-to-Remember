const { AuthenticationError } = require("apollo-server-express");
const { User, Card } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("cards");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("cards");
    },
    cards: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Card.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { cardId }) => {
      return Card.findOne({ _id: cardId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("cards");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

//   Add mutations here
};

module.exports = resolvers;
