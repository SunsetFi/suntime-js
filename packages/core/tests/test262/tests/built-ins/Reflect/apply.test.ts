import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("apply", () => {
it("apply.js", createTestHandler("built-ins/Reflect/apply/apply.js"));
it("arguments-list-is-not-array-like-but-still-valid.js", createTestHandler("built-ins/Reflect/apply/arguments-list-is-not-array-like-but-still-valid.js"));
it("arguments-list-is-not-array-like.js", createTestHandler("built-ins/Reflect/apply/arguments-list-is-not-array-like.js"));
it("call-target.js", createTestHandler("built-ins/Reflect/apply/call-target.js"));
it("length.js", createTestHandler("built-ins/Reflect/apply/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/apply/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/apply/not-a-constructor.js"));
it("return-target-call-result.js", createTestHandler("built-ins/Reflect/apply/return-target-call-result.js"));
it("target-is-not-callable-throws.js", createTestHandler("built-ins/Reflect/apply/target-is-not-callable-throws.js"));
});
