import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("class", () => {
  describe("accessor", () => {
    it(
      "getter-duplicates.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/accessor/getter-duplicates.js"),
    );
    it(
      "getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/accessor/getter.js"),
    );
    it(
      "setter-duplicates.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/accessor/setter-duplicates.js"),
    );
    it(
      "setter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/accessor/setter.js"),
    );
  });
  describe("method", () => {
    it(
      "constructor-can-be-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/computed-property-names/class/method/constructor-can-be-generator.js",
      ),
    );
    it(
      "constructor-can-be-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/computed-property-names/class/method/constructor-can-be-getter.js",
      ),
    );
    it(
      "constructor-can-be-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/computed-property-names/class/method/constructor-can-be-setter.js",
      ),
    );
    it(
      "constructor-duplicate-1.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/constructor-duplicate-1.js"),
    );
    it(
      "constructor-duplicate-2.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/constructor-duplicate-2.js"),
    );
    it(
      "constructor-duplicate-3.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/constructor-duplicate-3.js"),
    );
    it(
      "constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/constructor.js"),
    );
    it(
      "generator.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/generator.js"),
    );
    it(
      "number.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/number.js"),
    );
    it(
      "string.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/string.js"),
    );
    it(
      "symbol.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/method/symbol.js"),
    );
  });
  describe("static", () => {
    it(
      "generator-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/generator-constructor.js"),
    );
    it(
      "generator-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/generator-prototype.js"),
    );
    it(
      "getter-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/getter-constructor.js"),
    );
    it(
      "getter-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/getter-prototype.js"),
    );
    it(
      "method-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-constructor.js"),
    );
    it(
      "method-number-order.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-number-order.js"),
    );
    it(
      "method-number.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-number.js"),
    );
    it(
      "method-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-prototype.js"),
    );
    it(
      "method-string-order.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-string-order.js"),
    );
    it(
      "method-string.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-string.js"),
    );
    it(
      "method-symbol-order.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-symbol-order.js"),
    );
    it(
      "method-symbol.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/method-symbol.js"),
    );
    it(
      "setter-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/setter-constructor.js"),
    );
    it(
      "setter-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler("language/computed-property-names/class/static/setter-prototype.js"),
    );
  });
});
