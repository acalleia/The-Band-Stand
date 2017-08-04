const Forum = require('../models/forums');
const Thread = require('../models/threads');
const Post = require('../models/posts');

const forumsController = {};

forumsController.index = (req, res) => {
  Forum.findAll().then(forums => {
    res.render('forums/forum-index', {
      currentPage: 'index',
      data: forums,
      user: req.user,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

forumsController.show = (req, res) => {

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

module.exports = forumsController;
