import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "iterable-with-object-values.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakSet/iterable-with-object-values.js"),
);
