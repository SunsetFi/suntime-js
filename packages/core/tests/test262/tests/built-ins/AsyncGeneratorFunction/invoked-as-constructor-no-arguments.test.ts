import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invoked-as-constructor-no-arguments.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/invoked-as-constructor-no-arguments.js"),
);
