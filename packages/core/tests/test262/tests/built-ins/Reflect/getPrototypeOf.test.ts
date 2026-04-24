import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("getPrototypeOf", () => {
  it(
    "getPrototypeOf.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/getPrototypeOf.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/not-a-constructor.js"),
  );
  it(
    "null-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/null-prototype.js"),
  );
  it(
    "return-abrupt-from-result.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/return-abrupt-from-result.js"),
  );
  it(
    "return-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/return-prototype.js"),
  );
  it(
    "skip-own-properties.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/skip-own-properties.js"),
  );
  it(
    "target-is-not-object-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/target-is-not-object-throws.js"),
  );
  it(
    "target-is-symbol-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/getPrototypeOf/target-is-symbol-throws.js"),
  );
});
