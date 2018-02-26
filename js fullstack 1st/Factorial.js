/* Factorial Create the function factorial(num) that returns the factorial of its argument. The argument, num, will be a positive whole number.

A factorial is the product of a number times all the numbers below it and is denoted by a '!'. For example, 5! would be 5*4*3*2*1 or 120.
*/

function factorial(num) {
    var result = num;
    for (var i = num - 1; i > 0; i--) {
        var result = result * i
    }
    return result
}

// #2
function factorial(num) {
    var total = 1;
    for (num; num > 1; num--) {
        total *= num;
    }
    return total;
}

//EXAMPLE TESTS

console.log(factorial(4));
//OUTPUT: 24

console.log(factorial(5));
//OUTPUT: 120