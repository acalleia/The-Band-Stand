const db = require('../db/config');

const Thread = {};

Thread.findAll = (id) => {
  return db.query(`
    SELECT * FROM threads
    WHERE forum_id = $1;
    `, [id]);
};

Thread.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM threads
    WHERE id = $1
    `, [id]);
};

Thread.favorite = (id) => {
  return db.oneOrNone(`
    UPDATE posts SET
    favorite = true
    WHERE id = $1
    `, [id]);
}

module.exports = Thread;
