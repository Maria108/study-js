/* Even and Odd
Write a function that accepts and array of numbers and returns and array of arrays. The first array in the return array should include all the even numbers from the argument array. The second array in the return array should include all odd numbers.
*/

function evenOdd(arr) {
    var evenArr = []
    var oddArr = []
    var finalArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        } else {
            oddArr.push(arr[i])
        }
    }
    finalArr.push(evenArr)
    finalArr.push(oddArr)
    return finalArr
}

//EXAMPLE TEST

console.log(evenOdd([1, 2, 3, 4, 5, 6]));
// OUTPUT: [ [2,4,6], [1,3,5] ]