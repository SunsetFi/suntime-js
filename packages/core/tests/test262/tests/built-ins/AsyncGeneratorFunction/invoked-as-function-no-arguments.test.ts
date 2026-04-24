import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invoked-as-function-no-arguments.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/invoked-as-function-no-arguments.js"),
);
