import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "atanh-specialVals.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atanh/atanh-specialVals.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/atanh/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/atanh/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atanh/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/atanh/prop-desc.js"),
);
