import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "gen-func-expr-args-trailing-comma-spread-operator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/arguments-object/gen-func-expr-args-trailing-comma-spread-operator.js",
  ),
);
