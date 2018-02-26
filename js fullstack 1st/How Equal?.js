/* How Equal?
Write a function that compares two values and returns "how equal" those two values are. If they are strictly equal return "strictly", if they are loosely equal return "loosely", and if they are neither return "not equal".

Note: Study the examples below. Due to type coercion, you may not always get the result you expect!
*/

function howEqual(arg1, arg2) {
    if (arg1 === arg2) {
        return 'strictly'
    } else if (arg1 == arg2) {
        return 'loosely'
    } else {
        return 'not equal'
    }
}

//EXAMPLE TESTS

console.log(howEqual(0, '0'));
// OUTPUT: 'loosely'

console.log(howEqual(3, 9 / 3));
// OUTPUT: 'strictly'

console.log(howEqual(true, 'truthy'));
// OUTPUT: 'not equal'

console.log(howEqual(false, '0'));
// OUTPUT: 'loosely'

console.log(howEqual(0, ''));
// OUTPUT: 'loosely'