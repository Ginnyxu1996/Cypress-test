# Cypress-test
This project contains Cypress tests for login functionality of the SauceDemo website

## Setup
Clone the repository to your local machine and run the following command
```
npm install
```

## Run the tests and generate the report
run the login test
```
npx cypress run --spec cypress/e2e/standardUserLogin.cy.js
```
or call it from an npm run script
```
npm run cy:run-login
```
The report can be found under cypress/reports
