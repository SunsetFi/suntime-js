import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("deleteProperty", () => {
it("delete-properties.js", createTestHandler("built-ins/Reflect/deleteProperty/delete-properties.js"));
it("delete-symbol-properties.js", createTestHandler("built-ins/Reflect/deleteProperty/delete-symbol-properties.js"));
it("deleteProperty.js", createTestHandler("built-ins/Reflect/deleteProperty/deleteProperty.js"));
it("length.js", createTestHandler("built-ins/Reflect/deleteProperty/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/deleteProperty/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/deleteProperty/not-a-constructor.js"));
it("return-abrupt-from-property-key.js", createTestHandler("built-ins/Reflect/deleteProperty/return-abrupt-from-property-key.js"));
it("return-abrupt-from-result.js", createTestHandler("built-ins/Reflect/deleteProperty/return-abrupt-from-result.js"));
it("return-boolean.js", createTestHandler("built-ins/Reflect/deleteProperty/return-boolean.js"));
it("target-is-not-object-throws.js", createTestHandler("built-ins/Reflect/deleteProperty/target-is-not-object-throws.js"));
it("target-is-symbol-throws.js", createTestHandler("built-ins/Reflect/deleteProperty/target-is-symbol-throws.js"));
});
