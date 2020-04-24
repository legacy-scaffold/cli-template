/* eslint-disable no-console */


module.exports = function createRequestURL(base, url) {
  try {
    const requestURL = `${base.replace(/\/$/ig, "")}/${url.replace(/^\//ig, "").replace(/\/$/ig, "")}`;
    return requestURL;
  } catch (error) {
    throw error;
  }
};