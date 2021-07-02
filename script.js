// Function declaration
function doSquareCalculation(number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

// Function expression
const doSquareCalculation = function(number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
};

// Arrow function (also a function expression)
const doSquareCalculation = (number1, number2) => {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
};

