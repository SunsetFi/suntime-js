import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/Symbol.species/length.js"),
);

it(
  "return-value.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/Symbol.species/return-value.js"),
);

it(
  "symbol-species-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Map/Symbol.species/symbol-species-name.js"),
);

it(
  "symbol-species.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Map/Symbol.species/symbol-species.js"),
);
