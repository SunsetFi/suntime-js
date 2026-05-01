import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("bigint", () => {
  it.skip("expected-return-value.js", () => {
    /* Ignored Test */
  });
});

it(
  "corner-cases.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/isLockFree/corner-cases.js"),
);

it(
  "descriptor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/isLockFree/descriptor.js"),
);

it(
  "expected-return-value.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/isLockFree/expected-return-value.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/isLockFree/length.js"),
);

it(
  "name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/isLockFree/name.js"),
);

it.skip("not-a-constructor.js", () => {
  /* Ignored Test */
});
