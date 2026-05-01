import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/imul/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/imul/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/imul/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/imul/prop-desc.js"),
);

it("results.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/imul/results.js"));
