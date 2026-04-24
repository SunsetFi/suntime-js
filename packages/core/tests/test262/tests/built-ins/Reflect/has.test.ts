import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("has", () => {
it("has.js", createTestHandler("built-ins/Reflect/has/has.js"));
it("length.js", createTestHandler("built-ins/Reflect/has/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/has/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/has/not-a-constructor.js"));
it("return-abrupt-from-property-key.js", createTestHandler("built-ins/Reflect/has/return-abrupt-from-property-key.js"));
it("return-abrupt-from-result.js", createTestHandler("built-ins/Reflect/has/return-abrupt-from-result.js"));
it("return-boolean.js", createTestHandler("built-ins/Reflect/has/return-boolean.js"));
it("symbol-property.js", createTestHandler("built-ins/Reflect/has/symbol-property.js"));
it("target-is-not-object-throws.js", createTestHandler("built-ins/Reflect/has/target-is-not-object-throws.js"));
it("target-is-symbol-throws.js", createTestHandler("built-ins/Reflect/has/target-is-symbol-throws.js"));
});
