import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("asinh", () => {
it("asinh-specialVals.js", createTestHandler("built-ins/Math/asinh/asinh-specialVals.js"));
it("length.js", createTestHandler("built-ins/Math/asinh/length.js"));
it("name.js", createTestHandler("built-ins/Math/asinh/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/asinh/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/asinh/prop-desc.js"));
});
