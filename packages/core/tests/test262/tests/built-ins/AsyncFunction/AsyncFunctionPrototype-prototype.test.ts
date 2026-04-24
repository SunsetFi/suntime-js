import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "AsyncFunctionPrototype-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/AsyncFunctionPrototype-prototype.js"),
);
