import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("atanh", () => {
it("atanh-specialVals.js", createTestHandler("built-ins/Math/atanh/atanh-specialVals.js"));
it("length.js", createTestHandler("built-ins/Math/atanh/length.js"));
it("name.js", createTestHandler("built-ins/Math/atanh/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/atanh/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/atanh/prop-desc.js"));
});
