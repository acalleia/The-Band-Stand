const express = require('express');
const threadsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const threadsController = require('../controllers/threads-controller');

threadsRouter.get('/', authHelpers.loginRequired, threadsController.index);
// threadsRouter.post('/', authHelpers.loginRequired, threadsController.create);

// threadsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
//   console.log(req.params);
//   res.render('threads/thread-add', {user: req.user.id, forum_id: req.params.forumId});
// });

threadsRouter.get('/:threadId', authHelpers.loginRequired, threadsController.show);

module.exports = threadsRouter;
