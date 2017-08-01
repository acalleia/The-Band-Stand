const Post = require('../models/posts');

const postsController = {};

postsController.index = (req, res) => {
  Post.findAll(req.params.id)
  .then(posts => {
    res.render('posts/post-index', {
      message: 'ok';
      data: posts,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

postsController.show = (req, res) => {
  Post.findByUser(req.params.id)
  .then(posts => {
    res.render('posts/post-user', {
      message: 'ok',
      data: posts,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

postsController.create = (req, res) => {
  Post.create({
    post: req.body.post,
  }, req.user.id, req.thread.id).then(() => {
    res.redirect('/posts');
  }).catch(err => {
    console.log(err);
    req.status(500).json(err);
  });
};

postsController.favorite = (req, res) => {
  Post.favorite(req.params.id)
    .then(posts => {
      res.render('/favorites', {
        data: favorite,
      });
    }).catch(err => {
    console.log(err);
    req.status(500).json(err);
  });
}

module.exports = postsController;
