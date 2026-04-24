import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "gen-meth-args-trailing-comma-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("language/arguments-object/gen-meth-args-trailing-comma-undefined.js"),
);
