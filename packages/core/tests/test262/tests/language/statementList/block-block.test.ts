import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-block.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/block-block.js"),
);
