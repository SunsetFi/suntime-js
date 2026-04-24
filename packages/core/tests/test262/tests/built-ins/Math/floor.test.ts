import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("floor", () => {
  it(
    "S15.8.2.9_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/S15.8.2.9_A1.js"),
  );
  it(
    "S15.8.2.9_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/S15.8.2.9_A2.js"),
  );
  it(
    "S15.8.2.9_A3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/S15.8.2.9_A3.js"),
  );
  it(
    "S15.8.2.9_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/S15.8.2.9_A4.js"),
  );
  it(
    "S15.8.2.9_A5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/S15.8.2.9_A5.js"),
  );
  it(
    "S15.8.2.9_A6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/S15.8.2.9_A6.js"),
  );
  it(
    "S15.8.2.9_A7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/S15.8.2.9_A7.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/floor/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/floor/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/floor/prop-desc.js"),
  );
});
