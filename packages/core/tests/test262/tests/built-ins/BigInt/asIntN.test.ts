import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arithmetic.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/arithmetic.js"),
);

it(
  "asIntN.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/asIntN.js"),
);

it(
  "bigint-tobigint-errors.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint-errors.js"),
);

it(
  "bigint-tobigint-toprimitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint-toprimitive.js"),
);

it(
  "bigint-tobigint-wrapped-values.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint-wrapped-values.js"),
);

it(
  "bigint-tobigint.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint.js"),
);

it(
  "bits-toindex-errors.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bits-toindex-errors.js"),
);

it(
  "bits-toindex-toprimitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bits-toindex-toprimitive.js"),
);

it(
  "bits-toindex-wrapped-values.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bits-toindex-wrapped-values.js"),
);

it(
  "bits-toindex.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/bits-toindex.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/length.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/BigInt/asIntN/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/not-a-constructor.js"),
);

it(
  "order-of-steps.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/asIntN/order-of-steps.js"),
);
