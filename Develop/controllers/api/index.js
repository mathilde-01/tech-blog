const router = require('express').Router();
const userRoutes = require('.Develop/controllers/api/user-routes');
const postRoutes = require('./Develop/controllers/api/post-routes');
const commentRoutes = require('./Develop/controllers/api/comment-routes'); 

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;