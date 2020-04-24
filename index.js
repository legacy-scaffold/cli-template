#!/usr/bin/env node
require("module-alias/register");
require("@/utils/capture");

const demoAction = require("@/actions/demo-action");

(async () => {
  demoAction();
})();