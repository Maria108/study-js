/* Fullstack-Jack
Write a function called fullstackJack to figure out who will going to win a game of Black Jack.

The function should take two arrays of equal length containing the cards each player is dealt. The function should return a string saying 'Player 1 Wins!', 'Player 2 Wins!', or 'Tie!'.

FullstackJack Rules:

Each player is dealt the same number of cards
They flip the card at the top of the deck
The card with the highest value wins the round, ​and the winning player receives a point
If the cards are the same, both players get a point
The two cards used are discarded
The players continue playing until there are no remaining cards
The player with the most points at the end wins
Representing Cards:

A players hand is stored in an array. Each index is a card value. The card rank is as follows (from lowest to highest):'2','3','4','5','6','7','8','9','T','J','Q','K','A'. Player hands are passed to the fullstackJack function as arguments, as in the examples below:

player1Hand = ['A', '7', '8'];
player2Hand = ['K', '5', '9'];
INPUT: fullstackJack(['A', '7', '8'], ['K', '5', '9']);
OUTPUT: 'Player 1 Wins!'
Explanation:

Player1 is dealt ['A','7','8']
Player2 is dealt ['K','5','9']
In first round, Ace beats King and Player1 gets one point.
In second round, 7 beats 5 and Player1 gets his second point.
In third round, 9 beats 8 and Player2 gets one point.
You should return 'Player1 wins!'.
*/

function fullstackJack(arr1, arr2) {
    var arr = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    var counter1 = 0
    var counter2 = 0
    for (i = 0; i < arr1.length; i++) {
        if (arr.indexOf(arr1[i]) < arr.indexOf(arr2[i])) {
            counter2++
        } else if (arr.indexOf(arr1[i]) > arr.indexOf(arr2[i])) {
            counter1++
        }
    }
    if (counter1 > counter2) {
        return 'Player 1 wins ' + counter1 + ' to ' + counter2 + '!'
    } else if (counter1 < counter2) {
        return 'Player 2 wins ' + counter2 + ' to ' + counter1 + '!'
    } else {
        return 'Tie!'
    }

}

//EXAMPLE TESTS

var res1 = fullstackJack(['A', '7', '9'], ['K', '5', '8']);
console.log(res1);

//'Player 1 Wins!'

console.log(fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J']))
    //'Tie!'