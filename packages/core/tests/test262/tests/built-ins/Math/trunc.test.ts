import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("trunc", () => {
it("Math.trunc_Infinity.js", createTestHandler("built-ins/Math/trunc/Math.trunc_Infinity.js"));
it("Math.trunc_NaN.js", createTestHandler("built-ins/Math/trunc/Math.trunc_NaN.js"));
it("Math.trunc_NegDecimal.js", createTestHandler("built-ins/Math/trunc/Math.trunc_NegDecimal.js"));
it("Math.trunc_PosDecimal.js", createTestHandler("built-ins/Math/trunc/Math.trunc_PosDecimal.js"));
it("Math.trunc_Success.js", createTestHandler("built-ins/Math/trunc/Math.trunc_Success.js"));
it("Math.trunc_Zero.js", createTestHandler("built-ins/Math/trunc/Math.trunc_Zero.js"));
it("length.js", createTestHandler("built-ins/Math/trunc/length.js"));
it("name.js", createTestHandler("built-ins/Math/trunc/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/trunc/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/trunc/prop-desc.js"));
it("trunc-sampleTests.js", createTestHandler("built-ins/Math/trunc/trunc-sampleTests.js"));
it("trunc-specialVals.js", createTestHandler("built-ins/Math/trunc/trunc-specialVals.js"));
});
