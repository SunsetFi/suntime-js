import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-decl-async-gen-func-args-trailing-comma-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/arguments-object/cls-decl-async-gen-func-args-trailing-comma-multiple.js",
  ),
);
