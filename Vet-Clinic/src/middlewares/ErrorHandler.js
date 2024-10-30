const AppError = require('../errors/AppError');
const ValidationError = require('../errors/ValidationError');

function ErrorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res?.status(err.statusCode).json(err?.message)
  } else if (err instanceof ValidationError) {
    return res?.status(err.statusCode).json(err.toJson())
  }
  return res?.status(500).json("Nao foi possivel lidar com essa requisicao")  
}

module.exports = ErrorHandler;