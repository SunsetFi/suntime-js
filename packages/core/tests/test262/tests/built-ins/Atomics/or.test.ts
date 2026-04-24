import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("or", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/or/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/or/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/or/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/or/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/or/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/or/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/or/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/or/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/or/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/or/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/or/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/or/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/or/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/or/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/or/validate-arraytype-before-value-coercion.js"));
});
