import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("defineProperty", () => {
it("define-properties.js", createTestHandler("built-ins/Reflect/defineProperty/define-properties.js"));
it("define-symbol-properties.js", createTestHandler("built-ins/Reflect/defineProperty/define-symbol-properties.js"));
it("defineProperty.js", createTestHandler("built-ins/Reflect/defineProperty/defineProperty.js"));
it("length.js", createTestHandler("built-ins/Reflect/defineProperty/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/defineProperty/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/defineProperty/not-a-constructor.js"));
it("return-abrupt-from-attributes.js", createTestHandler("built-ins/Reflect/defineProperty/return-abrupt-from-attributes.js"));
it("return-abrupt-from-property-key.js", createTestHandler("built-ins/Reflect/defineProperty/return-abrupt-from-property-key.js"));
it("return-abrupt-from-result.js", createTestHandler("built-ins/Reflect/defineProperty/return-abrupt-from-result.js"));
it("return-boolean.js", createTestHandler("built-ins/Reflect/defineProperty/return-boolean.js"));
it("target-is-not-object-throws.js", createTestHandler("built-ins/Reflect/defineProperty/target-is-not-object-throws.js"));
it("target-is-symbol-throws.js", createTestHandler("built-ins/Reflect/defineProperty/target-is-symbol-throws.js"));
});
