import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-let-declaration.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-let-declaration.js"),
);
