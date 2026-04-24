import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "gen-func-expr-args-trailing-comma-null.js",
  { tags: ["known-failing"] },
  createTestHandler("language/arguments-object/gen-func-expr-args-trailing-comma-null.js"),
);
