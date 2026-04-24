import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("round", () => {
  it(
    "S15.8.2.15_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/S15.8.2.15_A1.js"),
  );
  it(
    "S15.8.2.15_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/S15.8.2.15_A2.js"),
  );
  it(
    "S15.8.2.15_A3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/S15.8.2.15_A3.js"),
  );
  it(
    "S15.8.2.15_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/S15.8.2.15_A4.js"),
  );
  it(
    "S15.8.2.15_A5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/S15.8.2.15_A5.js"),
  );
  it(
    "S15.8.2.15_A6.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/S15.8.2.15_A6.js"),
  );
  it(
    "S15.8.2.15_A7.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/S15.8.2.15_A7.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/round/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/round/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/round/prop-desc.js"),
  );
});
