/* My Zoo
Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.

Each input array will be nested 3 levels deep. Study the examples below to understand how the data is structured.
*/

function zooInventory(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i][0] + ' the ' + arr[i][1][0] + ' is ' + arr[i][1][1]
        newArr.push(str)
    }
    return newArr
}

var myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));
// OUTPUT: 
// [
//   'King Kong the gorilla is 42', 
//   'Nemo the fish is 5',
//   'Punzsutawney Phil the groundhog is 11'
// ]