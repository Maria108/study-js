function removeSurroundingDuplicates(par) {
    output = []
    for (i = 0; i < par.length; i++) {
        if (par[i] !== par[i + 1]) {
            output.push(par[i])
        }
    }
    return output
}


console.log(removeSurroundingDuplicates("TTTYUUUrIrVVVxXc")) // ["T", "Y", "U", "r", "I", "r", "V", "x", "X", "c"]
console.log(removeSurroundingDuplicates("ZZZZBZAAAAIIBBBBHHJ")) // ["Z", "B", "Z", "A", "I", "B", "H", "J"]
console.log(removeSurroundingDuplicates([199, 9, 9, 9, 45, 5, 22, 2, 100, 100, 100, 199])) // [199, 9, 45, 5, 22, 2, 100, 199]