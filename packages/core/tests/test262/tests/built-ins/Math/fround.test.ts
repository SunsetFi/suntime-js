import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("fround", () => {
  it(
    "Math.fround_Infinity.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/fround/Math.fround_Infinity.js"),
  );
  it(
    "Math.fround_NaN.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/fround/Math.fround_NaN.js"),
  );
  it(
    "Math.fround_Zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/fround/Math.fround_Zero.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/fround/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/fround/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/fround/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/fround/prop-desc.js"),
  );
  it("ties.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/fround/ties.js"));
  it(
    "value-convertion.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/fround/value-convertion.js"),
  );
});
