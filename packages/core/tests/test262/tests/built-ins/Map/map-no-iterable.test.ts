import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "map-no-iterable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/map-no-iterable.js"),
);
