import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("object", () => {
describe("accessor", () => {
it("getter-duplicates.js", createTestHandler("language/computed-property-names/object/accessor/getter-duplicates.js"));
it("getter-super.js", createTestHandler("language/computed-property-names/object/accessor/getter-super.js"));
it("getter.js", createTestHandler("language/computed-property-names/object/accessor/getter.js"));
it("setter-duplicates.js", createTestHandler("language/computed-property-names/object/accessor/setter-duplicates.js"));
it("setter-super.js", createTestHandler("language/computed-property-names/object/accessor/setter-super.js"));
it("setter.js", createTestHandler("language/computed-property-names/object/accessor/setter.js"));
});
describe("method", () => {
it("generator.js", createTestHandler("language/computed-property-names/object/method/generator.js"));
it("number.js", createTestHandler("language/computed-property-names/object/method/number.js"));
it("string.js", createTestHandler("language/computed-property-names/object/method/string.js"));
it("super.js", createTestHandler("language/computed-property-names/object/method/super.js"));
it("symbol.js", createTestHandler("language/computed-property-names/object/method/symbol.js"));
});
describe("property", () => {
it("number-duplicates.js", createTestHandler("language/computed-property-names/object/property/number-duplicates.js"));
});
});
