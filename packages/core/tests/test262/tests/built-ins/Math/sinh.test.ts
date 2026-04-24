import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sinh", () => {
it("length.js", createTestHandler("built-ins/Math/sinh/length.js"));
it("name.js", createTestHandler("built-ins/Math/sinh/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/sinh/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/sinh/prop-desc.js"));
it("sinh-specialVals.js", createTestHandler("built-ins/Math/sinh/sinh-specialVals.js"));
});
