import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("NEGATIVE_INFINITY", () => {
it("S15.7.3.5_A1.js", createTestHandler("built-ins/Number/NEGATIVE_INFINITY/S15.7.3.5_A1.js"));
it("S15.7.3.5_A2.js", createTestHandler("built-ins/Number/NEGATIVE_INFINITY/S15.7.3.5_A2.js"));
it("prop-desc.js", createTestHandler("built-ins/Number/NEGATIVE_INFINITY/prop-desc.js"));
it("value.js", createTestHandler("built-ins/Number/NEGATIVE_INFINITY/value.js"));
});
