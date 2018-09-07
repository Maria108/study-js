/* In this Kata, you will be given a series of times at which an alarm goes off. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not go off is 11 hours and 40 minutes.
In the second example, the alarm goes off 4 times in a day.

More examples in test cases. Good luck! */

function solve(arr) {
  let sortArr = arr.sort();
  let diff = '';
  let sum = '';
  for (i = 0; i < sortArr.length - 1; i++) {
    sum = '';
    let hours = sortArr[i + 1].slice(0, 2) - sortArr[i].slice(0, 2);
    let minutes = sortArr[i + 1].slice(3) - sortArr[i].slice(3) - 1;
    if (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }
    sum = sum.concat(hours, ':', minutes);
    if (sum > diff) {
      diff = sum;
    }
  }
  return diff;
}

console.log(solve(['21:14', '15:34', '14:51', '06:25', '15:30']));
/* describe("Basic tests", function(){
Test.assertEquals(solve(["14:51"]), "23:59");
Test.assertEquals(solve(["23:00","04:22","18:05","06:24"]),"11:40");
Test.assertEquals(solve(["21:14", "15:34", "14:51", "06:25", "15:30"]),"09:10");
}); */
