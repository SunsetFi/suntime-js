import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-decl-private-gen-meth-static-args-trailing-comma-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/cls-decl-private-gen-meth-static-args-trailing-comma-undefined.js",
  ),
);
