/* Assume we take a number x and perform any one of the following operations:

a) Divide x by 3 (if it is divisible by 3)
b) Multiply x by 2
After each operation, we write down the result. If we start with 9, we can get a sequence such as:

[9,3,6,12,4,8] -- 9/3=3 -> 3*2=6 -> 6*2=12 -> 12/3=4 -> 4*2=8
You will be given a jumbled sequence of integers and your task is to reorder them so that they conform to the above sequence. There will always be an answer.

For the above example:
solve([12,3,9,4,6,8]) = [9,3,6,12,4,8].
More examples in the test cases. Good luck! */

function solve(arr) {
  let fixArr = [];
  for (let i = 0; i < arr.length; i++) {
    fixArr.push(arr[i]);
    let divider = arr[i] / 3;
    let multiplier = arr[i] * 2;
    if (arr.includes(divider)) {
      fixArr.push(divider);
    } else if (arr.includes(multiplier)) {
      fixArr.push(multiplier);
    } else {
      fixArr = [];
      continue;
    }
  }
}

/* Test.assertDeepEquals(solve([1,3]),[3,1]);
Test.assertDeepEquals(solve([4,2]),[2,4]);
Test.assertDeepEquals(solve([12,3,9,4,6,8]),[9,3,6,12,4,8]);
Test.assertDeepEquals(solve([4,8,6,3,12,9]),[9,3,6,12,4,8]);
Test.assertDeepEquals(solve([558,744,1488,279,2232,1116]),[279,558,1116,2232,744,1488]);
Test.assertDeepEquals(solve([9,1,3]),[9,3,1]);
Test.assertDeepEquals(solve([3000,9000]),[9000,3000]);
Test.assertDeepEquals(solve([4,1,2]),[1,2,4]);
Test.assertDeepEquals(solve([10,5]),[5,10]); */
