const data = [{
        name: 'Orange',
        price: 4.99,
        amount: 3,
    },
    {
        name: 'Apple',
        price: 0.49,
        amount: 12,
    },
    {
        name: 'Banana',
        price: 1.99,
        amount: 10,
    },
    {
        name: 'Pomagranate',
        price: 5.99,
        amount: 1,
    }
];

// function calculate(name) {
//     var result, obj
//     for (var idx = 0; idx < data.length; idx++) {
//         obj = data[idx]
//         if (obj.name === name) {
//             result = obj.price * obj.amount
//         }
//     }
//     return result
// }

// const result = calculate('Pomagranate');
// console.log(result);

function total() {
    var sum = 0
    var obj
    for (var idx = 0; idx < data.length; idx++) {
        obj = data[idx]
        sum += obj.price * obj.amount
    }
    return sum
}


total()
console.log(total())

const num = 3456;
console.log(num.toString().split(''))