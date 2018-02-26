/* Count the Vowels
Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains (ie. "Fullstack Academy" would return 5).

Do not count 'y' as a vowel for this challenge.
*/

function vowelCount(str) {
    var counter = 0
    for (i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === "A" || str[i].toUpperCase() === "E" || str[i].toUpperCase() === "I" || str[i].toUpperCase() === "O" || str[i].toUpperCase() === "U") {
            counter++
        }
    }
    return counter
}

//EXAMPLE TESTS

console.log(vowelCount("Good Job"));
//OUTPUT: 3


console.log(vowelCount('AAuuuOo'));
//OUTPUT: 7