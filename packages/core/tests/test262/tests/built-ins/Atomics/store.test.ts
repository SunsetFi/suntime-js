import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("store", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/store/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/store/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/store/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/store/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/store/descriptor.js"));
it("expected-return-value-negative-zero.js", createTestHandler("built-ins/Atomics/store/expected-return-value-negative-zero.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/store/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/store/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/store/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/store/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/store/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/store/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/store/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/store/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/store/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/store/validate-arraytype-before-value-coercion.js"));
});
