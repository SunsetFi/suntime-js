import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isView", () => {
  it(
    "arg-has-no-viewedarraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/arg-has-no-viewedarraybuffer.js"),
  );
  it(
    "arg-is-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/arg-is-arraybuffer.js"),
  );
  it(
    "arg-is-dataview-buffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview-buffer.js"),
  );
  it(
    "arg-is-dataview-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview-constructor.js"),
  );
  it(
    "arg-is-dataview-subclass-instance.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview-subclass-instance.js"),
  );
  it(
    "arg-is-dataview.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview.js"),
  );
  it(
    "arg-is-not-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/arg-is-not-object.js"),
  );
  it.skip("arg-is-typedarray-buffer.js", () => {
    /* Ignored Test */
  });
  it.skip("arg-is-typedarray-constructor.js", () => {
    /* Ignored Test */
  });
  it.skip("arg-is-typedarray-subclass-instance.js", () => {
    /* Ignored Test */
  });
  it.skip("arg-is-typedarray.js", () => {
    /* Ignored Test */
  });
  it.skip("invoked-as-a-fn.js", () => {
    /* Ignored Test */
  });
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/name.js"),
  );
  it(
    "no-arg.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/no-arg.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/isView/prop-desc.js"),
  );
});
