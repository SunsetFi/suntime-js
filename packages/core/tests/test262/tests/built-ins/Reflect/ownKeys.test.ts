import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/length.js"),
);

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Reflect/ownKeys/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/not-a-constructor.js"),
);

it(
  "order-after-define-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/order-after-define-property.js"),
);

it(
  "ownKeys.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/ownKeys.js"),
);

it(
  "return-abrupt-from-result.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/return-abrupt-from-result.js"),
);

it(
  "return-array-with-own-keys-only.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/return-array-with-own-keys-only.js"),
);

it(
  "return-empty-array.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/return-empty-array.js"),
);

it(
  "return-non-enumerable-keys.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/return-non-enumerable-keys.js"),
);

it(
  "return-on-corresponding-order-large-index.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Reflect/ownKeys/return-on-corresponding-order-large-index.js"),
);

it(
  "return-on-corresponding-order.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/return-on-corresponding-order.js"),
);

it(
  "target-is-not-object-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/target-is-not-object-throws.js"),
);

it(
  "target-is-symbol-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/ownKeys/target-is-symbol-throws.js"),
);
