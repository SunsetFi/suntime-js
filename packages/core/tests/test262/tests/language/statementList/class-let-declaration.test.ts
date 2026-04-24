import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-let-declaration.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statementList/class-let-declaration.js"),
);
