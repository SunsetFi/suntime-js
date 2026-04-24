import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("list", () => {
  it(
    "S8.8_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/list/S8.8_A2_T1.js"),
  );
  it(
    "S8.8_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/list/S8.8_A2_T2.js"),
  );
  it(
    "S8.8_A2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/types/list/S8.8_A2_T3.js"),
  );
});
