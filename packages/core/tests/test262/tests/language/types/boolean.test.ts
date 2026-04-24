import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("boolean", () => {
  it(
    "S8.3_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/boolean/S8.3_A1_T1.js"),
  );
  it(
    "S8.3_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/boolean/S8.3_A1_T2.js"),
  );
  it(
    "S8.3_A2.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/boolean/S8.3_A2.1.js"),
  );
  it(
    "S8.3_A2.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/boolean/S8.3_A2.2.js"),
  );
  it(
    "S8.3_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/boolean/S8.3_A3.js"),
  );
});
