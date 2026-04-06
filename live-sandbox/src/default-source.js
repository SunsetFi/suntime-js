/**
 * This is a demonstration of @suntime-js!
 * https://github.com/SunsetFi/suntime-js
 *
 * This project provides a sandboxed javascript interpreter supporting modern features,
 * that can run directly in the browser.
 *
 * The runtime environment is isolated, providing its own primitives and implementations of JavaScript constructs.
 * Code ran in the interpreter cannot access the host's environment beyond what is explicitly provided.
 *
 * The interpreter can also run with time-slicing, ensuring infinite loops do not deadlock the browser.
 * Try running an infinite loop, and see how the interpreter handles it!
 */

// Hit F5 or use the debugger pane to run.
// Breakpoints and stack traces are supported, but variable and scope inspection is a work in progress.

/*
while(true) {
  console.log("Look Around You")
}
*/

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

findPrime(300);
