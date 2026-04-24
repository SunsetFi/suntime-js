import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("fromCodePoint", () => {
it("argument-is-Symbol.js", createTestHandler("built-ins/String/fromCodePoint/argument-is-Symbol.js"));
it("argument-is-not-integer.js", createTestHandler("built-ins/String/fromCodePoint/argument-is-not-integer.js"));
it("argument-not-coercible.js", createTestHandler("built-ins/String/fromCodePoint/argument-not-coercible.js"));
it("arguments-is-empty.js", createTestHandler("built-ins/String/fromCodePoint/arguments-is-empty.js"));
it("fromCodePoint.js", createTestHandler("built-ins/String/fromCodePoint/fromCodePoint.js"));
it("length.js", createTestHandler("built-ins/String/fromCodePoint/length.js"));
it("name.js", createTestHandler("built-ins/String/fromCodePoint/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/String/fromCodePoint/not-a-constructor.js"));
it("number-is-out-of-range.js", createTestHandler("built-ins/String/fromCodePoint/number-is-out-of-range.js"));
it("return-string-value.js", createTestHandler("built-ins/String/fromCodePoint/return-string-value.js"));
it("to-number-conversions.js", createTestHandler("built-ins/String/fromCodePoint/to-number-conversions.js"));
});
