/* Nickname Generator
Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as that name's nickname! If the 3rd letter is a vowel, return the first 4 letters.
*/

function nicknameGenerator(str) {
    var newStr = ''
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < 3; i++) {
        newStr += str[i]
    }
    if (str.length > 3 && vowels.includes(str[2])) {
        newStr += str[3]
    }

    return newStr
}

//EXAMPLE TESTS:

console.log(nicknameGenerator('Daniel'));
//OUTPUT: 'Dan'

console.log(nicknameGenerator('Beowulf'));
//OUTPUT: 'Beow'