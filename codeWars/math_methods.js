/* Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor() */

Math.round = function(number) {
  let num = number.toString();
  if (num.includes('.')) {
    let arr = num.split('.');
    if (arr[1][0] >= 5) {
      return parseInt(arr[0]) + 1;
    } else {
      return parseInt(arr[0]);
    }
  } else {
    return number;
  }
};

Math.ceil = function(number) {
  let num = number.toString();
  if (num.includes('.')) {
    let arr = num.split('.');
    if (arr[1] > 0) {
      return parseInt(arr[0]) + 1;
    } else {
      return parseInt(arr[0]);
    }
  } else {
    return number;
  }
};

Math.floor = function(number) {
  let num = number.toString();
  if (num.includes('.')) {
    let arr = num.split('.');
    return parseInt(arr[0]);
  } else {
    return number;
  }
};

console.log(round(4));
