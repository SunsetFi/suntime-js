import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cls-decl-async-gen-func-args-trailing-comma-null.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/arguments-object/cls-decl-async-gen-func-args-trailing-comma-null.js",
  ),
);
