import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sqrt", () => {
it("S15.8.2.17_A1.js", createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A1.js"));
it("S15.8.2.17_A2.js", createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A2.js"));
it("S15.8.2.17_A3.js", createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A3.js"));
it("S15.8.2.17_A4.js", createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A4.js"));
it("S15.8.2.17_A5.js", createTestHandler("built-ins/Math/sqrt/S15.8.2.17_A5.js"));
it("length.js", createTestHandler("built-ins/Math/sqrt/length.js"));
it("name.js", createTestHandler("built-ins/Math/sqrt/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/sqrt/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/sqrt/prop-desc.js"));
it("results.js", createTestHandler("built-ins/Math/sqrt/results.js"));
});
