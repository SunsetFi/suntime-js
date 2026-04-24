import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-block.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/fn-block.js"),
);
