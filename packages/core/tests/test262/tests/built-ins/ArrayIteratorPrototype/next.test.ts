import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("next", () => {
it("Float32Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Float32Array.js"));
it("Float64Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Float64Array.js"));
it("Int16Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Int16Array.js"));
it("Int32Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Int32Array.js"));
it("Int8Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Int8Array.js"));
it("Uint16Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Uint16Array.js"));
it("Uint32Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Uint32Array.js"));
it("Uint8Array.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Uint8Array.js"));
it("Uint8ClampedArray.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/Uint8ClampedArray.js"));
it("args-mapped-expansion-after-exhaustion.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-mapped-expansion-after-exhaustion.js"));
it("args-mapped-expansion-before-exhaustion.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-mapped-expansion-before-exhaustion.js"));
it("args-mapped-iteration.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-mapped-iteration.js"));
it("args-mapped-truncation-before-exhaustion.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-mapped-truncation-before-exhaustion.js"));
it("args-unmapped-expansion-after-exhaustion.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-unmapped-expansion-after-exhaustion.js"));
it("args-unmapped-expansion-before-exhaustion.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-unmapped-expansion-before-exhaustion.js"));
it("args-unmapped-iteration.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-unmapped-iteration.js"));
it("args-unmapped-truncation-before-exhaustion.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/args-unmapped-truncation-before-exhaustion.js"));
it("detach-typedarray-in-progress.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/detach-typedarray-in-progress.js"));
it("iteration-mutable.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/iteration-mutable.js"));
it("iteration.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/iteration.js"));
it("length.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/length.js"));
it("name.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/name.js"));
it("non-own-slots.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/non-own-slots.js"));
it("property-descriptor.js", createTestHandler("built-ins/ArrayIteratorPrototype/next/property-descriptor.js"));
});
