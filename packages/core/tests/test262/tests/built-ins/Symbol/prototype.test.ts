import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
describe("Symbol.toPrimitive", () => {
it("length.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/length.js"));
it("name.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/name.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/prop-desc.js"));
it("redefined-symbol-wrapper-ordinary-toprimitive.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/redefined-symbol-wrapper-ordinary-toprimitive.js"));
it("removed-symbol-wrapper-ordinary-toprimitive.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/removed-symbol-wrapper-ordinary-toprimitive.js"));
it("this-val-non-obj.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/this-val-non-obj.js"));
it("this-val-obj-non-symbol-wrapper.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/this-val-obj-non-symbol-wrapper.js"));
it("this-val-obj-symbol-wrapper.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/this-val-obj-symbol-wrapper.js"));
it("this-val-symbol.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toPrimitive/this-val-symbol.js"));
});
it("Symbol.toStringTag.js", createTestHandler("built-ins/Symbol/prototype/Symbol.toStringTag.js"));
it("constructor.js", createTestHandler("built-ins/Symbol/prototype/constructor.js"));
describe("description", () => {
it("description-symboldescriptivestring.js", createTestHandler("built-ins/Symbol/prototype/description/description-symboldescriptivestring.js"));
it("descriptor.js", createTestHandler("built-ins/Symbol/prototype/description/descriptor.js"));
it("get.js", createTestHandler("built-ins/Symbol/prototype/description/get.js"));
it("is-not-own-property.js", createTestHandler("built-ins/Symbol/prototype/description/is-not-own-property.js"));
it("this-val-non-symbol.js", createTestHandler("built-ins/Symbol/prototype/description/this-val-non-symbol.js"));
it("this-val-symbol.js", createTestHandler("built-ins/Symbol/prototype/description/this-val-symbol.js"));
it("wrapper.js", createTestHandler("built-ins/Symbol/prototype/description/wrapper.js"));
});
it("intrinsic.js", createTestHandler("built-ins/Symbol/prototype/intrinsic.js"));
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Symbol/prototype/toString/length.js"));
it("name.js", createTestHandler("built-ins/Symbol/prototype/toString/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Symbol/prototype/toString/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/prototype/toString/prop-desc.js"));
it("toString-default-attributes-non-strict.js", createTestHandler("built-ins/Symbol/prototype/toString/toString-default-attributes-non-strict.js"));
it("toString-default-attributes-strict.js", createTestHandler("built-ins/Symbol/prototype/toString/toString-default-attributes-strict.js"));
it("toString.js", createTestHandler("built-ins/Symbol/prototype/toString/toString.js"));
it("undefined.js", createTestHandler("built-ins/Symbol/prototype/toString/undefined.js"));
});
describe("valueOf", () => {
it("length.js", createTestHandler("built-ins/Symbol/prototype/valueOf/length.js"));
it("name.js", createTestHandler("built-ins/Symbol/prototype/valueOf/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Symbol/prototype/valueOf/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/prototype/valueOf/prop-desc.js"));
it("this-val-non-obj.js", createTestHandler("built-ins/Symbol/prototype/valueOf/this-val-non-obj.js"));
it("this-val-obj-non-symbol.js", createTestHandler("built-ins/Symbol/prototype/valueOf/this-val-obj-non-symbol.js"));
it("this-val-obj-symbol.js", createTestHandler("built-ins/Symbol/prototype/valueOf/this-val-obj-symbol.js"));
it("this-val-symbol.js", createTestHandler("built-ins/Symbol/prototype/valueOf/this-val-symbol.js"));
});
});
