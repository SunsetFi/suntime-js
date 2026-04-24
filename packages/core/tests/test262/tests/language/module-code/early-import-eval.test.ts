import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "early-import-eval.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/early-import-eval.js"),
);
