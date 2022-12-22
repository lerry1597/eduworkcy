const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 660,
  projectId: 'iwyjxt',
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
