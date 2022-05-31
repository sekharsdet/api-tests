/**
 * default conifg for allure report genaration
 */
var AllureReporter = require('jasmine-allure-reporter');
jasmine.getEnv().addReporter(new AllureReporter({
  resultsDir: 'reports/allure-results'
}));