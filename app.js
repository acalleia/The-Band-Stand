const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.render('index', {
    message: 'The Band Stand',
    currentPage: 'home',
    documentTitle: 'The Band Stand',
    subTitle: 'Where music lovers can gather to trade, buy, and sell vintage band merch!'
  });
});

const forumsRoutes = require('./routes/forums-routes');
app.use('/forums', forumsRoutes);
const threadsRoutes = require('./routes/threads-routes');
app.use('/forums/threads', threadsRoutes);
const postsRoutes = require('./routes/posts-routes');
app.use('/forums/threads/posts', postsRoutes);
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
