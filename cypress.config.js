const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      uat: "test_uat",
      prod: "test_prof",
    },
    setupNodeEvents(on, config) {
      //Implement
    },
  },
  defaultCommandTimeout: 3000,
});
