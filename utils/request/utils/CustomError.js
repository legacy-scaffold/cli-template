/* eslint-disable no-console */


module.exports = class CustomError {
  constructor ({ url, params, response }) {
    this.code = response.code;
    this.name = response.errmsg;
    this.message = `错误${response.code}-${response.errmsg}`;

    this.url = url;
    this.params = params;
    this.response = response;
  };

  print() {
    console.log(
      `错误码:${this.code};\n` +
      `请求地址:${this.url};\n` +
      `请求参数:${JSON.stringify(this.params)};\n` +
      `响应数据:${JSON.stringify(this.response)};`
    );
  };
};