import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("clz32", () => {
it("Math.clz32.js", createTestHandler("built-ins/Math/clz32/Math.clz32.js"));
it("Math.clz32_1.js", createTestHandler("built-ins/Math/clz32/Math.clz32_1.js"));
it("Math.clz32_2.js", createTestHandler("built-ins/Math/clz32/Math.clz32_2.js"));
it("infinity.js", createTestHandler("built-ins/Math/clz32/infinity.js"));
it("int32bit.js", createTestHandler("built-ins/Math/clz32/int32bit.js"));
it("length.js", createTestHandler("built-ins/Math/clz32/length.js"));
it("name.js", createTestHandler("built-ins/Math/clz32/name.js"));
it("nan.js", createTestHandler("built-ins/Math/clz32/nan.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/clz32/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/clz32/prop-desc.js"));
});
