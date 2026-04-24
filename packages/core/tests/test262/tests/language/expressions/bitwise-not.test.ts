import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("bitwise-not", () => {
it("S11.4.8_A1.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A1.js"));
it("S11.4.8_A2.1_T1.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A2.1_T1.js"));
it("S11.4.8_A2.1_T2.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A2.1_T2.js"));
it("S11.4.8_A2.2_T1.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A2.2_T1.js"));
it("S11.4.8_A3_T1.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A3_T1.js"));
it("S11.4.8_A3_T2.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A3_T2.js"));
it("S11.4.8_A3_T3.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A3_T3.js"));
it("S11.4.8_A3_T4.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A3_T4.js"));
it("S11.4.8_A3_T5.js", createTestHandler("language/expressions/bitwise-not/S11.4.8_A3_T5.js"));
it("S9.5_A2.1_T2.js", createTestHandler("language/expressions/bitwise-not/S9.5_A2.1_T2.js"));
it("S9.5_A2.2_T2.js", createTestHandler("language/expressions/bitwise-not/S9.5_A2.2_T2.js"));
it("S9.5_A2.3_T2.js", createTestHandler("language/expressions/bitwise-not/S9.5_A2.3_T2.js"));
it("S9.5_A3.1_T4.js", createTestHandler("language/expressions/bitwise-not/S9.5_A3.1_T4.js"));
it("S9.5_A3.2_T2.js", createTestHandler("language/expressions/bitwise-not/S9.5_A3.2_T2.js"));
it("bigint-non-primitive.js", createTestHandler("language/expressions/bitwise-not/bigint-non-primitive.js"));
it("bigint.js", createTestHandler("language/expressions/bitwise-not/bigint.js"));
});
