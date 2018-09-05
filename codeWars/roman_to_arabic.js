/* Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row. */

function solution(number){
  // convert the number to a roman numeral
   var obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    let sum = 0
    var arr = str.split('').reverse()
    for (var idx = 0; idx < arr.length; idx++) {
        var el = arr[idx]
        var el2 = arr[idx + 1]
        if (idx === arr.length - 1) {
            el2 = el
        }
        var cur = obj[el]
        var next = obj[el2]
        if (cur <= next) {
            sum = sum + cur
        } else {
            sum = sum + cur - next
            idx++
        }
    }

    return sum
}

}