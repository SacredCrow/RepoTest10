describe("Verify Login Functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Success Login", () => {
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get("#email").type("budiyono@mail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Coba123#");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span").click();
    cy.get(".logo > img").should("be.visible");
    cy.get(".base").should("have.text", "Home Page");
  });

  it("Failed Login - Wrong Email", () => {
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get("#email").type("budiyon0@mail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Coba123#");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span").click();
    cy.get(".message-error").should("be.visible");
    cy.get(".message-error").should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    cy.url().should("include", "login");
  });

  it("Failed Login - Wrong Password", () => {
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get("#email").type("budiyon0@mail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Salahsalah");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span").click();
    cy.get(".message-error").should("be.visible");
    cy.get(".message-error").should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    cy.url().should("include", "login");
  });
});
