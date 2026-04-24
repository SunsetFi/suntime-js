import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-array-literal-with-item.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/class-array-literal-with-item.js"),
);
