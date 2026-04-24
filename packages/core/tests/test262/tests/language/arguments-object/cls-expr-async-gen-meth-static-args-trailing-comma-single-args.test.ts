import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-expr-async-gen-meth-static-args-trailing-comma-single-args.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/cls-expr-async-gen-meth-static-args-trailing-comma-single-args.js",
  ),
);
