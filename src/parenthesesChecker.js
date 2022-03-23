const isEven = function (number) {
  return number % 2 === 0;
};

const isOdd = function (number) {
  return ! isEven(number);
};

// const removeBalancedParentheses = function (expression) {
//   const parenthesesPosition = expression.indexOf('()');
//   const expressionArray = expression.split('');
//   expressionArray.splice(parenthesesPosition, 2);
//   return expressionArray.join('');
// };

const removeBalancedParentheses = function (expression) {
  const parenthesesPosition = expression.indexOf('()');
  if (parenthesesPosition === -1) {
    return expression;
  }
  const firstPart = expression.substring(0, parenthesesPosition);
  const lastPart = expression.substring(parenthesesPosition + 2);
  return firstPart + lastPart;
};

const areParenthesesBalanced = function (expression) {
  if (isOdd(expression.length)) {
    return false;
  }

  let expressionLeft = expression;
  while (expressionLeft.length > 0) {
    if (expressionLeft.indexOf('()') === -1) {
      return false;
    }
    expressionLeft = removeBalancedParentheses(expressionLeft);
  }
  return true;
};

exports.check = areParenthesesBalanced;
