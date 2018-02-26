// #1
function multiplier(number) {
    return number * 25
}
console.log(multiplier(4));

// #2
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Masha', 'Dasi'))

// #3
function fullNameAndAge(firstName, lastName, age) {
    var result = fullName(firstName, lastName);
    return result + ', ' + age;
}
console.log(fullNameAndAge('Masha', 'Dasi', 29))