const demoServices = require("@/services/demo-service");


module.exports = function demoScript() {
  demoServices();
  console.log("demo-script");
};