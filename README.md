# CypressSamples
I put together this small suite of cypress test examples mainly to document some of the work I've done in the past as those tests are not accesible to the general public. All tests here use applications created specifically for automation testing practice.
1. [Ultimateqa.com](https://ultimateqa.com/)
2. [Saucedemo.com](https://www.saucedemo.com/)

## Contents
1. captcha.cy.js
    - This script solves a simple math captcha required for submitting form data

2. frameworkexample.cy.js
    - A simple example of an automation framework that references seperate page object files in the primary execution script

3. saucedemo.cy.js
    - Quick smoke test of the functionality on saucedemo.com, the scripts adds multiple items to a cart and performs asserations to validate values return as exepected. Also the script validates the user is able to fully proceed through the checkout process