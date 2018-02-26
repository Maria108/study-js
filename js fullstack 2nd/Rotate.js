/* Rotate
Write a function that will rotate an array to the right by a certain number of "steps".

For example, the array to rotate is: [1,2,3,4,5,6,7] and will be rotated 3 "steps". The final array will look like: [5,6,7,1,2,3,4]. Notice the position of each index is shifted to the right by three places. The first argument to the rotate function is the array to rotate; the second argument is a number of​ steps.
*/

function rotate(arr, num) {
    var newArr = []
    for (i = 0; i < arr.length - num; i++) {
        newArr.push(arr[i + num])
    }
    for (i = 0; i < num; i++) {
        newArr.push(arr[i])
    }
    return newArr
}


//EXAMPLE TESTS

console.log(rotate([22, 11, 500, 92, 45, 67, 23, 14, 78], 5));
//Output: [500, 92, 22, 11]