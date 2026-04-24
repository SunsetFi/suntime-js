import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("load", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/load/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/load/bigint/bad-range.js"));
});
describe("bigint", () => {
it("good-views.js", createTestHandler("built-ins/Atomics/load/bigint/good-views.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/load/bigint/non-shared-bufferdata.js"));
});
it("descriptor.js", createTestHandler("built-ins/Atomics/load/descriptor.js"));
it("expected-return-value.js", createTestHandler("built-ins/Atomics/load/expected-return-value.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/load/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/load/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/load/name.js"));
it("non-shared-bufferdata.js", createTestHandler("built-ins/Atomics/load/non-shared-bufferdata.js"));
it("non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/load/non-shared-int-views-throws.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/load/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/load/not-a-constructor.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/load/validate-arraytype-before-index-coercion.js"));
});
