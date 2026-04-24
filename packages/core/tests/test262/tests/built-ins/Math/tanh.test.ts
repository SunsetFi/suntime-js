import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("tanh", () => {
it("length.js", createTestHandler("built-ins/Math/tanh/length.js"));
it("name.js", createTestHandler("built-ins/Math/tanh/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/tanh/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/tanh/prop-desc.js"));
it("tanh-specialVals.js", createTestHandler("built-ins/Math/tanh/tanh-specialVals.js"));
});
