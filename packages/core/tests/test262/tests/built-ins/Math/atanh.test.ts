import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("atanh", () => {
  it(
    "atanh-specialVals.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/atanh/atanh-specialVals.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/atanh/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/atanh/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/atanh/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/atanh/prop-desc.js"),
  );
});
