import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
    cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
    cy.url().should('equal', "https://duckduckgo.com/")
    cy.get("input#searchbox_input").should(
        "have.attr",
        "placeholder",
        "Search without being tracked"
    );
});