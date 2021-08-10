describe("User can calculate BMI value based on individual measurements", () => {
  describe("by filling in the form and clicking the button", () => {
    before(() => {
      cy.visit('/')
      cy.get("#weight").type("100");
      cy.get("#height").type("1.86");
      cy.get("#calculate").click();
    });

    it("is expected to display a message", () => {
      cy.get("#results").should("contain.text", "Your BMI value is 28.9");
    });
  });
});
