import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ArrowFunction_restricted-properties.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/ArrowFunction_restricted-properties.js"),
);

it(
  "array-destructuring-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/array-destructuring-param-strict-body.js"),
);

describe("arrow", () => {
  it(
    "binding-tests-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/arrow/binding-tests-1.js"),
  );
  it(
    "binding-tests-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/arrow/binding-tests-2.js"),
  );
  it(
    "binding-tests-3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/arrow/binding-tests-3.js"),
  );
  it(
    "capturing-closure-variables-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/arrow/capturing-closure-variables-1.js"),
  );
  it(
    "capturing-closure-variables-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/arrow/capturing-closure-variables-2.js"),
  );
  it(
    "concisebody-lookahead-assignmentexpression-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/arrow/concisebody-lookahead-assignmentexpression-1.js",
    ),
  );
  it(
    "concisebody-lookahead-assignmentexpression-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/arrow/concisebody-lookahead-assignmentexpression-2.js",
    ),
  );
});

it(
  "cannot-override-this-with-thisArg.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/cannot-override-this-with-thisArg.js"),
);

it(
  "dflt-params-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-abrupt.js"),
);

it(
  "dflt-params-arg-val-not-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-arg-val-not-undefined.js"),
);

it(
  "dflt-params-arg-val-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-arg-val-undefined.js"),
);

it(
  "dflt-params-duplicates.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-duplicates.js"),
);

it(
  "dflt-params-ref-later.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-ref-later.js"),
);

it(
  "dflt-params-ref-prior.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-ref-prior.js"),
);

it(
  "dflt-params-ref-self.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-ref-self.js"),
);

it(
  "dflt-params-rest.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-rest.js"),
);

it(
  "dflt-params-trailing-comma.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/dflt-params-trailing-comma.js"),
);

describe("dstr", () => {
  it(
    "ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-init-iter-close.js"),
  );
  it(
    "ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-init-iter-get-err.js"),
  );
  it(
    "ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-init-iter-no-close.js"),
  );
  it(
    "ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-name-iter-val.js"),
  );
  it(
    "ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elem-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elem-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elision-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elision-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-empty-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-empty-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-rest-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-rest-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-val-null.js"),
  );
  it(
    "ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-exhausted.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-class.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-cover.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-fn.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-gen.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-hole.js"),
  );
  it(
    "ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-skipped.js"),
  );
  it(
    "ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-throws.js"),
  );
  it(
    "ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-undef.js"),
  );
  it(
    "ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-unresolvable.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-complete.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-done.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-step-err.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-val-err.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-val.js"),
  );
  it(
    "ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-id-init.js"),
  );
  it(
    "ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-id.js"),
  );
  it(
    "ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-prop-id-init.js"),
  );
  it(
    "ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-prop-id.js"),
  );
  it(
    "ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-val-null.js"),
  );
  it(
    "ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-val-undef.js"),
  );
  it(
    "ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elision-exhausted.js"),
  );
  it(
    "ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elision-step-err.js"),
  );
  it(
    "ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elision.js"),
  );
  it(
    "ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-empty.js"),
  );
  it(
    "ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-elision.js"),
  );
  it(
    "ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-direct.js"),
  );
  it(
    "ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/ary-ptrn-rest-id-elision-next-err.js",
    ),
  );
  it(
    "ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-elision.js"),
  );
  it(
    "ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-exhausted.js"),
  );
  it(
    "ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-iter-step-err.js"),
  );
  it(
    "ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-iter-val-err.js"),
  );
  it(
    "ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id.js"),
  );
  it(
    "ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-init-ary.js"),
  );
  it(
    "ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-init-id.js"),
  );
  it(
    "ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-init-obj.js"),
  );
  it(
    "ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-not-final-ary.js"),
  );
  it(
    "ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-not-final-id.js"),
  );
  it(
    "ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-not-final-obj.js"),
  );
  it(
    "ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-obj-id.js"),
  );
  it(
    "ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-obj-prop-id.js"),
  );
  it(
    "dflt-ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-init-iter-close.js"),
  );
  it(
    "dflt-ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "dflt-ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-init-iter-get-err.js"),
  );
  it(
    "dflt-ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-init-iter-no-close.js"),
  );
  it(
    "dflt-ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-name-iter-val.js"),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elem-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elision-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-empty-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-rest-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-val-null.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-hole.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-skipped.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-throws.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-undef.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-complete.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-done.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-val.js"),
  );
  it(
    "dflt-ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-id-init.js"),
  );
  it(
    "dflt-ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-id.js"),
  );
  it(
    "dflt-ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-prop-id.js"),
  );
  it(
    "dflt-ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-val-null.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-val-undef.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-elision-exhausted.js",
    ),
  );
  it(
    "dflt-ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elision-step-err.js"),
  );
  it(
    "dflt-ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elision.js"),
  );
  it(
    "dflt-ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-empty.js"),
  );
  it(
    "dflt-ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "dflt-ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-elision.js"),
  );
  it(
    "dflt-ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "dflt-ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "dflt-ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-direct.js"),
  );
  it(
    "dflt-ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-elision.js"),
  );
  it(
    "dflt-ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-exhausted.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id.js"),
  );
  it(
    "dflt-ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-init-ary.js"),
  );
  it(
    "dflt-ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-init-id.js"),
  );
  it(
    "dflt-ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-init-obj.js"),
  );
  it(
    "dflt-ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-not-final-ary.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-not-final-id.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-not-final-obj.js",
    ),
  );
  it(
    "dflt-ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-obj-id.js"),
  );
  it(
    "dflt-ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-obj-prop-id.js"),
  );
  it(
    "dflt-obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-init-null.js"),
  );
  it(
    "dflt-obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-init-undefined.js"),
  );
  it(
    "dflt-obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-empty.js"),
  );
  it(
    "dflt-obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-get-value-err.js"),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-class.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-skipped.js"),
  );
  it(
    "dflt-obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-throws.js"),
  );
  it(
    "dflt-obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-unresolvable.js",
    ),
  );
  it(
    "dflt-obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-trailing-comma.js",
    ),
  );
  it(
    "dflt-obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-list-err.js"),
  );
  it(
    "dflt-obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary-init.js"),
  );
  it(
    "dflt-obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary-value-null.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary.js"),
  );
  it(
    "dflt-obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-eval-err.js"),
  );
  it(
    "dflt-obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-get-value-err.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init-skipped.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init-throws.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init.js"),
  );
  it(
    "dflt-obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id.js"),
  );
  it(
    "dflt-obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj-init.js"),
  );
  it(
    "dflt-obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj-value-null.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj-value-undef.js",
    ),
  );
  it(
    "dflt-obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj.js"),
  );
  it(
    "dflt-obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-rest-getter.js"),
  );
  it(
    "dflt-obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js",
    ),
  );
  it(
    "dflt-obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-rest-val-obj.js"),
  );
  it(
    "obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-init-null.js"),
  );
  it(
    "obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-init-undefined.js"),
  );
  it(
    "obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-empty.js"),
  );
  it(
    "obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-get-value-err.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-arrow.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-class.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-cover.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-fn.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-gen.js"),
  );
  it(
    "obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-skipped.js"),
  );
  it(
    "obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-throws.js"),
  );
  it(
    "obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-unresolvable.js"),
  );
  it(
    "obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-trailing-comma.js"),
  );
  it(
    "obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-list-err.js"),
  );
  it(
    "obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-ary-init.js"),
  );
  it(
    "obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/obj-ptrn-prop-ary-trailing-comma.js",
    ),
  );
  it(
    "obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-ary-value-null.js"),
  );
  it(
    "obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-ary.js"),
  );
  it(
    "obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-eval-err.js"),
  );
  it(
    "obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-get-value-err.js"),
  );
  it(
    "obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init-skipped.js"),
  );
  it(
    "obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init-throws.js"),
  );
  it(
    "obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init-unresolvable.js",
    ),
  );
  it(
    "obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init.js"),
  );
  it(
    "obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/obj-ptrn-prop-id-trailing-comma.js",
    ),
  );
  it(
    "obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id.js"),
  );
  it(
    "obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj-init.js"),
  );
  it(
    "obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj-value-null.js"),
  );
  it(
    "obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj-value-undef.js"),
  );
  it(
    "obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj.js"),
  );
  it(
    "obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-rest-getter.js"),
  );
  it(
    "obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/obj-ptrn-rest-skip-non-enumerable.js",
    ),
  );
  it(
    "obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-rest-val-obj.js"),
  );
  it(
    "syntax-error-ident-ref-break-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-break-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-case-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-case-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-catch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-catch-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-class-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-class-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-const-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-const-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-continue-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-continue-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-debugger-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-debugger-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-default-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-default-escaped-ext.js",
    ),
  );
  it(
    "syntax-error-ident-ref-default-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-default-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-default.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-default.js"),
  );
  it(
    "syntax-error-ident-ref-delete-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-delete-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-do-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-do-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-else-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-else-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-enum-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-enum-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-export-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-export-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-extends-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-extends-escaped-ext.js",
    ),
  );
  it(
    "syntax-error-ident-ref-extends-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-extends-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-extends.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-extends.js"),
  );
  it(
    "syntax-error-ident-ref-finally-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-finally-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-for-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-for-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-function-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-function-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-if-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-if-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-implements-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-implements-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-import-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-import-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-in-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-in-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-instanceof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-instanceof-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-interface-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-interface-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-let-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-let-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-new-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-new-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-package-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-package-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-private-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-private-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-protected-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-protected-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-public-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-public-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-return-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-return-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-static-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-static-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-super-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-super-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-switch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-switch-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-this-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-this-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-throw-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-throw-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-try-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-try-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-typeof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-typeof-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-var-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-var-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-void-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-void-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-while-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-while-escaped.js",
    ),
  );
  it(
    "syntax-error-ident-ref-with-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/dstr/syntax-error-ident-ref-with-escaped.js",
    ),
  );
});

it(
  "empty-function-body-returns-undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/empty-function-body-returns-undefined.js"),
);

it(
  "eval-var-scope-syntax-err.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/eval-var-scope-syntax-err.js"),
);

it(
  "expression-body-implicit-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/expression-body-implicit-return.js"),
);

it(
  "extensibility.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/extensibility.js"),
);

describe("forbidden-ext", () => {
  describe("b1", () => {
    it(
      "arrow-function-forbidden-ext-direct-access-prop-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/forbidden-ext/b1/arrow-function-forbidden-ext-direct-access-prop-arguments.js",
      ),
    );
    it(
      "arrow-function-forbidden-ext-direct-access-prop-caller.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/forbidden-ext/b1/arrow-function-forbidden-ext-direct-access-prop-caller.js",
      ),
    );
  });
  describe("b2", () => {
    it(
      "arrow-function-forbidden-ext-indirect-access-own-prop-caller-get.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/forbidden-ext/b2/arrow-function-forbidden-ext-indirect-access-own-prop-caller-get.js",
      ),
    );
    it(
      "arrow-function-forbidden-ext-indirect-access-own-prop-caller-value.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/forbidden-ext/b2/arrow-function-forbidden-ext-indirect-access-own-prop-caller-value.js",
      ),
    );
    it(
      "arrow-function-forbidden-ext-indirect-access-prop-caller.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/forbidden-ext/b2/arrow-function-forbidden-ext-indirect-access-prop-caller.js",
      ),
    );
  });
});

it(
  "length-dflt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/length-dflt.js"),
);

it(
  "lexical-arguments.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/lexical-arguments.js"),
);

it(
  "lexical-bindings-overriden-by-formal-parameters-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/lexical-bindings-overriden-by-formal-parameters-non-strict.js",
  ),
);

it(
  "lexical-new.target-closure-returned.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/lexical-new.target-closure-returned.js"),
);

it(
  "lexical-new.target.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/lexical-new.target.js"),
);

it(
  "lexical-super-call-from-within-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/lexical-super-call-from-within-constructor.js",
  ),
);

it(
  "lexical-super-property-from-within-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/lexical-super-property-from-within-constructor.js",
  ),
);

it(
  "lexical-super-property.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/lexical-super-property.js"),
);

it(
  "lexical-supercall-from-immediately-invoked-arrow.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/lexical-supercall-from-immediately-invoked-arrow.js",
  ),
);

it(
  "lexical-this.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/lexical-this.js"),
);

it(
  "low-precedence-expression-body-no-parens.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/low-precedence-expression-body-no-parens.js",
  ),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/name.js"),
);

it(
  "non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/non-strict.js"),
);

it(
  "object-destructuring-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/object-destructuring-param-strict-body.js",
  ),
);

it(
  "object-literal-return-requires-body-parens.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/object-literal-return-requires-body-parens.js",
  ),
);

it(
  "param-dflt-yield-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/param-dflt-yield-expr.js"),
);

it(
  "param-dflt-yield-id-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/param-dflt-yield-id-non-strict.js"),
);

it(
  "param-dflt-yield-id-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/param-dflt-yield-id-strict.js"),
);

it(
  "params-duplicate.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/params-duplicate.js"),
);

it(
  "params-trailing-comma-multiple.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/params-trailing-comma-multiple.js"),
);

it(
  "params-trailing-comma-single.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/params-trailing-comma-single.js"),
);

it(
  "prototype-rules.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/prototype-rules.js"),
);

it(
  "rest-param-strict-body.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/rest-param-strict-body.js"),
);

it(
  "rest-params-trailing-comma-early-error.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/rest-params-trailing-comma-early-error.js",
  ),
);

it(
  "scope-body-lex-distinct.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/scope-body-lex-distinct.js"),
);

it(
  "scope-param-elem-var-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/scope-param-elem-var-close.js"),
);

it(
  "scope-param-elem-var-open.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/scope-param-elem-var-open.js"),
);

it(
  "scope-param-rest-elem-var-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/scope-param-rest-elem-var-close.js"),
);

it(
  "scope-param-rest-elem-var-open.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/scope-param-rest-elem-var-open.js"),
);

it(
  "scope-paramsbody-var-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/scope-paramsbody-var-close.js"),
);

it(
  "scope-paramsbody-var-open.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/scope-paramsbody-var-open.js"),
);

it(
  "statement-body-requires-braces-must-return-explicitly-missing.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/statement-body-requires-braces-must-return-explicitly-missing.js",
  ),
);

it(
  "statement-body-requires-braces-must-return-explicitly.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/arrow-function/statement-body-requires-braces-must-return-explicitly.js",
  ),
);

it(
  "static-init-await-binding.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/static-init-await-binding.js"),
);

it(
  "static-init-await-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/static-init-await-reference.js"),
);

it(
  "strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/strict.js"),
);

describe("syntax", () => {
  it(
    "arrowparameters-bindingidentifier-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-arguments.js",
    ),
  );
  it(
    "arrowparameters-bindingidentifier-concisebody-assignmentexpression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-concisebody-assignmentexpression.js",
    ),
  );
  it(
    "arrowparameters-bindingidentifier-concisebody-functionbody.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-concisebody-functionbody.js",
    ),
  );
  it(
    "arrowparameters-bindingidentifier-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-eval.js",
    ),
  );
  it(
    "arrowparameters-bindingidentifier-lineterminator-concisebody-assignmentexpression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-lineterminator-concisebody-assignmentexpression.js",
    ),
  );
  it(
    "arrowparameters-bindingidentifier-lineterminator-concisebody-functionbody.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-lineterminator-concisebody-functionbody.js",
    ),
  );
  it(
    "arrowparameters-bindingidentifier-yield.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-yield.js",
    ),
  );
  it(
    "arrowparameters-cover-concisebody-assignmentexpression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-concisebody-assignmentexpression.js",
    ),
  );
  it(
    "arrowparameters-cover-concisebody-functionbody.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-concisebody-functionbody.js",
    ),
  );
  it(
    "arrowparameters-cover-formalparameters-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-formalparameters-arguments.js",
    ),
  );
  it(
    "arrowparameters-cover-formalparameters-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-formalparameters-eval.js",
    ),
  );
  it(
    "arrowparameters-cover-formalparameters-yield.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-formalparameters-yield.js",
    ),
  );
  it(
    "arrowparameters-cover-includes-rest-concisebody-functionbody.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-includes-rest-concisebody-functionbody.js",
    ),
  );
  it(
    "arrowparameters-cover-initialize-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-initialize-1.js",
    ),
  );
  it(
    "arrowparameters-cover-initialize-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-initialize-2.js",
    ),
  );
  it(
    "arrowparameters-cover-lineterminator-concisebody-assignmentexpression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-lineterminator-concisebody-assignmentexpression.js",
    ),
  );
  it(
    "arrowparameters-cover-lineterminator-concisebody-functionbody.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-lineterminator-concisebody-functionbody.js",
    ),
  );
  it(
    "arrowparameters-cover-rest-concisebody-functionbody.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-rest-concisebody-functionbody.js",
    ),
  );
  it(
    "arrowparameters-cover-rest-lineterminator-concisebody-functionbody.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/arrow-function/syntax/arrowparameters-cover-rest-lineterminator-concisebody-functionbody.js",
    ),
  );
  describe("early-errors", () => {
    it(
      "arrowparameters-bindingidentifier-identifier-futurereservedword.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-identifier-futurereservedword.js",
      ),
    );
    it(
      "arrowparameters-bindingidentifier-identifier-strict-futurereservedword.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-identifier-strict-futurereservedword.js",
      ),
    );
    it(
      "arrowparameters-bindingidentifier-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-identifier.js",
      ),
    );
    it(
      "arrowparameters-bindingidentifier-no-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-no-arguments.js",
      ),
    );
    it(
      "arrowparameters-bindingidentifier-no-eval.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-no-eval.js",
      ),
    );
    it(
      "arrowparameters-bindingidentifier-no-yield.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-no-yield.js",
      ),
    );
    it(
      "arrowparameters-bindingidentifier-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-rest.js",
      ),
    );
    it(
      "arrowparameters-cover-no-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-arguments.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-array-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array-1.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-array-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array-2.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-array-3.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array-3.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-object-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-1.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-object-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-2.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-object-3.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-3.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-object-4.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-4.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-object-5.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-5.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-binding-object-6.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-6.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-rest.js",
      ),
    );
    it(
      "arrowparameters-cover-no-duplicates.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates.js",
      ),
    );
    it(
      "arrowparameters-cover-no-eval.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-eval.js",
      ),
    );
    it(
      "arrowparameters-cover-no-yield.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-yield.js",
      ),
    );
    it(
      "asi-restriction-invalid-parenless-parameters-expression-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/asi-restriction-invalid-parenless-parameters-expression-body.js",
      ),
    );
    it(
      "asi-restriction-invalid-parenless-parameters.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/asi-restriction-invalid-parenless-parameters.js",
      ),
    );
    it(
      "asi-restriction-invalid.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/asi-restriction-invalid.js",
      ),
    );
    it(
      "use-strict-with-non-simple-param.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/arrow-function/syntax/early-errors/use-strict-with-non-simple-param.js",
      ),
    );
  });
  it(
    "variations.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/arrow-function/syntax/variations.js"),
  );
});

it(
  "throw-new.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/throw-new.js"),
);

it(
  "unscopables-with-in-nested-fn.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/unscopables-with-in-nested-fn.js"),
);

it(
  "unscopables-with.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/arrow-function/unscopables-with.js"),
);
