import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("grouping", () => {
  it(
    "S11.1.6_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A1.js"),
  );
  it(
    "S11.1.6_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A2_T1.js"),
  );
  it(
    "S11.1.6_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A2_T2.js"),
  );
  it(
    "S11.1.6_A3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A3_T1.js"),
  );
  it(
    "S11.1.6_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A3_T2.js"),
  );
  it(
    "S11.1.6_A3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A3_T3.js"),
  );
  it(
    "S11.1.6_A3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A3_T4.js"),
  );
  it(
    "S11.1.6_A3_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A3_T6.js"),
  );
  it(
    "S11.1.6_A3_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/grouping/S11.1.6_A3_T7.js"),
  );
});
