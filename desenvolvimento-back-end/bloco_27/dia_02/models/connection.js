const mysql = require('mysql2/promise');
require('dotenv').config();

module.exports = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});