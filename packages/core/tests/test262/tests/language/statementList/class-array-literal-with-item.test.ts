import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-array-literal-with-item.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/class-array-literal-with-item.js"),
);
