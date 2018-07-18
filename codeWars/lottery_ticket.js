/* Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot. Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each sub array has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

 */

function bingo(ticket, win) {
  let counter = 0;
  for (let i = 0; i < ticket.length; i++) {
    for (let k = 0; k < ticket[i][0].length; k++) {
      if (ticket[i][0].charCodeAt(k) === ticket[i][1]) {
        counter++;
        k = ticket[i][0].length;
      }
    }
  }
  return counter >= win ? 'Winner!' : 'Loser!';
}
