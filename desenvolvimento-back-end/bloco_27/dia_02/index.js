require('dotenv').config();
const express = require('express');
const ping = require('./controllers/pingController');
const ceps = require('./routes/ceps');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.get('/ping', ping);

app.use('/cep', ceps);

app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});