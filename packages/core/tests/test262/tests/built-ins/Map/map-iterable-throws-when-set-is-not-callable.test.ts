import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "map-iterable-throws-when-set-is-not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/map-iterable-throws-when-set-is-not-callable.js"),
);
