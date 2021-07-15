require('dotenv').config();
const express = require('express');
const ping = require('./controllers/pingController');

const app = express();

app.use(express.json());

app.get('/ping', ping);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});