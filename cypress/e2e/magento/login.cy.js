describe("Verify Login Functionality", () => {
  it("Success Login", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("[data-label="or"]").click();
  });
});
