import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prefix-increment", () => {
  it(
    "11.4.4-2-3-s.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/11.4.4-2-3-s.js"),
  );
  it(
    "S11.4.4_A2.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A2.1_T1.js"),
  );
  it(
    "S11.4.4_A2.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A2.1_T2.js"),
  );
  it(
    "S11.4.4_A2.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A2.2_T1.js"),
  );
  it(
    "S11.4.4_A3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A3_T1.js"),
  );
  it(
    "S11.4.4_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A3_T2.js"),
  );
  it(
    "S11.4.4_A3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A3_T3.js"),
  );
  it(
    "S11.4.4_A3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A3_T4.js"),
  );
  it(
    "S11.4.4_A3_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A3_T5.js"),
  );
  it(
    "S11.4.4_A4_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A4_T1.js"),
  );
  it(
    "S11.4.4_A4_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A4_T2.js"),
  );
  it(
    "S11.4.4_A4_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A4_T3.js"),
  );
  it(
    "S11.4.4_A4_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A4_T4.js"),
  );
  it(
    "S11.4.4_A4_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A4_T5.js"),
  );
  it(
    "S11.4.4_A5_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A5_T1.js"),
  );
  it(
    "S11.4.4_A5_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A5_T2.js"),
  );
  it(
    "S11.4.4_A5_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A5_T3.js"),
  );
  it(
    "S11.4.4_A6_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A6_T1.js"),
  );
  it(
    "S11.4.4_A6_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A6_T2.js"),
  );
  it(
    "S11.4.4_A6_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/S11.4.4_A6_T3.js"),
  );
  it(
    "arguments-nostrict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/arguments-nostrict.js"),
  );
  it(
    "arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/prefix-increment/arguments.js"),
  );
  it(
    "bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/prefix-increment/bigint.js"),
  );
  it(
    "eval-nostrict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/eval-nostrict.js"),
  );
  it(
    "eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/prefix-increment/eval.js"),
  );
  it(
    "operator-prefix-increment-x-calls-putvalue-lhs-newvalue--1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/prefix-increment/operator-prefix-increment-x-calls-putvalue-lhs-newvalue--1.js",
    ),
  );
  it(
    "operator-prefix-increment-x-calls-putvalue-lhs-newvalue-.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/prefix-increment/operator-prefix-increment-x-calls-putvalue-lhs-newvalue-.js",
    ),
  );
  it(
    "target-cover-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/target-cover-id.js"),
  );
  it(
    "target-cover-newtarget.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/prefix-increment/target-cover-newtarget.js"),
  );
  it(
    "target-cover-yieldexpr.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/prefix-increment/target-cover-yieldexpr.js"),
  );
  it(
    "target-newtarget.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/prefix-increment/target-newtarget.js"),
  );
  it(
    "this.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/prefix-increment/this.js"),
  );
  it(
    "whitespace.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/prefix-increment/whitespace.js"),
  );
});
