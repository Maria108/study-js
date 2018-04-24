/* The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.*/

function eurika(num1, num2) {
    var arr = []
    var lastDigit = num1 % 10;
    var nextDigit = Math.floor(num1 / 10) % 10;
    var firstDigit = Math.floor(num1 / 10);
    var result = firstDigit + (lastDigit ** 2)
    for (num1; num1 > 0; num1++) {

    }

    for (num1; num1 < num2; num1++) {

    }

    if (result === num) {
        return true
    }
}

console.log(eurika(89))