import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("async-generator", () => {
  it(
    "array-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/array-destructuring-param-strict-body.js",
    ),
  );
  it(
    "await-as-binding-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/await-as-binding-identifier-escaped.js"),
  );
  it(
    "await-as-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/await-as-binding-identifier.js"),
  );
  it(
    "await-as-identifier-reference-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/await-as-identifier-reference-escaped.js",
    ),
  );
  it(
    "await-as-identifier-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/await-as-identifier-reference.js"),
  );
  it(
    "await-as-label-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/await-as-label-identifier-escaped.js"),
  );
  it(
    "await-as-label-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/await-as-label-identifier.js"),
  );
  it(
    "dflt-params-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-abrupt.js"),
  );
  it(
    "dflt-params-arg-val-not-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-arg-val-not-undefined.js"),
  );
  it(
    "dflt-params-arg-val-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-arg-val-undefined.js"),
  );
  it(
    "dflt-params-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-duplicates.js"),
  );
  it(
    "dflt-params-ref-later.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-ref-later.js"),
  );
  it(
    "dflt-params-ref-prior.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-ref-prior.js"),
  );
  it(
    "dflt-params-ref-self.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-ref-self.js"),
  );
  it(
    "dflt-params-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-rest.js"),
  );
  it(
    "dflt-params-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/dflt-params-trailing-comma.js"),
  );
  describe("dstr", () => {
    it(
      "ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-init-iter-close.js"),
    );
    it(
      "ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-init-iter-get-err.js"),
    );
    it(
      "ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-init-iter-no-close.js"),
    );
    it(
      "ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-name-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-obj-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elision-exhausted.js"),
    );
    it(
      "ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elision-step-err.js"),
    );
    it(
      "ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-elision.js"),
    );
    it(
      "ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-id-direct.js"),
    );
    it(
      "ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-id-elision.js"),
    );
    it(
      "ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-id.js"),
    );
    it(
      "ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-init-ary.js"),
    );
    it(
      "ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-init-id.js"),
    );
    it(
      "ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-init-obj.js"),
    );
    it(
      "ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-obj-id.js"),
    );
    it(
      "ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-init-iter-close.js"),
    );
    it(
      "dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-init-iter-get-err.js"),
    );
    it(
      "dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-init-iter-no-close.js"),
    );
    it(
      "dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-name-iter-val.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-elision.js"),
    );
    it(
      "dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-empty.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-init-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-init-null.js"),
    );
    it(
      "dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-init-undefined.js"),
    );
    it(
      "dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-empty.js"),
    );
    it(
      "dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-throws.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-list-err.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-prop-id-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/dflt-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-init-null.js"),
    );
    it(
      "obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-init-undefined.js"),
    );
    it(
      "obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-empty.js"),
    );
    it(
      "obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-id-get-value-err.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-id-init-skipped.js"),
    );
    it(
      "obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-id-init-throws.js"),
    );
    it(
      "obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-list-err.js"),
    );
    it(
      "obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-ary-init.js"),
    );
    it(
      "obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-ary.js"),
    );
    it(
      "obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-eval-err.js"),
    );
    it(
      "obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-id-init.js"),
    );
    it(
      "obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-id.js"),
    );
    it(
      "obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-obj-init.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-prop-obj.js"),
    );
    it(
      "obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-rest-getter.js"),
    );
    it(
      "obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/async-generator/dstr/obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/async-generator/dstr/obj-ptrn-rest-val-obj.js"),
    );
  });
  it(
    "escaped-async.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/escaped-async.js"),
  );
  it(
    "eval-var-scope-syntax-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/eval-var-scope-syntax-err.js"),
  );
  describe("forbidden-ext", () => {
    describe("b1", () => {
      it(
        "async-gen-func-decl-forbidden-ext-direct-access-prop-arguments.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-generator/forbidden-ext/b1/async-gen-func-decl-forbidden-ext-direct-access-prop-arguments.js",
        ),
      );
      it(
        "async-gen-func-decl-forbidden-ext-direct-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-generator/forbidden-ext/b1/async-gen-func-decl-forbidden-ext-direct-access-prop-caller.js",
        ),
      );
    });
    describe("b2", () => {
      it(
        "async-gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-generator/forbidden-ext/b2/async-gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js",
        ),
      );
      it(
        "async-gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-generator/forbidden-ext/b2/async-gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js",
        ),
      );
      it(
        "async-gen-func-decl-forbidden-ext-indirect-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-generator/forbidden-ext/b2/async-gen-func-decl-forbidden-ext-indirect-access-prop-caller.js",
        ),
      );
    });
  });
  it(
    "generator-created-after-decl-inst.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/generator-created-after-decl-inst.js"),
  );
  it(
    "object-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/object-destructuring-param-strict-body.js",
    ),
  );
  it(
    "params-trailing-comma-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/params-trailing-comma-multiple.js"),
  );
  it(
    "params-trailing-comma-single.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/params-trailing-comma-single.js"),
  );
  it(
    "rest-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/rest-param-strict-body.js"),
  );
  it(
    "rest-params-trailing-comma-early-error.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/rest-params-trailing-comma-early-error.js",
    ),
  );
  it(
    "return-undefined-implicit-and-explicit.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/return-undefined-implicit-and-explicit.js",
    ),
  );
  it(
    "unscopables-with-in-nested-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/unscopables-with-in-nested-fn.js"),
  );
  it(
    "unscopables-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/unscopables-with.js"),
  );
  it(
    "yield-as-binding-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-as-binding-identifier-escaped.js"),
  );
  it(
    "yield-as-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-as-binding-identifier.js"),
  );
  it(
    "yield-as-identifier-reference-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-as-identifier-reference-escaped.js",
    ),
  );
  it(
    "yield-as-identifier-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-as-identifier-reference.js"),
  );
  it(
    "yield-as-label-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-as-label-identifier-escaped.js"),
  );
  it(
    "yield-as-label-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-as-label-identifier.js"),
  );
  it(
    "yield-identifier-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-identifier-non-strict.js"),
  );
  it(
    "yield-identifier-spread-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-identifier-spread-non-strict.js"),
  );
  it(
    "yield-identifier-spread-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-identifier-spread-strict.js"),
  );
  it(
    "yield-identifier-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-identifier-strict.js"),
  );
  it(
    "yield-promise-reject-next-catch.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-promise-reject-next-catch.js"),
  );
  it(
    "yield-promise-reject-next-for-await-of-async-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-promise-reject-next-for-await-of-async-iterator.js",
    ),
  );
  it(
    "yield-promise-reject-next-for-await-of-sync-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-promise-reject-next-for-await-of-sync-iterator.js",
    ),
  );
  it(
    "yield-promise-reject-next-yield-star-async-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-promise-reject-next-yield-star-async-iterator.js",
    ),
  );
  it(
    "yield-promise-reject-next-yield-star-sync-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-promise-reject-next-yield-star-sync-iterator.js",
    ),
  );
  it(
    "yield-promise-reject-next.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-promise-reject-next.js"),
  );
  it(
    "yield-return-then-getter-ticks.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/async-generator/yield-return-then-getter-ticks.js"),
  );
  it(
    "yield-spread-arr-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-spread-arr-multiple.js"),
  );
  it(
    "yield-spread-arr-single.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-spread-arr-single.js"),
  );
  it(
    "yield-spread-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-spread-obj.js"),
  );
  it(
    "yield-star-async-from-sync-iterator-inaccessible.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-async-from-sync-iterator-inaccessible.js",
    ),
  );
  it(
    "yield-star-async-next.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-async-next.js"),
  );
  it(
    "yield-star-async-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-async-return.js"),
  );
  it(
    "yield-star-async-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-async-throw.js"),
  );
  it(
    "yield-star-expr-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-expr-abrupt.js"),
  );
  it(
    "yield-star-getiter-async-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-getiter-async-get-abrupt.js"),
  );
  it(
    "yield-star-getiter-async-not-callable-boolean-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-not-callable-boolean-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-not-callable-number-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-not-callable-number-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-not-callable-object-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-not-callable-object-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-not-callable-string-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-not-callable-string-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-not-callable-symbol-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-not-callable-symbol-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-null-sync-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-null-sync-get-abrupt.js",
    ),
  );
  it(
    "yield-star-getiter-async-returns-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-returns-abrupt.js",
    ),
  );
  it(
    "yield-star-getiter-async-returns-boolean-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-returns-boolean-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-returns-null-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-returns-null-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-returns-number-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-returns-number-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-returns-string-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-returns-string-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-returns-symbol-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-returns-symbol-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-returns-undefined-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-returns-undefined-throw.js",
    ),
  );
  it(
    "yield-star-getiter-async-undefined-sync-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-async-undefined-sync-get-abrupt.js",
    ),
  );
  it(
    "yield-star-getiter-sync-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-getiter-sync-get-abrupt.js"),
  );
  it(
    "yield-star-getiter-sync-not-callable-boolean-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-not-callable-boolean-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-not-callable-number-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-not-callable-number-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-not-callable-object-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-not-callable-object-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-not-callable-string-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-not-callable-string-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-not-callable-symbol-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-not-callable-symbol-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-returns-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-returns-abrupt.js",
    ),
  );
  it(
    "yield-star-getiter-sync-returns-boolean-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-returns-boolean-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-returns-null-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-returns-null-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-returns-number-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-returns-number-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-returns-string-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-returns-string-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-returns-symbol-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-returns-symbol-throw.js",
    ),
  );
  it(
    "yield-star-getiter-sync-returns-undefined-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-getiter-sync-returns-undefined-throw.js",
    ),
  );
  it(
    "yield-star-next-call-done-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-call-done-get-abrupt.js",
    ),
  );
  it(
    "yield-star-next-call-returns-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-next-call-returns-abrupt.js"),
  );
  it(
    "yield-star-next-call-value-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-call-value-get-abrupt.js",
    ),
  );
  it(
    "yield-star-next-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-next-get-abrupt.js"),
  );
  it(
    "yield-star-next-non-object-ignores-then.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-non-object-ignores-then.js",
    ),
  );
  it(
    "yield-star-next-not-callable-boolean-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-not-callable-boolean-throw.js",
    ),
  );
  it(
    "yield-star-next-not-callable-null-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-not-callable-null-throw.js",
    ),
  );
  it(
    "yield-star-next-not-callable-number-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-not-callable-number-throw.js",
    ),
  );
  it(
    "yield-star-next-not-callable-object-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-not-callable-object-throw.js",
    ),
  );
  it(
    "yield-star-next-not-callable-string-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-not-callable-string-throw.js",
    ),
  );
  it(
    "yield-star-next-not-callable-symbol-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-not-callable-symbol-throw.js",
    ),
  );
  it(
    "yield-star-next-not-callable-undefined-throw.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-not-callable-undefined-throw.js",
    ),
  );
  it(
    "yield-star-next-then-get-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-next-then-get-abrupt.js"),
  );
  it(
    "yield-star-next-then-non-callable-boolean-fulfillpromise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-then-non-callable-boolean-fulfillpromise.js",
    ),
  );
  it(
    "yield-star-next-then-non-callable-null-fulfillpromise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-then-non-callable-null-fulfillpromise.js",
    ),
  );
  it(
    "yield-star-next-then-non-callable-number-fulfillpromise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-then-non-callable-number-fulfillpromise.js",
    ),
  );
  it(
    "yield-star-next-then-non-callable-object-fulfillpromise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-then-non-callable-object-fulfillpromise.js",
    ),
  );
  it(
    "yield-star-next-then-non-callable-string-fulfillpromise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-then-non-callable-string-fulfillpromise.js",
    ),
  );
  it(
    "yield-star-next-then-non-callable-symbol-fulfillpromise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-then-non-callable-symbol-fulfillpromise.js",
    ),
  );
  it(
    "yield-star-next-then-non-callable-undefined-fulfillpromise.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-next-then-non-callable-undefined-fulfillpromise.js",
    ),
  );
  it(
    "yield-star-next-then-returns-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-next-then-returns-abrupt.js"),
  );
  it(
    "yield-star-normal-notdone-iter-value-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-normal-notdone-iter-value-throws.js",
    ),
  );
  it(
    "yield-star-promise-not-unwrapped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-promise-not-unwrapped.js"),
  );
  it(
    "yield-star-return-missing-value-is-awaited.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-return-missing-value-is-awaited.js",
    ),
  );
  it(
    "yield-star-return-notdone-iter-value-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-return-notdone-iter-value-throws.js",
    ),
  );
  it(
    "yield-star-return-then-getter-ticks.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/async-generator/yield-star-return-then-getter-ticks.js"),
  );
  it(
    "yield-star-sync-next.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-sync-next.js"),
  );
  it(
    "yield-star-sync-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-sync-return.js"),
  );
  it(
    "yield-star-sync-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-generator/yield-star-sync-throw.js"),
  );
  it(
    "yield-star-throw-notdone-iter-value-throws.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-generator/yield-star-throw-notdone-iter-value-throws.js",
    ),
  );
});
