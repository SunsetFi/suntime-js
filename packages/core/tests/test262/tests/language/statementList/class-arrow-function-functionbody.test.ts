import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-arrow-function-functionbody.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/class-arrow-function-functionbody.js"),
);
