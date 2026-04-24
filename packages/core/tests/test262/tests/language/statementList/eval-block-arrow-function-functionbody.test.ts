import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-block-arrow-function-functionbody.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-block-arrow-function-functionbody.js"),
);
