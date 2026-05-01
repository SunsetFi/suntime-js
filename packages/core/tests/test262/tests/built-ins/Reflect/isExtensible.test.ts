import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "isExtensible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/isExtensible.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/name.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/not-a-constructor.js"),
);

it(
  "return-abrupt-from-result.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/return-abrupt-from-result.js"),
);

it(
  "return-boolean.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/return-boolean.js"),
);

it(
  "target-is-not-object-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/target-is-not-object-throws.js"),
);

it(
  "target-is-symbol-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/isExtensible/target-is-symbol-throws.js"),
);
