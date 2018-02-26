/* Sum Cart
Write a function that accepts a shopping cart array and returns the total bill for all the items. Each item is represented by an array, where the first element is the item name, and the second element is an object with two properties: quantity and price.
*/

function sumCart(arr) {
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i][1]
        var product = el.quantity * el.price
        result += product
    }
    return result
}

//EXAMPLE TESTS

var cart = [
    ["tofu", { "quantity": 3, "price": 4.5 }],
    ["sriracha", { "quantity": 1, "price": 5 }],
    ["toilet paper", { "quantity": 12, "price": 1.75 }],
    ["Drano", { "quantity": 1, "price": 13 }],
    ["orichette", { "quantity": 2, "price": 7.5 }],
    ["hummus", { "quantity": 2, "price": 5.99 }],
    ["bison meat", { "quantity": 3, "price": 20.99 }],
    ["vegan bison meat", { "quantity": 3, "price": 24.99 }]
];

console.log(sumCart(cart))
    //OUTPUT: 217.42