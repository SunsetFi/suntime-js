import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("class", () => {
describe("accessor", () => {
it("getter-duplicates.js", createTestHandler("language/computed-property-names/class/accessor/getter-duplicates.js"));
it("getter.js", createTestHandler("language/computed-property-names/class/accessor/getter.js"));
it("setter-duplicates.js", createTestHandler("language/computed-property-names/class/accessor/setter-duplicates.js"));
it("setter.js", createTestHandler("language/computed-property-names/class/accessor/setter.js"));
});
describe("method", () => {
it("constructor-can-be-generator.js", createTestHandler("language/computed-property-names/class/method/constructor-can-be-generator.js"));
it("constructor-can-be-getter.js", createTestHandler("language/computed-property-names/class/method/constructor-can-be-getter.js"));
it("constructor-can-be-setter.js", createTestHandler("language/computed-property-names/class/method/constructor-can-be-setter.js"));
it("constructor-duplicate-1.js", createTestHandler("language/computed-property-names/class/method/constructor-duplicate-1.js"));
it("constructor-duplicate-2.js", createTestHandler("language/computed-property-names/class/method/constructor-duplicate-2.js"));
it("constructor-duplicate-3.js", createTestHandler("language/computed-property-names/class/method/constructor-duplicate-3.js"));
it("constructor.js", createTestHandler("language/computed-property-names/class/method/constructor.js"));
it("generator.js", createTestHandler("language/computed-property-names/class/method/generator.js"));
it("number.js", createTestHandler("language/computed-property-names/class/method/number.js"));
it("string.js", createTestHandler("language/computed-property-names/class/method/string.js"));
it("symbol.js", createTestHandler("language/computed-property-names/class/method/symbol.js"));
});
describe("static", () => {
it("generator-constructor.js", createTestHandler("language/computed-property-names/class/static/generator-constructor.js"));
it("generator-prototype.js", createTestHandler("language/computed-property-names/class/static/generator-prototype.js"));
it("getter-constructor.js", createTestHandler("language/computed-property-names/class/static/getter-constructor.js"));
it("getter-prototype.js", createTestHandler("language/computed-property-names/class/static/getter-prototype.js"));
it("method-constructor.js", createTestHandler("language/computed-property-names/class/static/method-constructor.js"));
it("method-number-order.js", createTestHandler("language/computed-property-names/class/static/method-number-order.js"));
it("method-number.js", createTestHandler("language/computed-property-names/class/static/method-number.js"));
it("method-prototype.js", createTestHandler("language/computed-property-names/class/static/method-prototype.js"));
it("method-string-order.js", createTestHandler("language/computed-property-names/class/static/method-string-order.js"));
it("method-string.js", createTestHandler("language/computed-property-names/class/static/method-string.js"));
it("method-symbol-order.js", createTestHandler("language/computed-property-names/class/static/method-symbol-order.js"));
it("method-symbol.js", createTestHandler("language/computed-property-names/class/static/method-symbol.js"));
it("setter-constructor.js", createTestHandler("language/computed-property-names/class/static/setter-constructor.js"));
it("setter-prototype.js", createTestHandler("language/computed-property-names/class/static/setter-prototype.js"));
});
});
