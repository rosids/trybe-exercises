const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
