const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
