class magentoPage {
  signin_label = ".panel > .header > .authorization-link > a";
  email_textbox = "#email";
  pass_textbox = "#pass";
  signin_button = "#send2";

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
}

export default new magentoPage();
