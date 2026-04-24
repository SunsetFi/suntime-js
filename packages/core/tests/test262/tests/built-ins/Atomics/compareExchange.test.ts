import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("compareExchange", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/compareExchange/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/compareExchange/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/compareExchange/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/compareExchange/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/compareExchange/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/compareExchange/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/compareExchange/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/compareExchange/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/compareExchange/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/compareExchange/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/compareExchange/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/compareExchange/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/compareExchange/not-a-constructor.js"));
it("validate-arraytype-before-expectedValue-coercion.js", createTestHandler("built-ins/Atomics/compareExchange/validate-arraytype-before-expectedValue-coercion.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/compareExchange/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-replacementValue-coercion.js", createTestHandler("built-ins/Atomics/compareExchange/validate-arraytype-before-replacementValue-coercion.js"));
});
