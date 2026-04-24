import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("null", () => {
  it(
    "S8.2_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/null/S8.2_A1_T1.js"),
  );
  it(
    "S8.2_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/null/S8.2_A1_T2.js"),
  );
  it(
    "S8.2_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/null/S8.2_A2.js"),
  );
  it(
    "S8.2_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/null/S8.2_A3.js"),
  );
});
