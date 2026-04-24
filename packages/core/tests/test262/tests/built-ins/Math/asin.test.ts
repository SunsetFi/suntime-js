import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("asin", () => {
it("S15.8.2.3_A1.js", createTestHandler("built-ins/Math/asin/S15.8.2.3_A1.js"));
it("S15.8.2.3_A2.js", createTestHandler("built-ins/Math/asin/S15.8.2.3_A2.js"));
it("S15.8.2.3_A3.js", createTestHandler("built-ins/Math/asin/S15.8.2.3_A3.js"));
it("S15.8.2.3_A4.js", createTestHandler("built-ins/Math/asin/S15.8.2.3_A4.js"));
it("S15.8.2.3_A5.js", createTestHandler("built-ins/Math/asin/S15.8.2.3_A5.js"));
it("length.js", createTestHandler("built-ins/Math/asin/length.js"));
it("name.js", createTestHandler("built-ins/Math/asin/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/asin/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/asin/prop-desc.js"));
});
