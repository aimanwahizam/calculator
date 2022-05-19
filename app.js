// HTML elements
//Try with one id first
// const calculatorButton = document.querySelectorAll(".inputs__button")
const testButton = document.getElementById("1");

console.log(testButton);

// Functions

// Try to console.log the id of the button

const onClickCalculatorButton = () => {
  console.log("1");
};

// Event listeners
testButton.addEventListener("click", onClickCalculatorButton);