import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("namespace", () => {
it("Symbol.iterator.js", createTestHandler("language/module-code/namespace/Symbol.iterator.js"));
it("Symbol.toStringTag.js", createTestHandler("language/module-code/namespace/Symbol.toStringTag.js"));
describe("internals", () => {
it("define-own-property.js", createTestHandler("language/module-code/namespace/internals/define-own-property.js"));
});
describe("internals", () => {
it("delete-exported-init.js", createTestHandler("language/module-code/namespace/internals/delete-exported-init.js"));
});
describe("internals", () => {
it("delete-exported-uninit.js", createTestHandler("language/module-code/namespace/internals/delete-exported-uninit.js"));
});
describe("internals", () => {
it("delete-non-exported.js", createTestHandler("language/module-code/namespace/internals/delete-non-exported.js"));
});
describe("internals", () => {
it("enumerate-binding-uninit.js", createTestHandler("language/module-code/namespace/internals/enumerate-binding-uninit.js"));
});
describe("internals", () => {
it("get-nested-namespace-dflt-skip.js", createTestHandler("language/module-code/namespace/internals/get-nested-namespace-dflt-skip.js"));
});
describe("internals", () => {
it("get-nested-namespace-props-nrml.js", createTestHandler("language/module-code/namespace/internals/get-nested-namespace-props-nrml.js"));
});
describe("internals", () => {
it("get-own-property-str-found-init.js", createTestHandler("language/module-code/namespace/internals/get-own-property-str-found-init.js"));
});
describe("internals", () => {
it("get-own-property-str-found-uninit.js", createTestHandler("language/module-code/namespace/internals/get-own-property-str-found-uninit.js"));
});
describe("internals", () => {
it("get-own-property-str-not-found.js", createTestHandler("language/module-code/namespace/internals/get-own-property-str-not-found.js"));
});
describe("internals", () => {
it("get-own-property-sym.js", createTestHandler("language/module-code/namespace/internals/get-own-property-sym.js"));
});
describe("internals", () => {
it("get-prototype-of.js", createTestHandler("language/module-code/namespace/internals/get-prototype-of.js"));
});
describe("internals", () => {
it("get-str-found-init.js", createTestHandler("language/module-code/namespace/internals/get-str-found-init.js"));
});
describe("internals", () => {
it("get-str-found-uninit.js", createTestHandler("language/module-code/namespace/internals/get-str-found-uninit.js"));
});
describe("internals", () => {
it("get-str-initialize.js", createTestHandler("language/module-code/namespace/internals/get-str-initialize.js"));
});
describe("internals", () => {
it("get-str-not-found.js", createTestHandler("language/module-code/namespace/internals/get-str-not-found.js"));
});
describe("internals", () => {
it("get-str-update.js", createTestHandler("language/module-code/namespace/internals/get-str-update.js"));
});
describe("internals", () => {
it("get-sym-found.js", createTestHandler("language/module-code/namespace/internals/get-sym-found.js"));
});
describe("internals", () => {
it("get-sym-not-found.js", createTestHandler("language/module-code/namespace/internals/get-sym-not-found.js"));
});
describe("internals", () => {
it("has-property-str-found-init.js", createTestHandler("language/module-code/namespace/internals/has-property-str-found-init.js"));
});
describe("internals", () => {
it("has-property-str-found-uninit.js", createTestHandler("language/module-code/namespace/internals/has-property-str-found-uninit.js"));
});
describe("internals", () => {
it("has-property-str-not-found.js", createTestHandler("language/module-code/namespace/internals/has-property-str-not-found.js"));
});
describe("internals", () => {
it("has-property-sym-found.js", createTestHandler("language/module-code/namespace/internals/has-property-sym-found.js"));
});
describe("internals", () => {
it("has-property-sym-not-found.js", createTestHandler("language/module-code/namespace/internals/has-property-sym-not-found.js"));
});
describe("internals", () => {
it("is-extensible.js", createTestHandler("language/module-code/namespace/internals/is-extensible.js"));
});
describe("internals", () => {
it("object-hasOwnProperty-binding-uninit.js", createTestHandler("language/module-code/namespace/internals/object-hasOwnProperty-binding-uninit.js"));
});
describe("internals", () => {
it("object-keys-binding-uninit.js", createTestHandler("language/module-code/namespace/internals/object-keys-binding-uninit.js"));
});
describe("internals", () => {
it("object-propertyIsEnumerable-binding-uninit.js", createTestHandler("language/module-code/namespace/internals/object-propertyIsEnumerable-binding-uninit.js"));
});
describe("internals", () => {
it("own-property-keys-binding-types.js", createTestHandler("language/module-code/namespace/internals/own-property-keys-binding-types.js"));
});
describe("internals", () => {
it("own-property-keys-sort.js", createTestHandler("language/module-code/namespace/internals/own-property-keys-sort.js"));
});
describe("internals", () => {
it("prevent-extensions.js", createTestHandler("language/module-code/namespace/internals/prevent-extensions.js"));
});
describe("internals", () => {
it("set-prototype-of-null.js", createTestHandler("language/module-code/namespace/internals/set-prototype-of-null.js"));
});
describe("internals", () => {
it("set-prototype-of.js", createTestHandler("language/module-code/namespace/internals/set-prototype-of.js"));
});
describe("internals", () => {
it("set.js", createTestHandler("language/module-code/namespace/internals/set.js"));
});
});
