import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("concatenation", () => {
  it(
    "S9.8_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/concatenation/S9.8_A1_T2.js"),
  );
  it(
    "S9.8_A2_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/concatenation/S9.8_A2_T2.js"),
  );
  it(
    "S9.8_A3_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/concatenation/S9.8_A3_T2.js"),
  );
  it(
    "S9.8_A4_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/concatenation/S9.8_A4_T2.js"),
  );
  it(
    "S9.8_A5_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/concatenation/S9.8_A5_T2.js"),
  );
});
