import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("fround", () => {
it("Math.fround_Infinity.js", createTestHandler("built-ins/Math/fround/Math.fround_Infinity.js"));
it("Math.fround_NaN.js", createTestHandler("built-ins/Math/fround/Math.fround_NaN.js"));
it("Math.fround_Zero.js", createTestHandler("built-ins/Math/fround/Math.fround_Zero.js"));
it("length.js", createTestHandler("built-ins/Math/fround/length.js"));
it("name.js", createTestHandler("built-ins/Math/fround/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/fround/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/fround/prop-desc.js"));
it("ties.js", createTestHandler("built-ins/Math/fround/ties.js"));
it("value-convertion.js", createTestHandler("built-ins/Math/fround/value-convertion.js"));
});
