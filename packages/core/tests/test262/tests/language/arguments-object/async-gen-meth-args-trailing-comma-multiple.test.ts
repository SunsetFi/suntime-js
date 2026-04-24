import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "async-gen-meth-args-trailing-comma-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/async-gen-meth-args-trailing-comma-multiple.js"),
);
