import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("asIntN", () => {
it("arithmetic.js", createTestHandler("built-ins/BigInt/asIntN/arithmetic.js"));
it("asIntN.js", createTestHandler("built-ins/BigInt/asIntN/asIntN.js"));
it("bigint-tobigint-errors.js", createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint-errors.js"));
it("bigint-tobigint-toprimitive.js", createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint-toprimitive.js"));
it("bigint-tobigint-wrapped-values.js", createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint-wrapped-values.js"));
it("bigint-tobigint.js", createTestHandler("built-ins/BigInt/asIntN/bigint-tobigint.js"));
it("bits-toindex-errors.js", createTestHandler("built-ins/BigInt/asIntN/bits-toindex-errors.js"));
it("bits-toindex-toprimitive.js", createTestHandler("built-ins/BigInt/asIntN/bits-toindex-toprimitive.js"));
it("bits-toindex-wrapped-values.js", createTestHandler("built-ins/BigInt/asIntN/bits-toindex-wrapped-values.js"));
it("bits-toindex.js", createTestHandler("built-ins/BigInt/asIntN/bits-toindex.js"));
it("length.js", createTestHandler("built-ins/BigInt/asIntN/length.js"));
it("name.js", createTestHandler("built-ins/BigInt/asIntN/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/BigInt/asIntN/not-a-constructor.js"));
it("order-of-steps.js", createTestHandler("built-ins/BigInt/asIntN/order-of-steps.js"));
});
