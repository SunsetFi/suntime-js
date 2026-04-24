import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("log", () => {
  it(
    "S15.8.2.10_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/log/S15.8.2.10_A1.js"),
  );
  it(
    "S15.8.2.10_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/log/S15.8.2.10_A2.js"),
  );
  it(
    "S15.8.2.10_A3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/log/S15.8.2.10_A3.js"),
  );
  it(
    "S15.8.2.10_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/log/S15.8.2.10_A4.js"),
  );
  it(
    "S15.8.2.10_A5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/log/S15.8.2.10_A5.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/log/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/log/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/log/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/log/prop-desc.js"),
  );
});
