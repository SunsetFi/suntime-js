import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("unary-plus", () => {
it("11.4.6-2-1.js", createTestHandler("language/expressions/unary-plus/11.4.6-2-1.js"));
it("S11.4.6_A1.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A1.js"));
it("S11.4.6_A2.1_T1.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A2.1_T1.js"));
it("S11.4.6_A2.1_T2.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A2.1_T2.js"));
it("S11.4.6_A2.2_T1.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A2.2_T1.js"));
it("S11.4.6_A3_T1.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A3_T1.js"));
it("S11.4.6_A3_T2.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A3_T2.js"));
it("S11.4.6_A3_T3.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A3_T3.js"));
it("S11.4.6_A3_T4.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A3_T4.js"));
it("S11.4.6_A3_T5.js", createTestHandler("language/expressions/unary-plus/S11.4.6_A3_T5.js"));
it("S9.3_A1_T2.js", createTestHandler("language/expressions/unary-plus/S9.3_A1_T2.js"));
it("S9.3_A2_T2.js", createTestHandler("language/expressions/unary-plus/S9.3_A2_T2.js"));
it("S9.3_A3_T2.js", createTestHandler("language/expressions/unary-plus/S9.3_A3_T2.js"));
it("S9.3_A4.1_T2.js", createTestHandler("language/expressions/unary-plus/S9.3_A4.1_T2.js"));
it("S9.3_A4.2_T2.js", createTestHandler("language/expressions/unary-plus/S9.3_A4.2_T2.js"));
it("S9.3_A5_T2.js", createTestHandler("language/expressions/unary-plus/S9.3_A5_T2.js"));
it("bigint-throws.js", createTestHandler("language/expressions/unary-plus/bigint-throws.js"));
});
