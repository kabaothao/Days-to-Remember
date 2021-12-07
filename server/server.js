const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const Event = require('./models/Event')
const https = require('https');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
require("dotenv").config();
// require Twilio credentials from utils
console.log(process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  process.env.TWILIO_USERNAME);
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  process.env.TWILIO_USERNAME,

);


const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
let sentCount = 0;
app.get("/api/send_reminders", async (request, response) => {
  try {
      var reminders = await Event.find();
      for (var i = 0; i < reminders.length; i++) { 
        client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: reminders[i].phoneNum,
      body: (`${reminders[i].title} ${reminders[i].name}!! From: ${reminders[i].usernameEvent}!`)
    })
    .then(() => {
      sentCount++;
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
      }
      response.send("sentCount:"+sentCount)
  } catch (error) {
      response.status(500).send(error);
  }
});

// route to post messages that send SMS through Twilio
app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
