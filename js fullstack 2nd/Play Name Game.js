/* Play Name Game
Create a function, playNameGame that takes a person's first name (nameing) as an argument and will return a nameing of the name game song staring the name.

The best way to explain the name game is to see it in action, so study the examples below to learn the rules!
*/

function playNameGame(name) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var newName = name.toLowerCase();
    if (vowels.includes(newName[0])) {
        newName = newName[0].toLowerCase() + name.slice(1)
    } else {
        newName = name.slice(1)
    }
    return name + ' ' + name + ' Bo ' + 'B' + newName + ' Banana Fana Fo ' + 'F' + newName + ' Fee Fi Mo ' + 'M' + newName + ' ' + name
}

//EXAMPLES TESTS
console.log(playNameGame('Dima'));
// OUTPUT: ''Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel''

console.log(playNameGame('Masha'));
// OUTPUT: ''Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel''

// function playNameGame(str) {
//     var newStr = ""
//     var vowels = ['a', 'e', 'i', 'o', 'u']
//     if (vowels.includes(str[0].toLowerCase())) {
//         newStr = str + " " + str + " Bo " + "B" + str.toLowerCase() + " Banana Fana Fo " + "F" + str.toLowerCase() + " Fee Fi Mo " + "M" + str.toLowerCase() + " " + str
//     } else {
//         newStr = str + " " + str + " Bo " + "B" + str.slice(1) + " Banana Fana Fo " + "F" + str.slice(1) + " Fee Fi Mo " + "M" + str.slice(1) + " " + str
//     }
//     return newStr
// }