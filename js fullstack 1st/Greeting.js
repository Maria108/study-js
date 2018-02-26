/*
Greeting

Create a function greeting(name) that accepts a string argument (a name, ex: "Oliver"), and returns a personalized greeting if a name is present.

The function takes a name as its only argument and returns a string. Check the Test Specs tabs to learn more about the function.

Examples:

With the name argument

INPUT: greeting('Charlotte');
OUTPUT: "Hello, Charlotte!";

Without the name argument

INPUT: greeting();
OUTPUT: "Hello!";
*/

function greeting(name) {
    if (name) {
        return "Hello, " + name + "!"
    } else {
        return "Hello!"
    }

}

greeting("Masha")
console.log(greeting("Masha"))