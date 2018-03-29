/* You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "". */

// function longestConsec(str) { // 2 4 6 3 7 1 2
//     let newStr = ''
//     let counter = 0
//     for (idx = 0; idx <= str.length - 3; idx++) {

//         let sumPrev = str[idx].length + str[idx + 1].length
//         let sumNext = str[idx + 1].length + str[idx + 2].length

//         if (sumPrev >= sumNext && sumPrev > counter) {
//             counter = sumPrev
//             newStr = str[idx] + str[idx + 1]
//         } else if (sumPrev < sumNext && sumNext > counter) {
//             counter = sumNext
//             newStr = str[idx + 1] + str[idx + 2]
//         } else if (sumPrev >= sumNext && sumNext < counter) {
//             counter = counter
//             newStr = newStr
//         }
//     }
//     return newStr
// }

//         counter = str[idx+1].length + str[idx+2].length                    
//     }
//     if (counter >= str[idx+2].length + str[idx+3].length) {
//         counter = counter            
//     }


//     let firstW = str[idx]
//     let secondW = str[idx + 1]


//     counter = firstW.length + secondW.length

//     let thirdW = str[idx + 2]
//     let sumFirst = firstW.length + secondW.length
//     let sumSecond = secondW.length + thirdW.length
//     if (sumFirst < sumSecond) {
//         newStr = secondW + thirdW
//     } 
// }
// return newStr
// }



// function longestConsec(str, k) { // 2 4 6 3 7 1 2
//     let newStr = ''
//     let counter = 0
//     let sumPrev = 0
//     let sumNext = 0
//     for (idx = 0; idx <= str.length - k; idx++) {
//         for (j = k - 1; j > 0; j--) {
//             sumPrev += str[idx + j].length
//             sumNext += str[idx + j + 1].length
//         }
//         if (sumPrev >= sumNext && sumPrev > counter) {
//             counter = sumPrev
//                 //newStr = str[idx] + str[idx + 1]
//         } else if (sumPrev < sumNext && sumNext > counter) {
//             counter = sumNext
//                 //newStr = str[idx + 1] + str[idx + 2]
//         } else if (sumPrev >= sumNext && sumNext < counter) {
//             counter = counter
//                 //newStr = newStr
//         }
//     }
//     return counter
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3))

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ''
    }
    let arrPrev = []
    let arrNext = []
    let newArr = []
    let counter = 0
    for (i = 0; i <= strarr.length - k; i++) {
        arrPrev = strarr.slice(i, i + k)
        arrNext = strarr.slice(i + 1, i + k + 1)
        if (arrPrev.join('').length > arrNext.join('').length && arrPrev.join('').length > counter) {
            newArr = arrPrev
            counter = arrPrev.join('').length
        } else if (arrPrev.join('').length <= arrNext.join('').length && arrNext.join('').length > counter) {
            newArr = arrNext
            counter = arrNext.join('').length
        }
    }
    return newArr.join('')
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))