const { Post } = require("../models");

const postData = [
  {
    title: "Why is MVC so important?",
    post_text: "MVC allows developers to maintain a true separation of concepts, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 1,
  },
  {
    title: "Authentication Vs Authorization",
    post_text:
      "Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorised to read. The two concepts are completely orthogonal and independent, but both are central to security design, and the failure to get either one correct opens up the avenue to compromise. In terms of web apps, very crudely speaking, authentication is when you check login credentials to see if you recognize a user as logged in, and authorization is when you look up in your access control whether you allow the user to view, edit, delete or create content.",
    user_id: 2,
  },
  {
    title: "Object-Relational Mapping",
    post_text:
      "I really love learning about ORM's. It's really simplified the way I create queries in SQL.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;