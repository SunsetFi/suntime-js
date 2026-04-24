import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sumPrecise", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/prop-desc.js"),
  );
  it(
    "sum-is-NaN.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/sum-is-NaN.js"),
  );
  it(
    "sum-is-infinite.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/sum-is-infinite.js"),
  );
  it(
    "sum-is-minus-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/sum-is-minus-zero.js"),
  );
  it("sum.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/sumPrecise/sum.js"));
  it(
    "takes-iterable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/takes-iterable.js"),
  );
  it(
    "throws-on-non-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sumPrecise/throws-on-non-number.js"),
  );
});
