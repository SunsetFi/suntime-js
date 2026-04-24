import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("next", () => {
it("length.js", createTestHandler("built-ins/StringIteratorPrototype/next/length.js"));
it("name.js", createTestHandler("built-ins/StringIteratorPrototype/next/name.js"));
it("next-iteration-surrogate-pairs.js", createTestHandler("built-ins/StringIteratorPrototype/next/next-iteration-surrogate-pairs.js"));
it("next-iteration.js", createTestHandler("built-ins/StringIteratorPrototype/next/next-iteration.js"));
it("next-missing-internal-slots.js", createTestHandler("built-ins/StringIteratorPrototype/next/next-missing-internal-slots.js"));
});
