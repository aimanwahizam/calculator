// HTML elements
//Try with one id first
// const calculatorButton = document.querySelectorAll(".inputs__button")
const testButton = document.getElementById("1");


// Functions
// Try to console.log the id of the button

const onClickCalculatorButton = () => {
  console.log(testButton.value);
};

// Event listeners
testButton.addEventListener ("click", onClickCalculatorButton);