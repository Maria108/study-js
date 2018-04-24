var fatFingers = function(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            str = str.slice(0, i).concat(str.slice(i + 1).toUpperCase())
        }
        if (str[i] === "A") {
            str = str.slice(0, i).concat(str.slice(i + 1).toLowerCase())
        }
    }
    return str
};

console.log(fatFingers("The aAn quick Abrown an fox jumps over the lazy dogamsfa."))
console.log(fatFingers("aaa"))