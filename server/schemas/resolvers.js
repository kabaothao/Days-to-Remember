const { AuthenticationError } = require("apollo-server-express");
const { User, Card, Event } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("events");
    },
    cards: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Card.find(params).sort({ createdAt: -1 });
    },
    card: async (parent, { cardId }) => {
      return Card.findOne({ _id: cardId });
    },
    events: async (parent, { title }) => {
      const params = title ? { title } : {};
      return Event.find(params).sort({ createdAt: -1 });
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("events");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (parent, { title, message, name, phoneNum, hasBeenSent, date }, context) => {
      if (context.user) {
        // console.log("Context", context);
        const event = await Event.create({
          title,
          message,
          name,
          phoneNum,
          date,
          hasBeenSent,
          usernameEvent: context.user.username
        });
        //console.log("updating user for the event", context.user.username);
        await User.findOneAndUpdate(
          { username: context.user.username },
          { $addToSet: { events: event._id } }
        );
        return event;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        console.log("Delete event", eventId, context.user.username); 
        const event = await Event.remove({
          _id: eventId,
          usernameEvent: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: event._id } }
        );
        
        return event;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
