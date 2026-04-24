import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-expr-async-private-gen-meth-static-args-trailing-comma-multiple.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/cls-expr-async-private-gen-meth-static-args-trailing-comma-multiple.js",
  ),
);
