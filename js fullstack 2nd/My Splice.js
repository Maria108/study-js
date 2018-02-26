/* My Splice
Write a function mySplice that mirrors the behavior of JavaScript's .splice() array method.

The splice() method changes the contents of an array by removing existing elements and/or adding new elements. However, unlike the built in method, mySplice will accept the array to operate on as its first parameter, rather than being invoked as a method on that array. Unlike slice, splice modifies the original array! Try and mirror the behavior of the native .slice() method exactly.

mySplice can take an unlimited number of arguments. The first is start, the index at which to start changing the array. The second, deleteCount is optional and is the number of elements to take out of the array. If deleteCount is omitted, all of the elements beginning with start index through the end of the array will be deleted. Every argument after deleteCount will be an element you should add to the array starting at the start index.

Remember, mySplice returns the deleted elements, not the modified array!

Note: Do not use the native .splice() method in your own implementation!
*/

function mySplice(arr, num1, num2) {
    var newArr = []
    if (num1 !== undefined && num2 !== undefined) {
        // elements which not supposed to be deleted
        var temp = arr.slice(num1 + num2, arr.length)
            // array with deleted elements
        newArr = arr.slice(num1, num1 + num2)
            // Removes all element from idx num1
        arr.length = num1
            // adding elements instead deleted ones
        for (k = 3; k < arguments.length; k++) {
            arr.push(arguments[k])
        }
        // adding elements which not supposed to be deleted
        if (temp.length !== 0) {
            for (m = 0; m < temp.length; m++) {
                arr.push(temp[m])
            }
        }
    } else if (num1 !== undefined) {
        newArr = arr.slice(num1, arr.length)
        arr.length = num1
        for (i = 3; i < arguments.length; i++) {
            arr.push(arguments[i])
        }
    }
    return newArr
}

//EXAMPLE TESTS

var arr = [1, 2, 3, 4]

console.log(mySplice(arr, 1));
console.log(arr)
    //OUTPUT: [2, 3, 4]  --> arr is now [1]

console.log(mySplice(arr, 0, 0, 5, 6, 7));
console.log(arr)
    //OUTPUT: []  --> arr is now [5, 6, 7, 1]

console.log(mySplice(arr, 1, 2, 'new'));
console.log(arr)
    //OUTPUT: [6, 7] --> arr is now [5, 'new', 1]w