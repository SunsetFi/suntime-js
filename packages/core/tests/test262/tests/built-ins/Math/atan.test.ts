import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.8.2.4_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan/S15.8.2.4_A1.js"),
);

it(
  "S15.8.2.4_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan/S15.8.2.4_A2.js"),
);

it(
  "S15.8.2.4_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan/S15.8.2.4_A3.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/atan/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/atan/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan/prop-desc.js"),
);
