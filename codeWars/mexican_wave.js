/* Task
 	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 	1.  The input string will always be lower case but maybe empty.

2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
    let newWord = str
      .slice(0, i)
      .concat(str[i].toUpperCase())
      .concat(str.slice(i + 1));
    result.push(newWord);
  }
  return result;
}

console.log(wave('hello')); // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
