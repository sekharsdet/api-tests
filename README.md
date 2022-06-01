# Api-tests
## Prerequisites

- NodeJS >=14
- Java >=8 to genarate allure reports
- Allure command line tools to see reports

### To start the project locally:

1. from the root folder please run 
```
npm install
```
2. To starts tests
```
npx jasmine
```
3. To generate HTML report
```
allure serve reports/allure-results
```

### For CI CD Runner:

1. Navigate to https://github.com/sekharsdet/api-tests/actions
2. Click on the API Test Work Flow
3. Open any green workflow run and see Run Tests Job

Example : https://github.com/sekharsdet/api-tests/runs/6674266671?check_suite_focus=true

### Tests

Tests are located at api-tests/spec/testSampleApi.spec.js


### Technologies used:

- NodeJS
- Jasmine
- Axios
- Allure report
- GitHub Actions
