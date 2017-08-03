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

Thread.findByForum = (id) => {
  return db.manyOrNone(`
    SELECT threads.id, thread, user_id, forum_id, topic FROM threads JOIN forums ON
    threads.forum_id = forums.id
    WHERE forums.id= $1
    `, [id]);
};

Thread.create = (thread, userid, forumid) => {
  return db.one(`
    INSERT INTO threads
    (thread, user_id, forum_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [thread.thread, userid, forumid]);
};

Thread.destroy = (id) => {
  return db.none(`
    DELETE FROM threads
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
