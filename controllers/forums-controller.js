const Forum = ('../models/forums');

const forumsController = {};

forumsController.index = (req, res) => {
  Forum.findAll().then(forums => {
    res.render('forums/forum-index', {
      data: forums,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

forumsController.show = (req, res) => {
  Forum.findById(req.params.id)
  .then(forums => {
    res.render('forums/forum-single', {
      data: forums,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

module.exports = forumsController;
