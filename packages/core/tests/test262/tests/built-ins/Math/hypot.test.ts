import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("hypot", () => {
it("Math.hypot_Infinity.js", createTestHandler("built-ins/Math/hypot/Math.hypot_Infinity.js"));
it("Math.hypot_InfinityNaN.js", createTestHandler("built-ins/Math/hypot/Math.hypot_InfinityNaN.js"));
it("Math.hypot_NaN.js", createTestHandler("built-ins/Math/hypot/Math.hypot_NaN.js"));
it("Math.hypot_NegInfinity.js", createTestHandler("built-ins/Math/hypot/Math.hypot_NegInfinity.js"));
it("Math.hypot_NoArgs.js", createTestHandler("built-ins/Math/hypot/Math.hypot_NoArgs.js"));
it("Math.hypot_Success_2.js", createTestHandler("built-ins/Math/hypot/Math.hypot_Success_2.js"));
it("Math.hypot_ToNumberErr.js", createTestHandler("built-ins/Math/hypot/Math.hypot_ToNumberErr.js"));
it("Math.hypot_Zero_2.js", createTestHandler("built-ins/Math/hypot/Math.hypot_Zero_2.js"));
it("length.js", createTestHandler("built-ins/Math/hypot/length.js"));
it("name.js", createTestHandler("built-ins/Math/hypot/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/hypot/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/hypot/prop-desc.js"));
});
