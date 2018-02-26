/* My Push
Write the function myPush which mirrors the behavior of JavaScripts .push() array method.

myPush should accept the array to operate on as an argument and return the new array with the added element.

myPush will receive two arguments: the array, and a single value to the added to the end of the array.

Do not use the native .push() method in your function!
*/

function myPush(arr, num) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]
    }
    newArr[newArr.length] = num
    return newArr
}

//EXAMPLE TESTS

console.log(myPush([1, 2, 3], 4));
//Output: [1, 2, 3, 4]