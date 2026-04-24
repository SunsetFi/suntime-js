import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("from", () => {
it("callable.js", createTestHandler("built-ins/Iterator/from/callable.js"));
it("get-next-method-only-once.js", createTestHandler("built-ins/Iterator/from/get-next-method-only-once.js"));
it("get-next-method-throws.js", createTestHandler("built-ins/Iterator/from/get-next-method-throws.js"));
it("get-return-method-when-call-return.js", createTestHandler("built-ins/Iterator/from/get-return-method-when-call-return.js"));
it("is-function.js", createTestHandler("built-ins/Iterator/from/is-function.js"));
it("iterable-primitives.js", createTestHandler("built-ins/Iterator/from/iterable-primitives.js"));
it("iterable-to-iterator-fallback.js", createTestHandler("built-ins/Iterator/from/iterable-to-iterator-fallback.js"));
it("length.js", createTestHandler("built-ins/Iterator/from/length.js"));
it("name.js", createTestHandler("built-ins/Iterator/from/name.js"));
it("non-constructible.js", createTestHandler("built-ins/Iterator/from/non-constructible.js"));
it("primitives.js", createTestHandler("built-ins/Iterator/from/primitives.js"));
it("prop-desc.js", createTestHandler("built-ins/Iterator/from/prop-desc.js"));
it("proto.js", createTestHandler("built-ins/Iterator/from/proto.js"));
it("result-proto.js", createTestHandler("built-ins/Iterator/from/result-proto.js"));
it("return-method-calls-base-return-method.js", createTestHandler("built-ins/Iterator/from/return-method-calls-base-return-method.js"));
it("return-method-returns-iterator-result.js", createTestHandler("built-ins/Iterator/from/return-method-returns-iterator-result.js"));
it("return-method-throws-for-invalid-this.js", createTestHandler("built-ins/Iterator/from/return-method-throws-for-invalid-this.js"));
it("supports-iterable.js", createTestHandler("built-ins/Iterator/from/supports-iterable.js"));
it("supports-iterator.js", createTestHandler("built-ins/Iterator/from/supports-iterator.js"));
});
