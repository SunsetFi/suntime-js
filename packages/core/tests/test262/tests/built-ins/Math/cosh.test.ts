import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cosh-specialVals.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cosh/cosh-specialVals.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/cosh/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/cosh/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cosh/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/cosh/prop-desc.js"),
);
