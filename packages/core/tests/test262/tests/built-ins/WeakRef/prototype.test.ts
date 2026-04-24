import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("Symbol.toStringTag.js", createTestHandler("built-ins/WeakRef/prototype/Symbol.toStringTag.js"));
it("constructor.js", createTestHandler("built-ins/WeakRef/prototype/constructor.js"));
describe("deref", () => {
it("custom-this.js", createTestHandler("built-ins/WeakRef/prototype/deref/custom-this.js"));
});
describe("deref", () => {
it("length.js", createTestHandler("built-ins/WeakRef/prototype/deref/length.js"));
});
describe("deref", () => {
it("name.js", createTestHandler("built-ins/WeakRef/prototype/deref/name.js"));
});
describe("deref", () => {
it("not-a-constructor.js", createTestHandler("built-ins/WeakRef/prototype/deref/not-a-constructor.js"));
});
describe("deref", () => {
it("prop-desc.js", createTestHandler("built-ins/WeakRef/prototype/deref/prop-desc.js"));
});
describe("deref", () => {
it("return-object-target.js", createTestHandler("built-ins/WeakRef/prototype/deref/return-object-target.js"));
});
describe("deref", () => {
it("return-symbol-target.js", createTestHandler("built-ins/WeakRef/prototype/deref/return-symbol-target.js"));
});
describe("deref", () => {
it("this-does-not-have-internal-target-throws.js", createTestHandler("built-ins/WeakRef/prototype/deref/this-does-not-have-internal-target-throws.js"));
});
describe("deref", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/WeakRef/prototype/deref/this-not-object-throws.js"));
});
it("prop-desc.js", createTestHandler("built-ins/WeakRef/prototype/prop-desc.js"));
it("proto.js", createTestHandler("built-ins/WeakRef/prototype/proto.js"));
});
