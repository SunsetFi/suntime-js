import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-expr-args-trailing-comma-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/func-expr-args-trailing-comma-undefined.js"),
);
