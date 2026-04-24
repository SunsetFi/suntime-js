import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("log10", () => {
  it(
    "Log10-specialVals.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/log10/Log10-specialVals.js"),
  );
  it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/log10/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/log10/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/log10/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/log10/prop-desc.js"),
  );
});
