const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models'); 
const withAuth = require('../utils/auth') 

router.get('/', withAuth, (req, res) => {
    Post.findAll({
      include: [User],
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_text',
      'title',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        include: {
          model: User,
        }
      },
      {
        model: User,
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edituser', withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      const user = dbUserData.get({ plain: true });
      res.render('edit-user', {user, loggedIn: true});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

module.exs = router;
module.exports = router;