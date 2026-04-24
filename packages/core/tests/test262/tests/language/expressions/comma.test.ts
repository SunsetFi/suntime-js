import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("comma", () => {
  it(
    "S11.14_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/comma/S11.14_A1.js"),
  );
  it(
    "S11.14_A2.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/comma/S11.14_A2.1_T1.js"),
  );
  it(
    "S11.14_A2.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/comma/S11.14_A2.1_T2.js"),
  );
  it(
    "S11.14_A2.1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/comma/S11.14_A2.1_T3.js"),
  );
  it(
    "S11.14_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/comma/S11.14_A3.js"),
  );
  it.skip("tco-final.js", () => {
    /* Ignored Test */
  });
});
