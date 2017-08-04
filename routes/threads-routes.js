const express = require('express');
const threadsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const threadsController = require('../controllers/threads-controller');
const postsController = require('../controllers/posts-controller');


threadsRouter.get('/', authHelpers.loginRequired, threadsController.index);
// threadsRouter.post('/', authHelpers.loginRequired, threadsController.create);

// threadsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
//   console.log(req.params);
//   res.render('threads/thread-add', {user: req.user.id, forum_id: req.params.forumId});
// });


threadsRouter.get('/:threadId', authHelpers.loginRequired, threadsController.newShow, postsController.create, threadsController.show);
threadsRouter.get('/:threadId', authHelpers.loginRequired, threadsController.show);

threadsRouter.get('/:threadId/posts/new', authHelpers.loginRequired, (req, res) => {
  console.log(req.params.threadId);
  res.render('/posts/post-add', {user: req.user.id, thread_id: req.params.threadId});
});

threadsRouter.delete('/:threadId', authHelpers.loginRequired, threadsController.delete);


module.exports = threadsRouter;
