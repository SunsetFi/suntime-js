import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-array-literal-with-item.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-array-literal-with-item.js"),
);
