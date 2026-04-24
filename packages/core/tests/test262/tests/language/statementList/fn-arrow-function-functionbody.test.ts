import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "fn-arrow-function-functionbody.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/fn-arrow-function-functionbody.js"),
);
