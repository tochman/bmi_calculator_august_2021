const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate");
const resultsDisplay = document.getElementById("results");

calculateButton.addEventListener("click", () => {
  const weight = parseInt(weightInput.value)
  const height = parseFloat(heightInput.value)
  const bmiValue = weight / (height * height)
  resultsDisplay.innerText = `Your BMI value is ${bmiValue.toFixed(1)}`
  // debugger;
});
