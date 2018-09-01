/* A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removNb(26) should return [(15, 21), (21, 15)] */

function removeNb(n) {
  let output = [];
  let arr = [];
  let i = 1;
  while (i <= n) {
    arr.push(i);
    i++;
  }
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let firstNum = 0; firstNum < arr.length; firstNum++) {
    for (let secondNum = firstNum + 1; secondNum < arr.length; secondNum++) {
      if (arr[firstNum] * arr[secondNum] === sum - arr[firstNum] - arr[secondNum]) {
        output.push([arr[firstNum], arr[secondNum]]);
        output.push([arr[secondNum], arr[firstNum]]);
      }
    }
  }
  return output;
}

console.log(removeNb(26));
