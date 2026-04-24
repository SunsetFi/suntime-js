import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sin", () => {
it("S15.8.2.16_A1.js", createTestHandler("built-ins/Math/sin/S15.8.2.16_A1.js"));
it("S15.8.2.16_A4.js", createTestHandler("built-ins/Math/sin/S15.8.2.16_A4.js"));
it("S15.8.2.16_A5.js", createTestHandler("built-ins/Math/sin/S15.8.2.16_A5.js"));
it("length.js", createTestHandler("built-ins/Math/sin/length.js"));
it("name.js", createTestHandler("built-ins/Math/sin/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/sin/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/sin/prop-desc.js"));
it("zero.js", createTestHandler("built-ins/Math/sin/zero.js"));
});
