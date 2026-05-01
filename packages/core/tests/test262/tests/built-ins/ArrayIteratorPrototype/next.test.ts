import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it.skip("Float32Array.js", () => {
  /* Ignored Test */
});

it.skip("Float64Array.js", () => {
  /* Ignored Test */
});

it.skip("Int16Array.js", () => {
  /* Ignored Test */
});

it.skip("Int32Array.js", () => {
  /* Ignored Test */
});

it.skip("Int8Array.js", () => {
  /* Ignored Test */
});

it.skip("Uint16Array.js", () => {
  /* Ignored Test */
});

it.skip("Uint32Array.js", () => {
  /* Ignored Test */
});

it.skip("Uint8Array.js", () => {
  /* Ignored Test */
});

it.skip("Uint8ClampedArray.js", () => {
  /* Ignored Test */
});

it(
  "args-mapped-expansion-after-exhaustion.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/ArrayIteratorPrototype/next/args-mapped-expansion-after-exhaustion.js",
  ),
);

it(
  "args-mapped-expansion-before-exhaustion.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/ArrayIteratorPrototype/next/args-mapped-expansion-before-exhaustion.js",
  ),
);

it(
  "args-mapped-iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/args-mapped-iteration.js"),
);

it(
  "args-mapped-truncation-before-exhaustion.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/ArrayIteratorPrototype/next/args-mapped-truncation-before-exhaustion.js",
  ),
);

it(
  "args-unmapped-expansion-after-exhaustion.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/ArrayIteratorPrototype/next/args-unmapped-expansion-after-exhaustion.js",
  ),
);

it(
  "args-unmapped-expansion-before-exhaustion.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/ArrayIteratorPrototype/next/args-unmapped-expansion-before-exhaustion.js",
  ),
);

it(
  "args-unmapped-iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/args-unmapped-iteration.js"),
);

it(
  "args-unmapped-truncation-before-exhaustion.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/ArrayIteratorPrototype/next/args-unmapped-truncation-before-exhaustion.js",
  ),
);

it.skip("detach-typedarray-in-progress.js", () => {
  /* Ignored Test */
});

it(
  "iteration-mutable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/iteration-mutable.js"),
);

it(
  "iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/iteration.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/name.js"),
);

it(
  "non-own-slots.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/non-own-slots.js"),
);

it(
  "property-descriptor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/ArrayIteratorPrototype/next/property-descriptor.js"),
);
