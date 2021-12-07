const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNum: {
    type: String,
    required: true,
    // match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  usernameEvent: {
    type: String,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  hasBeenSent: {
    type: Boolean,
    default: false,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
