/* eslint-disable no-console */
const CustomError = require("./utils/CustomError");

exports.CONFIG = {
  base: "https://t-apicloud.ccrgt.com/crgt-test/permission-admin/",

  beforeRequest: () => {
    // console.log("开始请求");
  },

  onRequest: (requestBody) => ({ adminModul: "permission-admin", params: requestBody }),

  onGetRequest: (requestParams) => (requestParams),

  onMulterRequest: (requestBody) => {
    const oFormData = new FormData();
    Object.keys(requestBody).forEach((keyname) => {
      oFormData.append(keyname, requestBody[keyname]);
    });
    return oFormData;
  },

  onRequestError: (error) => {
    // 在网络错误时进行错误提示
    console.log(error);
  },

  onResponse: (response) => (response),

  afterResponse: () => {
    // console.log("请求结束");
  },

  onResponseError: (error) => {
    // 默认的业务异常提示
    if (error instanceof CustomError) {
      error.print();
    } else {
      console.log(error);
    };
  }
};


exports = function configuration(options) {
  Object.keys(options).forEach((keyname) => {
    CONFIG[keyname] = options[keyname]
  });
};