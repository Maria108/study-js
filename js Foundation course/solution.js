// // #1
// var name = prompt('What is your name?')
// if (name === 'Abraham Lincoln') {
//     alert('Four score and seven years ago!')
// }

// // #2
// var num = prompt('Name a number greater than 22')
// if (num > 22) {
//     alert('This number is greater than 22');
// }

// // #3
// var num = prompt('Name a number greater than 100 but less than 2000')
// if (num > 100 && num < 2000) {
//     alert('You are amazingly correct!');
// } else {
//     alert('Awww, it looks that number is not correct….Try again!');
// }

// // #4
// var num = prompt('Choose a number between 1 and 5')
// if (num === 1 || num === 2) {
//     alert('You have just won a car!');
// } else if (num >= 3 && num <= 4) {
//     alert('You have just won a gallon of milk!');
// } else if (num === 5) {
//     alert('Awww, sorry… it seems like you didn\'t choose the right number… No worries!Try again!')
// }


var arr = [1, 2, 3, 4, 5]
arr[1] = 6
arr1 = arr.slice(3)
arr = arr.slice(0, 3)
arr.pop()
arr.push(arr1[0]);
//arr.push(arr.slice(3))

console.log(arr)