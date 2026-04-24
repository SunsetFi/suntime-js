import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-expr-meth-static-args-trailing-comma-spread-operator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/arguments-object/cls-expr-meth-static-args-trailing-comma-spread-operator.js",
  ),
);
