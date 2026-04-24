import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "map-iterable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/map-iterable.js"),
);
