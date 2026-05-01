import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "expression.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/debugger/expression.js"),
);

it(
  "statement.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/debugger/statement.js"),
);
