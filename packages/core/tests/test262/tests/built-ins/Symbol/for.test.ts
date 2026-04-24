import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("for", () => {
it("create-value.js", createTestHandler("built-ins/Symbol/for/create-value.js"));
it("cross-realm.js", createTestHandler("built-ins/Symbol/for/cross-realm.js"));
it("description.js", createTestHandler("built-ins/Symbol/for/description.js"));
it("length.js", createTestHandler("built-ins/Symbol/for/length.js"));
it("name.js", createTestHandler("built-ins/Symbol/for/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Symbol/for/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/for/prop-desc.js"));
it("retrieve-value.js", createTestHandler("built-ins/Symbol/for/retrieve-value.js"));
it("to-string-err.js", createTestHandler("built-ins/Symbol/for/to-string-err.js"));
});
