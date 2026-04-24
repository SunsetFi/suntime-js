import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("tan", () => {
  it(
    "S15.8.2.18_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/tan/S15.8.2.18_A1.js"),
  );
  it(
    "S15.8.2.18_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/tan/S15.8.2.18_A2.js"),
  );
  it(
    "S15.8.2.18_A3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/tan/S15.8.2.18_A3.js"),
  );
  it(
    "S15.8.2.18_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/tan/S15.8.2.18_A4.js"),
  );
  it(
    "S15.8.2.18_A5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/tan/S15.8.2.18_A5.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/tan/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/tan/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/tan/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/tan/prop-desc.js"),
  );
});
