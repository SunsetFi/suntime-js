import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ownKeys", () => {
it("length.js", createTestHandler("built-ins/Reflect/ownKeys/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/ownKeys/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/ownKeys/not-a-constructor.js"));
it("order-after-define-property.js", createTestHandler("built-ins/Reflect/ownKeys/order-after-define-property.js"));
it("ownKeys.js", createTestHandler("built-ins/Reflect/ownKeys/ownKeys.js"));
it("return-abrupt-from-result.js", createTestHandler("built-ins/Reflect/ownKeys/return-abrupt-from-result.js"));
it("return-array-with-own-keys-only.js", createTestHandler("built-ins/Reflect/ownKeys/return-array-with-own-keys-only.js"));
it("return-empty-array.js", createTestHandler("built-ins/Reflect/ownKeys/return-empty-array.js"));
it("return-non-enumerable-keys.js", createTestHandler("built-ins/Reflect/ownKeys/return-non-enumerable-keys.js"));
it("return-on-corresponding-order-large-index.js", createTestHandler("built-ins/Reflect/ownKeys/return-on-corresponding-order-large-index.js"));
it("return-on-corresponding-order.js", createTestHandler("built-ins/Reflect/ownKeys/return-on-corresponding-order.js"));
it("target-is-not-object-throws.js", createTestHandler("built-ins/Reflect/ownKeys/target-is-not-object-throws.js"));
it("target-is-symbol-throws.js", createTestHandler("built-ins/Reflect/ownKeys/target-is-symbol-throws.js"));
});
