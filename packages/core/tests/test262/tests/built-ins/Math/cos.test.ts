import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.8.2.7_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cos/S15.8.2.7_A1.js"),
);

it(
  "S15.8.2.7_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cos/S15.8.2.7_A2.js"),
);

it(
  "S15.8.2.7_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cos/S15.8.2.7_A3.js"),
);

it(
  "S15.8.2.7_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cos/S15.8.2.7_A4.js"),
);

it(
  "S15.8.2.7_A5.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cos/S15.8.2.7_A5.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/cos/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/cos/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cos/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cos/prop-desc.js"),
);
