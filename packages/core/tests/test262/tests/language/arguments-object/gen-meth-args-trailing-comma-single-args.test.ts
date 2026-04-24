import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "gen-meth-args-trailing-comma-single-args.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/gen-meth-args-trailing-comma-single-args.js"),
);
