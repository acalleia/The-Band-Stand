const db = require('../db/config');

const Post = {};

Post.findAll = (id) => {
  return db.query(`
    SELECT * FROM posts
    `);
};

Post.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM posts
    WHERE id = $1
    `, [id]);
};

Post.update = (post, id) => {
  return db.one(`
    UPDATE posts SET
    post = $1
    WHERE id = $2
    RETURNING *
    `, [post.post, id]);
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
