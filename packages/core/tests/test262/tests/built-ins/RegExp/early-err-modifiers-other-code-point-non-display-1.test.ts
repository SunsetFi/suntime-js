import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-err-modifiers-other-code-point-non-display-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/early-err-modifiers-other-code-point-non-display-1.js"),
);
