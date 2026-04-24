import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterable-with-symbol-keys.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/iterable-with-symbol-keys.js"),
);
