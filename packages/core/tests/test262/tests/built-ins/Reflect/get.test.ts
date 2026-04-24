import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("get", () => {
  it("get.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Reflect/get/get.js"));
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Reflect/get/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/not-a-constructor.js"),
  );
  it(
    "return-abrupt-from-property-key.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/return-abrupt-from-property-key.js"),
  );
  it(
    "return-abrupt-from-result.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/return-abrupt-from-result.js"),
  );
  it(
    "return-value-from-receiver.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/return-value-from-receiver.js"),
  );
  it(
    "return-value-from-symbol-key.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/return-value-from-symbol-key.js"),
  );
  it(
    "return-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/return-value.js"),
  );
  it(
    "target-is-not-object-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/target-is-not-object-throws.js"),
  );
  it(
    "target-is-symbol-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/get/target-is-symbol-throws.js"),
  );
});
