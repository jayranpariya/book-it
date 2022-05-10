import ErrorHandler from "../utils/errorHandler";

// eslint-disable-next-line import/no-anonymous-default-export
export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  //wrong mongoos id error
  if (err.name === "CastError") {
    const message = `Resource not found. invalid: ${err.path} :`;
    error = new ErrorHandler(message, 400);
  }

  //handling mongoose validation error
  if (err.name === "validationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    error,
    meassage: error.message,
    stack: error.stack,
  });
};
