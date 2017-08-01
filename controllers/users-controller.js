const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
  User.findUserActions(req.user.id),
  User.findUserPosts(req.user.id)
    .then(threads => {
      res.render('users/user-index', {
        user: req.user,
        data: posts,
      });
    });
};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
    firstname: req.body.first_name,
    lastname: req.body.last_name,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = usersController;
