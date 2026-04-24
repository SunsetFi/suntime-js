import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("log2", () => {
it("length.js", createTestHandler("built-ins/Math/log2/length.js"));
it("log2-basicTests.js", createTestHandler("built-ins/Math/log2/log2-basicTests.js"));
it("name.js", createTestHandler("built-ins/Math/log2/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/log2/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/log2/prop-desc.js"));
});
