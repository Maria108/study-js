/* A Madhav array has the following property:

a[0] = a[1] + a[2] = a[3] + a[4] + a[5] = a[6] + a[7] + a[8] + a[9] = ...

Complete the function/method that returns true if the given array is a Madhav array, otherwise it returns false.

Edge cases: An array of length 0 or 1 should not be considered a Madhav array as there is nothing to compare. */

// 100, 50, 50, 25, 25, 50, 25, 25, 25, 25, 20, 20, 20, 20, 20
// 0 1 3 6 10 15 21
// a[0] = a[1] + a[2] = a[3] + a[4] + a[5] = a[6] + a[7] + a[8] + a[9] = ...

function isMadhavArray(arr) {
  let s = 1,
    l = 2,
    bool = arr.length > 2;
  while (s < arr.length && bool) {
    let val = 0;
    for (let i = 0; i < l; i++) val += arr[s + i];
    bool = val === arr[0];
    s += l++;
  }
  return bool;
}

console.log(isMadhavArray([100, 50, 50, 25, 25, 50, 25, 25, 25, 25, 20, 20, 20, 20, 20]));

function isMadhavArray1(arr) {
  if (arr.length < 3) {
    return false;
  }
  let answer = arr[0];
  let check = 0;
  arr.shift();
  for (let i = 2; i <= arr.length; i++) {
    let k = i;
    while (k > 0) {
      check += arr.shift();
      k--;
    }
    if (check === answer) {
      check = 0;
    } else {
      return false;
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isMadhavArray([100, 50, 50, 25, 25, 50, 25, 25, 25, 25, 20, 20, 20, 20, 20]));
