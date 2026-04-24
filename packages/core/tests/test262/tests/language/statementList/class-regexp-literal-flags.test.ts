import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class-regexp-literal-flags.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statementList/class-regexp-literal-flags.js"),
);
