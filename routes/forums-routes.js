const express = require('express');
const forumsRouter = express.Router();

const forumsController = require('../controllers/forums-controller');

forumsRouter.get('/', forumsController.index);
forumsRouter.get('/:id', forumsController.show);

module.exports = forumsRouter;
