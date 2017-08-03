const Forum = require('../models/forums');
const Thread = require('../models/threads');

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
  Forum.findById(req.params.id),
  Thread.findByForum(req.params.id)
  .then(forums => {
    console.log(forums);
    res.render('forums/forum-single', {
      forums,
      user: req.user,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

module.exports = forumsController;
