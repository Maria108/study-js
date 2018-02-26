/* Reverse a String
 - Description

 Create the function "reverseString" that reverses a string and returns the value of the reversed string. NOTE: Do NOT use the .reverse() method.
*/

function reverseString(str) {
    var newString = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}

/* Test Case */

console.log(reverseString("hello"));
// logs ==> 'olleh';

console.log(reverseString('Greetings from the moon!'));
// OUTPUT: '!noom eht morf sgniteerG'