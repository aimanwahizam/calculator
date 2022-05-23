/* ------------------------------ HTML ELements ----------------------------- */
const calculatorButton = document.querySelectorAll(".inputs__button");
const currentDisplay = document.querySelector(".display__current");
const memoryDisplay = document.querySelector(".display__memory");
const ACButton = document.querySelector("#AC");


const symbols = ["/", "x", "-", "+"];

/* -------------------------------- Functions ------------------------------- */
// Prints to display the button pushed
const onClickCalculatorButton = (event) => {

  // Loop to make sure symbols are a different color to numbers
  if (symbols.includes(event.target.value)) {
    currentDisplay.innerHTML += `<p class="display__color">${event.target.value}</p>`;
  } else {
    currentDisplay.innerHTML += `<p>${event.target.value}</p>`;
  }
};

// Clear display on AC Button
const onACPush = () => {
  currentDisplay.innerHTML = "";
  memoryDisplay.innerHTML = "";
}

/* ----------------------------- Event Listeners ---------------------------- */
calculatorButton.forEach((button) =>
  button.addEventListener("click", onClickCalculatorButton)
);

ACButton.addEventListener("click", onACPush);

