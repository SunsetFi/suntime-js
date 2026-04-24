import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isInteger", () => {
it("arg-is-not-number.js", createTestHandler("built-ins/Number/isInteger/arg-is-not-number.js"));
it("infinity.js", createTestHandler("built-ins/Number/isInteger/infinity.js"));
it("integers.js", createTestHandler("built-ins/Number/isInteger/integers.js"));
it("length.js", createTestHandler("built-ins/Number/isInteger/length.js"));
it("name.js", createTestHandler("built-ins/Number/isInteger/name.js"));
it("nan.js", createTestHandler("built-ins/Number/isInteger/nan.js"));
it("non-integers.js", createTestHandler("built-ins/Number/isInteger/non-integers.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Number/isInteger/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Number/isInteger/prop-desc.js"));
});
