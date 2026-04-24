import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("cosh", () => {
  it(
    "cosh-specialVals.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/cosh/cosh-specialVals.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/cosh/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/cosh/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/cosh/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/cosh/prop-desc.js"),
  );
});
