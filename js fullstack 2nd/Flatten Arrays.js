/* Flatten Arrays
Write a function, flatten, that accepts a two-dimensional array as its argument and returns a flattened one-dimensional copy of the array.

The argument array will never be more than 2 levels deep. Remember to return a copy, meaning you should not modify the original 2D array passed in!
*/

function flatten(arr) {
    var newArr = []
    for (i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            newArr.push(arr[i])
        } else {
            for (k = 0; k < arr[i].length; k++)
                newArr.push(arr[i][k])
        }
    }
    return newArr
}

//EXAMPLE TEST

console.log(flatten([1, [2, 3], 4]));
// OUTPUT: [1,2,3,4];

console.log(flatten([1, 2, [3, 4], 5]));
// OUTPUT: [1,2,3,4,5];