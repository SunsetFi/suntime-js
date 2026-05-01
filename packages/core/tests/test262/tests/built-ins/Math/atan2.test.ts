import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.8.2.5_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/S15.8.2.5_A1.js"),
);

it(
  "S15.8.2.5_A14.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/S15.8.2.5_A14.js"),
);

it(
  "S15.8.2.5_A16.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/S15.8.2.5_A16.js"),
);

it(
  "S15.8.2.5_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/S15.8.2.5_A4.js"),
);

it(
  "S15.8.2.5_A5.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/S15.8.2.5_A5.js"),
);

it(
  "S15.8.2.5_A8.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/S15.8.2.5_A8.js"),
);

it(
  "S15.8.2.5_A9.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/S15.8.2.5_A9.js"),
);

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/atan2/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/atan2/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atan2/prop-desc.js"),
);
