

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS forums
(
  id SERIAL PRIMARY KEY,
  topic TEXT
);

CREATE TABLE IF NOT EXISTS threads
(
  id SERIAL PRIMARY KEY,
  thread text,
  user_id INT REFERENCES users(id),
  forum_id INT REFERENCES forums(id),
  favorite BOOLEAN
);

CREATE TABLE IF NOT EXISTS posts
(
  id SERIAL PRIMARY KEY,
  post TEXT,
  user_id INT REFERENCES users(id),
  threads_id INT REFERENCES threads(id),
  favorite BOOLEAN
);

