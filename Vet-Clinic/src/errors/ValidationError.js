class ValidationError extends Error {
  constructor(message, details = []) {
    super(message);
    this.details = details;
    this.statusCode = 400;
    this.error = "Validation Error";
  }

  toJson() {
    return {
      "error": this.error,
      "message": this.message,
      "details": this.details
    }
  }
}

module.exports = ValidationError;