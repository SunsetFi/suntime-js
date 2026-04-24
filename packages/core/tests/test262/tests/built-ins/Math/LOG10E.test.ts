import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("LOG10E", () => {
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/LOG10E/prop-desc.js"),
  );
  it("value.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/LOG10E/value.js"));
});
