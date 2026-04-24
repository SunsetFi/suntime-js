import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("f16round", () => {
it("length.js", createTestHandler("built-ins/Math/f16round/length.js"));
it("name.js", createTestHandler("built-ins/Math/f16round/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/f16round/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/f16round/prop-desc.js"));
it("value-conversion.js", createTestHandler("built-ins/Math/f16round/value-conversion.js"));
});
