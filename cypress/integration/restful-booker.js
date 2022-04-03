describe("Test the Restful Booker Platform", () => {
  it("loads page", () => {
    cy.visit("https://automationintesting.online/");
  });

  it("can fill out form", () => {
    cy.get("#name").type("Carlos");
    cy.get("#email").type("test@test.com");
    cy.get("#phone").type("555-555-5555");
    cy.get("#subject").type("Test Test Test");
    cy.get("#description").type("This is a description");
  });

  it("can submit form", () => {
    cy.get("#submitContact").click();
  });

  it("displays thank you message", () => {
    cy.get(":nth-child(2) > div > h2");
  });

  it("can click book room button", () => {
    cy.get(".col-sm-7 > .btn").click();
  });

  it("can click Next button", () => {
    cy.get(".rbc-toolbar > :nth-child(1) > :nth-child(3)").click();
  });

  it("can click Back button", () => {
    cy.get(".rbc-toolbar > :nth-child(1) > :nth-child(3)").click();
  });

  it("can click Today button", () => {
    cy.get(".rbc-toolbar > :nth-child(1) > :nth-child(1)").click();
  });

  it("can fill out room form", () => {
    cy.get(".room-booking-form > .form-control").type("Carlos");
    cy.get(":nth-child(2) > .form-control").type("Urquiza");
    cy.get(":nth-child(3) > .form-control").type("test@test.com");
    cy.get(":nth-child(4) > .form-control").type("555-555-5555");
  });

  it("can click cancel button", () => {
    cy.get(".btn-outline-danger").click();
  });

  it("scrolls to top of page", () => {
    cy.get("h1").scrollIntoView().should("be.visible");
  });
});
