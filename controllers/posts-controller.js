const Post = require('../models/posts');

const postsController = {};

postsController.index = (req, res) => {
  Post.findAll(req.params.id)
  .then(posts => {
    res.render('posts/post-index', {
      message: 'ok';
      data: posts,
    })
  })
}
