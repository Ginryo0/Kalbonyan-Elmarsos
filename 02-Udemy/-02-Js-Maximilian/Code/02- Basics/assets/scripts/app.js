const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

/* Gets Input from input field */
function getUserNumberInput() {
  return parseInt(userInput.value); // = +userInput.value
}

// Writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

//
function writeToLog(
  operationIndetifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndetifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  console.log('INPUT', enteredNumber, currentResult);
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

// add() -> execute it now when going through the code
// add -> the browser executes the function when the click occurs
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// Deleted Code
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// let errorMessage = 'An error \n' + 'occurred!';
// alert(`The result is ${result}`);
// alert(`The result is ${additionResult}`);
// add(5, 5);
// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// currentResult = add(1, 2);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
