import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-err-modifiers-should-not-unicode-case-fold-i.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/early-err-modifiers-should-not-unicode-case-fold-i.js"),
);
