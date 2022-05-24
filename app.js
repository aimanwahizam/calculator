/* -------------------------------------------------------------------------- */
/*                                Useful Arrays and Variables                           */
/* -------------------------------------------------------------------------- */

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
const negativeButton = document.querySelector("#plus-minus");
const darkModeButton = document.querySelector(".display__dark");
const body = document.querySelector(".body");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// Prints to display the button pushed
const onClickCalculatorButton = (event) => {
  // Loop to make sure symbols are a different color to numbers
  // Don't push = to display
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
  memory = 0;
};

// TEST - NEED FINISH
// Negative Symbol
const onNegativePress = (event) => {
  if (display[0] != "-") {
    display.shift("-");
    currentDisplay.innerHTML += `<p>${event.target.value}</p>`
  }
}

// TEST - NEED FINISH
// Dark Mode
const switchDarkMode = () => {
  body.classList.toggle("dark-mode");
  console.log("dark mode");
}

// Push current display to memory
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
  display = [];
};

/* --------------------------- Maths functions --------------------------- */

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

let memory = 0;

const onEqualsPress = () => {
  let temporaryDisplay = display.join("");
    
  symbols.forEach(symbol => {
    if (display.includes(symbol)) {
      // Split into two parts by operator
      const operands = temporaryDisplay.split(symbol);
      
      // Check to see if there's memory and set operandOne
      let  operandOne = []
      if (memory != 0) {
        operandOne = memory;
      } else {
        operandOne = operands[0];
      }
      console.log(display)
      console.log(operandOne)

      const operandTwo = operands[1];

      // Depending on symbol, carry out calculation
      // Push current display to memory line
      // Save memory
      if (symbol === "÷") {
        const result = division(parseFloat(operandOne), parseFloat(operandTwo));
        currentToMemoryDisplay();
        currentDisplay.innerHTML = `<p>${result}</p>`;
        memory = result;
        display.push(memory);
      } else if (symbol === "x") {
        const result = multiplication(
          parseFloat(operandOne),
          parseFloat(operandTwo)
        );
        currentToMemoryDisplay();
        currentDisplay.innerHTML = `<p>${result}</p>`;
        memory = result;
        display.push(memory);
      } else if (symbol === "-") {
        const result = subtraction(parseFloat(operandOne), parseFloat(operandTwo));
        currentToMemoryDisplay();
        currentDisplay.innerHTML = `<p>${result}</p>`;
        memory = result;
        display.push(memory);
      } else if (symbol === "+") {
        const result = addition(parseFloat(operandOne), parseFloat(operandTwo));
        currentToMemoryDisplay();
        currentDisplay.innerHTML = `<p>${result}</p>`;
        memory = result;
        display.push(memory);
      }
    }
  })
};

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

calculatorButton.forEach((button) =>
  button.addEventListener("click", onClickCalculatorButton)
);

ACButton.addEventListener("click", displayClear);

equalsButton.addEventListener("click", onEqualsPress);

negativeButton.addEventListener("click", onNegativePress);

darkModeButton.addEventListener("click", switchDarkMode);
