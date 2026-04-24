import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("from", () => {
  it(
    "Array.from-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/Array.from-descriptor.js"),
  );
  it(
    "Array.from-name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/Array.from-name.js"),
  );
  it(
    "Array.from_arity.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/Array.from_arity.js"),
  );
  it(
    "Array.from_forwards-length-for-array-likes.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/Array.from_forwards-length-for-array-likes.js"),
  );
  it(
    "array-like-has-length-but-no-indexes-with-values.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/array-like-has-length-but-no-indexes-with-values.js"),
  );
  it(
    "calling-from-valid-1-noStrict.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/calling-from-valid-1-noStrict.js"),
  );
  it(
    "calling-from-valid-1-onlyStrict.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/calling-from-valid-1-onlyStrict.js"),
  );
  it(
    "calling-from-valid-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/calling-from-valid-2.js"),
  );
  it(
    "elements-added-after.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/elements-added-after.js"),
  );
  it(
    "elements-deleted-after.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/elements-deleted-after.js"),
  );
  it(
    "elements-updated-after.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/elements-updated-after.js"),
  );
  it(
    "from-array.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/from-array.js"),
  );
  it(
    "from-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/from-string.js"),
  );
  it(
    "get-iter-method-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/get-iter-method-err.js"),
  );
  it(
    "items-is-arraybuffer.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Array/from/items-is-arraybuffer.js"),
  );
  it(
    "items-is-null-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/items-is-null-throws.js"),
  );
  it(
    "iter-adv-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-adv-err.js"),
  );
  it(
    "iter-cstm-ctor-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-cstm-ctor-err.js"),
  );
  it(
    "iter-cstm-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Array/from/iter-cstm-ctor.js"),
  );
  it(
    "iter-get-iter-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-get-iter-err.js"),
  );
  it(
    "iter-get-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-get-iter-val-err.js"),
  );
  it(
    "iter-map-fn-args.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-map-fn-args.js"),
  );
  it(
    "iter-map-fn-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-map-fn-err.js"),
  );
  it(
    "iter-map-fn-return.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-map-fn-return.js"),
  );
  it(
    "iter-map-fn-this-arg.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-map-fn-this-arg.js"),
  );
  it(
    "iter-map-fn-this-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-map-fn-this-non-strict.js"),
  );
  it(
    "iter-map-fn-this-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-map-fn-this-strict.js"),
  );
  it(
    "iter-set-elem-prop-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-set-elem-prop-err.js"),
  );
  it(
    "iter-set-elem-prop-non-writable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-set-elem-prop-non-writable.js"),
  );
  it(
    "iter-set-elem-prop.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-set-elem-prop.js"),
  );
  it(
    "iter-set-length-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-set-length-err.js"),
  );
  it(
    "iter-set-length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/iter-set-length.js"),
  );
  it(
    "mapfn-is-not-callable-typeerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/mapfn-is-not-callable-typeerror.js"),
  );
  it(
    "mapfn-is-symbol-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/mapfn-is-symbol-throws.js"),
  );
  it(
    "mapfn-throws-exception.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/mapfn-throws-exception.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/not-a-constructor.js"),
  );
  it(
    "proto-from-ctor-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Array/from/proto-from-ctor-realm.js"),
  );
  it(
    "source-array-boundary.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-array-boundary.js"),
  );
  it(
    "source-object-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Array/from/source-object-constructor.js"),
  );
  it(
    "source-object-iterator-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-object-iterator-1.js"),
  );
  it(
    "source-object-iterator-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-object-iterator-2.js"),
  );
  it(
    "source-object-length-set-elem-prop-err.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-object-length-set-elem-prop-err.js"),
  );
  it(
    "source-object-length-set-elem-prop-non-writable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-object-length-set-elem-prop-non-writable.js"),
  );
  it(
    "source-object-length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-object-length.js"),
  );
  it(
    "source-object-missing.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-object-missing.js"),
  );
  it(
    "source-object-without.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/source-object-without.js"),
  );
  it(
    "this-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Array/from/this-null.js"),
  );
});
