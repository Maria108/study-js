// var M = 1000
// var D = 500
// var C = 100
// var L = 50
// var X = 10
// var V = 5
// var I = 1

var obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // obj.I === obj['I']

/* 
I II III IV V VI VII VIII IX
X XI XII XIII XIV XV XVI XVII XVII XIX 
XX ...
XXX ...
XL ...
L ...
*/
function RomeToArabic(str) { // str = XLVII / 77
    var sum = 0
    var arr = str.split('').reverse() // arr = [L, X, X, I, X], arr = [LXXVII]
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

console.log(RomeToArabic('MMDCLXVI'));