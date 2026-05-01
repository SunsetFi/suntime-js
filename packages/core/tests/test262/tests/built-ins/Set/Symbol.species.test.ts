import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/Symbol.species/length.js"),
);

it(
  "return-value.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Set/Symbol.species/return-value.js"),
);

it(
  "symbol-species-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/Symbol.species/symbol-species-name.js"),
);

it(
  "symbol-species.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Set/Symbol.species/symbol-species.js"),
);
