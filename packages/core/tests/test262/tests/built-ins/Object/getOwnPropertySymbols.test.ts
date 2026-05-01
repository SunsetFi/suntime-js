import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/getOwnPropertySymbols/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/getOwnPropertySymbols/name.js"),
);

it(
  "non-object-argument-invalid.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/getOwnPropertySymbols/non-object-argument-invalid.js"),
);

it(
  "non-object-argument-valid.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/getOwnPropertySymbols/non-object-argument-valid.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/getOwnPropertySymbols/not-a-constructor.js"),
);

it(
  "object-contains-symbol-property-with-description.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/getOwnPropertySymbols/object-contains-symbol-property-with-description.js",
  ),
);

it(
  "object-contains-symbol-property-without-description.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/getOwnPropertySymbols/object-contains-symbol-property-without-description.js",
  ),
);

it(
  "order-after-define-property.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/getOwnPropertySymbols/order-after-define-property.js"),
);

it(
  "proxy-invariant-absent-not-configurable-string-key.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/getOwnPropertySymbols/proxy-invariant-absent-not-configurable-string-key.js",
  ),
);

it(
  "proxy-invariant-duplicate-string-entry.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/getOwnPropertySymbols/proxy-invariant-duplicate-string-entry.js",
  ),
);

it(
  "proxy-invariant-not-extensible-absent-string-key.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/getOwnPropertySymbols/proxy-invariant-not-extensible-absent-string-key.js",
  ),
);

it(
  "proxy-invariant-not-extensible-extra-string-key.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/getOwnPropertySymbols/proxy-invariant-not-extensible-extra-string-key.js",
  ),
);
