const symbols = ["÷", "x", "-", "+"];
let display = [];

/* -------------------------------------------------------------------------- */
/*                                HTML Elements                               */
/* -------------------------------------------------------------------------- */

const calculatorButton = document.querySelectorAll(".inputs__button");
const ACButton = document.querySelector("#AC");
const currentDisplay = document.querySelector(".display__current");
const memoryDisplay = document.querySelector(".display__memory");
const equalsButton = document.querySelector("#equals");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// Prints to display the button pushed
const onClickCalculatorButton = (event) => {
  
  // Loop to make sure symbols are a different color to numbers
  if (event.target.value === "=") {
  } else if (symbols.includes(event.target.value)) {
    currentDisplay.innerHTML += `<p class="display__color">${event.target.value}</p>`;
    display.push(event.target.value);
  } else {
    currentDisplay.innerHTML += `<p>${event.target.value}</p>`;
    display.push(event.target.value);
  }
};

// Clear display on AC Button
const displayClear = () => {
  currentDisplay.innerHTML = "";
  memoryDisplay.innerHTML = "";
  display = [];
};

// Push current display to memory
// Don't include equals sign
const currentToMemoryDisplay = () => {
  memoryDisplay.innerHTML = "";
  display.forEach((character) => {
    if (symbols.includes(character)) {
      memoryDisplay.innerHTML += `<p class="display__color">${character}</p>`;
    } else {
      memoryDisplay.innerHTML += `<p>${character}</p>`;
    }
  });

  currentDisplay.innerHTML = "";
};

/* --------------------------- // Maths functions --------------------------- */

// Addition
const addition = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

// Subtraction
const subtraction = (numberOne, numberTwo) => {
  return numberOne - numberTwo;
};

// Multiplication
const multiplication = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

// Division
const division = (numberOne, numberTwo) => {
  return numberOne / numberTwo;
};

/* ---------------------------- Overall Maths Function ---------------------------- */

// ASSUME WORKING WITH TWO NUMBERS FOR NOW
const calculateMathsFunctions = () => {
  const temporaryDisplay = display.join("");
  // const operandOne = [];
  // const operandTwo = [];

  if (display.includes("÷")) {
    const operands = temporaryDisplay.split("÷");
    const result = division(parseInt(operands[0]), parseInt(operands[1]));
    currentToMemoryDisplay();
    currentDisplay.innerHTML = `<p>${result}</p>`;
  }
};

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

calculatorButton.forEach((button) =>
  button.addEventListener("click", onClickCalculatorButton)
);

ACButton.addEventListener("click", displayClear);

equalsButton.addEventListener("click", calculateMathsFunctions);
