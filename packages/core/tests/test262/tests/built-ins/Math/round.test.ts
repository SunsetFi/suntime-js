import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("round", () => {
it("S15.8.2.15_A1.js", createTestHandler("built-ins/Math/round/S15.8.2.15_A1.js"));
it("S15.8.2.15_A2.js", createTestHandler("built-ins/Math/round/S15.8.2.15_A2.js"));
it("S15.8.2.15_A3.js", createTestHandler("built-ins/Math/round/S15.8.2.15_A3.js"));
it("S15.8.2.15_A4.js", createTestHandler("built-ins/Math/round/S15.8.2.15_A4.js"));
it("S15.8.2.15_A5.js", createTestHandler("built-ins/Math/round/S15.8.2.15_A5.js"));
it("S15.8.2.15_A6.js", createTestHandler("built-ins/Math/round/S15.8.2.15_A6.js"));
it("S15.8.2.15_A7.js", createTestHandler("built-ins/Math/round/S15.8.2.15_A7.js"));
it("length.js", createTestHandler("built-ins/Math/round/length.js"));
it("name.js", createTestHandler("built-ins/Math/round/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/round/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/round/prop-desc.js"));
});
