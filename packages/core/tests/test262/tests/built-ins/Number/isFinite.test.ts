import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isFinite", () => {
it("arg-is-not-number.js", createTestHandler("built-ins/Number/isFinite/arg-is-not-number.js"));
it("finite-numbers.js", createTestHandler("built-ins/Number/isFinite/finite-numbers.js"));
it("infinity.js", createTestHandler("built-ins/Number/isFinite/infinity.js"));
it("length.js", createTestHandler("built-ins/Number/isFinite/length.js"));
it("name.js", createTestHandler("built-ins/Number/isFinite/name.js"));
it("nan.js", createTestHandler("built-ins/Number/isFinite/nan.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Number/isFinite/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Number/isFinite/prop-desc.js"));
});
