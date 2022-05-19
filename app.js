// HTML elements
//Try with one id first
// const calculatorButton = document.querySelectorAll(".inputs__button")
const calculatorButton = document.querySelectorAll(".inputs__label");

console.log(calculatorButton);
console.log(calculatorButton[8].value);

// Functions
// Try to console.log the id of the button

const onClickCalculatorButton = (event) => {
  console.log(event.target.value);
};

// Event listeners
calculatorButton.forEach((button) =>
  button.addEventListener("click", onClickCalculatorButton)
);
