const { User } = require('../models');

const userdata = [
  {
    username: 'Banana',
    email: 'user@email.com',
    password: 'password',
  },
  {
    username: 'Tapioca',
    email: 'user2@email.com',
    password: 'password',
  },
  {
    username: 'Bread',
    email: 'user3@email.com',
    password: 'password',
  },
  {
    username: 'Rice',
    email: 'user4@email.com',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;