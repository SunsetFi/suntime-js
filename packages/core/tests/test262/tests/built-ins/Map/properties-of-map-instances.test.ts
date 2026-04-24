import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "properties-of-map-instances.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/properties-of-map-instances.js"),
);
