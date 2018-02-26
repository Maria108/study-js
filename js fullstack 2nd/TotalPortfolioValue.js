/* TotalPortfolioValue
Write a
function, totalPortfolioValue, that will calculate the total value of someone 's stock portfolio based on the provided stock values.

It will take two array inputs--The stockTicker(current value of the stocks) and an array that represents a person 's current portfolio.

There 's a lot going on here, so let'
s take a closer look at the inputs.

stockTicker:
    The stockTicker input will be a normal array where every two values are a[stock ticker, stock value] pair.Here is an example stock ticker:
    var stockTicker = ['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44];
In the ticker above, the value of YHOO is $34 .40, the value of GOOG is $633 .03, and the value of AMZN is $651 .23.There can be an unlimited number of stock value pairs specified in the stockTicker array.

portfolio:
    The portfolio argument will be an array of arrays.For example,
    if you had 100 shares of AAPL and 200 shares of YHOO, the portfolio variable will look like this:

    var portfolio = [
        ['AAPL', 100],
        ['YHOO', 200]
    ]
Notice that unlike stockTicker, these pairs each are grouped within their own subarray.
*/

function totalPortfolioValue(arr1, arr2) {
    var sum = 0
    for (i = 0; i < arr2.length; i++) {
        var idx = arr1.indexOf(arr2[i][0])
        var result = arr2[i][1] * arr1[idx + 1]
        sum += result
    }
    return sum
}

//EXAMPLE TESTS

var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [
    ['XYZ', 20],
    ['BBB', 10]
];

console.log(totalPortfolioValue(ticker, portfolio));
//OUTPUT: 4050