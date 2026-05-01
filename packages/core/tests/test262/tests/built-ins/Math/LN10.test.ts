import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/LN10/prop-desc.js"),
);

it("value.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/LN10/value.js"));
