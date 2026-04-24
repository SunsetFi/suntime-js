import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunction.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunction.js"),
);
