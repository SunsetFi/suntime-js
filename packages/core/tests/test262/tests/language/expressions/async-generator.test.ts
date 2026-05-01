import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "array-destructuring-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/array-destructuring-param-strict-body.js",
  ),
);

it(
  "await-as-binding-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/await-as-binding-identifier-escaped.js"),
);

it(
  "await-as-binding-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/await-as-binding-identifier.js"),
);

it(
  "await-as-identifier-reference-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/await-as-identifier-reference-escaped.js",
  ),
);

it(
  "await-as-identifier-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/await-as-identifier-reference.js"),
);

it(
  "await-as-label-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/await-as-label-identifier-escaped.js"),
);

it(
  "await-as-label-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/await-as-label-identifier.js"),
);

it(
  "default-proto.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/default-proto.js"),
);

it(
  "dflt-params-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-abrupt.js"),
);

it(
  "dflt-params-arg-val-not-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-arg-val-not-undefined.js"),
);

it(
  "dflt-params-arg-val-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-arg-val-undefined.js"),
);

it(
  "dflt-params-duplicates.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-duplicates.js"),
);

it(
  "dflt-params-ref-later.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-ref-later.js"),
);

it(
  "dflt-params-ref-prior.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-ref-prior.js"),
);

it(
  "dflt-params-ref-self.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-ref-self.js"),
);

it(
  "dflt-params-rest.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-rest.js"),
);

it(
  "dflt-params-trailing-comma.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/dflt-params-trailing-comma.js"),
);

describe("dstr", () => {
  it(
    "ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-init-iter-close.js"),
  );
  it(
    "ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-init-iter-get-err.js"),
  );
  it(
    "ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-init-iter-no-close.js"),
  );
  it(
    "ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-name-iter-val.js"),
  );
  it(
    "ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-ary-elem-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-ary-elem-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-ary-elision-init.js",
    ),
  );
  it(
    "ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-ary-elision-iter.js",
    ),
  );
  it(
    "ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-ary-empty-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-ary-empty-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-ary-rest-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-ary-rest-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-ary-val-null.js"),
  );
  it(
    "ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-exhausted.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-class.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-cover.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-fn.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-gen.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-hole.js"),
  );
  it(
    "ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-skipped.js"),
  );
  it(
    "ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-throws.js"),
  );
  it(
    "ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-undef.js"),
  );
  it(
    "ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-init-unresolvable.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-iter-complete.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-id-iter-done.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-iter-step-err.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-id-iter-val-err.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-id-iter-val.js"),
  );
  it(
    "ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-obj-id-init.js"),
  );
  it(
    "ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-obj-id.js"),
  );
  it(
    "ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-elem-obj-prop-id-init.js",
    ),
  );
  it(
    "ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-obj-prop-id.js"),
  );
  it(
    "ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-obj-val-null.js"),
  );
  it(
    "ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elem-obj-val-undef.js"),
  );
  it(
    "ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elision-exhausted.js"),
  );
  it(
    "ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elision-step-err.js"),
  );
  it(
    "ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-elision.js"),
  );
  it(
    "ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-empty.js"),
  );
  it(
    "ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-ary-elision.js"),
  );
  it(
    "ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-id-direct.js"),
  );
  it(
    "ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-rest-id-elision-next-err.js",
    ),
  );
  it(
    "ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-id-elision.js"),
  );
  it(
    "ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-id-exhausted.js"),
  );
  it(
    "ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/ary-ptrn-rest-id-iter-step-err.js",
    ),
  );
  it(
    "ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-id-iter-val-err.js"),
  );
  it(
    "ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-id.js"),
  );
  it(
    "ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-init-ary.js"),
  );
  it(
    "ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-init-id.js"),
  );
  it(
    "ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-init-obj.js"),
  );
  it(
    "ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-not-final-ary.js"),
  );
  it(
    "ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-not-final-id.js"),
  );
  it(
    "ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-not-final-obj.js"),
  );
  it(
    "ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-obj-id.js"),
  );
  it(
    "ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/ary-ptrn-rest-obj-prop-id.js"),
  );
  it(
    "dflt-ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-init-iter-close.js"),
  );
  it(
    "dflt-ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "dflt-ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-init-iter-get-err.js"),
  );
  it(
    "dflt-ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-init-iter-no-close.js"),
  );
  it(
    "dflt-ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-name-iter-val.js"),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-elem-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-elision-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-empty-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-rest-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-ary-val-null.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-hole.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-skipped.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-throws.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-undef.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-complete.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-done.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-val.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-obj-id-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-obj-id.js"),
  );
  it(
    "dflt-ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-obj-prop-id.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-obj-val-null.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elem-obj-val-undef.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elision-exhausted.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-elision-step-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-elision.js"),
  );
  it(
    "dflt-ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-empty.js"),
  );
  it(
    "dflt-ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "dflt-ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-ary-elision.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "dflt-ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "dflt-ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-id-direct.js"),
  );
  it(
    "dflt-ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-id-elision.js"),
  );
  it(
    "dflt-ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-id-exhausted.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-id.js"),
  );
  it(
    "dflt-ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-init-ary.js"),
  );
  it(
    "dflt-ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-init-id.js"),
  );
  it(
    "dflt-ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-init-obj.js"),
  );
  it(
    "dflt-ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-not-final-ary.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-not-final-id.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-not-final-obj.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-obj-id.js"),
  );
  it(
    "dflt-ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-ary-ptrn-rest-obj-prop-id.js",
    ),
  );
  it(
    "dflt-obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-init-null.js"),
  );
  it(
    "dflt-obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-init-undefined.js"),
  );
  it(
    "dflt-obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-empty.js"),
  );
  it(
    "dflt-obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-get-value-err.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-class.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-skipped.js"),
  );
  it(
    "dflt-obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-throws.js"),
  );
  it(
    "dflt-obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-init-unresolvable.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-id-trailing-comma.js",
    ),
  );
  it(
    "dflt-obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-list-err.js"),
  );
  it(
    "dflt-obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-ary-init.js"),
  );
  it(
    "dflt-obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-ary-value-null.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-ary.js"),
  );
  it(
    "dflt-obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-eval-err.js"),
  );
  it(
    "dflt-obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-id-get-value-err.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-id-init-skipped.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-id-init-throws.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-id-init.js"),
  );
  it(
    "dflt-obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-id.js"),
  );
  it(
    "dflt-obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-obj-init.js"),
  );
  it(
    "dflt-obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-obj-value-null.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-obj-value-undef.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-prop-obj.js"),
  );
  it(
    "dflt-obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-rest-getter.js"),
  );
  it(
    "dflt-obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js",
    ),
  );
  it(
    "dflt-obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/dflt-obj-ptrn-rest-val-obj.js"),
  );
  it(
    "named-ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-init-iter-close.js"),
  );
  it(
    "named-ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "named-ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-init-iter-get-err.js"),
  );
  it(
    "named-ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-init-iter-no-close.js"),
  );
  it(
    "named-ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-name-iter-val.js"),
  );
  it(
    "named-ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-elem-init.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-elem-iter.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-elision-init.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-elision-iter.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-empty-init.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-empty-iter.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-rest-init.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-rest-iter.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-ary-val-null.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-exhausted.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-fn-name-class.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-fn-name-cover.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-fn-name-fn.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-fn-name-gen.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-hole.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-skipped.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-throws.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-undef.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-init-unresolvable.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-iter-complete.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-iter-done.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-iter-step-err.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-iter-val-err.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-id-iter-val.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-obj-id-init.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-elem-obj-id.js"),
  );
  it(
    "named-ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-obj-prop-id-init.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-obj-prop-id.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-obj-val-null.js",
    ),
  );
  it(
    "named-ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elem-obj-val-undef.js",
    ),
  );
  it(
    "named-ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elision-exhausted.js",
    ),
  );
  it(
    "named-ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-elision-step-err.js",
    ),
  );
  it(
    "named-ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-elision.js"),
  );
  it(
    "named-ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-empty.js"),
  );
  it(
    "named-ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "named-ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-ary-elision.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "named-ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "named-ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-id-direct.js"),
  );
  it(
    "named-ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-id-elision-next-err.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-id-elision.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-id-exhausted.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-id-iter-step-err.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-id-iter-val-err.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-id.js"),
  );
  it(
    "named-ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-init-ary.js"),
  );
  it(
    "named-ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-init-id.js"),
  );
  it(
    "named-ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-init-obj.js"),
  );
  it(
    "named-ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-not-final-ary.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-not-final-id.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-not-final-obj.js",
    ),
  );
  it(
    "named-ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-ary-ptrn-rest-obj-id.js"),
  );
  it(
    "named-ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-ary-ptrn-rest-obj-prop-id.js",
    ),
  );
  it(
    "named-dflt-ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-init-iter-close.js",
    ),
  );
  it(
    "named-dflt-ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "named-dflt-ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-init-iter-get-err.js",
    ),
  );
  it(
    "named-dflt-ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-init-iter-no-close.js",
    ),
  );
  it(
    "named-dflt-ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-ary-name-iter-val.js"),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-elem-init.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-elem-iter.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-elision-init.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-elision-iter.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-empty-init.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-empty-iter.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-rest-init.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-rest-iter.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-ary-val-null.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-exhausted.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-hole.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-skipped.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-throws.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-undef.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-init-unresolvable.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-iter-complete.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-iter-done.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-iter-step-err.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-iter-val-err.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-id-iter-val.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-obj-id-init.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-obj-id.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-obj-prop-id-init.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-obj-prop-id.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-obj-val-null.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elem-obj-val-undef.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elision-exhausted.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elision-step-err.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-ary-ptrn-elision.js"),
  );
  it(
    "named-dflt-ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-ary-ptrn-empty.js"),
  );
  it(
    "named-dflt-ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-ary-elem.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-ary-elision.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-ary-empty.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-ary-rest.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-id-direct.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-id-elision-next-err.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-id-elision.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-id-exhausted.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-id-iter-step-err.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-id-iter-val-err.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-id.js"),
  );
  it(
    "named-dflt-ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-init-ary.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-init-id.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-init-obj.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-not-final-ary.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-not-final-id.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-not-final-obj.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-obj-id.js",
    ),
  );
  it(
    "named-dflt-ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-ary-ptrn-rest-obj-prop-id.js",
    ),
  );
  it(
    "named-dflt-obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-obj-init-null.js"),
  );
  it(
    "named-dflt-obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-obj-init-undefined.js"),
  );
  it(
    "named-dflt-obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-obj-ptrn-empty.js"),
  );
  it(
    "named-dflt-obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-get-value-err.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-fn-name-class.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-fn-name-cover.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-fn-name-fn.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-fn-name-gen.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-skipped.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-throws.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-init-unresolvable.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-id-trailing-comma.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-obj-ptrn-list-err.js"),
  );
  it(
    "named-dflt-obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-ary-init.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-ary-trailing-comma.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-ary-value-null.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-ary.js"),
  );
  it(
    "named-dflt-obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-eval-err.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-id-get-value-err.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-id-init-skipped.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-id-init-throws.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-id-init-unresolvable.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-id-init.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-id-trailing-comma.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-id.js"),
  );
  it(
    "named-dflt-obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-obj-init.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-obj-value-null.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-obj-value-undef.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-dflt-obj-ptrn-prop-obj.js"),
  );
  it(
    "named-dflt-obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-rest-getter.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-rest-skip-non-enumerable.js",
    ),
  );
  it(
    "named-dflt-obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-dflt-obj-ptrn-rest-val-obj.js",
    ),
  );
  it(
    "named-obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-init-null.js"),
  );
  it(
    "named-obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-init-undefined.js"),
  );
  it(
    "named-obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-empty.js"),
  );
  it(
    "named-obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-get-value-err.js",
    ),
  );
  it(
    "named-obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "named-obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-init-fn-name-class.js",
    ),
  );
  it(
    "named-obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-init-fn-name-cover.js",
    ),
  );
  it(
    "named-obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-init-fn-name-fn.js",
    ),
  );
  it(
    "named-obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-init-fn-name-gen.js",
    ),
  );
  it(
    "named-obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-init-skipped.js",
    ),
  );
  it(
    "named-obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-id-init-throws.js"),
  );
  it(
    "named-obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-init-unresolvable.js",
    ),
  );
  it(
    "named-obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-id-trailing-comma.js",
    ),
  );
  it(
    "named-obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-list-err.js"),
  );
  it(
    "named-obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-prop-ary-init.js"),
  );
  it(
    "named-obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-ary-trailing-comma.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-ary-value-null.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-prop-ary.js"),
  );
  it(
    "named-obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-prop-eval-err.js"),
  );
  it(
    "named-obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-id-get-value-err.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-id-init-skipped.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-id-init-throws.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-id-init-unresolvable.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-prop-id-init.js"),
  );
  it(
    "named-obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-id-trailing-comma.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-prop-id.js"),
  );
  it(
    "named-obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-prop-obj-init.js"),
  );
  it(
    "named-obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-obj-value-null.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-prop-obj-value-undef.js",
    ),
  );
  it(
    "named-obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-prop-obj.js"),
  );
  it(
    "named-obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-rest-getter.js"),
  );
  it(
    "named-obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/named-obj-ptrn-rest-skip-non-enumerable.js",
    ),
  );
  it(
    "named-obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/named-obj-ptrn-rest-val-obj.js"),
  );
  it(
    "obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-init-null.js"),
  );
  it(
    "obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-init-undefined.js"),
  );
  it(
    "obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-empty.js"),
  );
  it(
    "obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-id-get-value-err.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-id-init-fn-name-class.js",
    ),
  );
  it(
    "obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-id-init-fn-name-cover.js",
    ),
  );
  it(
    "obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-id-init-fn-name-fn.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-id-init-fn-name-gen.js"),
  );
  it(
    "obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-id-init-skipped.js"),
  );
  it(
    "obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-id-init-throws.js"),
  );
  it(
    "obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-id-init-unresolvable.js"),
  );
  it(
    "obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-id-trailing-comma.js"),
  );
  it(
    "obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-list-err.js"),
  );
  it(
    "obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-ary-init.js"),
  );
  it(
    "obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-prop-ary-trailing-comma.js",
    ),
  );
  it(
    "obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-ary-value-null.js"),
  );
  it(
    "obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-ary.js"),
  );
  it(
    "obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-eval-err.js"),
  );
  it(
    "obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-prop-id-get-value-err.js",
    ),
  );
  it(
    "obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-id-init-skipped.js"),
  );
  it(
    "obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-id-init-throws.js"),
  );
  it(
    "obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-prop-id-init-unresolvable.js",
    ),
  );
  it(
    "obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-id-init.js"),
  );
  it(
    "obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-prop-id-trailing-comma.js",
    ),
  );
  it(
    "obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-id.js"),
  );
  it(
    "obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-obj-init.js"),
  );
  it(
    "obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-obj-value-null.js"),
  );
  it(
    "obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-obj-value-undef.js"),
  );
  it(
    "obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-prop-obj.js"),
  );
  it(
    "obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-rest-getter.js"),
  );
  it(
    "obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-generator/dstr/obj-ptrn-rest-skip-non-enumerable.js",
    ),
  );
  it(
    "obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-generator/dstr/obj-ptrn-rest-val-obj.js"),
  );
});

it(
  "early-errors-expression-NSPL-with-USD.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-NSPL-with-USD.js",
  ),
);

it(
  "early-errors-expression-arguments-in-formal-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-arguments-in-formal-parameters.js",
  ),
);

it(
  "early-errors-expression-await-as-function-binding-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-await-as-function-binding-identifier.js",
  ),
);

it(
  "early-errors-expression-binding-identifier-arguments.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-binding-identifier-arguments.js",
  ),
);

it(
  "early-errors-expression-binding-identifier-eval.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-binding-identifier-eval.js",
  ),
);

it(
  "early-errors-expression-body-contains-super-call.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-body-contains-super-call.js",
  ),
);

it(
  "early-errors-expression-body-contains-super-property.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-body-contains-super-property.js",
  ),
);

it(
  "early-errors-expression-eval-in-formal-parameters.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-eval-in-formal-parameters.js",
  ),
);

it(
  "early-errors-expression-formals-body-duplicate-const.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-body-duplicate-const.js",
  ),
);

it(
  "early-errors-expression-formals-body-duplicate-let.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-body-duplicate-let.js",
  ),
);

it(
  "early-errors-expression-formals-contains-await-expr.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-contains-await-expr.js",
  ),
);

it(
  "early-errors-expression-formals-contains-await.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-contains-await.js",
  ),
);

it(
  "early-errors-expression-formals-contains-super-call.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-contains-super-call.js",
  ),
);

it(
  "early-errors-expression-formals-contains-super-property.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-contains-super-property.js",
  ),
);

it(
  "early-errors-expression-formals-contains-yield-expr.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-contains-yield-expr.js",
  ),
);

it(
  "early-errors-expression-formals-contains-yield.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-formals-contains-yield.js",
  ),
);

it(
  "early-errors-expression-label-name-await.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-label-name-await.js",
  ),
);

it(
  "early-errors-expression-label-name-yield.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-label-name-yield.js",
  ),
);

it(
  "early-errors-expression-not-simple-assignment-target.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-not-simple-assignment-target.js",
  ),
);

it(
  "early-errors-expression-yield-as-function-binding-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-yield-as-function-binding-identifier.js",
  ),
);

it(
  "early-errors-expression-yield-star-after-newline.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/early-errors-expression-yield-star-after-newline.js",
  ),
);

it(
  "escaped-async.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/escaped-async.js"),
);

it(
  "eval-body-proto-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/async-generator/eval-body-proto-realm.js"),
);

it(
  "eval-var-scope-syntax-err.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/eval-var-scope-syntax-err.js"),
);

it(
  "expression-await-as-yield-operand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/expression-await-as-yield-operand.js"),
);

it(
  "expression-await-promise-as-yield-operand.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/expression-await-promise-as-yield-operand.js",
  ),
);

it(
  "expression-await-thenable-as-yield-operand.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/expression-await-thenable-as-yield-operand.js",
  ),
);

it(
  "expression-yield-as-operand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/expression-yield-as-operand.js"),
);

it(
  "expression-yield-as-statement.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/expression-yield-as-statement.js"),
);

it(
  "expression-yield-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/expression-yield-newline.js"),
);

it(
  "expression-yield-star-before-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/expression-yield-star-before-newline.js"),
);

describe("forbidden-ext", () => {
  describe("b1", () => {
    it(
      "async-gen-func-expr-forbidden-ext-direct-access-prop-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b1/async-gen-func-expr-forbidden-ext-direct-access-prop-arguments.js",
      ),
    );
    it(
      "async-gen-func-expr-forbidden-ext-direct-access-prop-caller.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b1/async-gen-func-expr-forbidden-ext-direct-access-prop-caller.js",
      ),
    );
    it(
      "async-gen-named-func-expr-forbidden-ext-direct-access-prop-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b1/async-gen-named-func-expr-forbidden-ext-direct-access-prop-arguments.js",
      ),
    );
    it(
      "async-gen-named-func-expr-forbidden-ext-direct-access-prop-caller.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b1/async-gen-named-func-expr-forbidden-ext-direct-access-prop-caller.js",
      ),
    );
  });
  describe("b2", () => {
    it(
      "async-gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b2/async-gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js",
      ),
    );
    it(
      "async-gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b2/async-gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js",
      ),
    );
    it(
      "async-gen-func-expr-forbidden-ext-indirect-access-prop-caller.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b2/async-gen-func-expr-forbidden-ext-indirect-access-prop-caller.js",
      ),
    );
    it(
      "async-gen-named-func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b2/async-gen-named-func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js",
      ),
    );
    it(
      "async-gen-named-func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b2/async-gen-named-func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js",
      ),
    );
    it(
      "async-gen-named-func-expr-forbidden-ext-indirect-access-prop-caller.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/async-generator/forbidden-ext/b2/async-gen-named-func-expr-forbidden-ext-indirect-access-prop-caller.js",
      ),
    );
  });
});

it(
  "generator-created-after-decl-inst.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/generator-created-after-decl-inst.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/name.js"),
);

it(
  "named-array-destructuring-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-array-destructuring-param-strict-body.js",
  ),
);

it(
  "named-await-as-binding-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-await-as-binding-identifier-escaped.js",
  ),
);

it(
  "named-await-as-binding-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-await-as-binding-identifier.js"),
);

it(
  "named-await-as-identifier-reference-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-await-as-identifier-reference-escaped.js",
  ),
);

it(
  "named-await-as-identifier-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-await-as-identifier-reference.js"),
);

it(
  "named-await-as-label-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-await-as-label-identifier-escaped.js",
  ),
);

it(
  "named-await-as-label-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-await-as-label-identifier.js"),
);

it(
  "named-dflt-params-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-abrupt.js"),
);

it(
  "named-dflt-params-arg-val-not-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-dflt-params-arg-val-not-undefined.js",
  ),
);

it(
  "named-dflt-params-arg-val-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-arg-val-undefined.js"),
);

it(
  "named-dflt-params-duplicates.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-duplicates.js"),
);

it(
  "named-dflt-params-ref-later.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-ref-later.js"),
);

it(
  "named-dflt-params-ref-prior.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-ref-prior.js"),
);

it(
  "named-dflt-params-ref-self.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-ref-self.js"),
);

it(
  "named-dflt-params-rest.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-rest.js"),
);

it(
  "named-dflt-params-trailing-comma.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-dflt-params-trailing-comma.js"),
);

it(
  "named-eval-var-scope-syntax-err.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-eval-var-scope-syntax-err.js"),
);

it(
  "named-no-strict-reassign-fn-name-in-body-in-arrow.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-no-strict-reassign-fn-name-in-body-in-arrow.js",
  ),
);

it(
  "named-no-strict-reassign-fn-name-in-body-in-eval.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-no-strict-reassign-fn-name-in-body-in-eval.js",
  ),
);

it(
  "named-no-strict-reassign-fn-name-in-body.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-no-strict-reassign-fn-name-in-body.js",
  ),
);

it(
  "named-object-destructuring-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-object-destructuring-param-strict-body.js",
  ),
);

it(
  "named-params-trailing-comma-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-params-trailing-comma-multiple.js"),
);

it(
  "named-params-trailing-comma-single.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-params-trailing-comma-single.js"),
);

it(
  "named-rest-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-rest-param-strict-body.js"),
);

it(
  "named-rest-params-trailing-comma-early-error.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-rest-params-trailing-comma-early-error.js",
  ),
);

it(
  "named-strict-error-reassign-fn-name-in-body-in-arrow.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-strict-error-reassign-fn-name-in-body-in-arrow.js",
  ),
);

it(
  "named-strict-error-reassign-fn-name-in-body-in-eval.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-strict-error-reassign-fn-name-in-body-in-eval.js",
  ),
);

it(
  "named-strict-error-reassign-fn-name-in-body.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-strict-error-reassign-fn-name-in-body.js",
  ),
);

it(
  "named-unscopables-with-in-nested-fn.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-unscopables-with-in-nested-fn.js"),
);

it(
  "named-unscopables-with.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-unscopables-with.js"),
);

it(
  "named-yield-as-binding-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-as-binding-identifier-escaped.js",
  ),
);

it(
  "named-yield-as-binding-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-as-binding-identifier.js"),
);

it(
  "named-yield-as-identifier-reference-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-as-identifier-reference-escaped.js",
  ),
);

it(
  "named-yield-as-identifier-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-as-identifier-reference.js"),
);

it(
  "named-yield-as-label-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-as-label-identifier-escaped.js",
  ),
);

it(
  "named-yield-as-label-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-as-label-identifier.js"),
);

it(
  "named-yield-identifier-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-identifier-non-strict.js"),
);

it(
  "named-yield-identifier-spread-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-identifier-spread-non-strict.js",
  ),
);

it(
  "named-yield-identifier-spread-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-identifier-spread-strict.js"),
);

it(
  "named-yield-identifier-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-identifier-strict.js"),
);

it(
  "named-yield-promise-reject-next-catch.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-promise-reject-next-catch.js",
  ),
);

it(
  "named-yield-promise-reject-next-for-await-of-async-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-promise-reject-next-for-await-of-async-iterator.js",
  ),
);

it(
  "named-yield-promise-reject-next-for-await-of-sync-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-promise-reject-next-for-await-of-sync-iterator.js",
  ),
);

it(
  "named-yield-promise-reject-next-yield-star-async-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-promise-reject-next-yield-star-async-iterator.js",
  ),
);

it(
  "named-yield-promise-reject-next-yield-star-sync-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-promise-reject-next-yield-star-sync-iterator.js",
  ),
);

it(
  "named-yield-promise-reject-next.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-promise-reject-next.js"),
);

it(
  "named-yield-spread-arr-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-spread-arr-multiple.js"),
);

it(
  "named-yield-spread-arr-single.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-spread-arr-single.js"),
);

it(
  "named-yield-spread-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-spread-obj.js"),
);

it(
  "named-yield-star-async-next.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-async-next.js"),
);

it(
  "named-yield-star-async-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-async-return.js"),
);

it(
  "named-yield-star-async-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-async-throw.js"),
);

it(
  "named-yield-star-expr-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-expr-abrupt.js"),
);

it(
  "named-yield-star-getiter-async-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-get-abrupt.js",
  ),
);

it(
  "named-yield-star-getiter-async-not-callable-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-not-callable-boolean-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-not-callable-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-not-callable-number-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-not-callable-object-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-not-callable-object-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-not-callable-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-not-callable-string-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-not-callable-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-not-callable-symbol-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-null-sync-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-null-sync-get-abrupt.js",
  ),
);

it(
  "named-yield-star-getiter-async-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-returns-abrupt.js",
  ),
);

it(
  "named-yield-star-getiter-async-returns-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-returns-boolean-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-returns-null-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-returns-null-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-returns-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-returns-number-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-returns-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-returns-string-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-returns-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-returns-symbol-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-returns-undefined-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-returns-undefined-throw.js",
  ),
);

it(
  "named-yield-star-getiter-async-undefined-sync-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-async-undefined-sync-get-abrupt.js",
  ),
);

it(
  "named-yield-star-getiter-sync-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-get-abrupt.js",
  ),
);

it(
  "named-yield-star-getiter-sync-not-callable-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-not-callable-boolean-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-not-callable-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-not-callable-number-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-not-callable-object-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-not-callable-object-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-not-callable-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-not-callable-string-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-not-callable-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-not-callable-symbol-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-returns-abrupt.js",
  ),
);

it(
  "named-yield-star-getiter-sync-returns-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-returns-boolean-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-returns-null-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-returns-null-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-returns-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-returns-number-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-returns-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-returns-string-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-returns-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-returns-symbol-throw.js",
  ),
);

it(
  "named-yield-star-getiter-sync-returns-undefined-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-getiter-sync-returns-undefined-throw.js",
  ),
);

it(
  "named-yield-star-next-call-done-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-call-done-get-abrupt.js",
  ),
);

it(
  "named-yield-star-next-call-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-call-returns-abrupt.js",
  ),
);

it(
  "named-yield-star-next-call-value-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-call-value-get-abrupt.js",
  ),
);

it(
  "named-yield-star-next-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-next-get-abrupt.js"),
);

it(
  "named-yield-star-next-non-object-ignores-then.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-non-object-ignores-then.js",
  ),
);

it(
  "named-yield-star-next-not-callable-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-not-callable-boolean-throw.js",
  ),
);

it(
  "named-yield-star-next-not-callable-null-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-not-callable-null-throw.js",
  ),
);

it(
  "named-yield-star-next-not-callable-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-not-callable-number-throw.js",
  ),
);

it(
  "named-yield-star-next-not-callable-object-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-not-callable-object-throw.js",
  ),
);

it(
  "named-yield-star-next-not-callable-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-not-callable-string-throw.js",
  ),
);

it(
  "named-yield-star-next-not-callable-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-not-callable-symbol-throw.js",
  ),
);

it(
  "named-yield-star-next-not-callable-undefined-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-not-callable-undefined-throw.js",
  ),
);

it(
  "named-yield-star-next-then-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-get-abrupt.js",
  ),
);

it(
  "named-yield-star-next-then-non-callable-boolean-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-non-callable-boolean-fulfillpromise.js",
  ),
);

it(
  "named-yield-star-next-then-non-callable-null-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-non-callable-null-fulfillpromise.js",
  ),
);

it(
  "named-yield-star-next-then-non-callable-number-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-non-callable-number-fulfillpromise.js",
  ),
);

it(
  "named-yield-star-next-then-non-callable-object-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-non-callable-object-fulfillpromise.js",
  ),
);

it(
  "named-yield-star-next-then-non-callable-string-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-non-callable-string-fulfillpromise.js",
  ),
);

it(
  "named-yield-star-next-then-non-callable-symbol-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-non-callable-symbol-fulfillpromise.js",
  ),
);

it(
  "named-yield-star-next-then-non-callable-undefined-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-non-callable-undefined-fulfillpromise.js",
  ),
);

it(
  "named-yield-star-next-then-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/named-yield-star-next-then-returns-abrupt.js",
  ),
);

it(
  "named-yield-star-sync-next.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-sync-next.js"),
);

it(
  "named-yield-star-sync-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-sync-return.js"),
);

it(
  "named-yield-star-sync-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/named-yield-star-sync-throw.js"),
);

it(
  "object-destructuring-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/object-destructuring-param-strict-body.js",
  ),
);

it(
  "params-trailing-comma-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/params-trailing-comma-multiple.js"),
);

it(
  "params-trailing-comma-single.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/params-trailing-comma-single.js"),
);

it(
  "rest-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/rest-param-strict-body.js"),
);

it(
  "rest-params-trailing-comma-early-error.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/rest-params-trailing-comma-early-error.js",
  ),
);

it(
  "unscopables-with-in-nested-fn.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/unscopables-with-in-nested-fn.js"),
);

it(
  "unscopables-with.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/unscopables-with.js"),
);

it(
  "yield-as-binding-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-as-binding-identifier-escaped.js"),
);

it(
  "yield-as-binding-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-as-binding-identifier.js"),
);

it(
  "yield-as-identifier-reference-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-as-identifier-reference-escaped.js",
  ),
);

it(
  "yield-as-identifier-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-as-identifier-reference.js"),
);

it(
  "yield-as-label-identifier-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-as-label-identifier-escaped.js"),
);

it(
  "yield-as-label-identifier.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-as-label-identifier.js"),
);

it(
  "yield-identifier-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-identifier-non-strict.js"),
);

it(
  "yield-identifier-spread-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-identifier-spread-non-strict.js"),
);

it(
  "yield-identifier-spread-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-identifier-spread-strict.js"),
);

it(
  "yield-identifier-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-identifier-strict.js"),
);

it(
  "yield-promise-reject-next-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-promise-reject-next-catch.js"),
);

it(
  "yield-promise-reject-next-for-await-of-async-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-promise-reject-next-for-await-of-async-iterator.js",
  ),
);

it(
  "yield-promise-reject-next-for-await-of-sync-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-promise-reject-next-for-await-of-sync-iterator.js",
  ),
);

it(
  "yield-promise-reject-next-yield-star-async-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-promise-reject-next-yield-star-async-iterator.js",
  ),
);

it(
  "yield-promise-reject-next-yield-star-sync-iterator.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-promise-reject-next-yield-star-sync-iterator.js",
  ),
);

it(
  "yield-promise-reject-next.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-promise-reject-next.js"),
);

it(
  "yield-spread-arr-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-spread-arr-multiple.js"),
);

it(
  "yield-spread-arr-single.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-spread-arr-single.js"),
);

it(
  "yield-spread-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-spread-obj.js"),
);

it(
  "yield-star-async-next.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-async-next.js"),
);

it(
  "yield-star-async-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-async-return.js"),
);

it(
  "yield-star-async-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-async-throw.js"),
);

it(
  "yield-star-expr-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-expr-abrupt.js"),
);

it(
  "yield-star-getiter-async-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-getiter-async-get-abrupt.js"),
);

it(
  "yield-star-getiter-async-not-callable-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-not-callable-boolean-throw.js",
  ),
);

it(
  "yield-star-getiter-async-not-callable-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-not-callable-number-throw.js",
  ),
);

it(
  "yield-star-getiter-async-not-callable-object-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-not-callable-object-throw.js",
  ),
);

it(
  "yield-star-getiter-async-not-callable-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-not-callable-string-throw.js",
  ),
);

it(
  "yield-star-getiter-async-not-callable-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-not-callable-symbol-throw.js",
  ),
);

it(
  "yield-star-getiter-async-null-sync-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-null-sync-get-abrupt.js",
  ),
);

it(
  "yield-star-getiter-async-return-method-is-null.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-return-method-is-null.js",
  ),
);

it(
  "yield-star-getiter-async-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-returns-abrupt.js",
  ),
);

it(
  "yield-star-getiter-async-returns-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-returns-boolean-throw.js",
  ),
);

it(
  "yield-star-getiter-async-returns-null-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-returns-null-throw.js",
  ),
);

it(
  "yield-star-getiter-async-returns-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-returns-number-throw.js",
  ),
);

it(
  "yield-star-getiter-async-returns-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-returns-string-throw.js",
  ),
);

it(
  "yield-star-getiter-async-returns-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-returns-symbol-throw.js",
  ),
);

it(
  "yield-star-getiter-async-returns-undefined-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-returns-undefined-throw.js",
  ),
);

it(
  "yield-star-getiter-async-throw-method-is-null.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-throw-method-is-null.js",
  ),
);

it(
  "yield-star-getiter-async-undefined-sync-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-async-undefined-sync-get-abrupt.js",
  ),
);

it(
  "yield-star-getiter-sync-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-getiter-sync-get-abrupt.js"),
);

it(
  "yield-star-getiter-sync-not-callable-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-not-callable-boolean-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-not-callable-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-not-callable-number-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-not-callable-object-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-not-callable-object-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-not-callable-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-not-callable-string-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-not-callable-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-not-callable-symbol-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-returns-abrupt.js",
  ),
);

it(
  "yield-star-getiter-sync-returns-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-returns-boolean-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-returns-null-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-returns-null-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-returns-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-returns-number-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-returns-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-returns-string-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-returns-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-returns-symbol-throw.js",
  ),
);

it(
  "yield-star-getiter-sync-returns-undefined-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-getiter-sync-returns-undefined-throw.js",
  ),
);

it(
  "yield-star-next-call-done-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-next-call-done-get-abrupt.js"),
);

it(
  "yield-star-next-call-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-next-call-returns-abrupt.js"),
);

it(
  "yield-star-next-call-value-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-call-value-get-abrupt.js",
  ),
);

it(
  "yield-star-next-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-next-get-abrupt.js"),
);

it(
  "yield-star-next-non-object-ignores-then.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-non-object-ignores-then.js",
  ),
);

it(
  "yield-star-next-not-callable-boolean-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-not-callable-boolean-throw.js",
  ),
);

it(
  "yield-star-next-not-callable-null-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-not-callable-null-throw.js",
  ),
);

it(
  "yield-star-next-not-callable-number-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-not-callable-number-throw.js",
  ),
);

it(
  "yield-star-next-not-callable-object-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-not-callable-object-throw.js",
  ),
);

it(
  "yield-star-next-not-callable-string-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-not-callable-string-throw.js",
  ),
);

it(
  "yield-star-next-not-callable-symbol-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-not-callable-symbol-throw.js",
  ),
);

it(
  "yield-star-next-not-callable-undefined-throw.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-not-callable-undefined-throw.js",
  ),
);

it(
  "yield-star-next-then-get-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-next-then-get-abrupt.js"),
);

it(
  "yield-star-next-then-non-callable-boolean-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-then-non-callable-boolean-fulfillpromise.js",
  ),
);

it(
  "yield-star-next-then-non-callable-null-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-then-non-callable-null-fulfillpromise.js",
  ),
);

it(
  "yield-star-next-then-non-callable-number-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-then-non-callable-number-fulfillpromise.js",
  ),
);

it(
  "yield-star-next-then-non-callable-object-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-then-non-callable-object-fulfillpromise.js",
  ),
);

it(
  "yield-star-next-then-non-callable-string-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-then-non-callable-string-fulfillpromise.js",
  ),
);

it(
  "yield-star-next-then-non-callable-symbol-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-then-non-callable-symbol-fulfillpromise.js",
  ),
);

it(
  "yield-star-next-then-non-callable-undefined-fulfillpromise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-star-next-then-non-callable-undefined-fulfillpromise.js",
  ),
);

it(
  "yield-star-next-then-returns-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-next-then-returns-abrupt.js"),
);

it(
  "yield-star-sync-next.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-sync-next.js"),
);

it(
  "yield-star-sync-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-sync-return.js"),
);

it(
  "yield-star-sync-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/async-generator/yield-star-sync-throw.js"),
);

it(
  "yield-thenable-create-resolving-functions-reject.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-thenable-create-resolving-functions-reject.js",
  ),
);

it(
  "yield-thenable-create-resolving-functions-resolve.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/expressions/async-generator/yield-thenable-create-resolving-functions-resolve.js",
  ),
);
