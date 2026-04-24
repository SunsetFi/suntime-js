import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "async-gen-named-func-expr-args-trailing-comma-null.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/arguments-object/async-gen-named-func-expr-args-trailing-comma-null.js",
  ),
);
