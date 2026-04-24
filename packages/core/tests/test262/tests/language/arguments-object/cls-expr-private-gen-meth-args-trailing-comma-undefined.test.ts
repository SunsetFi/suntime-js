import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-expr-private-gen-meth-args-trailing-comma-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/cls-expr-private-gen-meth-args-trailing-comma-undefined.js",
  ),
);
