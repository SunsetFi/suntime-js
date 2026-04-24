import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("E", () => {
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/E/prop-desc.js"),
  );
  it("value.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/E/value.js"));
});
