import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("and", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/and/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/and/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/and/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/and/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/and/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/and/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/and/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/and/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/and/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/and/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/and/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/and/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/and/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/and/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/and/validate-arraytype-before-value-coercion.js"));
});
