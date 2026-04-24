import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("min", () => {
  it(
    "15.8.2.12-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/min/15.8.2.12-1.js"),
  );
  it(
    "Math.min_each-element-coerced.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/min/Math.min_each-element-coerced.js"),
  );
  it(
    "S15.8.2.12_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/min/S15.8.2.12_A1.js"),
  );
  it(
    "S15.8.2.12_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/min/S15.8.2.12_A2.js"),
  );
  it(
    "S15.8.2.12_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/min/S15.8.2.12_A4.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/min/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/min/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/min/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/min/prop-desc.js"),
  );
  it("zeros.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/min/zeros.js"));
});
