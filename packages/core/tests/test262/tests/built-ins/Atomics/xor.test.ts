import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("xor", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/xor/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/xor/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/xor/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/xor/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/xor/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/xor/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/xor/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/xor/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/xor/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/xor/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/xor/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/xor/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/xor/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/xor/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/xor/validate-arraytype-before-value-coercion.js"));
});
