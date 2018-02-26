/* palindrome
Have the function palindrome(str) accept a string argument, and return the boolean true if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean false.
*/

function palindrome(str) {
    var lowerCaseStr = str.toLowerCase()
    for (idx = 0; idx < lowerCaseStr.length / 2; idx++) {
        if (lowerCaseStr[idx] === lowerCaseStr[lowerCaseStr.length - 1 - idx]) {
            return true
        } else {
            return false
        }
    }

}

//EXAMPLE TESTS

console.log(palindrome("racecar"));
//OUTPUT: true

console.log(palindrome("animal"));
//OUTPUT: false