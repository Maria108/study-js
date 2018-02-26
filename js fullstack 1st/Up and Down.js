/* Up and Down
Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.
*/

function countUpThenDown(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(i)
    }
    while (num >= 0) {
        arr.push(num)
        num--
    }
    return arr
}

//EXAMPLE TESTS

console.log(countUpThenDown(2));
//OUTPUT: [0, 1, 2, 1, 0]

console.log(countUpThenDown(0));
//OUTPUT: [0]