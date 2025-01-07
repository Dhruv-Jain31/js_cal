let currentOperand = '';
let previousOperand = '';
let operator = null;

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function chooseOperator(selectedOperator) {
  if (currentOperand === '') return;
  if (previousOperand !== '') calculate();
  operator = selectedOperator;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operator = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentOperand || previousOperand || '0';
}
