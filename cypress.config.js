const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.phptravels.com/demo",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
