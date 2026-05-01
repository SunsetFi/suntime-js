import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "always-return-true-from-ordinary-object.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Reflect/preventExtensions/always-return-true-from-ordinary-object.js",
  ),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/name.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/not-a-constructor.js"),
);

it(
  "prevent-extensions.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/prevent-extensions.js"),
);

it(
  "preventExtensions.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/preventExtensions.js"),
);

it(
  "return-abrupt-from-result.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/return-abrupt-from-result.js"),
);

it(
  "return-boolean-from-proxy-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/return-boolean-from-proxy-object.js"),
);

it(
  "target-is-not-object-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/target-is-not-object-throws.js"),
);

it(
  "target-is-symbol-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/preventExtensions/target-is-symbol-throws.js"),
);
