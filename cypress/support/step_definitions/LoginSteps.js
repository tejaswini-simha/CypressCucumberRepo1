/// <reference types="cypress" />
import { When, Then, Given, Before, And } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the website", () =>{
    cy.visit("https://demo.guru99.com/test/newtours/index.php");
})

When("I enter the given credentials", (datatable) => {
    datatable.hashes().forEach((element)  => {
        cy.get('input[name="userName"]').type(element.username);
        cy.get('input[name="password"]').type(element.password);
    });
})

When("user clicks on login button", () =>{
    cy.get('input[type="submit"]').click();
})

Then("validate whether {string} is displayed", (validation_message) => {
    cy.contains(validation_message);
})