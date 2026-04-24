import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("empty", () => {
  it(
    "S12.3_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/empty/S12.3_A1.js"),
  );
  it(
    "cptn-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/empty/cptn-value.js"),
  );
});
