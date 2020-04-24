const demoScript = require("@/scripts/demo-script");

module.exports = function demoAction() {
  demoScript();
  console.log("demo-action");
};