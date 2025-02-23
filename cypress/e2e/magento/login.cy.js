import magentoPage from "../../support/page-object/magentoPage";

describe("Verify Login Functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Success Login", () => {
    magentoPage.clickSigninLabel();
    magentoPage.inputEmailTextbox("budiyono@mail.com");
    magentoPage.inputPassTextbox("Coba123#");
    magentoPage.clickSigninButton();
    cy.get(".logo > img").should("be.visible");
    cy.get(".base").should("have.text", "Home Page");
  });

  it("Failed Login - Wrong Email", () => {
    magentoPage.clickSigninLabel();
    magentoPage.inputEmailTextbox("budiyon0@mail.com");
    magentoPage.inputPassTextbox("Coba123#");
    magentoPage.clickSigninButton();
    cy.get(".message-error").should("be.visible");
    cy.get(".message-error").should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    cy.url().should("include", "login");
  });

  it("Failed Login - Wrong Password", () => {
    magentoPage.clickSigninLabel();
    magentoPage.inputEmailTextbox("budiyono@mail.com");
    magentoPage.inputPassTextbox("Salahsalah");
    magentoPage.clickSigninButton();
    cy.get(".message-error").should("be.visible");
    cy.get(".message-error").should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    cy.url().should("include", "login");
  });
});
