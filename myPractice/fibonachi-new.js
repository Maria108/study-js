// 1 1 2 3 5 8 13 21 34 55

function fibonacci(number) {
    var prevNum = 1;
    var nextNum = 1;
    for (num = 1; num <= number - 2; num++) {
        nextNum = prevNum + nextNum;
        prevNum = nextNum - prevNum;
    }
    return nextNum;
}

console.log(fibonacci(3));

// function fibonacciRec(prev, next, pos) {
//     if (pos === 0) {
//         return next;
//     }
//     next = prev + next;
//     prev = next - prev;
//     pos = pos - 1;
//     return fibonacciRec(prev, next, pos)
// }

// console.log(fibonacciRec(1, 1, 7))

// function sum(num) {
//     var nextNum = num - 1;
//     if (num === 1) {
//         return num;
//     }
//     return num + sum(nextNum);
// }

// console.log(sum(10));

//10 + sum(9 + sum(8 + (7 + (6 + (5 + (4 + (3 + (2 + 1))))))))