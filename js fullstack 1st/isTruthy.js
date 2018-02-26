/* Is It Truthy?
Write a function isTruthy that accepts a single argument and returns true if that argument is "truthy" and false if the value is falsey.

Examples:

INPUT: isTruthy('Hello World!');
OUTPUT: true

INPUT: isTruthy('');

OUTPUT: false

INPUT: `isTruthy(0);

OUTPUT: false
*/


function isTruthy(arg) {
    if (arg) {
        return true
    } else {
        return false
    }
}




//EXAMPLE TESTS
console.log(isTruthy('Hello World!'));
// OUTPUT: true

console.log(isTruthy(''));
// OUTPUT: false

console.log(isTruthy(0));
// OUTPUT: false