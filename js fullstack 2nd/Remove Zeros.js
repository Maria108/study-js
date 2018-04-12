/* Remove Zeros
Create a function, removeZeros, which strips out any zeros from a number, and returns the 'stripped' number.

So, what happens if the input is zero? That is a special case! If the input is zero, the function should return NaN, which stands for 'Not a Number'. NaN is a special value that isn't a number, but still is of type 'number'!
*/

function removeZeros(num) {
    var str = num.toString()
    var newStr = ''
    if (num === 0) {
        return NaN
    } else {
        for (i = 0; i < str.length; i++) {
            if (str[i] !== '0') {
                newStr += str[i]
            }
        }
    }
    return +newStr
}

//EXAMPLE TESTS

console.log(removeZeros(400307102.005));
//OUTPUT: 6666.23

console.log(removeZeros(0));
//OUTPUT: NaN