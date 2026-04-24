import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Symbol.toStringTag", () => {
it("property-descriptor.js", createTestHandler("built-ins/ArrayIteratorPrototype/Symbol.toStringTag/property-descriptor.js"));
it("value-direct.js", createTestHandler("built-ins/ArrayIteratorPrototype/Symbol.toStringTag/value-direct.js"));
it("value-from-to-string.js", createTestHandler("built-ins/ArrayIteratorPrototype/Symbol.toStringTag/value-from-to-string.js"));
});
