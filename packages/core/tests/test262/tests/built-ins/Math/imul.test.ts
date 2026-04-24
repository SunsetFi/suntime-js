import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("imul", () => {
it("length.js", createTestHandler("built-ins/Math/imul/length.js"));
it("name.js", createTestHandler("built-ins/Math/imul/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/imul/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/imul/prop-desc.js"));
it("results.js", createTestHandler("built-ins/Math/imul/results.js"));
});
