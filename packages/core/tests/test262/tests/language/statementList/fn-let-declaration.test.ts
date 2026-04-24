import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-let-declaration.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/fn-let-declaration.js"),
);
