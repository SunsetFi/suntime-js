import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/sinh/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/sinh/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sinh/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sinh/prop-desc.js"),
);

it(
  "sinh-specialVals.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/sinh/sinh-specialVals.js"),
);
