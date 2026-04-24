import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-block-with-labels.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/class-block-with-labels.js"),
);
