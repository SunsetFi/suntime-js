import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-import-as-eval.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/early-import-as-eval.js"),
);
