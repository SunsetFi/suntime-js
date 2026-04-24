import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-export-dflt-expr-cls-name-meth.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-export-dflt-expr-cls-name-meth.js"),
);
