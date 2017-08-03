const express = require('express');
const forumsRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const forumsController = require('../controllers/forums-controller');
const threadsController = require('../controllers/threads-controller');

forumsRouter.get('/', authHelpers.loginRequired, forumsController.index);
forumsRouter.get('/:id', authHelpers.loginRequired, forumsController.show);

module.exports = forumsRouter;
