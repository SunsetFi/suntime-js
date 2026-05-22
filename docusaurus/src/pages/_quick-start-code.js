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

let n = 1;
for (const prime of getPrimes(Infinity)) {
  console.log(`The ${st(n)} prime is ${prime}`);
  n++;
}

function st(x) {
  const test = Number(String(x).at(-1));
  switch (test) {
    case 1:
      return x + "st";
    case 2:
      return x + "nd";
    case 3:
      return x + "rd";
    default:
      return x + "th";
  }
}
