var obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function RomeToArabic(str) {
    var sum = 0
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

console.log(RomeToArabic('MCDVI'));