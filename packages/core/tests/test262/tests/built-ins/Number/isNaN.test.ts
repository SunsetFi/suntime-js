import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isNaN", () => {
it("arg-is-not-number.js", createTestHandler("built-ins/Number/isNaN/arg-is-not-number.js"));
it("length.js", createTestHandler("built-ins/Number/isNaN/length.js"));
it("name.js", createTestHandler("built-ins/Number/isNaN/name.js"));
it("nan.js", createTestHandler("built-ins/Number/isNaN/nan.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Number/isNaN/not-a-constructor.js"));
it("not-nan.js", createTestHandler("built-ins/Number/isNaN/not-nan.js"));
it("prop-desc.js", createTestHandler("built-ins/Number/isNaN/prop-desc.js"));
});
