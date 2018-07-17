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

console.log(isPrime(25));
