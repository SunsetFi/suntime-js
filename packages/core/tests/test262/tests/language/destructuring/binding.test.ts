import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("binding", () => {
it("initialization-requires-object-coercible-null.js", createTestHandler("language/destructuring/binding/initialization-requires-object-coercible-null.js"));
it("initialization-requires-object-coercible-undefined.js", createTestHandler("language/destructuring/binding/initialization-requires-object-coercible-undefined.js"));
it("initialization-returns-normal-completion-for-empty-objects.js", createTestHandler("language/destructuring/binding/initialization-returns-normal-completion-for-empty-objects.js"));
it("keyed-destructuring-property-reference-target-evaluation-order-with-bindings.js", createTestHandler("language/destructuring/binding/keyed-destructuring-property-reference-target-evaluation-order-with-bindings.js"));
describe("syntax", () => {
it("array-elements-with-initializer.js", createTestHandler("language/destructuring/binding/syntax/array-elements-with-initializer.js"));
});
describe("syntax", () => {
it("array-elements-with-object-patterns.js", createTestHandler("language/destructuring/binding/syntax/array-elements-with-object-patterns.js"));
});
describe("syntax", () => {
it("array-elements-without-initializer.js", createTestHandler("language/destructuring/binding/syntax/array-elements-without-initializer.js"));
});
describe("syntax", () => {
it("array-pattern-with-elisions.js", createTestHandler("language/destructuring/binding/syntax/array-pattern-with-elisions.js"));
});
describe("syntax", () => {
it("array-pattern-with-no-elements.js", createTestHandler("language/destructuring/binding/syntax/array-pattern-with-no-elements.js"));
});
describe("syntax", () => {
it("array-rest-elements.js", createTestHandler("language/destructuring/binding/syntax/array-rest-elements.js"));
});
describe("syntax", () => {
it("destructuring-array-parameters-function-arguments-length.js", createTestHandler("language/destructuring/binding/syntax/destructuring-array-parameters-function-arguments-length.js"));
});
describe("syntax", () => {
it("destructuring-object-parameters-function-arguments-length.js", createTestHandler("language/destructuring/binding/syntax/destructuring-object-parameters-function-arguments-length.js"));
});
describe("syntax", () => {
it("object-pattern-with-no-property-list.js", createTestHandler("language/destructuring/binding/syntax/object-pattern-with-no-property-list.js"));
});
describe("syntax", () => {
it("property-list-bindings-elements.js", createTestHandler("language/destructuring/binding/syntax/property-list-bindings-elements.js"));
});
describe("syntax", () => {
it("property-list-followed-by-a-single-comma.js", createTestHandler("language/destructuring/binding/syntax/property-list-followed-by-a-single-comma.js"));
});
describe("syntax", () => {
it("property-list-single-name-bindings.js", createTestHandler("language/destructuring/binding/syntax/property-list-single-name-bindings.js"));
});
describe("syntax", () => {
it("property-list-with-property-list.js", createTestHandler("language/destructuring/binding/syntax/property-list-with-property-list.js"));
});
describe("syntax", () => {
it("recursive-array-and-object-patterns.js", createTestHandler("language/destructuring/binding/syntax/recursive-array-and-object-patterns.js"));
});
it("typedarray-backed-by-resizable-buffer.js", createTestHandler("language/destructuring/binding/typedarray-backed-by-resizable-buffer.js"));
});
