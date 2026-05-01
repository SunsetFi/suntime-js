import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Symbol.toStringTag.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorFunction/prototype/Symbol.toStringTag.js"),
);

it(
  "constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/GeneratorFunction/prototype/constructor.js"),
);

it(
  "extensibility.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorFunction/prototype/extensibility.js"),
);

it(
  "not-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorFunction/prototype/not-callable.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorFunction/prototype/prop-desc.js"),
);

it(
  "prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/GeneratorFunction/prototype/prototype.js"),
);
