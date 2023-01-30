const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for user
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: [
        {
          user_id: req.session.user_id,
        },
      ],
    });

    const allPosts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('user-posts', {
      allPosts
    });
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }
});

// update post for user
router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json(err).end();      
    } else {
       const post = dbPostData.get({ plain: true });
       res.render('update-post', { post })
    };
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }
});


// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/write', withAuth, (req, res) => {
  res.render('write-post');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
