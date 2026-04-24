import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Symbol.asyncIterator", () => {
it("length.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/length.js"));
it("name.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/name.js"));
it("prop-desc.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/prop-desc.js"));
it("return-val.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/return-val.js"));
});
