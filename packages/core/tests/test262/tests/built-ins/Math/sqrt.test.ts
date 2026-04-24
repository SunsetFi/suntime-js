import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sqrt", () => {
  it(
    "S15.8.2.17_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A1.js"),
  );
  it(
    "S15.8.2.17_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A2.js"),
  );
  it(
    "S15.8.2.17_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A3.js"),
  );
  it(
    "S15.8.2.17_A4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A4.js"),
  );
  it(
    "S15.8.2.17_A5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A5.js"),
  );
  it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/sqrt/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/sqrt/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/prop-desc.js"),
  );
  it(
    "results.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/sqrt/results.js"),
  );
});
