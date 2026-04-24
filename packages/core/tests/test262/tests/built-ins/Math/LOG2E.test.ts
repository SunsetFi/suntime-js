import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("LOG2E", () => {
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/LOG2E/prop-desc.js"),
  );
  it("value.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/LOG2E/value.js"));
});
