import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("return", () => {
it("12.9-1.js", createTestHandler("language/statements/return/12.9-1.js"));
it("S12.9_A1_T1.js", createTestHandler("language/statements/return/S12.9_A1_T1.js"));
it("S12.9_A1_T10.js", createTestHandler("language/statements/return/S12.9_A1_T10.js"));
it("S12.9_A1_T2.js", createTestHandler("language/statements/return/S12.9_A1_T2.js"));
it("S12.9_A1_T3.js", createTestHandler("language/statements/return/S12.9_A1_T3.js"));
it("S12.9_A1_T4.js", createTestHandler("language/statements/return/S12.9_A1_T4.js"));
it("S12.9_A1_T5.js", createTestHandler("language/statements/return/S12.9_A1_T5.js"));
it("S12.9_A1_T6.js", createTestHandler("language/statements/return/S12.9_A1_T6.js"));
it("S12.9_A1_T7.js", createTestHandler("language/statements/return/S12.9_A1_T7.js"));
it("S12.9_A1_T8.js", createTestHandler("language/statements/return/S12.9_A1_T8.js"));
it("S12.9_A1_T9.js", createTestHandler("language/statements/return/S12.9_A1_T9.js"));
it("S12.9_A3.js", createTestHandler("language/statements/return/S12.9_A3.js"));
it("S12.9_A4.js", createTestHandler("language/statements/return/S12.9_A4.js"));
it("S12.9_A5.js", createTestHandler("language/statements/return/S12.9_A5.js"));
it("line-terminators.js", createTestHandler("language/statements/return/line-terminators.js"));
it.skip("tco.js", () => { /* Ignored Test */ });
});
