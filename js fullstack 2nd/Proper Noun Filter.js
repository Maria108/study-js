/* Proper Noun Filter
Write a function, properNounFilter, thate determines whether the string argument is a proper noun.

A word is considered a proper noun if only the first letter is capitalized. If the argument is a proper noun, properNounFilter should return true. It should return false if the word isn't a proper noun, if the word is mixed case, or if it is all caps.
*/

function properNounFilter(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            return false
        } else {
            for (k = 1; k < str.length; k++) {
                if (str[k] === str[k].toUpperCase()) {
                    return false
                }
            }
            return true
        }
    }
}

//EXAMPLE TESTS

console.log(properNounFilter('coffee'));
// OUTPUT: false

console.log(properNounFilter('Einstein'));
// OUTPUT: true

console.log(properNounFilter('ApoLLo'));
// OUTPUT: false