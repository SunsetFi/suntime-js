import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-block-let-declaration.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-block-let-declaration.js"),
);
