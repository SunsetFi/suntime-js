import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("relational", () => {
  it(
    "S9.1_A1_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/relational/S9.1_A1_T4.js"),
  );
});
