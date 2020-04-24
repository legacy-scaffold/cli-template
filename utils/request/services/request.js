/* eslint-disable no-unreachable */
/* eslint-disable no-console */
const axios = require("axios");
const cookie = require("cookie");
const { readToken, saveToken } = require("@/utils/token");
const { CONFIG } = require("../configuration");

const RequestError = require("../utils/RequestError");
const errorAssert = require("../utils/errorAssert");
const createRequestURL = require("../utils/createRequestURL");

module.exports = async function request(options) {
  // console.log("====>", readToken());
  const {
    url,
    base,
    body,
    beforeRequest,
    onRequest,
    onResponse,
    onResponseError,
    afterResponse
  } = options;
  const {
    base: defaultBase,
    beforeRequest: defaultBeforeRequest,
    onRequest: defaultRequest,
    onResponse: defaultResponse,
    onResponseError: defaultResponseError,
    afterResponse: defaultAfterResponse
  } = CONFIG;
  const generateURL = createRequestURL((base || defaultBase), url);
  const beforeRequestReturn = (beforeRequest || defaultBeforeRequest)();
  const params = (onRequest || defaultRequest)(body);
  try {
    const result = await axios({
      method: "POST",
      url: generateURL,
      headers: {
        cookie: cookie.serialize("test-token", readToken()),
      },
      responseType: "json",
      data: params,
      validateStatus: (status) => {
        if (status === 200) {
          return true;
        };
        throw new RequestError({ code: status, name: "请求错误", message: `${status}请求未完成` });
      }
    });
    if (result.headers["set-cookie"]) {
      const token = cookie.parse(result.headers["set-cookie"][0]);
      saveToken(token["test-token"]);
    };
    const error = errorAssert(generateURL, params, result.data);
    if (error) {
      throw error;
    };
    const afterData = (onResponse || defaultResponse)(result.data);
    return afterData;
  } catch (error) {
    (onResponseError || defaultResponseError)(error, url);
    throw error;
  } finally {
    (afterResponse || defaultAfterResponse)(beforeRequestReturn);
  };
};