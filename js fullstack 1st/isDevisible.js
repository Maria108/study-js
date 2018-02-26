/* Is it Divisible
Write a function isDivisible that accepts two numbers and returns true if the first number is cleanly divisible by the second, and false if not.
*/

function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDivisible(9, 3));
// OUTPUT: true

console.log(isDivisible(9, 4));
// OUTPUT: false