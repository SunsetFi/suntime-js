import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-decl-async-private-gen-meth-args-trailing-comma-multiple.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/cls-decl-async-private-gen-meth-args-trailing-comma-multiple.js",
  ),
);
