import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("has", () => {
  it("has.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Reflect/has/has.js"));
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/has/length.js"),
  );
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Reflect/has/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/has/not-a-constructor.js"),
  );
  it(
    "return-abrupt-from-property-key.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/has/return-abrupt-from-property-key.js"),
  );
  it(
    "return-abrupt-from-result.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/has/return-abrupt-from-result.js"),
  );
  it(
    "return-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/has/return-boolean.js"),
  );
  it(
    "symbol-property.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/has/symbol-property.js"),
  );
  it(
    "target-is-not-object-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/has/target-is-not-object-throws.js"),
  );
  it(
    "target-is-symbol-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/has/target-is-symbol-throws.js"),
  );
});
