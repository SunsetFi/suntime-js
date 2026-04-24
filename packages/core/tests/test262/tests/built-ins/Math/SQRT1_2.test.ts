import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("SQRT1_2", () => {
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/SQRT1_2/prop-desc.js"),
  );
  it("value.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/SQRT1_2/value.js"));
});
