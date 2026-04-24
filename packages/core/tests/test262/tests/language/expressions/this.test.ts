import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("this", () => {
  it(
    "11.1.1-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/this/11.1.1-1.js"),
  );
  it(
    "S11.1.1_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/this/S11.1.1_A1.js"),
  );
  it(
    "S11.1.1_A3.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/this/S11.1.1_A3.1.js"),
  );
  it(
    "S11.1.1_A3.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/this/S11.1.1_A3.2.js"),
  );
  it(
    "S11.1.1_A4.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/this/S11.1.1_A4.1.js"),
  );
  it(
    "S11.1.1_A4.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/this/S11.1.1_A4.2.js"),
  );
});
