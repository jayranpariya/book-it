class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    //this provide a location of a error in file
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
   