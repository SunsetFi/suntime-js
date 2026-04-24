import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("and", () => {
  it.skip("bad-range.js", () => {
    /* Ignored Test */
  });
  describe("bigint", () => {
    it.skip("bad-range.js", () => {
      /* Ignored Test */
    });
    it.skip("good-views.js", () => {
      /* Ignored Test */
    });
    it.skip("non-shared-bufferdata.js", () => {
      /* Ignored Test */
    });
  });
  it(
    "descriptor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Atomics/and/descriptor.js"),
  );
  it.skip("expected-return-value.js", () => {
    /* Ignored Test */
  });
  it.skip("good-views.js", () => {
    /* Ignored Test */
  });
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Atomics/and/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Atomics/and/name.js"));
  it.skip("non-shared-bufferdata.js", () => {
    /* Ignored Test */
  });
  it.skip("non-shared-int-views-throws.js", () => {
    /* Ignored Test */
  });
  it.skip("non-views.js", () => {
    /* Ignored Test */
  });
  it.skip("not-a-constructor.js", () => {
    /* Ignored Test */
  });
  it.skip("validate-arraytype-before-index-coercion.js", () => {
    /* Ignored Test */
  });
  it.skip("validate-arraytype-before-value-coercion.js", () => {
    /* Ignored Test */
  });
});
