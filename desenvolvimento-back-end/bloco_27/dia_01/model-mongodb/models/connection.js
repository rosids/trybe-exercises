const { MongoClient } = require('mongodb');
require('dotenv').config();

const URL = process.env.MONGODB_URL;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

let db = null;

const connect = async () => {
  if (!db) {
    const conn = await MongoClient.connect(URL, OPTIONS);
    db = conn.db('users_crud');
  }
  return db;
}

module.exports = connect;
