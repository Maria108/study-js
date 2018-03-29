/* Factorial */

function factorial(num) {
    var total = 1;
    for (num; num > 1; num--) {
        total *= num;
    }
    return total;
}

function factorial(num) {

    if (num === 1) {
        return num;
    }
    return num * factorial(num - 1);
}


//EXAMPLE TESTS

console.log(factorial(4));
//OUTPUT: 24

console.log(factorial(5));
//OUTPUT: 120