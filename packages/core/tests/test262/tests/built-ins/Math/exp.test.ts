import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("exp", () => {
it("S15.8.2.8_A1.js", createTestHandler("built-ins/Math/exp/S15.8.2.8_A1.js"));
it("S15.8.2.8_A2.js", createTestHandler("built-ins/Math/exp/S15.8.2.8_A2.js"));
it("S15.8.2.8_A3.js", createTestHandler("built-ins/Math/exp/S15.8.2.8_A3.js"));
it("S15.8.2.8_A4.js", createTestHandler("built-ins/Math/exp/S15.8.2.8_A4.js"));
it("S15.8.2.8_A5.js", createTestHandler("built-ins/Math/exp/S15.8.2.8_A5.js"));
it("length.js", createTestHandler("built-ins/Math/exp/length.js"));
it("name.js", createTestHandler("built-ins/Math/exp/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/exp/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/exp/prop-desc.js"));
});
