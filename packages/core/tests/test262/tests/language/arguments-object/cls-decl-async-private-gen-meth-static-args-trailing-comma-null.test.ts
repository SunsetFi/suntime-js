import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-decl-async-private-gen-meth-static-args-trailing-comma-null.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/arguments-object/cls-decl-async-private-gen-meth-static-args-trailing-comma-null.js",
  ),
);
