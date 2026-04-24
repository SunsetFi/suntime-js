import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-expr-private-meth-static-args-trailing-comma-null.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/cls-expr-private-meth-static-args-trailing-comma-null.js",
  ),
);
