import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("parse", () => {
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Date/parse/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Date/parse/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Date/parse/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Date/parse/prop-desc.js"),
  );
  it(
    "time-value-maximum-range.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Date/parse/time-value-maximum-range.js"),
  );
  it(
    "without-utc-offset.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Date/parse/without-utc-offset.js"),
  );
  it(
    "year-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Date/parse/year-zero.js"),
  );
  it("zero.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Date/parse/zero.js"));
});
