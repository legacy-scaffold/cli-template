const CustomError = require("./CustomError");


module.exports = function errorAssert(url, params, responseData) {
  if (responseData.code === 0) {
    return null;
  };
  return new CustomError({ url, params, response: responseData });
};