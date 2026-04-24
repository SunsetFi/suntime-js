import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("get", () => {
it("get.js", createTestHandler("built-ins/Reflect/get/get.js"));
it("length.js", createTestHandler("built-ins/Reflect/get/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/get/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/get/not-a-constructor.js"));
it("return-abrupt-from-property-key.js", createTestHandler("built-ins/Reflect/get/return-abrupt-from-property-key.js"));
it("return-abrupt-from-result.js", createTestHandler("built-ins/Reflect/get/return-abrupt-from-result.js"));
it("return-value-from-receiver.js", createTestHandler("built-ins/Reflect/get/return-value-from-receiver.js"));
it("return-value-from-symbol-key.js", createTestHandler("built-ins/Reflect/get/return-value-from-symbol-key.js"));
it("return-value.js", createTestHandler("built-ins/Reflect/get/return-value.js"));
it("target-is-not-object-throws.js", createTestHandler("built-ins/Reflect/get/target-is-not-object-throws.js"));
it("target-is-symbol-throws.js", createTestHandler("built-ins/Reflect/get/target-is-symbol-throws.js"));
});
