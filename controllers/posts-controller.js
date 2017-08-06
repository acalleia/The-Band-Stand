const Post = require('../models/posts');

const postsController = {};

postsController.index = (req, res) => {
  Post.findByThread(req.params.threadId)
  .then(posts => {
    console.log(posts),
    console.log(threadId),
    res.redirect('posts/post-index', {
      posts,
      user: req.user
    });
  console.log(posts)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

postsController.show = (req, res) => {
  Post.findByUser(req.params.id)
  .then(posts => {
    threads,
    posts
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

postsController.create = (req, res) => {
  console.log(req.params);
  Post.create({
    post: req.body.post},
    req.user.id,
    req.params.threadId)
   .then(() => {
    res.redirect('/forums');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

postsController.update = (req, res) => {
  console.log(req.params)
  Post.update({
    post: req.body.post},
    req.params.threadId,
    req.user.id,
    req.params.postId)
  .then(() => {
    res.redirect('/forums');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

postsController.edit = (req, res) => {
  Post.findById(req.params.postId)
    .then(posts => {
      res.render('posts/post-single-edit', {
        posts,
        threadId: req.params.threadId,
        postId: req.params.postId,
        user: req.user.id
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

postsController.delete = (req, res) => {
  Post.destroy(req.params.postId)
  .then(() => {
    postId: req.params.id,
    res.redirect('/forums');
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

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
