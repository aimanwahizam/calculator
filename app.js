// HTML elements---------------------------------------------------------------------------
const calculatorButton = document.querySelectorAll(".inputs__button");
const currentDisplay = document.querySelector(".display__current");

// Empty array to store display
const display = [];
const symbols = ["/", "x", "-", "+"];

// Functions --------------------------------------------------------------------------------
const onClickCalculatorButton = (event) => {

  // Loop to make sure symbols are a different colorf
  if (symbols.includes(event.target.value)) {
    display.push(`<p class="display__color">${event.target.value}</p>`);
  } else {
    display.push(`<p>${event.target.value}</p>`);
  }

  // Join the display 
  let temporaryDisplay = display.join("");

  // Shows current inputs onto display
  currentDisplay.innerHTML = `${temporaryDisplay}`
};

// Event listeners------------------------------------------------------------------------------
calculatorButton.forEach((button) =>
  button.addEventListener("click", onClickCalculatorButton)
);
