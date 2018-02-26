/*
Sum Of Digits

Create the function sumOfDigits that adds individual digits of a number and return the sum.
*/

function sumOfDigits(num) {
    var sum = 0;
    while (num > 0;) {
        sum = sum + num % 10
        num = Math.floor(num / 10)
    }
    return sum
}

//EXAMPLE TESTS

console.log(sumOfDigits(414));
//OUTPUT: 9

console.log(sumOfDigits(2913));
//OUTPUT: 15