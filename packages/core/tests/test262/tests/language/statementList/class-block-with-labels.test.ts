import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-block-with-labels.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/class-block-with-labels.js"),
);
