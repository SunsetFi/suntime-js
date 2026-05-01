import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("accessor", () => {
  it(
    "getter-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/accessor/getter-duplicates.js"),
  );
  it(
    "getter-super.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/accessor/getter-super.js"),
  );
  it(
    "getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/accessor/getter.js"),
  );
  it(
    "setter-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/accessor/setter-duplicates.js"),
  );
  it(
    "setter-super.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/accessor/setter-super.js"),
  );
  it(
    "setter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/accessor/setter.js"),
  );
});

describe("method", () => {
  it(
    "generator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/method/generator.js"),
  );
  it(
    "number.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/method/number.js"),
  );
  it(
    "string.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/method/string.js"),
  );
  it(
    "super.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/method/super.js"),
  );
  it(
    "symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/method/symbol.js"),
  );
});

describe("property", () => {
  it(
    "number-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/object/property/number-duplicates.js"),
  );
});
