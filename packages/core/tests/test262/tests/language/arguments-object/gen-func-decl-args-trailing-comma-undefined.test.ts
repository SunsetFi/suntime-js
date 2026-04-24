import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "gen-func-decl-args-trailing-comma-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/gen-func-decl-args-trailing-comma-undefined.js"),
);
