const { expect } = require("chai");
const BmiCalculator = require("../src/js/bmi_calculator");

describe("instance of BmiCalculator ", () => {
  subject(() => new BmiCalculator());

  describe("when created with values as strings", () => {
    def("options", () => ({ weight: "100", height: "1.86" }));

    it("is expected to return a BMI value of 28.9", () => {
      expect($subject.calculateBmi($options)).to.eql("28.9");
    });
  });

  describe("when created with a value missing", () => {
    def("options", () => ({ weight: null, height: "1.86" }));

    it("is expected to return an error message", () => {
      expect($subject.calculateBmi($options)).to.eql(
        "You need to pass in valid values"
      );
    });
  });
});
