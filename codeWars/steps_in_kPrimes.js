/* A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity.

A natural number is thus prime if and only if it is 1-prime.

Examples of k-primes:
k = 2 -> 4, 6, 9, 10, 14, 15, 21, 22, …
k = 3 -> 8, 12, 18, 20, 27, 28, 30, …
k = 5 -> 32, 48, 72, 80, 108, 112, …
The k-prime numbers are not regularly spaced. Between 2 and 50 we have the following 2-primes:

[4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49]

The steps between two consecutive k-primes are 2, 3, 1, 4, 1, 6, 1, 3, 1, 7, 1, 1, 3, 1, 7, 3.

We will write a function kprimes_step(k, step, start, nd) with parameters:

k (integer > 0) which indicates the type of k-primes we are looking for,

step (integer > 0) which indicates the step we want to find between two k-primes,

start (integer >= 0) which gives the start of the search (start inclusive),

nd (integer >= start) which gives the end of the search (nd inclusive)

In the example above kprimes_step(2, 2, 0, 50) will return [[4, 6], [33, 35]] which are the pairs of 2-primes between 2 and 50 with a 2 steps.

So this function should return an array of all the pairs of k-prime numbers spaced with a step of step between the limits start, nd. This array can be empty.

 */

function kprimesStep(k, step, start, nd) {
  let arr = [];
  let counter = 0;
  let more = 0;
  for (let i = 3; i <= nd; i++) {
    counter = 0;
    more = 0;
    for (let factor = 2; factor < i; factor++) {
      if (i % factor === 0 && isPrime(factor)) {
        counter++;
      } else if (i % factor === 0 && !isPrime(factor)) {
        more++;
      }
      if (i === factor * factor && isPrime(factor)) {
        counter++;
      }
    }
    if (counter === k && more === 0) {
      arr.push(i);
    }
  }
  let output = [];
  for (let i = start; i < arr.length; i++) {
    for (let next = start + 1; next < arr.length; next++) {
      if (arr[next] - arr[i] > step) {
        break;
      } else if (arr[next] - arr[i] === step) {
        output.push([arr[i], arr[next]]);
      }
    }
  }
  return output;
}

function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  let factor = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= factor; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49]
console.log(kprimesStep(2, 2, 0, 50)); //=> [[4, 6], [33, 35]]
