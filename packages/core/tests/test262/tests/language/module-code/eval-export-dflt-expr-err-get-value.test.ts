import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-export-dflt-expr-err-get-value.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/eval-export-dflt-expr-err-get-value.js"),
);
