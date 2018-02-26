function isPrime(num) {
    for (var i = 2; i < num; i++) {
        var x = num % i
        if (x === 0) {
            return false
        }

    }

    return true
}

console.log(isPrime(11))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(3))