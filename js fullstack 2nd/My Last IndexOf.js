/* My Last IndexOf
Write a function myLastIndexOf that mirrors the behavior of JavaScript's .lastIndexOf() array method.

The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards (the last index), starting at the optional parameter, fromIndex.

However, unlike the built in method, myLastIndexOf will accept the array to operate on as its first parameter, rather than being invoked as a method on that array. Try and mirror the behavior of the native .myLastIndexOf() method exactly.

Note: Do not use the native Array.prototype.lastIndexOf() method in your own implementation!
*/

function myLastIndexOf(arr, arg, num) {
    if (num === undefined) {
        num = 0
    }
    for (i = arr.length - 1 - num; i >= 0; i--) {
        if (arr[i] === arg) {
            return i
        }
    }
    return -1
}

//EXAMPLE TESTS

console.log(myLastIndexOf([1, 2, 1], 1));
// OUTPUT: 2
console.log(myLastIndexOf([1, 2, 1], 1, 1));
// OUTPUT: 0