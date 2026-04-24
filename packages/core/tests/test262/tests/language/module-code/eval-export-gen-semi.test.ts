import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-export-gen-semi.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-export-gen-semi.js"),
);
