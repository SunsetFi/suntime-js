import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterable-failure.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/iterable-failure.js"),
);
