import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunctionPrototype-is-extensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunctionPrototype-is-extensible.js"),
);
