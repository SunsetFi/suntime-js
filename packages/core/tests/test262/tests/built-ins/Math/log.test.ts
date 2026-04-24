import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("log", () => {
it("S15.8.2.10_A1.js", createTestHandler("built-ins/Math/log/S15.8.2.10_A1.js"));
it("S15.8.2.10_A2.js", createTestHandler("built-ins/Math/log/S15.8.2.10_A2.js"));
it("S15.8.2.10_A3.js", createTestHandler("built-ins/Math/log/S15.8.2.10_A3.js"));
it("S15.8.2.10_A4.js", createTestHandler("built-ins/Math/log/S15.8.2.10_A4.js"));
it("S15.8.2.10_A5.js", createTestHandler("built-ins/Math/log/S15.8.2.10_A5.js"));
it("length.js", createTestHandler("built-ins/Math/log/length.js"));
it("name.js", createTestHandler("built-ins/Math/log/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/log/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/log/prop-desc.js"));
});
