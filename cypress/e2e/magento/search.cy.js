import magentoPage from "../../support/page-object/magentoPage";

describe("Verify Search Functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Success Find with Result", () => {
    cy.get("#search").type("pants");
    cy.get(".actions > .action").click();
    cy.url().should("include", "/catalogsearch/result/?q=pants");
    cy.get(".base").should("contain", "Search results for: 'pants'");
    cy.get(".search > .block").should("contain", "pants");
  });

  it("Success Find with No Result", () => {
    cy.get("#search").type("adsad");
    cy.get(".actions > .action").click();
    cy.url().should("include", "/catalogsearch/result/?q=adsad");
    cy.get(".base").should("contain", "Search results for: 'adsad'");
    cy.get(".notice > div").should("contain", "Your search returned no results.");
  });
});
