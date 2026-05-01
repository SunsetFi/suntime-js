import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arithmetic.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/arithmetic.js"),
);

it(
  "asUintN.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/asUintN.js"),
);

it(
  "bigint-tobigint-errors.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint-errors.js"),
);

it(
  "bigint-tobigint-toprimitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint-toprimitive.js"),
);

it(
  "bigint-tobigint-wrapped-values.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint-wrapped-values.js"),
);

it(
  "bigint-tobigint.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint.js"),
);

it(
  "bits-toindex-errors.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bits-toindex-errors.js"),
);

it(
  "bits-toindex-toprimitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bits-toindex-toprimitive.js"),
);

it(
  "bits-toindex-wrapped-values.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bits-toindex-wrapped-values.js"),
);

it(
  "bits-toindex.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/bits-toindex.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/length.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/BigInt/asUintN/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/not-a-constructor.js"),
);

it(
  "order-of-steps.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asUintN/order-of-steps.js"),
);
