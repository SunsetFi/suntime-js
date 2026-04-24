import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("boolean", () => {
  it(
    "S7.8.2_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/boolean/S7.8.2_A1_T1.js"),
  );
  it(
    "S7.8.2_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/boolean/S7.8.2_A1_T2.js"),
  );
  it(
    "false-with-unicode.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/boolean/false-with-unicode.js"),
  );
  it(
    "true-with-unicode.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/boolean/true-with-unicode.js"),
  );
});
