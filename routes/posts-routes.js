const express = require('express');
const postsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const postsController = require('../controllers/posts-controller');

postsRouter.get('/', authHelpers.loginRequired, postsController.index);
// postsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
//   console.log(req.params);
//   res.render('posts/post-add', {user: req.user.id, threads_id: req.params.threadId, posts: req.body.posts});
// });

postsRouter.post('/', authHelpers.loginRequired, postsController.create);
postsRouter.post('/:id', authHelpers.loginRequired, postsController.create);
postsRouter.put('/:id/favorites', authHelpers.loginRequired, postsController.favorite);
postsRouter.get('/:id/favorites', authHelpers.loginRequired, postsController.favorite);

module.exports = postsRouter;
