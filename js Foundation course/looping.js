// #1
var str = "I am love making pizza pies!";
for (var i = 0; i < 10; i++) {
    console.log(str)
}

// #2
for (var counter = 1; counter <= 100; counter++) {
    console.log(counter);
}

// #3
var fruits = ['banana', 'apple', 'orange', 'mango', 'kiwi'];
for (idx = 0; idx < fruits.length; idx++) {
    console.log(fruits[idx]);
}

// Additional research:
fruits.forEach(function(fruit) {
    console.log(fruit);
})

// bonus challange
var i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// #4
var word = '';
while (word !== 'NYCDA') {
    word = prompt('Guess a word');
}