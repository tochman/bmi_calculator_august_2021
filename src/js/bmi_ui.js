// const BmiCalculator = require("./bmi_calculator");

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate");
const resultsDisplay = document.getElementById("results");
const calculator = new BmiCalculator()

calculateButton.addEventListener("click", () => {
  const bmiValue = calculator.calculateBmi({weight: weightInput.value, height: heightInput.value})
  resultsDisplay.innerText = `Your BMI value is ${bmiValue}`
});
