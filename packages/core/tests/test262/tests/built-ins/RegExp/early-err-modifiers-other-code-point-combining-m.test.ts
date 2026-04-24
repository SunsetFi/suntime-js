import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-err-modifiers-other-code-point-combining-m.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/early-err-modifiers-other-code-point-combining-m.js"),
);
