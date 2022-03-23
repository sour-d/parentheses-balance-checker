const parenthesesChecker = require('../src/parenthesesChecker.js');

const testParenthesesChecker = function (expression, expected, desc) {
  const actual = parenthesesChecker.check(expression);
  const metExpectation = actual === expected;
  const status = metExpectation ? '✅' : '❌';

  let massage = status + ' ' + desc;
  if (!metExpectation) {
    massage += '\nExpcted -\n' + expected;
    massage += '\nActual -\n' + actual;
  }

  console.log(massage);
  return metExpectation;
};

const parenthesesCheckerTests = function () {
  testParenthesesChecker('()', true, 'For single balanced parentheses ()');
  testParenthesesChecker('(())', true, 'For two balanced parentheses (())');
  testParenthesesChecker('(()', false, 'For unbalanced parentheses (()');
  testParenthesesChecker('((', false, 'For unbalanced parentheses ((');
  testParenthesesChecker(')(', false, 'For unbalanced parentheses )(');
  testParenthesesChecker('(((()())))', true, 'For multiple balanced parentheses (((()())))');
};

parenthesesCheckerTests();