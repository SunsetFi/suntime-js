import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-let-declaration.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-class-let-declaration.js"),
);
