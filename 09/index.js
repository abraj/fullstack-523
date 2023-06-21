const num = 7;

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function findNextPrime(n) {
  for (let i = n + 1; ; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}

console.log(`Is ${num} prime? ${isPrime(num) ? 'Yes' : 'No'}`);
console.log(`Next prime is: ${findNextPrime(num)}`);
