/* My Join
Write the function myJoin that mirrors the behavior of JavaScript's .join() array method.

However, myJoin will accept the array to operate on as its first parameter, rather than being invoked as a method on that array. Try and mirror the behavior of the native .join() method exactly. If there is no delimiter argument, use a ',' character.

Note: Do not use the native .join() method in your own implementation! Ignore the values undefined, null, and empty arrays.
*/

function myJoin(arr, par) {
    var str = '';
    if (par === undefined) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] !== undefined && arr[i] !== null && arr[i] !== []) {
                str += arr[i] + ','
            }
        }
    } else {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] !== undefined && arr[i] !== null && arr[i] !== []) {
                str += arr[i] + par
            }
        }
    }
    if (par === '') {
        return str
    }
    return str.slice(0, -1)

}

//EXAMPLE TESTS

console.log(myJoin(['hello', undefined, 'world'], ' '));
// OUTPUT: 'hello world'
console.log(myJoin([2, "be", false]));
// OUTPUT: '2,be,false`