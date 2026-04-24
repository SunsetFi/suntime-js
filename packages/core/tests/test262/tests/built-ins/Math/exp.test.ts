import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("exp", () => {
  it(
    "S15.8.2.8_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/exp/S15.8.2.8_A1.js"),
  );
  it(
    "S15.8.2.8_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/exp/S15.8.2.8_A2.js"),
  );
  it(
    "S15.8.2.8_A3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/exp/S15.8.2.8_A3.js"),
  );
  it(
    "S15.8.2.8_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/exp/S15.8.2.8_A4.js"),
  );
  it(
    "S15.8.2.8_A5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/exp/S15.8.2.8_A5.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/exp/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/exp/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/exp/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/exp/prop-desc.js"),
  );
});
