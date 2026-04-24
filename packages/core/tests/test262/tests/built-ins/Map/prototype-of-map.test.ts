import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-of-map.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/prototype-of-map.js"),
);
