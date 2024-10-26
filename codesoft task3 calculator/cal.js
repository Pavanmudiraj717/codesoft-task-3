const calculator = document.querySelector('.calculator');
const displayScreen = document.querySelector('.display-screen');
const buttons = document.querySelectorAll('.button');

let userInput = '';
let result = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;

    if (buttonText === '=') {
      calculateResult();
    } else if (buttonText === 'C') {
      clearInput();
    } else {
      userInput += buttonText;
      displayScreen.textContent = userInput;
    }
  });
});

function calculateResult() {
  switch (userInput[userInput.length - 1]) {
    case '+':
      result = parseFloat(userInput.slice(0, -1)) + parseFloat(userInput.slice(-1));
      break;
    case '-':
      result = parseFloat(userInput.slice(0, -1)) - parseFloat(userInput.slice(-1));
      break;
    case '*':
      result = parseFloat(userInput.slice(0, -1)) * parseFloat(userInput.slice(-1));
      break;
    case '/':
      result = parseFloat(userInput.slice(0, -1)) / parseFloat(userInput.slice(-1));
      break;
    default:
      result = parseFloat(userInput);
  }

  displayScreen.textContent = result;
  userInput = '';
}

function clearInput() {
  userInput = '';
  displayScreen.textContent = '0';
}