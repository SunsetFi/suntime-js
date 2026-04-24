import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-class-arrow-function-functionbody.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/eval-class-arrow-function-functionbody.js"),
);
