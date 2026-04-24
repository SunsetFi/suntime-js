import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-export-cls-semi.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-export-cls-semi.js"),
);
