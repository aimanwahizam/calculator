// HTML elements---------------------------------------------------------------------------
const calculatorButton = document.querySelectorAll(".inputs__button");
const currentDisplay = document.querySelector(".display__current")

// Empty array to store display
const display = [];

// Functions --------------------------------------------------------------------------------
const onClickCalculatorButton = (event) => {
  display.push(event.target.value);
  currentDisplay.innerText += event.target.value;
};

// Event listeners------------------------------------------------------------------------------
calculatorButton.forEach((button) =>
  button.addEventListener("click", onClickCalculatorButton)
);
