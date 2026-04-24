import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-expr-args-trailing-comma-null.js",
  { tags: ["known-failing"] },
  createTestHandler("language/arguments-object/func-expr-args-trailing-comma-null.js"),
);
