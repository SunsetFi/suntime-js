import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-fn-arrow-function-functionbody.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-fn-arrow-function-functionbody.js"),
);
