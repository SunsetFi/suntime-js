import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("expm1", () => {
it("expm1-specialVals.js", createTestHandler("built-ins/Math/expm1/expm1-specialVals.js"));
it("length.js", createTestHandler("built-ins/Math/expm1/length.js"));
it("name.js", createTestHandler("built-ins/Math/expm1/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/expm1/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/expm1/prop-desc.js"));
});
