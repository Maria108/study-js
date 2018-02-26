/* Count by M
Write a function that takes three arguments: n (number), m(number) and direction (string). The function should count to n by intervals of m and return those numbers in an array.

If the direction string is "Up", the function should count up to n from but not including 0. If the string is "Down", it should count down to but not including 0. You can assume that both n and m will be greater than 0.
*/

function count(n, m, direction) {
    var arr = [];
    if (direction === "Up") {
        while (n > 0) {
            arr.unshift(n);
            n -= m
        }
    } else {
        while (n > 0) {
            arr.push(n);
            n -= m
        }
    }
    return arr
}


function count1(n, m, direction) {
    var arr = [];
    while (n > 0) {
        if (direction === "Down") {
            arr.push(n);
        } else {
            arr.unshift(n);
        }
        n -= m
    }
    return arr
}


//EXAMPLE TESTS

console.log(count1(10, 2, "Up"));
// OUTPUT: [2, 4, 6, 8, 10]

console.log(count1(11, 2, "Down"));
// OUTPUT: [11, 9, 7, 5, 3, 1]