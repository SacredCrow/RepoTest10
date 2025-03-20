import magentoPage from "../../support/page-object/magentoPage";

describe("Add Product to Cart", () => {
  beforeEach(() => {
    cy.visit("");
    magentoPage.clickSigninLabel();
    cy.fixture("login-users").then((users) => {
      const datausers = users[0];
      cy.login(datausers.email, datausers.password);
    });
  });

  it("Success Add Product to Cart", () => {
    cy.get("#ui-id-3 > span").click();
    cy.get(".items:nth-child(2) > .item:nth-child(2) > a").click();
    cy.get(".item:nth-child(1) .product-image-photo").click();
    cy.get("#option-label-size-143-item-167").click();
    cy.get("#option-label-color-93-item-50").click();
    cy.get("#qty").type("text", "2");
    cy.get("#product-addtocart-button > span").click();
    cy.url("").should("include", "/olivia-1-4-zip-light-jacket.html");
    cy.get(".counter:nth-child(2)").should("be.visible");
    cy.get(".message-success > div").should("be.visible");
    cy.get(".message-success > div").should("contain", "You added Olivia 1/4 Zip Light Jacket to your shopping cart.");
  });
});
