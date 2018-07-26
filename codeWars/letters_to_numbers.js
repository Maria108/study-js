/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso")  ==>  [8, 64]
*/

function parse(data) {
  let output = [];
  let result = 0;
  for (let idx = 0; idx < data.length; idx++) {
    if (data[idx] === 'i') {
      result++;
    } else if (data[idx] === 'd') {
      result--;
    } else if (data[idx] === 's') {
      result = result * result;
    } else if (data[idx] === 'o') {
      output.push(result);
    }
  }
  return output;
}
