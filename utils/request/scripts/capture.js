/* eslint-disable no-console */
const { CONFIG } = require("../configuration");
const RequestError = require("../utils/RequestError");

const { onRequestError } = CONFIG;

process.on("uncaughtException", (error) => {
  if (error instanceof RequestError) {
    onRequestError(error);
  };
  console.log(error);
  process.exit(0);
});


process.on("unhandledRejection", (error) => {
  if (error instanceof RequestError) {
    onRequestError(error);
  };
  console.log(error);
  process.exit(0);
});

