const express = require('express');
const threadsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const threadsController = require('../controllers/threads-controller');

threadsRouter.get('/', authHelpers.loginRequired, threadsController.index);
threadsRouter.post('/', authHelpers.loginRequired, threadsController.create);

threadsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('threads/threads-add');
});

threadsRouter.get('/:id', authHelpers.loginRequired, threadsController.show);

module.exports = threadsRouter;
