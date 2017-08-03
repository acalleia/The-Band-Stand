const express = require('express');
const forumsRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const forumsController = require('../controllers/forums-controller');
const threadsController = require('../controllers/threads-controller');

forumsRouter.get('/', authHelpers.loginRequired, forumsController.index);
forumsRouter.get('/:forumId', authHelpers.loginRequired, forumsController.show);

forumsRouter.get('/:forumId/threads/:threadId', authHelpers.loginRequired, threadsController.show);
forumsRouter.get('/:forumId/threads/new', authHelpers.loginRequired, (req, res) => {
  console.log(req.params.forumId);
  res.render('threads/thread-add', {user: req.user.id, forum_id: req.params.forumId});
});

forumsRouter.post('/:forumId', authHelpers.loginRequired, threadsController.create);
forumsRouter.delete('/:threadId', authHelpers.loginRequired, threadsController.delete);

module.exports = forumsRouter;
