import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sub", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/sub/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/sub/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/sub/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/sub/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/sub/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/sub/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/sub/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/sub/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/sub/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/sub/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/sub/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/sub/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/sub/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/sub/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/sub/validate-arraytype-before-value-coercion.js"));
});
