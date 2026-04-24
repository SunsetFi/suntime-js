import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sumPrecise", () => {
it("length.js", createTestHandler("built-ins/Math/sumPrecise/length.js"));
it("name.js", createTestHandler("built-ins/Math/sumPrecise/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/sumPrecise/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/sumPrecise/prop-desc.js"));
it("sum-is-NaN.js", createTestHandler("built-ins/Math/sumPrecise/sum-is-NaN.js"));
it("sum-is-infinite.js", createTestHandler("built-ins/Math/sumPrecise/sum-is-infinite.js"));
it("sum-is-minus-zero.js", createTestHandler("built-ins/Math/sumPrecise/sum-is-minus-zero.js"));
it("sum.js", createTestHandler("built-ins/Math/sumPrecise/sum.js"));
it("takes-iterable.js", createTestHandler("built-ins/Math/sumPrecise/takes-iterable.js"));
it("throws-on-non-number.js", createTestHandler("built-ins/Math/sumPrecise/throws-on-non-number.js"));
});
