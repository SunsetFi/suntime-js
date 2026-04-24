import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "async-gen-named-func-expr-args-trailing-comma-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/async-gen-named-func-expr-args-trailing-comma-undefined.js",
  ),
);
