import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("log1p", () => {
  it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/log1p/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/log1p/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/log1p/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/log1p/prop-desc.js"),
  );
  it(
    "specific-results.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/log1p/specific-results.js"),
  );
});
