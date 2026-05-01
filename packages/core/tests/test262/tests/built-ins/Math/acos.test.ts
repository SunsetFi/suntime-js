import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.8.2.2_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/acos/S15.8.2.2_A1.js"),
);

it(
  "S15.8.2.2_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/acos/S15.8.2.2_A2.js"),
);

it(
  "S15.8.2.2_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/acos/S15.8.2.2_A3.js"),
);

it(
  "S15.8.2.2_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/acos/S15.8.2.2_A4.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/acos/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/acos/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/acos/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/acos/prop-desc.js"),
);
