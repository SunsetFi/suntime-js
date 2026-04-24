import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-arrow-function-functionbody.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/block-arrow-function-functionbody.js"),
);
