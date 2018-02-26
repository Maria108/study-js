/*

Max Of Three

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `maxOfThree` that evaluates three numbers and returns the largest number out of the three.

The function takes three number arguments and returns the highest number out of three.

**Examples*

- INPUT: `maxOfThree(5,4,10);`
- OUTPUT: `10`

- INPUT: `maxOfThree(7,7,4);`
- OUTPUT: `7`

Write Code Below
*/

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num3) {
        return num2
    } else {
        return num3
    }
}

console.log(maxOfThree(16, 56, 7))