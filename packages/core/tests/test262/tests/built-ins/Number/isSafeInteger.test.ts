import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isSafeInteger", () => {
it("arg-is-not-number.js", createTestHandler("built-ins/Number/isSafeInteger/arg-is-not-number.js"));
it("infinity.js", createTestHandler("built-ins/Number/isSafeInteger/infinity.js"));
it("length.js", createTestHandler("built-ins/Number/isSafeInteger/length.js"));
it("name.js", createTestHandler("built-ins/Number/isSafeInteger/name.js"));
it("nan.js", createTestHandler("built-ins/Number/isSafeInteger/nan.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Number/isSafeInteger/not-a-constructor.js"));
it("not-integer.js", createTestHandler("built-ins/Number/isSafeInteger/not-integer.js"));
it("not-safe-integer.js", createTestHandler("built-ins/Number/isSafeInteger/not-safe-integer.js"));
it("prop-desc.js", createTestHandler("built-ins/Number/isSafeInteger/prop-desc.js"));
it("safe-integers.js", createTestHandler("built-ins/Number/isSafeInteger/safe-integers.js"));
});
