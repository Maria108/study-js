/* Sum Multiply and Round
Create a function sumMultiplyAndRound that takes 3 numbers, and calculates a return value based on the following rules.

The function should sum the first two numbers passed in, and then round them down to the nearest integer. The rounded sum should then be multiplied by the third argument, rounded up and returned.
*/

function sumMultiplyAndRound(num1, num2, num3) {
    return Math.floor(Math.floor(num1 + num2) * num3)
}

//EXAMPLE TESTS

console.log(sumMultiplyAndRound(2, 3.5, 6.2))
    //OUTPUT: 31