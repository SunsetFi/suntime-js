import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("strict-does-not-equals", () => {
  it(
    "S11.9.5_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A1.js"),
  );
  it(
    "S11.9.5_A2.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A2.1_T1.js"),
  );
  it(
    "S11.9.5_A2.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A2.1_T2.js"),
  );
  it(
    "S11.9.5_A2.1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A2.1_T3.js"),
  );
  it(
    "S11.9.5_A2.4_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A2.4_T1.js"),
  );
  it(
    "S11.9.5_A2.4_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A2.4_T2.js"),
  );
  it(
    "S11.9.5_A2.4_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A2.4_T3.js"),
  );
  it(
    "S11.9.5_A2.4_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A2.4_T4.js"),
  );
  it(
    "S11.9.5_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A3.js"),
  );
  it(
    "S11.9.5_A4.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A4.1_T1.js"),
  );
  it(
    "S11.9.5_A4.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A4.1_T2.js"),
  );
  it(
    "S11.9.5_A4.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A4.2.js"),
  );
  it(
    "S11.9.5_A4.3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A4.3.js"),
  );
  it(
    "S11.9.5_A5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A5.js"),
  );
  it(
    "S11.9.5_A6.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A6.1.js"),
  );
  it(
    "S11.9.5_A6.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A6.2.js"),
  );
  it(
    "S11.9.5_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A7.js"),
  );
  it(
    "S11.9.5_A8_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A8_T1.js"),
  );
  it(
    "S11.9.5_A8_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A8_T2.js"),
  );
  it(
    "S11.9.5_A8_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A8_T3.js"),
  );
  it(
    "S11.9.5_A8_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A8_T4.js"),
  );
  it(
    "S11.9.5_A8_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/strict-does-not-equals/S11.9.5_A8_T5.js"),
  );
  it(
    "bigint-and-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/strict-does-not-equals/bigint-and-bigint.js"),
  );
  it(
    "bigint-and-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/strict-does-not-equals/bigint-and-boolean.js"),
  );
  it(
    "bigint-and-incomparable-primitive.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/strict-does-not-equals/bigint-and-incomparable-primitive.js",
    ),
  );
  it(
    "bigint-and-non-finite.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/strict-does-not-equals/bigint-and-non-finite.js"),
  );
  it(
    "bigint-and-number-extremes.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/strict-does-not-equals/bigint-and-number-extremes.js"),
  );
  it(
    "bigint-and-number.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/strict-does-not-equals/bigint-and-number.js"),
  );
  it(
    "bigint-and-object.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/strict-does-not-equals/bigint-and-object.js"),
  );
  it(
    "bigint-and-string.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/strict-does-not-equals/bigint-and-string.js"),
  );
});
