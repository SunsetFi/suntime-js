import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("preventExtensions", () => {
it("always-return-true-from-ordinary-object.js", createTestHandler("built-ins/Reflect/preventExtensions/always-return-true-from-ordinary-object.js"));
it("length.js", createTestHandler("built-ins/Reflect/preventExtensions/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/preventExtensions/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/preventExtensions/not-a-constructor.js"));
it("prevent-extensions.js", createTestHandler("built-ins/Reflect/preventExtensions/prevent-extensions.js"));
it("preventExtensions.js", createTestHandler("built-ins/Reflect/preventExtensions/preventExtensions.js"));
it("return-abrupt-from-result.js", createTestHandler("built-ins/Reflect/preventExtensions/return-abrupt-from-result.js"));
it("return-boolean-from-proxy-object.js", createTestHandler("built-ins/Reflect/preventExtensions/return-boolean-from-proxy-object.js"));
it("target-is-not-object-throws.js", createTestHandler("built-ins/Reflect/preventExtensions/target-is-not-object-throws.js"));
it("target-is-symbol-throws.js", createTestHandler("built-ins/Reflect/preventExtensions/target-is-symbol-throws.js"));
});
