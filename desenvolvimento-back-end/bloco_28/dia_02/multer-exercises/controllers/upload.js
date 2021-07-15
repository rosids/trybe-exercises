module.exports = (req, res, next) => {
  const { fileDuplicated, fileValidationError } = req;
  if (fileValidationError) {
    const { error } = fileValidationError;
    return next(error);
  }

  if (fileDuplicated) {
    const { error } = fileDuplicated;
    return next(error);
  }

  res.status(200).send('Arquivo recebido');
};