const seedUsers = require('.Develop/seeds/user-seeds'); 
const seedPosts = require('.Develop/seeds/post-seeds');
const seedComments = require('.Develop/seeds/comment-seeds');

const sequelize = require('.Develop/config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();