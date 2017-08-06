const express = require('express');
const threadsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const threadsController = require('../controllers/threads-controller');
const postsController = require('../controllers/posts-controller');


threadsRouter.get('/', authHelpers.loginRequired, threadsController.index);

// threadsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
//   console.log(req.params);
//   res.render('threads/thread-add', {user: req.user.id, forum_id: req.params.forumId});
// });


threadsRouter.get('/:threadId', authHelpers.loginRequired, threadsController.newShow, threadsController.show);
threadsRouter.get('/:threadId', authHelpers.loginRequired, threadsController.show);

threadsRouter.get('/:threadId/posts/new', authHelpers.loginRequired, (req, res) => {

  res.render('posts/post-add', {user: req.user.id, threads_id: req.params.threadId, posts: req.body.posts});
});

threadsRouter.post('/:threadId', authHelpers.loginRequired, postsController.create);
threadsRouter.get('/:threadId/posts/:postId/edit', authHelpers.loginRequired, postsController.edit);
threadsRouter.put('/:threadId/posts/:postId', authHelpers.loginRequired, postsController.update);
threadsRouter.delete('/:threadId', authHelpers.loginRequired, threadsController.delete);
threadsRouter.delete('/:threadId/posts/:postId', authHelpers.loginRequired, postsController.delete);


module.exports = threadsRouter;
