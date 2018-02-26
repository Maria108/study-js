/* Function Runner
Write a function functionRunner that accepts a function to run and an argument to pass to that function. It should call the passed in function and return the result of the function call.

Note: A function that can take a function as an argument or return a function is called a higher order function.
*/

function functionRunner(fun, x) {
    return fun(x);
}

//EXAMPLE TEST
function squareNum(x) {
    return x * x;
}

console.log(functionRunner(squareNum, 4));
// OUTPUT: 16