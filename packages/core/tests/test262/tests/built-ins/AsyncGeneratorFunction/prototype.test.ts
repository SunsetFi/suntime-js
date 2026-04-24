import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorFunction/prototype/Symbol.toStringTag.js"),
  );
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorFunction/prototype/constructor.js"),
  );
  it(
    "extensibility.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorFunction/prototype/extensibility.js"),
  );
  it(
    "not-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorFunction/prototype/not-callable.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorFunction/prototype/prop-desc.js"),
  );
  it(
    "prototype.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AsyncGeneratorFunction/prototype/prototype.js"),
  );
});
