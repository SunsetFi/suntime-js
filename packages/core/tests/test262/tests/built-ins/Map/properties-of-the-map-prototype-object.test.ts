import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "properties-of-the-map-prototype-object.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/properties-of-the-map-prototype-object.js"),
);
