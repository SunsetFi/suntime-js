import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Symbol.species", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/TypedArray/Symbol.species/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/TypedArray/Symbol.species/name.js"),
  );
  it.skip("prop-desc.js", () => {
    /* Ignored Test */
  });
  it.skip("result.js", () => {
    /* Ignored Test */
  });
});
