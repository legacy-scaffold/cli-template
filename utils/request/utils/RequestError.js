

module.exports = class RequestError {
  constructor ({ code, name, message }) {
    this.code = code;
    this.name = name;
    this.message = message;
  }
};