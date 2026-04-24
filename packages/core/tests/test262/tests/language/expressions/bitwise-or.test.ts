import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("bitwise-or", () => {
  it(
    "S11.10.3_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A1.js"),
  );
  it(
    "S11.10.3_A2.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.1_T1.js"),
  );
  it(
    "S11.10.3_A2.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.1_T2.js"),
  );
  it(
    "S11.10.3_A2.1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.1_T3.js"),
  );
  it(
    "S11.10.3_A2.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.2_T1.js"),
  );
  it(
    "S11.10.3_A2.3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.3_T1.js"),
  );
  it(
    "S11.10.3_A2.4_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.4_T1.js"),
  );
  it(
    "S11.10.3_A2.4_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.4_T2.js"),
  );
  it(
    "S11.10.3_A2.4_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A2.4_T3.js"),
  );
  it(
    "S11.10.3_A3_T1.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T1.1.js"),
  );
  it(
    "S11.10.3_A3_T1.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T1.2.js"),
  );
  it(
    "S11.10.3_A3_T1.3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T1.3.js"),
  );
  it(
    "S11.10.3_A3_T1.4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T1.4.js"),
  );
  it(
    "S11.10.3_A3_T1.5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T1.5.js"),
  );
  it(
    "S11.10.3_A3_T2.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.1.js"),
  );
  it(
    "S11.10.3_A3_T2.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.2.js"),
  );
  it(
    "S11.10.3_A3_T2.3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.3.js"),
  );
  it(
    "S11.10.3_A3_T2.4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.4.js"),
  );
  it(
    "S11.10.3_A3_T2.5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.5.js"),
  );
  it(
    "S11.10.3_A3_T2.6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.6.js"),
  );
  it(
    "S11.10.3_A3_T2.7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.7.js"),
  );
  it(
    "S11.10.3_A3_T2.8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.8.js"),
  );
  it(
    "S11.10.3_A3_T2.9.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/bitwise-or/S11.10.3_A3_T2.9.js"),
  );
  it(
    "bigint-and-number.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/bitwise-or/bigint-and-number.js"),
  );
  it(
    "bigint-errors.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/bitwise-or/bigint-errors.js"),
  );
  it(
    "bigint-non-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/bitwise-or/bigint-non-primitive.js"),
  );
  it(
    "bigint-toprimitive.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/bitwise-or/bigint-toprimitive.js"),
  );
  it(
    "bigint-wrapped-values.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/bitwise-or/bigint-wrapped-values.js"),
  );
  it(
    "bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/bitwise-or/bigint.js"),
  );
  it(
    "order-of-evaluation.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/bitwise-or/order-of-evaluation.js"),
  );
});
