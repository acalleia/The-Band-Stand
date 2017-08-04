const express = require('express');
const postsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const postsController = require('../controllers/posts-controller');

postsRouter.get('/', authHelpers.loginRequired, postsController.index);
postsRouter.post('/', authHelpers.loginRequired, postsController.create);
postsRouter.get('/:id', authHelpers.loginRequired, postsController.create);
postsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('posts/post-add', {user: req.user.id, thread_id: req.params.threadId});
});

postsRouter.put('/:id/favorites', authHelpers.loginRequired, postsController.favorite);
postsRouter.get('/:id/favorites', authHelpers.loginRequired, postsController.favorite);

module.exports = postsRouter;
