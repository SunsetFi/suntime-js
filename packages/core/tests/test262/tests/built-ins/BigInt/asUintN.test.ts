import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("asUintN", () => {
it("arithmetic.js", createTestHandler("built-ins/BigInt/asUintN/arithmetic.js"));
it("asUintN.js", createTestHandler("built-ins/BigInt/asUintN/asUintN.js"));
it("bigint-tobigint-errors.js", createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint-errors.js"));
it("bigint-tobigint-toprimitive.js", createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint-toprimitive.js"));
it("bigint-tobigint-wrapped-values.js", createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint-wrapped-values.js"));
it("bigint-tobigint.js", createTestHandler("built-ins/BigInt/asUintN/bigint-tobigint.js"));
it("bits-toindex-errors.js", createTestHandler("built-ins/BigInt/asUintN/bits-toindex-errors.js"));
it("bits-toindex-toprimitive.js", createTestHandler("built-ins/BigInt/asUintN/bits-toindex-toprimitive.js"));
it("bits-toindex-wrapped-values.js", createTestHandler("built-ins/BigInt/asUintN/bits-toindex-wrapped-values.js"));
it("bits-toindex.js", createTestHandler("built-ins/BigInt/asUintN/bits-toindex.js"));
it("length.js", createTestHandler("built-ins/BigInt/asUintN/length.js"));
it("name.js", createTestHandler("built-ins/BigInt/asUintN/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/BigInt/asUintN/not-a-constructor.js"));
it("order-of-steps.js", createTestHandler("built-ins/BigInt/asUintN/order-of-steps.js"));
});
