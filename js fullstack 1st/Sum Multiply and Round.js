/* Sum Multiply and Round
Create a function sumMultiplyAndRound that takes 3 numbers, and calculates a return value based on the following rules.

The function should sum the first two numbers passed in, and then round them down to the nearest integer. The rounded sum should then be multiplied by the third argument, rounded up and returned.
*/

function sumMultiplyAndRound(num1, num2, num3) {
    return Math.ceil(Math.floor(num1 + num2) * num3)
}

//EXAMPLE TESTS

console.log(sumMultiplyAndRound(1.5, 3.9, 5.2))
    //OUTPUT: 31