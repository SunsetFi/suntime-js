import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "meth-args-trailing-comma-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/meth-args-trailing-comma-undefined.js"),
);
