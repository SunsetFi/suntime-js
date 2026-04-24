import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("log1p", () => {
it("length.js", createTestHandler("built-ins/Math/log1p/length.js"));
it("name.js", createTestHandler("built-ins/Math/log1p/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/log1p/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/log1p/prop-desc.js"));
it("specific-results.js", createTestHandler("built-ins/Math/log1p/specific-results.js"));
});
