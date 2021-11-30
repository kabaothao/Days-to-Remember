const sequelize = require('../config/connection');
require('dotenv').config();
const users = require('./users.js');
const events = require('./events.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await users();
  console.log('\n----- USERS Data -----\n');
  await events();
  console.log('\n----- EVENTS DATA -----\n');
  process.exit(0);
};

seedDatabase();
