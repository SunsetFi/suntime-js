import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-let-declaration.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/block-let-declaration.js"),
);
