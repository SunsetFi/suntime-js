import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("expm1", () => {
  it(
    "expm1-specialVals.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/expm1/expm1-specialVals.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/expm1/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/expm1/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/expm1/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/expm1/prop-desc.js"),
  );
});
