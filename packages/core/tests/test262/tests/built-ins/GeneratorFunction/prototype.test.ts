import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("Symbol.toStringTag.js", createTestHandler("built-ins/GeneratorFunction/prototype/Symbol.toStringTag.js"));
it("constructor.js", createTestHandler("built-ins/GeneratorFunction/prototype/constructor.js"));
it("extensibility.js", createTestHandler("built-ins/GeneratorFunction/prototype/extensibility.js"));
it("not-callable.js", createTestHandler("built-ins/GeneratorFunction/prototype/not-callable.js"));
it("prop-desc.js", createTestHandler("built-ins/GeneratorFunction/prototype/prop-desc.js"));
it("prototype.js", createTestHandler("built-ins/GeneratorFunction/prototype/prototype.js"));
});
