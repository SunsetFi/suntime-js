import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ceil", () => {
  it(
    "S15.8.2.6_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/S15.8.2.6_A1.js"),
  );
  it(
    "S15.8.2.6_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/S15.8.2.6_A2.js"),
  );
  it(
    "S15.8.2.6_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/S15.8.2.6_A3.js"),
  );
  it(
    "S15.8.2.6_A4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/S15.8.2.6_A4.js"),
  );
  it(
    "S15.8.2.6_A5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/S15.8.2.6_A5.js"),
  );
  it(
    "S15.8.2.6_A6.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/S15.8.2.6_A6.js"),
  );
  it(
    "S15.8.2.6_A7.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/S15.8.2.6_A7.js"),
  );
  it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/ceil/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/ceil/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/ceil/prop-desc.js"),
  );
});
