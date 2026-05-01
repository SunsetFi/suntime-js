import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/log2/length.js"));

it(
  "log2-basicTests.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/log2/log2-basicTests.js"),
);

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/log2/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/log2/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/log2/prop-desc.js"),
);
