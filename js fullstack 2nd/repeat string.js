/* Repeat a String
Create a function repeat that repeats a string a certain number of times.

repeat accepts two arguments:

The string to repeat, str
The number of times to repeat that string, num
repeat should return a string that is the concatenation of the str argument n times.

NOTE: Do not use the built-in String 'repeat' method!
*/
function repeat(str, num) {
    var result = "";
    for (i = 1; i <= num; i++) {
        result = result + str
    }
    return result
}

//EXAMPLE TESTS

console.log(repeat("yo", 4));
// OUTPUT: 'yoyoyoyo'

console.log(repeat("yo", 0));
// OUTPUT: ''

console.log(repeat("bye", 6));
// OUTPUT: 'byebyebyebyebyebye'