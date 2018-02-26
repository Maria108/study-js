// **Use a "While-Loop" that increments the amount of characters in a string**

// Have your "While-Loops's" counter be a letter.  Add the same letter character until you have 5 letters on your final string.  Analyze the example case below:

// Example:

// Your loop should concatenate(add) an "L" to your string each pass

// "L"
// "LL"
// "LLL"
// "LLLL"
// "LLLLL"

var counter = "L"
while (counter.length <= 5) {
    console.log(counter);
    counter += "L"
}