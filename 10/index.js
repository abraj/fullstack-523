// Print the folloowing pattern:
// *
// * *
// * * *

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let ans = '*';
    for (let j = 2; j <= i; j++) {
      ans += ' *';
    }
    console.log(ans);
  }
}

printPattern(3);

/************************************/

const num = 7;

function isPrime(n) {
  let i = 2; 

  while(i < n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

function findNextPrime(n) {
  let i = n + 1;
  while(!isPrime(i)) {
    i++;
  }
  return i;
}

console.log(`Is ${num} prime? ${isPrime(num) ? 'Yes' : 'No'}`);
console.log(`Next prime is: ${findNextPrime(num)}`);
