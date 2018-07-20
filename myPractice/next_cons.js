/* # Number Counting Sequence
# ------------------------------------------------------------------------------
# The number counting sequence is a sequence of number strings that begins with:
# ["1", "11", "21", "1211", "111221", "312211", "13112221", "1113213211"...]
#
# "1" is counted as "one 1" or "11", followed by
# "11" which is counted as "two 1s" or "21", followed by
# "21" which is counted as "one 2 and one 1" or "1211", and so on.
#
# It helps to "say it out loud" to describe the item in the sequence.
#
# Given an integer n, generate the n-th element in the number counting sequence. */


function nextNumber(num) {
  let nextNum = ''
  let counter = 1
  for (let idx = 0; idx < num.length; idx++) {
      if (num[idx] === num[idx + 1]) {
          counter++
      } else {
          nextNum += counter + num[idx]
          counter = 1
      }
  }
  return nextNum
}

function sequence(number) {
  let arr = []
  arr[0] = ''
  arr[1] = '1';
  for (i = 2; i <= arr.length; i++) {
      arr[i] = nextNumber(arr[i - 1])
      if (number === i) {
          return arr[i]
      }
  }

}

console.log(sequence(8))