import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterable-with-object-keys.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/iterable-with-object-keys.js"),
);
