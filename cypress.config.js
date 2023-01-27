const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.tesla.com/',
    "experimentalWebKitSupport": true,
    "experimentalStudio": true,
    "includeShadowDom": true,
    "viewportHeight": 1080,
    "viewportWidth": 1920,
    "retries":1,
  },
});
