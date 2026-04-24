import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("exchange", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/exchange/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/exchange/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/exchange/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/exchange/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/exchange/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/exchange/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/exchange/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/exchange/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/exchange/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/exchange/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/exchange/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/exchange/non-views.js"));
it("nonshared-int-views.js", createTestHandler("built-ins/Atomics/exchange/nonshared-int-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/exchange/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/exchange/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/exchange/validate-arraytype-before-value-coercion.js"));
});
