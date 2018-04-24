let array = [{
        name: "fluffy",
        type: "dog"
    },
    {
        name: "fido",
        type: "dog"
    },
    {
        name: "oliver",
        type: "dog"
    }
];

function every(array, callback) {
    return array.reduce(callback);
}

function isDog(a, b) {
    return ((a === true || a.type === "dog") && b.type === "dog");
}



console.log(every(array, isDog));