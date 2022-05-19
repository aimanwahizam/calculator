// HTML elements---------------------------------------------------------------------------
const calculatorButton = document.querySelectorAll(".inputs__button");
const currentDisplay = document.querySelector(".display__current");

// Empty array to store display
const display = [];
const symbols = ["/", "x", "-", "+"];

// Functions --------------------------------------------------------------------------------
const onClickCalculatorButton = (event) => {
  display.push(event.target.value);
  console.log(display);

  display.forEach((character) => {
    if (symbols.includes(character)) {
      currentDisplay.innerHTML = `<p class="diplay__color">${character}</p>`;
    } else {
      currentDisplay.innerHTML = `<p>${character}</p>`;
    }
  });
};

// Event listeners------------------------------------------------------------------------------
calculatorButton.forEach((button) =>
  button.addEventListener("click", onClickCalculatorButton)
);
