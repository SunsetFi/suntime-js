import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "func-decl-args-trailing-comma-single-args.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/func-decl-args-trailing-comma-single-args.js"),
);
