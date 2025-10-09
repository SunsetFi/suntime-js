# StaticJs Quick Start

**Warning**: Using StaticJs this way is vulnurable to deadlocks when given looping code, and can introduce security complications where VM code can be unexpectedly invoked through interacting with the resulting values (eg: property getters and setters).

The API functions `evaluateScript(string, {realm?})`, `evaluateModule(string, {realm?})`, and `evaluateExpression(string, {realm?})`
will evaluate the given script, and return a promise resolving to the script's result after the task (and all microtasks) are completed.

```ts
import { evaluateExpression } from "@suntime-js/core";

const result = await evaluateExpression("2 + 2");
```

The result will be converted to a native representation. This can either be a primitive, or for objects, it can be a complex proxy into the StaticJs runtime. Note that such proxies can start code evaluation at any time based on their usage:

```ts
import { evaluateScript } from "@suntime-js/core";

const code = `
const obj = {};
Object.defineProperty(obj, "foo", {
  get: () => {
    return Math.random();
  }
});
obj;
`;
const result = await evaluateScript(code);

// Calling result.foo will invoke the StaticJs evaluator again.
// The evaluation will be done synchronously, and will be vulnurable to deadlocks on infinite loops.
console.log(result.foo);
```

All such objects will keep their entire prototype chain. This means that native intrinsics will not be recognized with instanceOf

```ts
import { evaluateExpression } from "@suntime-js/core";

const result = await evaluateExpression("[1, 2, 3]");

// Returns false, as the resulting object is using the StaticJs runtime array prototype, and is not a native array.
console.log(Array.isArray(result));
```

If the runtime result is callable, the proxy will also be callable. Calling the proxy will automatically convert any input (arguments and the 'this' arg) into StaticJs values, and the result will be converted back to native values.
Note that for security, objects passed in this way are not mutatable by the StaticJs code. See [Native / Script type coersion](#type-coersion-between-the-native-runtime-and-the-script-evaluation).

```ts
import { evaluateScript } from "@suntime-js/core";

const code = `
function add(a, b) {
  return a + b;
}
add;
`;

const result = await evaluateScript(code);

console.log(result(2, 4)); // 6
```

These proxies are live and bidirectional, so mutating values on a proxy will mutate it in the StaticJs runtime. Note that property setters may be invoked when mutating.

```ts
import { evaluateExpression } from "@suntime-js/core";

const code = `
const obj = {
  amount: 1,
  increment(value) {
    return value + this.amount;
  }
};
obj;
`;
const result = await evaluateScript(code);

// Mutations will be applied to the runtime, running setters if present.
result.amount = 4;

console.log(result.increment(10)); // Results in 14
```
