/* Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(()))((()())())"  =>  true
Constraints
0 <= input.length <= 100

You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string. */

function validParentheses(parens) {
  let openPar = 0;
  let closePar = 0;
  if (parens.length === 1 || parens[0] === ')') {
    return false;
  }
  for (let i = 0; i < parens.length; i++) {
    parens[i] === '(' ? openPar++ : closePar++;
    if (closePar > openPar) {
      return false;
    }
  }
  return openPar === closePar;
}

// console.log(validParentheses('(())((()())())'));

function validParentheses(parens) {
  let counter = 0;
  for (let i = 0; i < parens.length; i++) {
    parens[i] === '(' ? counter++ : counter--;
  }
  return counter == 0;
}

console.log(validParentheses('(())((()())())))'));
