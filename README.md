# Cypress-test
Cypress test for login

## Install Cypress
```
npm install cypress --save-dev
```

## Run the tests and generate report
```
npx cypress run --spec cypress/e2e/standardUserLogin.cy.js
```
or call it from an npm run script
```
npm run cy:run-login
```
The report can be found under cypress/reports
