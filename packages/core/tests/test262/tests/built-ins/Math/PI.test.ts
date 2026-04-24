import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("PI", () => {
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/PI/prop-desc.js"),
  );
  it("value.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/PI/value.js"));
});
