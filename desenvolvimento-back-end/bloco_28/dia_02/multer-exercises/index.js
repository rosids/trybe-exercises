require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { resolve } = require('path');
const fs = require('fs');

const { PORT = 3000 } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(express.json());

app.use(express.static(resolve(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, 'uploads'),
  filename: (_req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const fileExists = (fileName) => {
  const files = fs.readdirSync(resolve(__dirname, 'uploads'));

  return files.some((file) => file.includes(fileName));
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = { error: { statusCode: 403, message: 'Extension must be `png`' } };

    return cb(null, false);
  }

  if (fileExists(file.originalname)) {
    req.fileDuplicated = { error: { statusCode: 409, message: 'File already exists' } };
    return cb(null, false);
  }

  cb(null, true);
};

const upload = multer({ storage, fileFilter });

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), controllers.upload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
