import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-block-with-labels.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/block-block-with-labels.js"),
);
