import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("MAX_VALUE", () => {
it("S15.7.3.2_A2.js", createTestHandler("built-ins/Number/MAX_VALUE/S15.7.3.2_A2.js"));
it("S15.7.3.2_A3.js", createTestHandler("built-ins/Number/MAX_VALUE/S15.7.3.2_A3.js"));
it("S15.7.3.2_A4.js", createTestHandler("built-ins/Number/MAX_VALUE/S15.7.3.2_A4.js"));
});
