---
slug: intro-to-generators
title: Intro to Generators
authors: [sunsetfi]
tags: [generators]
---

## Intro to Generators

Generators in JavaScript are suspendable functions that emit values through an iteration-like syntax. You declare a generator by using an asterisk (`*`) on the function declaration:

```ts
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

for (const value of generator()) {
  console.log(value);
}
```

Uniquely, and important to our purposes, generator functions suspend at every yield. This gives us the capability of pausing and resuming the function, so long as the function has reached a yield statement:

```ts
let events = [];
function* generator() {
  events.push("gen start");
  events.push("yield 1");
  yield 1;
  events.push("yield 2");
  yield 2;
  events.push("yield 3");
  yield 3;
  events.push("gen end");
}

const iterator = generator();

events.push("next 1");
iterator.next();

events.push("next 2");
iterator.next();
```

This code will produce the following values in events:

- "next 1"
- "gen start"
- "yield 1"
- "next 2"
- "yield 2"

Notice how the generator's evaluation does not start until the first .next() call
