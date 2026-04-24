import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-with-statment-arrow-function-functionbody.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/block-with-statment-arrow-function-functionbody.js"),
);
