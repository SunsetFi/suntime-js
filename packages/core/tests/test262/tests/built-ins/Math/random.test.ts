import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("random", () => {
it("S15.8.2.14_A1.js", createTestHandler("built-ins/Math/random/S15.8.2.14_A1.js"));
it("length.js", createTestHandler("built-ins/Math/random/length.js"));
it("name.js", createTestHandler("built-ins/Math/random/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/random/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/random/prop-desc.js"));
});
