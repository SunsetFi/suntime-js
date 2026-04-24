import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("acos", () => {
it("S15.8.2.2_A1.js", createTestHandler("built-ins/Math/acos/S15.8.2.2_A1.js"));
it("S15.8.2.2_A2.js", createTestHandler("built-ins/Math/acos/S15.8.2.2_A2.js"));
it("S15.8.2.2_A3.js", createTestHandler("built-ins/Math/acos/S15.8.2.2_A3.js"));
it("S15.8.2.2_A4.js", createTestHandler("built-ins/Math/acos/S15.8.2.2_A4.js"));
it("length.js", createTestHandler("built-ins/Math/acos/length.js"));
it("name.js", createTestHandler("built-ins/Math/acos/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/acos/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/acos/prop-desc.js"));
});
