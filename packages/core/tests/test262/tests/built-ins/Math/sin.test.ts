import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.8.2.16_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sin/S15.8.2.16_A1.js"),
);

it(
  "S15.8.2.16_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sin/S15.8.2.16_A4.js"),
);

it(
  "S15.8.2.16_A5.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sin/S15.8.2.16_A5.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/sin/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/sin/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sin/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sin/prop-desc.js"),
);

it("zero.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/sin/zero.js"));
