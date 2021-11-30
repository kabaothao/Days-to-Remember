const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  cardRecipient: {
    type: String,
    required: true,
    trim: true,
  },
  cardText: {
    type: String,
    required: "Please create a card!",
    minlength: 1,
    maxlength: 500,
    trim: true,
  },
  cardSender: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Card = model("Card", cardSchema);

module.exports = Card;
