const Thread = require('../models/threads');

const threadsController = {};

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

threadsController.show = (req, res) => {
  Thread.findById(req.params)
};

threadsController.create = (req, res) => {
  Thread.create({
    thread: req.body.thread,
  }, req.user.id, req.forum.id).then(() => {
    res.redirect('/threads');
  }).catch(err => {
    console.log(err);
    req.status(500).json(err);
  });
};

module.exports = threadsController;
