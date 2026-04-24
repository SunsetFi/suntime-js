import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "empty-iterable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/empty-iterable.js"),
);
