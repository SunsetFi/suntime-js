import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("fromCharCode", () => {
it("S15.5.3.2_A1.js", createTestHandler("built-ins/String/fromCharCode/S15.5.3.2_A1.js"));
it("S15.5.3.2_A2.js", createTestHandler("built-ins/String/fromCharCode/S15.5.3.2_A2.js"));
it("S15.5.3.2_A3_T1.js", createTestHandler("built-ins/String/fromCharCode/S15.5.3.2_A3_T1.js"));
it("S15.5.3.2_A3_T2.js", createTestHandler("built-ins/String/fromCharCode/S15.5.3.2_A3_T2.js"));
it("S15.5.3.2_A4.js", createTestHandler("built-ins/String/fromCharCode/S15.5.3.2_A4.js"));
it("S9.7_A1.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A1.js"));
it("S9.7_A2.1.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A2.1.js"));
it("S9.7_A2.2.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A2.2.js"));
it("S9.7_A3.1_T1.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A3.1_T1.js"));
it("S9.7_A3.1_T2.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A3.1_T2.js"));
it("S9.7_A3.1_T3.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A3.1_T3.js"));
it("S9.7_A3.1_T4.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A3.1_T4.js"));
it("S9.7_A3.2_T1.js", createTestHandler("built-ins/String/fromCharCode/S9.7_A3.2_T1.js"));
it("name.js", createTestHandler("built-ins/String/fromCharCode/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/String/fromCharCode/not-a-constructor.js"));
it("touint16-tonumber-throws-bigint.js", createTestHandler("built-ins/String/fromCharCode/touint16-tonumber-throws-bigint.js"));
it("touint16-tonumber-throws-valueof.js", createTestHandler("built-ins/String/fromCharCode/touint16-tonumber-throws-valueof.js"));
});
