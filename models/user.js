const db = require('../db/config');

const User = {};

User.findByUserName = (username) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [username]);
};

User.create = (user) => {
  return db.one(`
    INSERT INTO users
    (username, password_digest, email, first_name, last_name)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [user.username, user.password_digest, user.email, user.first_name, user.last_name]);
};

User.findUserThreads = (id) => {
  return db.manyOrNone(`
    SELECT * FROM threads
    WHERE user_id = $1
    `, [id]);
};

User.findUserPosts = (id) => {
  return db.manyOrNone(`
    SELECT * FROM threads
    WHERE user_id = $1
    `, [id]);
};

User.findUserActions = (id) => {
  return db.manyOrNone(`
    SELECT thread, post FROM posts
    JOIN thread where threads_id = id
    AND user_id = $1
    `, [id]);
};

module.exports = User;
