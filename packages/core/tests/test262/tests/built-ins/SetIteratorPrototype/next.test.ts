import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("next", () => {
it("does-not-have-mapiterator-internal-slots-set.js", createTestHandler("built-ins/SetIteratorPrototype/next/does-not-have-mapiterator-internal-slots-set.js"));
it("does-not-have-mapiterator-internal-slots.js", createTestHandler("built-ins/SetIteratorPrototype/next/does-not-have-mapiterator-internal-slots.js"));
it("iteration-mutable.js", createTestHandler("built-ins/SetIteratorPrototype/next/iteration-mutable.js"));
it("iteration.js", createTestHandler("built-ins/SetIteratorPrototype/next/iteration.js"));
it("length.js", createTestHandler("built-ins/SetIteratorPrototype/next/length.js"));
it("name.js", createTestHandler("built-ins/SetIteratorPrototype/next/name.js"));
it("this-not-object-throw-entries.js", createTestHandler("built-ins/SetIteratorPrototype/next/this-not-object-throw-entries.js"));
it("this-not-object-throw-keys.js", createTestHandler("built-ins/SetIteratorPrototype/next/this-not-object-throw-keys.js"));
it("this-not-object-throw-prototype-iterator.js", createTestHandler("built-ins/SetIteratorPrototype/next/this-not-object-throw-prototype-iterator.js"));
it("this-not-object-throw-values.js", createTestHandler("built-ins/SetIteratorPrototype/next/this-not-object-throw-values.js"));
});
