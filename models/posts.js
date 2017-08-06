const db = require('../db/config');

const Post = {};

Post.findAll = (id) => {
  return db.query(`
    SELECT * FROM posts
    WHERE threads_id = $1
    `, [id]);
};

Post.findByThread = (id) => {
  return db.manyOrNone(`
    SELECT posts.id, post, posts.user_id, threads_id, thread FROM posts
    JOIN threads ON threads.id = posts.threads_id
    WHERE threads_id = $1
    `, [id]);
};

// posts.post?
Post.create = (post, userid, threadsid) => {
  return db.one(`
    INSERT INTO posts
    (post, user_id, threads_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [post.post, userid, threadsid]);
};

Post.update = (post, id) => {
  return db.one(`
    UPDATE posts SET
    post = $1
    WHERE id = $2
    RETURNING *
    `, [post.post, id]);
};

Post.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM posts
    WHERE id = $1
  `, [id]);
};

Post.destroy = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1
    `, [id]);
};

Post.favorite = (id) => {
  return db.oneOrNone(`
    UPDATE posts SET
    favorite = true
    WHERE id = $1
    `, [id]);
}

module.exports = Post;
