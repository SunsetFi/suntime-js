import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "no-iterable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/no-iterable.js"),
);
