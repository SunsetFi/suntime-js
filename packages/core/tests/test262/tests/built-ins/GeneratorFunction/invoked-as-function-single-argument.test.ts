import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invoked-as-function-single-argument.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorFunction/invoked-as-function-single-argument.js"),
);
