// sets up relationship between models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
// posts can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});
// user can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// a post can only have one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// a comment can only hvae one user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// a comment can only have one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };
