const { Comment } = require('../models');

const commentdata = [
  {
    title: 'Blossoming Apricot',
    comment_text: 'March 30, 2018',
    post_id: 1,
    user_id: 1,
  },
  {
    title: '"Yellow"',
    comment_text: 'This is a primary color',
    post_id: 2,
    user_id: 1,
  },
  {
    title: 'Hello World!',
    comment_text: 'Allow me to introduce myself',
    post_id: 1,
    user_id: 2,
  },
  {
    title: 'Peace Lillies',
    comment_text: 'These are pretty flowers',
    post_id: 2,
    user_id: 2,
  },
  {
    title: 'Reply',
    comment_text: 'I like to reply',
    post_id: 1,
    user_id: 1,
  },
  {
    title: 'Reply-Reply',
    comment_text: 'I like to reply to replies',
    post_id: 1,
    user_id: 2,
  },
  {
    title: 'Reply-Stop',
    comment_text: 'I replied to myself before you could',
    post_id: 1,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
