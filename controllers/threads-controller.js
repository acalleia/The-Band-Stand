const Thread = require('../models/threads');
const Forum = require('../models/forums');
const Post = require('../models/posts');
const threadsController = {};

threadsController.show = (req, res) => {
  Thread.findById(req.params.threadId)
  .then(threads => {
  // console.log(req.params.threadId)
    res.render(`threads/thread-single`, {
      user: req.user.id,
      threadId: req.params.threadId
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

threadsController.newShow = (req, res) => {
  Post.findByThread(req.params.threadId)
  .then(posts => {
  console.log(posts)
    res.render(`threads/thread-single`, {
      posts,
      threadId:req.params.threadId,
      user: req.user,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

threadsController.index = (req, res) => {
  Thread.findAll(req.params.id)
  .then(threads => {
    res.render('threads/threads-index', {
      data: threads,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

// threadsController.show = (req, res) => {
//   Thread.findById(req.params.id)
//   .then(threads => {
//   console.log(req.params.threadId)
//     res.render(`threads/thread-single`, {
//       user: req.user.id,
//       threadId: req.params.threadId
//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// };

// threadsController.show = (req, res) => {
//   Thread.findByForum(req.params.id)
//   .then(threads => {
//     res.render('threads/thread-single', {
//       data: threads,
//       user: req.user,
//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };

threadsController.create = (req, res) => {
  Thread.create({
    thread: req.body.thread},
    req.user.id,
    req.params.forumId)
  .then(() => {
    console.log(req.params);
    res.redirect(`/forums/${req.params.forumId}`);
  }).catch(err => {
    console.log(err);
    req.status(500).json(err);
  });
};

threadsController.newThread = (req, res) => {
  Thread.findByForum(req.params.forumId)
  .then(threads => {
    console.log(threads);
    res.render('forums/forum-single', {
      threads,
      user: req.user,
      forumId: req.params.forumId
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

threadsController.delete = (req, res) => {
  Thread.destroy(req.params.threadId)
  .then(() => {
    res.redirect('/forums');
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

threadsController.favorite = (req, res) => {
  Thread.favorite(req.params.id)
    .then(threads => {
      res.render('/favorites', {
        data: favorite,
      });
    }).catch(err => {
    console.log(err);
    req.status(500).json(err);
  });
}

module.exports = threadsController;
