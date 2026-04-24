import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunctionPrototype-is-extensible.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunctionPrototype-is-extensible.js"),
);
