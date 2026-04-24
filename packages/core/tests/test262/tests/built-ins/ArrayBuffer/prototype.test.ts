import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/prototype/Symbol.toStringTag.js"),
  );
  describe("byteLength", () => {
    it(
      "detached-buffer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/detached-buffer.js"),
    );
    it(
      "invoked-as-accessor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/invoked-as-accessor.js"),
    );
    it(
      "invoked-as-func.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/invoked-as-func.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/name.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/prop-desc.js"),
    );
    it(
      "return-bytelength.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/return-bytelength.js"),
    );
    it(
      "this-has-no-typedarrayname-internal.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/byteLength/this-has-no-typedarrayname-internal.js",
      ),
    );
    it(
      "this-is-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/this-is-not-object.js"),
    );
    it(
      "this-is-sharedarraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/byteLength/this-is-sharedarraybuffer.js"),
    );
  });
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ArrayBuffer/prototype/constructor.js"),
  );
  describe("detached", () => {
    it.skip("detached-buffer-resizable.js", () => {
      /* Ignored Test */
    });
    it(
      "detached-buffer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/detached-buffer.js"),
    );
    it(
      "invoked-as-accessor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/invoked-as-accessor.js"),
    );
    it(
      "invoked-as-func.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/invoked-as-func.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/name.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/prop-desc.js"),
    );
    it(
      "this-has-no-arraybufferdata-internal.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/detached/this-has-no-arraybufferdata-internal.js",
      ),
    );
    it(
      "this-is-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/this-is-not-object.js"),
    );
    it(
      "this-is-sharedarraybuffer-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/detached/this-is-sharedarraybuffer-resizable.js",
      ),
    );
    it(
      "this-is-sharedarraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/detached/this-is-sharedarraybuffer.js"),
    );
  });
  describe("maxByteLength", () => {
    it.skip("detached-buffer.js", () => {
      /* Ignored Test */
    });
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
    it.skip("return-maxbytelength-non-resizable.js", () => {
      /* Ignored Test */
    });
    it.skip("return-maxbytelength-resizable.js", () => {
      /* Ignored Test */
    });
    it.skip("this-has-no-arraybufferdata-internal.js", () => {
      /* Ignored Test */
    });
    it.skip("this-is-not-object.js", () => {
      /* Ignored Test */
    });
    it.skip("this-is-sharedarraybuffer.js", () => {
      /* Ignored Test */
    });
  });
  describe("resizable", () => {
    it.skip("detached-buffer.js", () => {
      /* Ignored Test */
    });
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
    it.skip("return-resizable.js", () => {
      /* Ignored Test */
    });
    it.skip("this-has-no-arraybufferdata-internal.js", () => {
      /* Ignored Test */
    });
    it.skip("this-is-not-object.js", () => {
      /* Ignored Test */
    });
    it.skip("this-is-sharedarraybuffer.js", () => {
      /* Ignored Test */
    });
  });
  describe("resize", () => {
    it.skip("coerced-new-length-detach.js", () => {
      /* Ignored Test */
    });
    it.skip("descriptor.js", () => {
      /* Ignored Test */
    });
    it.skip("extensible.js", () => {
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
    it.skip("resize-grow.js", () => {
      /* Ignored Test */
    });
    it.skip("resize-same-size-zero-explicit.js", () => {
      /* Ignored Test */
    });
    it.skip("resize-same-size-zero-implicit.js", () => {
      /* Ignored Test */
    });
    it.skip("resize-same-size.js", () => {
      /* Ignored Test */
    });
    it.skip("resize-shrink-zero-explicit.js", () => {
      /* Ignored Test */
    });
    it.skip("resize-shrink-zero-implicit.js", () => {
      /* Ignored Test */
    });
    it.skip("resize-shrink.js", () => {
      /* Ignored Test */
    });
    it.skip("this-is-detached.js", () => {
      /* Ignored Test */
    });
    it.skip("this-is-immutable-arraybuffer-object.js", () => {
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
  describe("slice", () => {
    it(
      "context-is-not-arraybuffer-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/slice/context-is-not-arraybuffer-object.js",
      ),
    );
    it(
      "context-is-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/context-is-not-object.js"),
    );
    it(
      "descriptor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/descriptor.js"),
    );
    it(
      "end-default-if-absent.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/end-default-if-absent.js"),
    );
    it(
      "end-default-if-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/end-default-if-undefined.js"),
    );
    it(
      "end-exceeds-length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/end-exceeds-length.js"),
    );
    it(
      "extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/extensible.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/name.js"),
    );
    it(
      "negative-end.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/negative-end.js"),
    );
    it(
      "negative-start.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/negative-start.js"),
    );
    it(
      "nonconstructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/nonconstructor.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/not-a-constructor.js"),
    );
    it(
      "number-conversion.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/number-conversion.js"),
    );
    it(
      "species-constructor-is-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/slice/species-constructor-is-not-object.js",
      ),
    );
    it(
      "species-constructor-is-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/slice/species-constructor-is-undefined.js",
      ),
    );
    it(
      "species-is-not-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/species-is-not-constructor.js"),
    );
    it(
      "species-is-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/species-is-not-object.js"),
    );
    it(
      "species-is-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/species-is-null.js"),
    );
    it(
      "species-is-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/species-is-undefined.js"),
    );
    it(
      "species-returns-immutable-arraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/slice/species-returns-immutable-arraybuffer.js",
      ),
    );
    it(
      "species-returns-larger-arraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/slice/species-returns-larger-arraybuffer.js",
      ),
    );
    it(
      "species-returns-not-arraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/species-returns-not-arraybuffer.js"),
    );
    it(
      "species-returns-same-arraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/slice/species-returns-same-arraybuffer.js",
      ),
    );
    it(
      "species-returns-smaller-arraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/slice/species-returns-smaller-arraybuffer.js",
      ),
    );
    it(
      "species.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/species.js"),
    );
    it(
      "start-default-if-absent.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/start-default-if-absent.js"),
    );
    it(
      "start-default-if-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/start-default-if-undefined.js"),
    );
    it(
      "start-exceeds-end.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/start-exceeds-end.js"),
    );
    it(
      "start-exceeds-length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/start-exceeds-length.js"),
    );
    it(
      "this-is-sharedarraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/this-is-sharedarraybuffer.js"),
    );
    it(
      "tointeger-conversion-end.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/tointeger-conversion-end.js"),
    );
    it(
      "tointeger-conversion-start.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/slice/tointeger-conversion-start.js"),
    );
  });
  describe("transfer", () => {
    it(
      "descriptor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/descriptor.js"),
    );
    it(
      "extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/extensible.js"),
    );
    it(
      "from-fixed-to-larger-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transfer/from-fixed-to-larger-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-larger.js", () => {
      /* Ignored Test */
    });
    it(
      "from-fixed-to-same-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transfer/from-fixed-to-same-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-same.js", () => {
      /* Ignored Test */
    });
    it(
      "from-fixed-to-smaller-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transfer/from-fixed-to-smaller-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-smaller.js", () => {
      /* Ignored Test */
    });
    it(
      "from-fixed-to-zero-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transfer/from-fixed-to-zero-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-zero.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-larger.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-same.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-smaller.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-zero.js", () => {
      /* Ignored Test */
    });
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/name.js"),
    );
    it(
      "new-length-excessive.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/new-length-excessive.js"),
    );
    it(
      "new-length-non-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/new-length-non-number.js"),
    );
    it(
      "nonconstructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/nonconstructor.js"),
    );
    it(
      "this-is-detached.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/this-is-detached.js"),
    );
    it(
      "this-is-immutable-arraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transfer/this-is-immutable-arraybuffer.js",
      ),
    );
    it(
      "this-is-not-arraybuffer-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transfer/this-is-not-arraybuffer-object.js",
      ),
    );
    it(
      "this-is-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/this-is-not-object.js"),
    );
    it(
      "this-is-sharedarraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transfer/this-is-sharedarraybuffer.js"),
    );
  });
  describe("transferToFixedLength", () => {
    it(
      "descriptor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transferToFixedLength/descriptor.js"),
    );
    it(
      "extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transferToFixedLength/extensible.js"),
    );
    it(
      "from-fixed-to-larger-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/from-fixed-to-larger-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-larger.js", () => {
      /* Ignored Test */
    });
    it(
      "from-fixed-to-same-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/from-fixed-to-same-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-same.js", () => {
      /* Ignored Test */
    });
    it(
      "from-fixed-to-smaller-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/from-fixed-to-smaller-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-smaller.js", () => {
      /* Ignored Test */
    });
    it(
      "from-fixed-to-zero-no-resizable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/from-fixed-to-zero-no-resizable.js",
      ),
    );
    it.skip("from-fixed-to-zero.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-larger.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-same.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-smaller.js", () => {
      /* Ignored Test */
    });
    it.skip("from-resizable-to-zero.js", () => {
      /* Ignored Test */
    });
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transferToFixedLength/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transferToFixedLength/name.js"),
    );
    it(
      "new-length-excessive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/new-length-excessive.js",
      ),
    );
    it(
      "new-length-non-number.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/new-length-non-number.js",
      ),
    );
    it(
      "nonconstructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/ArrayBuffer/prototype/transferToFixedLength/nonconstructor.js"),
    );
    it(
      "this-is-detached.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/this-is-detached.js",
      ),
    );
    it(
      "this-is-immutable-arraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/this-is-immutable-arraybuffer.js",
      ),
    );
    it(
      "this-is-not-arraybuffer-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/this-is-not-arraybuffer-object.js",
      ),
    );
    it(
      "this-is-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/this-is-not-object.js",
      ),
    );
    it(
      "this-is-sharedarraybuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/ArrayBuffer/prototype/transferToFixedLength/this-is-sharedarraybuffer.js",
      ),
    );
  });
});
