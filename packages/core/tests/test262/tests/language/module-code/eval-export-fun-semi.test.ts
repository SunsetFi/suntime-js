import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-export-fun-semi.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-export-fun-semi.js"),
);
