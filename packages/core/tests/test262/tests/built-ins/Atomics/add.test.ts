import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("add", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/add/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/add/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/add/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/add/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/add/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/add/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/add/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/add/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/add/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/add/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/add/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/add/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/add/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/add/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/add/validate-arraytype-before-value-coercion.js"));
});
