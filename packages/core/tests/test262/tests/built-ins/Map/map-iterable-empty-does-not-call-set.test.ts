import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "map-iterable-empty-does-not-call-set.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/map-iterable-empty-does-not-call-set.js"),
);
