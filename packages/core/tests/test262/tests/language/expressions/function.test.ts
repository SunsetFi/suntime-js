import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("function", () => {
  it(
    "S10.1.1_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/S10.1.1_A1_T2.js"),
  );
  it(
    "arguments-with-arguments-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/arguments-with-arguments-fn.js"),
  );
  it(
    "arguments-with-arguments-lex.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/arguments-with-arguments-lex.js"),
  );
  it(
    "array-destructuring-param-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/array-destructuring-param-strict-body.js"),
  );
  it(
    "dflt-params-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/dflt-params-abrupt.js"),
  );
  it(
    "dflt-params-arg-val-not-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/dflt-params-arg-val-not-undefined.js"),
  );
  it(
    "dflt-params-arg-val-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/dflt-params-arg-val-undefined.js"),
  );
  it(
    "dflt-params-duplicates.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/dflt-params-duplicates.js"),
  );
  it(
    "dflt-params-ref-later.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/dflt-params-ref-later.js"),
  );
  it(
    "dflt-params-ref-prior.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/dflt-params-ref-prior.js"),
  );
  it(
    "dflt-params-ref-self.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/dflt-params-ref-self.js"),
  );
  it(
    "dflt-params-rest.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/dflt-params-rest.js"),
  );
  it(
    "dflt-params-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/dflt-params-trailing-comma.js"),
  );
  describe("dstr", () => {
    it(
      "ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-init-iter-close.js"),
    );
    it(
      "ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-init-iter-get-err.js"),
    );
    it(
      "ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-init-iter-no-close.js"),
    );
    it(
      "ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-name-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elision-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elision-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-exhausted.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"),
    );
    it(
      "ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-skipped.js"),
    );
    it(
      "ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-unresolvable.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-complete.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-step-err.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-val-err.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-prop-id-init.js"),
    );
    it(
      "ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elision-exhausted.js"),
    );
    it(
      "ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elision-step-err.js"),
    );
    it(
      "ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-elision.js"),
    );
    it(
      "ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-direct.js"),
    );
    it(
      "ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-elision-next-err.js"),
    );
    it(
      "ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-elision.js"),
    );
    it(
      "ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-iter-step-err.js"),
    );
    it(
      "ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-iter-val-err.js"),
    );
    it(
      "ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id.js"),
    );
    it(
      "ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-init-ary.js"),
    );
    it(
      "ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-init-id.js"),
    );
    it(
      "ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-init-obj.js"),
    );
    it(
      "ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-obj-id.js"),
    );
    it(
      "ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-init-iter-close.js"),
    );
    it(
      "dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-init-iter-get-err.js"),
    );
    it(
      "dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-init-iter-no-close.js"),
    );
    it(
      "dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-name-iter-val.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-skipped.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elision-step-err.js"),
    );
    it(
      "dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elision.js"),
    );
    it(
      "dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-empty.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-init-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-init-null.js"),
    );
    it(
      "dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-init-undefined.js"),
    );
    it(
      "dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-empty.js"),
    );
    it(
      "dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-throws.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-unresolvable.js"),
    );
    it(
      "dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-list-err.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init-skipped.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj-value-undef.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/function/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-init-null.js"),
    );
    it(
      "obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-init-undefined.js"),
    );
    it(
      "obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-empty.js"),
    );
    it(
      "obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-get-value-err.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-arrow.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-class.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-cover.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-skipped.js"),
    );
    it(
      "obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-throws.js"),
    );
    it(
      "obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-unresolvable.js"),
    );
    it(
      "obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-list-err.js"),
    );
    it(
      "obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary-init.js"),
    );
    it(
      "obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary-trailing-comma.js"),
    );
    it(
      "obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary.js"),
    );
    it(
      "obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-eval-err.js"),
    );
    it(
      "obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-get-value-err.js"),
    );
    it(
      "obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init-skipped.js"),
    );
    it(
      "obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init-unresolvable.js"),
    );
    it(
      "obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init.js"),
    );
    it(
      "obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-trailing-comma.js"),
    );
    it(
      "obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id.js"),
    );
    it(
      "obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj-init.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj-value-undef.js"),
    );
    it(
      "obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj.js"),
    );
    it(
      "obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-rest-getter.js"),
    );
    it(
      "obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-rest-skip-non-enumerable.js"),
    );
    it(
      "obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/function/dstr/obj-ptrn-rest-val-obj.js"),
    );
  });
  it(
    "early-body-super-call.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/early-body-super-call.js"),
  );
  it(
    "early-body-super-prop.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/early-body-super-prop.js"),
  );
  describe("early-errors", () => {
    it(
      "invalid-names-call-expression-bad-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/function/early-errors/invalid-names-call-expression-bad-reference.js",
      ),
    );
    it(
      "invalid-names-call-expression-this.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/function/early-errors/invalid-names-call-expression-this.js",
      ),
    );
    it(
      "invalid-names-member-expression-bad-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/function/early-errors/invalid-names-member-expression-bad-reference.js",
      ),
    );
    it(
      "invalid-names-member-expression-this.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/function/early-errors/invalid-names-member-expression-this.js",
      ),
    );
  });
  it(
    "early-params-super-call.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/early-params-super-call.js"),
  );
  it(
    "early-params-super-prop.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/early-params-super-prop.js"),
  );
  it(
    "eval-var-scope-syntax-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/eval-var-scope-syntax-err.js"),
  );
  describe("forbidden-ext", () => {
    describe("b1", () => {
      it(
        "func-expr-strict-forbidden-ext-direct-access-prop-arguments.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/function/forbidden-ext/b1/func-expr-strict-forbidden-ext-direct-access-prop-arguments.js",
        ),
      );
      it(
        "func-expr-strict-forbidden-ext-direct-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/function/forbidden-ext/b1/func-expr-strict-forbidden-ext-direct-access-prop-caller.js",
        ),
      );
    });
    describe("b2", () => {
      it(
        "func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/function/forbidden-ext/b2/func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js",
        ),
      );
      it(
        "func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/function/forbidden-ext/b2/func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js",
        ),
      );
      it(
        "func-expr-forbidden-ext-indirect-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/function/forbidden-ext/b2/func-expr-forbidden-ext-indirect-access-prop-caller.js",
        ),
      );
    });
  });
  it(
    "length-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/length-dflt.js"),
  );
  it(
    "name-arguments-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/name-arguments-non-strict.js"),
  );
  it(
    "name-arguments-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/name-arguments-strict-body.js"),
  );
  it(
    "name-arguments-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/name-arguments-strict.js"),
  );
  it(
    "name-eval-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/name-eval-non-strict.js"),
  );
  it(
    "name-eval-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/name-eval-strict-body.js"),
  );
  it(
    "name-eval-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/name-eval-strict.js"),
  );
  it(
    "name-eval-stricteval.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/name-eval-stricteval.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/name.js"),
  );
  it(
    "named-no-strict-reassign-fn-name-in-body-in-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/function/named-no-strict-reassign-fn-name-in-body-in-arrow.js",
    ),
  );
  it(
    "named-no-strict-reassign-fn-name-in-body-in-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/function/named-no-strict-reassign-fn-name-in-body-in-eval.js",
    ),
  );
  it(
    "named-no-strict-reassign-fn-name-in-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/named-no-strict-reassign-fn-name-in-body.js"),
  );
  it(
    "named-strict-error-reassign-fn-name-in-body-in-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/function/named-strict-error-reassign-fn-name-in-body-in-arrow.js",
    ),
  );
  it(
    "named-strict-error-reassign-fn-name-in-body-in-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/function/named-strict-error-reassign-fn-name-in-body-in-eval.js",
    ),
  );
  it(
    "named-strict-error-reassign-fn-name-in-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/function/named-strict-error-reassign-fn-name-in-body.js",
    ),
  );
  it(
    "object-destructuring-param-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/object-destructuring-param-strict-body.js"),
  );
  it(
    "param-arguments-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/param-arguments-non-strict.js"),
  );
  it(
    "param-dflt-yield-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/param-dflt-yield-non-strict.js"),
  );
  it(
    "param-dflt-yield-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-dflt-yield-strict.js"),
  );
  it(
    "param-duplicated-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/param-duplicated-non-strict.js"),
  );
  it(
    "param-duplicated-strict-1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-duplicated-strict-1.js"),
  );
  it(
    "param-duplicated-strict-2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-duplicated-strict-2.js"),
  );
  it(
    "param-duplicated-strict-3.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-duplicated-strict-3.js"),
  );
  it(
    "param-duplicated-strict-body-1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-duplicated-strict-body-1.js"),
  );
  it(
    "param-duplicated-strict-body-2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-duplicated-strict-body-2.js"),
  );
  it(
    "param-duplicated-strict-body-3.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-duplicated-strict-body-3.js"),
  );
  it(
    "param-eval-non-strict-is-correct-value.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/param-eval-non-strict-is-correct-value.js"),
  );
  it(
    "param-eval-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/param-eval-non-strict.js"),
  );
  it(
    "param-eval-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/param-eval-strict-body.js"),
  );
  it(
    "param-eval-stricteval.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/param-eval-stricteval.js"),
  );
  it(
    "params-dflt-args-unmapped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/params-dflt-args-unmapped.js"),
  );
  it(
    "params-dflt-ref-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/params-dflt-ref-arguments.js"),
  );
  it(
    "params-trailing-comma-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/params-trailing-comma-multiple.js"),
  );
  it(
    "params-trailing-comma-single.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/params-trailing-comma-single.js"),
  );
  it(
    "rest-param-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/rest-param-strict-body.js"),
  );
  it(
    "rest-params-trailing-comma-early-error.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/rest-params-trailing-comma-early-error.js"),
  );
  it(
    "scope-body-lex-distinct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-body-lex-distinct.js"),
  );
  it(
    "scope-name-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-name-var-close.js"),
  );
  it(
    "scope-name-var-open-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-name-var-open-non-strict.js"),
  );
  it(
    "scope-name-var-open-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-name-var-open-strict.js"),
  );
  it(
    "scope-param-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-param-elem-var-close.js"),
  );
  it(
    "scope-param-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-param-elem-var-open.js"),
  );
  it(
    "scope-param-rest-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-param-rest-elem-var-close.js"),
  );
  it(
    "scope-param-rest-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-param-rest-elem-var-open.js"),
  );
  it(
    "scope-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-paramsbody-var-close.js"),
  );
  it(
    "scope-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/scope-paramsbody-var-open.js"),
  );
  it(
    "static-init-await-binding.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/static-init-await-binding.js"),
  );
  it(
    "static-init-await-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/static-init-await-reference.js"),
  );
  it(
    "unscopables-with-in-nested-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/unscopables-with-in-nested-fn.js"),
  );
  it(
    "unscopables-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/function/unscopables-with.js"),
  );
  it(
    "use-strict-with-non-simple-param.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/function/use-strict-with-non-simple-param.js"),
  );
});
