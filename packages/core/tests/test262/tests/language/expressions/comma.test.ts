import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("comma", () => {
it("S11.14_A1.js", createTestHandler("language/expressions/comma/S11.14_A1.js"));
it("S11.14_A2.1_T1.js", createTestHandler("language/expressions/comma/S11.14_A2.1_T1.js"));
it("S11.14_A2.1_T2.js", createTestHandler("language/expressions/comma/S11.14_A2.1_T2.js"));
it("S11.14_A2.1_T3.js", createTestHandler("language/expressions/comma/S11.14_A2.1_T3.js"));
it("S11.14_A3.js", createTestHandler("language/expressions/comma/S11.14_A3.js"));
it("tco-final.js", createTestHandler("language/expressions/comma/tco-final.js"));
});
