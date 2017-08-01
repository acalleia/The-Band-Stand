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
}
