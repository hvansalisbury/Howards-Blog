const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
      user_id: req.body.user_id,
    });
    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update
router.put('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.update(
      {
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.body.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!dbPostData) {
      res.status(400).json({ message: "Could not update post!" });
      return;
    }
    res.status(200).json({ message: "Post updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!dbPostData) {
      res.status(400).json({ message: "Could not delete post!" });
      return;
    }
    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;