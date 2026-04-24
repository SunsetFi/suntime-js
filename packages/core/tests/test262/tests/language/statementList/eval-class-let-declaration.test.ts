import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-let-declaration.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/eval-class-let-declaration.js"),
);
