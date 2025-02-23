import RegistrationPage from "../../support/page-object/RegistrationPage";

describe("Verify Registration Functionality", () => {
  beforeEach(() => {
    cy.visit("/customer/account/create/");
  });

  it("Success Registration", () => {
    RegistrationPage.getFirstNameInput().type("Budi");
    RegistrationPage.getLastNameInput().type("Yono");
    RegistrationPage.getEmailInput().type(`budi${Date.now()}@test.com`);
    RegistrationPage.getPasswordInput().type("Password123!");
    RegistrationPage.getConfirmPasswordInput().type("Password123!");
    RegistrationPage.getRegisterButton().click();
    
    cy.get(".message-success").should("be.visible");
    cy.url().should("include", "customer/account/");
  });

  it("Failed Registration - Invalid Email", () => {
    RegistrationPage.getFirstNameInput().type("Budi");
    RegistrationPage.getLastNameInput().type("Yono");
    RegistrationPage.getEmailInput().type("budiyonoMediaList.com");
    RegistrationPage.getPasswordInput().type("Password123!");
    RegistrationPage.getConfirmPasswordInput().type("Password123!");
    RegistrationPage.getRegisterButton().click();
    cy.get(".mage-error").should("be.visible");
    cy.get(".mage-error").should("contain.text", "valid email address");
  });

  it("Failed Registration - Short Password", () => {
    RegistrationPage.getFirstNameInput().type("Budi");
    RegistrationPage.getLastNameInput().type("Yono");
    RegistrationPage.getEmailInput().type(`budi${Date.now()}@test.com`);
    RegistrationPage.getPasswordInput().type("123");
    RegistrationPage.getConfirmPasswordInput().type("123");
    RegistrationPage.getRegisterButton().click();
    cy.get(".mage-error", { timeout: 5000 }).should("be.visible");
    cy.get(".mage-error").should("contain.text", "Minimum length of this field must be equal or greater than 8 symbols");
  });

  it("Failed Registration - Wrong Confirmed Password", () => {
    RegistrationPage.getFirstNameInput().type("Budi");
    RegistrationPage.getLastNameInput().type("Yono");
    RegistrationPage.getEmailInput().type(`budi${Date.now()}@test.com`);
    RegistrationPage.getPasswordInput().type("12345678");
    RegistrationPage.getConfirmPasswordInput().type("123456789");
    RegistrationPage.getRegisterButton().click();
    cy.get(".mage-error", { timeout: 5000 }).should("be.visible");
    cy.get(".mage-error").should("contain.text", "Please enter the same value again.");
  });
  
  
});
