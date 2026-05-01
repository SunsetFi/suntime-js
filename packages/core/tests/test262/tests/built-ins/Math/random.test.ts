import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.8.2.14_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/random/S15.8.2.14_A1.js"),
);

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/random/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/random/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/random/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/random/prop-desc.js"),
);
