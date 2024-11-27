Feature: I want to login into the site with valid data
Background: Navigate to the website
Given I navigate to the website

@smoke
Scenario: Login as user with valid password
When I enter the given credentials
    | username | password|
    | admin    | admin|
When user clicks on login button
Then validate whether "Login Successfully" is displayed

@negative
Scenario: Login as user with invalid password
When I enter the given credentials
    | username | password|
    | admin    | any |
When user clicks on login button
Then validate whether "Enter your userName and password correct" is displayed


