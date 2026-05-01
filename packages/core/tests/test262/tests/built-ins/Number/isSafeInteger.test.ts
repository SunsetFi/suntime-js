import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arg-is-not-number.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/arg-is-not-number.js"),
);

it(
  "infinity.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/infinity.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/length.js"),
);

it(
  "name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/name.js"),
);

it(
  "nan.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/nan.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/not-a-constructor.js"),
);

it(
  "not-integer.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/not-integer.js"),
);

it(
  "not-safe-integer.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/not-safe-integer.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/prop-desc.js"),
);

it(
  "safe-integers.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isSafeInteger/safe-integers.js"),
);
