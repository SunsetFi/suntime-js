import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("cbrt", () => {
it("cbrt-specialValues.js", createTestHandler("built-ins/Math/cbrt/cbrt-specialValues.js"));
it("length.js", createTestHandler("built-ins/Math/cbrt/length.js"));
it("name.js", createTestHandler("built-ins/Math/cbrt/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/cbrt/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/cbrt/prop-desc.js"));
});
