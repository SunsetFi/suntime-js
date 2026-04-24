import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isExtensible", () => {
it("isExtensible.js", createTestHandler("built-ins/Reflect/isExtensible/isExtensible.js"));
it("length.js", createTestHandler("built-ins/Reflect/isExtensible/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/isExtensible/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/isExtensible/not-a-constructor.js"));
it("return-abrupt-from-result.js", createTestHandler("built-ins/Reflect/isExtensible/return-abrupt-from-result.js"));
it("return-boolean.js", createTestHandler("built-ins/Reflect/isExtensible/return-boolean.js"));
it("target-is-not-object-throws.js", createTestHandler("built-ins/Reflect/isExtensible/target-is-not-object-throws.js"));
it("target-is-symbol-throws.js", createTestHandler("built-ins/Reflect/isExtensible/target-is-symbol-throws.js"));
});
