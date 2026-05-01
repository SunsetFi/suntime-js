import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "getOwnPropertyDescriptor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/getOwnPropertyDescriptor.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/name.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/not-a-constructor.js"),
);

it(
  "return-abrupt-from-property-key.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Reflect/getOwnPropertyDescriptor/return-abrupt-from-property-key.js",
  ),
);

it(
  "return-abrupt-from-result.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/return-abrupt-from-result.js"),
);

it(
  "return-from-accessor-descriptor.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Reflect/getOwnPropertyDescriptor/return-from-accessor-descriptor.js",
  ),
);

it(
  "return-from-data-descriptor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/return-from-data-descriptor.js"),
);

it(
  "symbol-property.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/symbol-property.js"),
);

it(
  "target-is-not-object-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/target-is-not-object-throws.js"),
);

it(
  "target-is-symbol-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/target-is-symbol-throws.js"),
);

it(
  "undefined-own-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/undefined-own-property.js"),
);

it(
  "undefined-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Reflect/getOwnPropertyDescriptor/undefined-property.js"),
);
