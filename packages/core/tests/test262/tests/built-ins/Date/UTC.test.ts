import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("UTC", () => {
it("coercion-errors.js", createTestHandler("built-ins/Date/UTC/coercion-errors.js"));
it("coercion-order.js", createTestHandler("built-ins/Date/UTC/coercion-order.js"));
it("fp-evaluation-order.js", createTestHandler("built-ins/Date/UTC/fp-evaluation-order.js"));
it("infinity-make-day.js", createTestHandler("built-ins/Date/UTC/infinity-make-day.js"));
it("infinity-make-time.js", createTestHandler("built-ins/Date/UTC/infinity-make-time.js"));
it("length.js", createTestHandler("built-ins/Date/UTC/length.js"));
it("name.js", createTestHandler("built-ins/Date/UTC/name.js"));
it("nans.js", createTestHandler("built-ins/Date/UTC/nans.js"));
it("no-arg.js", createTestHandler("built-ins/Date/UTC/no-arg.js"));
it("non-integer-values.js", createTestHandler("built-ins/Date/UTC/non-integer-values.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Date/UTC/not-a-constructor.js"));
it("overflow-make-day.js", createTestHandler("built-ins/Date/UTC/overflow-make-day.js"));
it("overflow-make-time.js", createTestHandler("built-ins/Date/UTC/overflow-make-time.js"));
it("prop-desc.js", createTestHandler("built-ins/Date/UTC/prop-desc.js"));
it("return-value.js", createTestHandler("built-ins/Date/UTC/return-value.js"));
it("time-clip.js", createTestHandler("built-ins/Date/UTC/time-clip.js"));
it("year-offset.js", createTestHandler("built-ins/Date/UTC/year-offset.js"));
});
