require('dotenv').config();
const express = require('express');
const user = require('./routes/user');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/user', user);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
