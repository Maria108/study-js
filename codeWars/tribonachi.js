// 0 1 2 3 6 11 20 37 68

// 1 1 2 3 5 8 13 21 34 55

function tribonacci(signature, n) {
    for (let i = 3; i <= signature.length; i++) {
        signature[i] = signature[i - 3] + signature[i - 2] + signature[i - 1]
        if (i + 1 === n) {
            break
        }
    }
    return signature
}

console.log(tribonacci([0, 1, 2], 7));