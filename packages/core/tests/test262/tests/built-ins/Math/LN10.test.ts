import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("LN10", () => {
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/LN10/prop-desc.js"),
  );
  it("value.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/LN10/value.js"));
});
