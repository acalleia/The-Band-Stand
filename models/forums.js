const db = require('../db/config');

const Forum = {};

Forum.findAll = () => {
  return db.query(`
    SELECT * FROM forums
    `);
};

Forum.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM forums
    WHERE id = $1
    `, [id]);
};

module.exports = Forum;
