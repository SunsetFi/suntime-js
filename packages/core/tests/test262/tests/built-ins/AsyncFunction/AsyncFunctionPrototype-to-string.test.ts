import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunctionPrototype-to-string.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunctionPrototype-to-string.js"),
);
