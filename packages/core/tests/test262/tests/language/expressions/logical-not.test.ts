import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("logical-not", () => {
  it(
    "S11.4.9_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A1.js"),
  );
  it(
    "S11.4.9_A2.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A2.1_T1.js"),
  );
  it(
    "S11.4.9_A2.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A2.1_T2.js"),
  );
  it(
    "S11.4.9_A2.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A2.2_T1.js"),
  );
  it(
    "S11.4.9_A3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A3_T1.js"),
  );
  it(
    "S11.4.9_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A3_T2.js"),
  );
  it(
    "S11.4.9_A3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A3_T3.js"),
  );
  it(
    "S11.4.9_A3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A3_T4.js"),
  );
  it(
    "S11.4.9_A3_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S11.4.9_A3_T5.js"),
  );
  it(
    "S9.2_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A1_T2.js"),
  );
  it(
    "S9.2_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A2_T2.js"),
  );
  it(
    "S9.2_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A3_T2.js"),
  );
  it(
    "S9.2_A4_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A4_T2.js"),
  );
  it(
    "S9.2_A4_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A4_T4.js"),
  );
  it(
    "S9.2_A5_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A5_T2.js"),
  );
  it(
    "S9.2_A5_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A5_T4.js"),
  );
  it(
    "S9.2_A6_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/logical-not/S9.2_A6_T2.js"),
  );
  it(
    "bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/logical-not/bigint.js"),
  );
  it(
    "symbol-logical-not-evaluation.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-not/symbol-logical-not-evaluation.js"),
  );
});
