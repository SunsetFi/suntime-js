import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("atan2", () => {
it("S15.8.2.5_A1.js", createTestHandler("built-ins/Math/atan2/S15.8.2.5_A1.js"));
it("S15.8.2.5_A14.js", createTestHandler("built-ins/Math/atan2/S15.8.2.5_A14.js"));
it("S15.8.2.5_A16.js", createTestHandler("built-ins/Math/atan2/S15.8.2.5_A16.js"));
it("S15.8.2.5_A4.js", createTestHandler("built-ins/Math/atan2/S15.8.2.5_A4.js"));
it("S15.8.2.5_A5.js", createTestHandler("built-ins/Math/atan2/S15.8.2.5_A5.js"));
it("S15.8.2.5_A8.js", createTestHandler("built-ins/Math/atan2/S15.8.2.5_A8.js"));
it("S15.8.2.5_A9.js", createTestHandler("built-ins/Math/atan2/S15.8.2.5_A9.js"));
it("length.js", createTestHandler("built-ins/Math/atan2/length.js"));
it("name.js", createTestHandler("built-ins/Math/atan2/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/atan2/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/atan2/prop-desc.js"));
});
