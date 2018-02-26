/* Only One
Write a function that accepts three arguments and returns true if only one of those arguments is truthy, and false if not.

Bonus: Write the function without using equality comparison operators (== or ===). This will not be checked in the unit tests for this problem.

More Bonus: Write the function without ever using a logical operator (&& or ||) or any if statements. This will not be checked in the unit tests for this problem.
*/

function onlyOne(arg1, arg2, arg3) {
    if (!arg1 && !arg2 && arg3 ||
        !arg1 && arg2 && !arg3 ||
        arg1 && !arg2 && !arg3
    ) {
        return true
    } else {
        return false
    }
}

function onlyOne(x, y, z) {
    return (!!x + !!y + !!z === 1);
}

//EXAMPLE TESTS

console.log(onlyOne(false, false, true));
// OUTPUT: true

console.log(onlyOne(0, 1, 2));
// OUTPUT: false