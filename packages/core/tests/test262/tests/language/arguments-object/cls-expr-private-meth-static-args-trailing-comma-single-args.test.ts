import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-expr-private-meth-static-args-trailing-comma-single-args.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/arguments-object/cls-expr-private-meth-static-args-trailing-comma-single-args.js",
  ),
);
