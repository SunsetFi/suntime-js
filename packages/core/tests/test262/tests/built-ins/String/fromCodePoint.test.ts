import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "argument-is-Symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/fromCodePoint/argument-is-Symbol.js"),
);

it(
  "argument-is-not-integer.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/argument-is-not-integer.js"),
);

it(
  "argument-not-coercible.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/argument-not-coercible.js"),
);

it(
  "arguments-is-empty.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/arguments-is-empty.js"),
);

it(
  "fromCodePoint.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/fromCodePoint.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/length.js"),
);

it(
  "name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/name.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/not-a-constructor.js"),
);

it(
  "number-is-out-of-range.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/number-is-out-of-range.js"),
);

it(
  "return-string-value.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/return-string-value.js"),
);

it(
  "to-number-conversions.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/fromCodePoint/to-number-conversions.js"),
);
