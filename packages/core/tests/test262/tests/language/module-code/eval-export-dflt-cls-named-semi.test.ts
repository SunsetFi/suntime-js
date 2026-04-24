import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-export-dflt-cls-named-semi.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/eval-export-dflt-cls-named-semi.js"),
);
