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
 *
 * This site is configured to run the sandbox at a conservative rate of 2000 AST nodes per 10ms,
 * which allows the site to remain somewhat responsive.
 */

// Hit F5 or use the debugger pane to run.
// Breakpoints and stack traces are supported, but variable and scope inspection is a work in progress.

/*
while(true) {
  console.log("Look Around You")
}
*/

function* getPrimes(limit) {
  const primes = [];
  let candidate = 2;
  while (primes.length < limit) {
    if (primes.every((p) => candidate % p !== 0)) {
      primes.push(candidate);
      yield candidate;
    }
    candidate++;
  }
}

function st(x) {
  switch (x) {
    case 1:
      return x + "st";
    case 2:
      return x + "nd";
    default:
      return x + "rd";
  }
}

let n = 1;
for (const prime of getPrimes(Infinity)) {
  console.log(`The ${st(n)} prime is ${prime}`);
  n++;
}
