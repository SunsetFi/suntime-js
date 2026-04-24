import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-decl-private-meth-static-args-trailing-comma-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/arguments-object/cls-decl-private-meth-static-args-trailing-comma-multiple.js",
  ),
);
