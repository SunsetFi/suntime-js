import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("log10", () => {
it("Log10-specialVals.js", createTestHandler("built-ins/Math/log10/Log10-specialVals.js"));
it("length.js", createTestHandler("built-ins/Math/log10/length.js"));
it("name.js", createTestHandler("built-ins/Math/log10/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/log10/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/log10/prop-desc.js"));
});
