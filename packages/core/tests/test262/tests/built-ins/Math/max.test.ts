import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.8.2.11-1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/max/15.8.2.11-1.js"),
);

it(
  "Math.max_each-element-coerced.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/max/Math.max_each-element-coerced.js"),
);

it(
  "S15.8.2.11_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/max/S15.8.2.11_A1.js"),
);

it(
  "S15.8.2.11_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/max/S15.8.2.11_A2.js"),
);

it(
  "S15.8.2.11_A4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Math/max/S15.8.2.11_A4.js"),
);

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/max/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/max/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/max/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/max/prop-desc.js"),
);

it("zeros.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/max/zeros.js"));
