import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("LN2", () => {
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/LN2/prop-desc.js"),
  );
  it("value.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/LN2/value.js"));
});
