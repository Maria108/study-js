/* Exponentiate
Write a function exponentiate that accepts a number and a power to raise that number to. For the present, assume the power argument will always be a positive integer value.
*/

function exponentiate(num1, num2) {
    return num1 ** num2
}

// second way
function exponentiate(num1, num2) {
    var result = num1
    for (var q = 1; q < num2; q++) {
        var result = result * num1
    }
    return result
}

//EXAMPLE TESTS

console.log(exponentiate(2, 24));
// OUTPUT: 4

console.log(exponentiate(3, 24));
// OUTPUT: 81