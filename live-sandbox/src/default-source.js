// Hit F5 or use the debugger pane to run!
// Breakpoints are supported!

function nthPrime(n) {
  const primes = [];
  let candidate = 2;
  while (primes.length < n) {
    if (primes.every((p) => candidate % p !== 0)) {
      primes.push(candidate);
      console.log(`Found prime ${primes.length}: ${candidate}`);
    }
    candidate++;
  }
  return primes[primes.length - 1];
}

function findPrime(n) {
  const prime = nthPrime(n);
  console.log(`The ${n}th prime is ${prime}`);
}

findPrime(200);
