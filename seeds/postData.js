const { Post } = require('../models');

const postdata = [
  {
    title: 'I Love Javascript',
    post_text: 'Javascript is so powerful. I love that I can use it for just about anything.',
  },
  {
    title: 'Movies R Fun',
    post_text: 'I like watching movies. They\'re fun',
  },
  {
    title: 'What do I do?',
    post_text: 'I don\'t know what to do',
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
