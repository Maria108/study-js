/* Open Sesame
Create a function, openSesame, which takes an array and a string as it's input.

The array will be an array of strings representing a list of passwords! The string is a password. If the password input matches one of the passwords in the array, return the string 'You may pass.', otherwise return 'You shall not pass!'

Note: You should not use the Array method .indexOf() or .includes()
*/

function openSesame(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return 'You may pass.'
        }
    }
    return 'You shall not pass!'
}

//EXAMPLE TESTS
var passwords = [
    'Password123',
    'DavidYangsMiddleName',
];

console.log(openSesame(passwords, 'Password123'));
//OUTPUT: 'You may pass.'

console.log(openSesame(passwords, 'Balrog'));
//OUTPUT: 'You shall not pass!'