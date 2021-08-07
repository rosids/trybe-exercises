const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.use('/hello', routes.hello);

app.use('/greetings', routes.greetings);

app.use('/users', routes.users);

app.use('/simpsons', routes.simpsons);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
