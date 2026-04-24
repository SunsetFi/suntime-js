import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sign", () => {
it("length.js", createTestHandler("built-ins/Math/sign/length.js"));
it("name.js", createTestHandler("built-ins/Math/sign/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/sign/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/sign/prop-desc.js"));
it("sign-specialVals.js", createTestHandler("built-ins/Math/sign/sign-specialVals.js"));
});
