import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invoked-as-function-single-argument.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/invoked-as-function-single-argument.js"),
);
