import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("set", () => {
  it(
    "call-prototype-property-set.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/call-prototype-property-set.js"),
  );
  it(
    "creates-a-data-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/creates-a-data-descriptor.js"),
  );
  it(
    "different-property-descriptors.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/different-property-descriptors.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/set/length.js"),
  );
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Reflect/set/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/not-a-constructor.js"),
  );
  it(
    "receiver-is-not-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/receiver-is-not-object.js"),
  );
  it(
    "return-abrupt-from-property-key.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/return-abrupt-from-property-key.js"),
  );
  it(
    "return-abrupt-from-result.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/return-abrupt-from-result.js"),
  );
  it(
    "return-false-if-receiver-is-not-writable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/return-false-if-receiver-is-not-writable.js"),
  );
  it(
    "return-false-if-target-is-not-writable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/return-false-if-target-is-not-writable.js"),
  );
  it(
    "set-value-on-accessor-descriptor-with-receiver.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/set-value-on-accessor-descriptor-with-receiver.js"),
  );
  it(
    "set-value-on-accessor-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/set-value-on-accessor-descriptor.js"),
  );
  it(
    "set-value-on-data-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/set-value-on-data-descriptor.js"),
  );
  it("set.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Reflect/set/set.js"));
  it(
    "symbol-property.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/symbol-property.js"),
  );
  it(
    "target-is-not-object-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/target-is-not-object-throws.js"),
  );
  it(
    "target-is-symbol-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/set/target-is-symbol-throws.js"),
  );
});
