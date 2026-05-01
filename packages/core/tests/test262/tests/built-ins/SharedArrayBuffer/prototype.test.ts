import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Symbol.toStringTag.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/prototype/Symbol.toStringTag.js"),
);

describe("byteLength", () => {
  it(
    "invoked-as-accessor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/invoked-as-accessor.js"),
  );
  it(
    "invoked-as-func.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/invoked-as-func.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/prop-desc.js"),
  );
  it(
    "return-bytelength.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/return-bytelength.js"),
  );
  it(
    "this-has-no-typedarrayname-internal.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/byteLength/this-has-no-typedarrayname-internal.js",
    ),
  );
  it(
    "this-is-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/this-is-arraybuffer.js"),
  );
  it(
    "this-is-not-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/byteLength/this-is-not-object.js"),
  );
});

it(
  "constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/prototype/constructor.js"),
);

describe("grow", () => {
  it.skip("descriptor.js", () => {
    /* Ignored Test */
  });
  it.skip("extensible.js", () => {
    /* Ignored Test */
  });
  it.skip("grow-larger-size.js", () => {
    /* Ignored Test */
  });
  it.skip("grow-same-size.js", () => {
    /* Ignored Test */
  });
  it.skip("grow-smaller-size.js", () => {
    /* Ignored Test */
  });
  it.skip("length.js", () => {
    /* Ignored Test */
  });
  it.skip("name.js", () => {
    /* Ignored Test */
  });
  it.skip("new-length-excessive.js", () => {
    /* Ignored Test */
  });
  it.skip("new-length-negative.js", () => {
    /* Ignored Test */
  });
  it.skip("new-length-non-number.js", () => {
    /* Ignored Test */
  });
  it.skip("nonconstructor.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-not-arraybuffer-object.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-not-object.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-not-resizable-arraybuffer-object.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-sharedarraybuffer.js", () => {
    /* Ignored Test */
  });
});

describe("growable", () => {
  it.skip("invoked-as-accessor.js", () => {
    /* Ignored Test */
  });
  it.skip("invoked-as-func.js", () => {
    /* Ignored Test */
  });
  it.skip("length.js", () => {
    /* Ignored Test */
  });
  it.skip("name.js", () => {
    /* Ignored Test */
  });
  it.skip("prop-desc.js", () => {
    /* Ignored Test */
  });
  it.skip("return-growable.js", () => {
    /* Ignored Test */
  });
  it.skip("this-has-no-arraybufferdata-internal.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-arraybuffer.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-not-object.js", () => {
    /* Ignored Test */
  });
});

describe("maxByteLength", () => {
  it.skip("invoked-as-accessor.js", () => {
    /* Ignored Test */
  });
  it.skip("invoked-as-func.js", () => {
    /* Ignored Test */
  });
  it.skip("length.js", () => {
    /* Ignored Test */
  });
  it.skip("name.js", () => {
    /* Ignored Test */
  });
  it.skip("prop-desc.js", () => {
    /* Ignored Test */
  });
  it.skip("return-maxbytelength-growable.js", () => {
    /* Ignored Test */
  });
  it.skip("return-maxbytelength-non-growable.js", () => {
    /* Ignored Test */
  });
  it.skip("this-has-no-arraybufferdata-internal.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-arraybuffer.js", () => {
    /* Ignored Test */
  });
  it.skip("this-is-not-object.js", () => {
    /* Ignored Test */
  });
});

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/prototype/prop-desc.js"),
);

describe("slice", () => {
  it(
    "context-is-not-arraybuffer-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/slice/context-is-not-arraybuffer-object.js",
    ),
  );
  it(
    "context-is-not-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/context-is-not-object.js"),
  );
  it(
    "descriptor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/descriptor.js"),
  );
  it(
    "end-default-if-absent.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/end-default-if-absent.js"),
  );
  it(
    "end-default-if-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/end-default-if-undefined.js"),
  );
  it(
    "end-exceeds-length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/end-exceeds-length.js"),
  );
  it(
    "extensible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/extensible.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/name.js"),
  );
  it(
    "negative-end.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/negative-end.js"),
  );
  it(
    "negative-start.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/negative-start.js"),
  );
  it(
    "nonconstructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/nonconstructor.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/not-a-constructor.js"),
  );
  it(
    "number-conversion.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/number-conversion.js"),
  );
  it(
    "species-constructor-is-not-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/slice/species-constructor-is-not-object.js",
    ),
  );
  it(
    "species-constructor-is-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/slice/species-constructor-is-undefined.js",
    ),
  );
  it(
    "species-is-not-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/species-is-not-constructor.js"),
  );
  it(
    "species-is-not-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/species-is-not-object.js"),
  );
  it(
    "species-is-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/species-is-null.js"),
  );
  it(
    "species-is-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/species-is-undefined.js"),
  );
  it(
    "species-returns-larger-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/slice/species-returns-larger-arraybuffer.js",
    ),
  );
  it(
    "species-returns-not-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/slice/species-returns-not-arraybuffer.js",
    ),
  );
  it(
    "species-returns-same-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/slice/species-returns-same-arraybuffer.js",
    ),
  );
  it(
    "species-returns-smaller-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/SharedArrayBuffer/prototype/slice/species-returns-smaller-arraybuffer.js",
    ),
  );
  it(
    "species.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/species.js"),
  );
  it(
    "start-default-if-absent.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/start-default-if-absent.js"),
  );
  it(
    "start-default-if-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/start-default-if-undefined.js"),
  );
  it(
    "start-exceeds-end.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/start-exceeds-end.js"),
  );
  it(
    "start-exceeds-length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/start-exceeds-length.js"),
  );
  it(
    "this-is-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/this-is-arraybuffer.js"),
  );
  it(
    "tointeger-conversion-end.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/tointeger-conversion-end.js"),
  );
  it(
    "tointeger-conversion-start.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/SharedArrayBuffer/prototype/slice/tointeger-conversion-start.js"),
  );
});
