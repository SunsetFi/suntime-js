import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("abs", () => {
  it(
    "S15.8.2.1_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/abs/S15.8.2.1_A1.js"),
  );
  it(
    "S15.8.2.1_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/abs/S15.8.2.1_A2.js"),
  );
  it(
    "S15.8.2.1_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/abs/S15.8.2.1_A3.js"),
  );
  it(
    "absolute-value.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/abs/absolute-value.js"),
  );
  it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/abs/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/abs/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/abs/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/abs/prop-desc.js"),
  );
});
