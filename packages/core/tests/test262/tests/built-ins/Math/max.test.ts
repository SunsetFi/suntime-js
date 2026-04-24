import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("max", () => {
it("15.8.2.11-1.js", createTestHandler("built-ins/Math/max/15.8.2.11-1.js"));
it("Math.max_each-element-coerced.js", createTestHandler("built-ins/Math/max/Math.max_each-element-coerced.js"));
it("S15.8.2.11_A1.js", createTestHandler("built-ins/Math/max/S15.8.2.11_A1.js"));
it("S15.8.2.11_A2.js", createTestHandler("built-ins/Math/max/S15.8.2.11_A2.js"));
it("S15.8.2.11_A4.js", createTestHandler("built-ins/Math/max/S15.8.2.11_A4.js"));
it("length.js", createTestHandler("built-ins/Math/max/length.js"));
it("name.js", createTestHandler("built-ins/Math/max/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/max/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/max/prop-desc.js"));
it("zeros.js", createTestHandler("built-ins/Math/max/zeros.js"));
});
