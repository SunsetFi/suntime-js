import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ceil", () => {
it("S15.8.2.6_A1.js", createTestHandler("built-ins/Math/ceil/S15.8.2.6_A1.js"));
it("S15.8.2.6_A2.js", createTestHandler("built-ins/Math/ceil/S15.8.2.6_A2.js"));
it("S15.8.2.6_A3.js", createTestHandler("built-ins/Math/ceil/S15.8.2.6_A3.js"));
it("S15.8.2.6_A4.js", createTestHandler("built-ins/Math/ceil/S15.8.2.6_A4.js"));
it("S15.8.2.6_A5.js", createTestHandler("built-ins/Math/ceil/S15.8.2.6_A5.js"));
it("S15.8.2.6_A6.js", createTestHandler("built-ins/Math/ceil/S15.8.2.6_A6.js"));
it("S15.8.2.6_A7.js", createTestHandler("built-ins/Math/ceil/S15.8.2.6_A7.js"));
it("length.js", createTestHandler("built-ins/Math/ceil/length.js"));
it("name.js", createTestHandler("built-ins/Math/ceil/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/ceil/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/ceil/prop-desc.js"));
});
