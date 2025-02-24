import magentoPage from "../../support/page-object/magentoPage";

describe("Verify Login Functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Success Login", () => {
    magentoPage.clickSigninLabel();
    cy.fixture("login-users").then((users) => {
      const datausers = users[0];
      cy.login(datausers.email, datausers.password);

      cy.get(".logo > img", { timeout: 5000 }).should("be.visible");
      cy.get(".base").should("have.text", "Home Page");
    });
  });

  it("Failed Login - Wrong Email", () => {
    magentoPage.clickSigninLabel();
    cy.fixture("login-users").then((users) => {
      const datausers = users[1];
      cy.login(datausers.email, datausers.password);

      cy.url().should("include", "login");
      cy.get(".message-error", { timeout: 5000 }).should("be.visible");
      cy.get(".message-error").should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    });
  });

  it("Failed Login - Wrong Password", () => {
    magentoPage.clickSigninLabel();
    magentoPage.inputEmailTextbox("budiyono@mail.com");
    magentoPage.inputPassTextbox("Salahsalah");
    magentoPage.clickSigninButton();

    cy.url().should("include", "login");
    cy.get(".message-error", { timeout: 5000 }).should("be.visible");
    cy.get(".message-error").should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
  });

  it("Failed Login - Empty Fields", () => {
    magentoPage.clickSigninLabel();
    magentoPage.clickSigninButton();

    cy.get(".base").should("have.text", "Customer Login");
    cy.get("#email-error").should("contain.text", "This is a required field.");
    cy.get("#pass-error").should("contain.text", "This is a required field.");
  });

  it("Failed Login - With Empty Email", () => {
    magentoPage.clickSigninLabel();
    magentoPage.inputPassTextbox("Coba123#");
    magentoPage.clickSigninButton();

    cy.get(".base").should("have.text", "Customer Login");
    cy.get("#email-error").should("contain.text", "This is a required field.");
  });

  it("Failed Login - With Empty Password", () => {
    magentoPage.clickSigninLabel();
    magentoPage.inputEmailTextbox("budiyono@mail.com");
    magentoPage.clickSigninButton();

    cy.get(".base").should("have.text", "Customer Login");
    cy.get("#pass-error").should("contain.text", "This is a required field.");
  });

  it("Failed Login - Invalid Email Format", () => {
    magentoPage.clickSigninLabel();
    magentoPage.inputEmailTextbox("budiyonomail.com");
    magentoPage.inputPassTextbox("Coba123#");
    magentoPage.clickSigninButton();

    cy.url().should("include", "login");
    cy.get(".base").should("contain.text", "Customer Login");
    cy.get("#email-error", { timeout: 5000 }).should("be.visible");
    cy.get("#email-error").should("contain.text", "Please enter a valid email address (Ex: johndoe@domain.com).");
  });
});
