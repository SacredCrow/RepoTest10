class RegistrationPage {
    first_name_input = "#firstname";
    last_name_input = "#lastname";
    email_input = "#email_address";
    password_input = "#password";
    confirm_password_input = "#password-confirmation";
    register_button = "button[title='Create an Account']";
  
    getFirstNameInput() {
      return cy.get(this.first_name_input);
    }
  
    getLastNameInput() {
      return cy.get(this.last_name_input);
    }
  
    getEmailInput() {
      return cy.get(this.email_input);
    }
  
    getPasswordInput() {
      return cy.get(this.password_input);
    }
  
    getConfirmPasswordInput() {
      return cy.get(this.confirm_password_input);
    }
  
    getRegisterButton() {
      return cy.get(this.register_button);
    }
  }
  
  export default new RegistrationPage();
  