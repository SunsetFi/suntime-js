import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Symbol.species", () => {
it("length.js", createTestHandler("built-ins/Promise/Symbol.species/length.js"));
it("prop-desc.js", createTestHandler("built-ins/Promise/Symbol.species/prop-desc.js"));
it("return-value.js", createTestHandler("built-ins/Promise/Symbol.species/return-value.js"));
it("symbol-species-name.js", createTestHandler("built-ins/Promise/Symbol.species/symbol-species-name.js"));
it("symbol-species.js", createTestHandler("built-ins/Promise/Symbol.species/symbol-species.js"));
});
