import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("cos", () => {
it("S15.8.2.7_A1.js", createTestHandler("built-ins/Math/cos/S15.8.2.7_A1.js"));
it("S15.8.2.7_A2.js", createTestHandler("built-ins/Math/cos/S15.8.2.7_A2.js"));
it("S15.8.2.7_A3.js", createTestHandler("built-ins/Math/cos/S15.8.2.7_A3.js"));
it("S15.8.2.7_A4.js", createTestHandler("built-ins/Math/cos/S15.8.2.7_A4.js"));
it("S15.8.2.7_A5.js", createTestHandler("built-ins/Math/cos/S15.8.2.7_A5.js"));
it("length.js", createTestHandler("built-ins/Math/cos/length.js"));
it("name.js", createTestHandler("built-ins/Math/cos/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/cos/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/cos/prop-desc.js"));
});
