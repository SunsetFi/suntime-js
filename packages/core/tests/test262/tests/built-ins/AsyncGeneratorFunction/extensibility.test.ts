import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "extensibility.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/extensibility.js"),
);
