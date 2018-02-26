/* isPrime
Create the function isPrime(num) which will take the num parameter being passed and return true if the parameter is a prime number, otherwise return false.

Note: A prime number is any number that can only be evenly divided by 1 or itself
*/

function isPrime(num) {
    for (i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

//EXAMPLE TESTS

console.log(isPrime(1117));
//OUTPUT: true

console.log(isPrime(10));
//OUTPUT: false