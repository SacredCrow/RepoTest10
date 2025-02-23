class magentoPage {
  signin_label = ".panel > .header > .authorization-link > a";
  email_textbox = "#email";
  pass_textbox = ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass";
  signin_button = ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span";

  //fungsi login
  clickSigninLabel() {
    cy.get(this.signin_label).click();
  }

  inputEmailTextbox(n) {
    cy.get(this.email_textbox).type(n);
  }

  inputPassTextbox(n) {
    cy.get(this.pass_textbox).type(n);
  }

  clickSigninButton() {
    cy.get(this.signin_button).click();
  }
  // Fungsi Registrasi
  clickCreateAccountLink() {
    cy.get(this.create_account_link).click();
  }

  inputFirstName(n) {
    cy.get(this.firstname_input).type(n);
  }

  inputLastName(n) {
    cy.get(this.lastname_input).type(n);
  }

  inputEmailRegister(n) {
    cy.get(this.email_register_input).type(n);
  }

  inputPasswordRegister(n) {
    cy.get(this.password_register_input).type(n);
  }

  inputConfirmPasswordRegister(n) {
    cy.get(this.confirm_password_register_input).type(n);
  }

  clickCreateAccountButtonRegister() {
    cy.get(this.create_account_button).click();
  }
  fillRegistrationForm(firstName, lastName, email, password) {
    this.inputFirstName(firstName);
    this.inputLastName(lastName);
    this.inputEmailRegister(email);
    this.inputPasswordRegister(password);
    this.inputConfirmPasswordRegister(password);
  }
  //tambahkan fungsi lain disini
}

export default new magentoPage();
