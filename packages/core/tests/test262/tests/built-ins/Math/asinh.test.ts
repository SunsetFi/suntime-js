import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("asinh", () => {
  it(
    "asinh-specialVals.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/asinh/asinh-specialVals.js"),
  );
  it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/asinh/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/asinh/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/asinh/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/asinh/prop-desc.js"),
  );
});
