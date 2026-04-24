import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-err-modifiers-code-point-repeat-i-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/early-err-modifiers-code-point-repeat-i-1.js"),
);
