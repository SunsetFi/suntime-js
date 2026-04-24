import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("atan", () => {
it("S15.8.2.4_A1.js", createTestHandler("built-ins/Math/atan/S15.8.2.4_A1.js"));
it("S15.8.2.4_A2.js", createTestHandler("built-ins/Math/atan/S15.8.2.4_A2.js"));
it("S15.8.2.4_A3.js", createTestHandler("built-ins/Math/atan/S15.8.2.4_A3.js"));
it("length.js", createTestHandler("built-ins/Math/atan/length.js"));
it("name.js", createTestHandler("built-ins/Math/atan/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/atan/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/atan/prop-desc.js"));
});
