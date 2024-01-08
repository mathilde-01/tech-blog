const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I just learned about this in class!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "I really loved learning about ORMs, it's really simplified the way I create queries in SQL",
    post_id: 1,
    user_id: 3
  },
  {
    comment_text: "There's a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
    post_id: 2,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;