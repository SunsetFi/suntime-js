import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-block.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-block.js"),
);
