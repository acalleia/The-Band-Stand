const express = require('express');
const forumsRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const forumsController = require('../controllers/forums-controller');
const threadsController = require('../controllers/threads-controller');
const postsController = require('../controllers/posts-controller');

forumsRouter.get('/', authHelpers.loginRequired, forumsController.index);
forumsRouter.get('/:forumId', authHelpers.loginRequired, forumsController.show);

forumsRouter.get('/:forumId/threads/new', authHelpers.loginRequired, (req, res) => {
  console.log(req.params.forumId);
  res.render('threads/thread-add', {user: req.user.id, forum_id: req.params.forumId});
});

forumsRouter.get('/:forumId/threads/:threadId', authHelpers.loginRequired, threadsController.show);
forumsRouter.post('/:forumId', authHelpers.loginRequired, threadsController.create);

module.exports = forumsRouter;
