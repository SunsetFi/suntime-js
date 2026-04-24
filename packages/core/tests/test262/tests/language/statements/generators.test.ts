import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("generators", () => {
  it(
    "arguments-with-arguments-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/arguments-with-arguments-fn.js"),
  );
  it(
    "arguments-with-arguments-lex.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/arguments-with-arguments-lex.js"),
  );
  it(
    "array-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/array-destructuring-param-strict-body.js"),
  );
  it(
    "cptn-decl.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/cptn-decl.js"),
  );
  it(
    "declaration.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/declaration.js"),
  );
  it(
    "default-proto.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/default-proto.js"),
  );
  it(
    "dflt-params-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-abrupt.js"),
  );
  it(
    "dflt-params-arg-val-not-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-arg-val-not-undefined.js"),
  );
  it(
    "dflt-params-arg-val-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-arg-val-undefined.js"),
  );
  it(
    "dflt-params-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-duplicates.js"),
  );
  it(
    "dflt-params-ref-later.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-ref-later.js"),
  );
  it(
    "dflt-params-ref-prior.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-ref-prior.js"),
  );
  it(
    "dflt-params-ref-self.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-ref-self.js"),
  );
  it(
    "dflt-params-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-rest.js"),
  );
  it(
    "dflt-params-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/dflt-params-trailing-comma.js"),
  );
  describe("dstr", () => {
    it(
      "ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-init-iter-close.js"),
    );
    it(
      "ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-init-iter-get-err.js"),
    );
    it(
      "ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-init-iter-no-close.js"),
    );
    it(
      "ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-name-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elision-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elision-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-exhausted.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"),
    );
    it(
      "ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-skipped.js"),
    );
    it(
      "ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-complete.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-step-err.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-val-err.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-prop-id-init.js"),
    );
    it(
      "ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elision-exhausted.js"),
    );
    it(
      "ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elision-step-err.js"),
    );
    it(
      "ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-elision.js"),
    );
    it(
      "ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-direct.js"),
    );
    it(
      "ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-elision-next-err.js"),
    );
    it(
      "ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-elision.js"),
    );
    it(
      "ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-iter-step-err.js"),
    );
    it(
      "ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-iter-val-err.js"),
    );
    it(
      "ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id.js"),
    );
    it(
      "ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-init-ary.js"),
    );
    it(
      "ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-init-id.js"),
    );
    it(
      "ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-init-obj.js"),
    );
    it(
      "ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-obj-id.js"),
    );
    it(
      "ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-init-iter-close.js"),
    );
    it(
      "dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-init-iter-get-err.js"),
    );
    it(
      "dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-init-iter-no-close.js"),
    );
    it(
      "dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-name-iter-val.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elision-step-err.js"),
    );
    it(
      "dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elision.js"),
    );
    it(
      "dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-empty.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-init-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-init-null.js"),
    );
    it(
      "dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-init-undefined.js"),
    );
    it(
      "dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-empty.js"),
    );
    it(
      "dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-throws.js"),
    );
    it(
      "dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-list-err.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-init-null.js"),
    );
    it(
      "obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-init-undefined.js"),
    );
    it(
      "obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-empty.js"),
    );
    it(
      "obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-get-value-err.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-arrow.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-class.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-cover.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-skipped.js"),
    );
    it(
      "obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-throws.js"),
    );
    it(
      "obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-unresolvable.js"),
    );
    it(
      "obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-list-err.js"),
    );
    it(
      "obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary-init.js"),
    );
    it(
      "obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary-trailing-comma.js"),
    );
    it(
      "obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary.js"),
    );
    it(
      "obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-eval-err.js"),
    );
    it(
      "obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-get-value-err.js"),
    );
    it(
      "obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-init-skipped.js"),
    );
    it(
      "obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/generators/dstr/obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-init.js"),
    );
    it(
      "obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-trailing-comma.js"),
    );
    it(
      "obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id.js"),
    );
    it(
      "obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj-init.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj-value-undef.js"),
    );
    it(
      "obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj.js"),
    );
    it(
      "obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-rest-getter.js"),
    );
    it(
      "obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-rest-skip-non-enumerable.js"),
    );
    it(
      "obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/generators/dstr/obj-ptrn-rest-val-obj.js"),
    );
  });
  it(
    "eval-var-scope-syntax-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/eval-var-scope-syntax-err.js"),
  );
  describe("forbidden-ext", () => {
    describe("b1", () => {
      it(
        "gen-func-decl-forbidden-ext-direct-access-prop-arguments.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/generators/forbidden-ext/b1/gen-func-decl-forbidden-ext-direct-access-prop-arguments.js",
        ),
      );
      it(
        "gen-func-decl-forbidden-ext-direct-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/generators/forbidden-ext/b1/gen-func-decl-forbidden-ext-direct-access-prop-caller.js",
        ),
      );
    });
    describe("b2", () => {
      it(
        "gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/generators/forbidden-ext/b2/gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js",
        ),
      );
      it(
        "gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/generators/forbidden-ext/b2/gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js",
        ),
      );
      it(
        "gen-func-decl-forbidden-ext-indirect-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/generators/forbidden-ext/b2/gen-func-decl-forbidden-ext-indirect-access-prop-caller.js",
        ),
      );
    });
  });
  it(
    "generator-created-after-decl-inst.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/generator-created-after-decl-inst.js"),
  );
  it(
    "has-instance.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/has-instance.js"),
  );
  it(
    "invoke-as-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/invoke-as-constructor.js"),
  );
  it(
    "length-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/length-dflt.js"),
  );
  it(
    "length-property-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/length-property-descriptor.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/name.js"),
  );
  it(
    "no-yield.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/no-yield.js"),
  );
  it(
    "object-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/object-destructuring-param-strict-body.js"),
  );
  it(
    "param-dflt-yield.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/param-dflt-yield.js"),
  );
  it(
    "params-dflt-args-unmapped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/params-dflt-args-unmapped.js"),
  );
  it(
    "params-dflt-ref-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/params-dflt-ref-arguments.js"),
  );
  it(
    "params-trailing-comma-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/params-trailing-comma-multiple.js"),
  );
  it(
    "params-trailing-comma-single.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/params-trailing-comma-single.js"),
  );
  it(
    "prototype-own-properties.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/prototype-own-properties.js"),
  );
  it(
    "prototype-property-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/prototype-property-descriptor.js"),
  );
  it(
    "prototype-relation-to-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/prototype-relation-to-function.js"),
  );
  it(
    "prototype-typeof.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/prototype-typeof.js"),
  );
  it(
    "prototype-uniqueness.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/prototype-uniqueness.js"),
  );
  it(
    "prototype-value.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/prototype-value.js"),
  );
  it(
    "rest-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/rest-param-strict-body.js"),
  );
  it(
    "rest-params-trailing-comma-early-error.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/rest-params-trailing-comma-early-error.js"),
  );
  it(
    "restricted-properties.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/restricted-properties.js"),
  );
  it(
    "return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/return.js"),
  );
  it(
    "scope-body-lex-distinct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/scope-body-lex-distinct.js"),
  );
  it(
    "scope-param-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/scope-param-elem-var-close.js"),
  );
  it(
    "scope-param-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/scope-param-elem-var-open.js"),
  );
  it(
    "scope-param-rest-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/scope-param-rest-elem-var-close.js"),
  );
  it(
    "scope-param-rest-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/scope-param-rest-elem-var-open.js"),
  );
  it(
    "scope-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/scope-paramsbody-var-close.js"),
  );
  it(
    "scope-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/scope-paramsbody-var-open.js"),
  );
  it(
    "unscopables-with-in-nested-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/unscopables-with-in-nested-fn.js"),
  );
  it(
    "unscopables-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/unscopables-with.js"),
  );
  it(
    "use-strict-with-non-simple-param.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/use-strict-with-non-simple-param.js"),
  );
  it(
    "yield-as-binding-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-binding-identifier-escaped.js"),
  );
  it(
    "yield-as-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-binding-identifier.js"),
  );
  it(
    "yield-as-function-expression-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/generators/yield-as-function-expression-binding-identifier.js",
    ),
  );
  it(
    "yield-as-generator-declaration-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/generators/yield-as-generator-declaration-binding-identifier.js",
    ),
  );
  it(
    "yield-as-identifier-in-nested-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-identifier-in-nested-function.js"),
  );
  it(
    "yield-as-identifier-reference-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-identifier-reference-escaped.js"),
  );
  it(
    "yield-as-identifier-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-identifier-reference.js"),
  );
  it(
    "yield-as-label-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-label-identifier-escaped.js"),
  );
  it(
    "yield-as-label-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-label-identifier.js"),
  );
  it(
    "yield-as-literal-property-name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-literal-property-name.js"),
  );
  it(
    "yield-as-logical-or-expression.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-logical-or-expression.js"),
  );
  it(
    "yield-as-parameter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-parameter.js"),
  );
  it(
    "yield-as-property-name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-property-name.js"),
  );
  it(
    "yield-as-statement.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-statement.js"),
  );
  it(
    "yield-as-yield-operand.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-as-yield-operand.js"),
  );
  it(
    "yield-identifier-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-identifier-non-strict.js"),
  );
  it(
    "yield-identifier-spread-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-identifier-spread-non-strict.js"),
  );
  it(
    "yield-identifier-spread-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-identifier-spread-strict.js"),
  );
  it(
    "yield-identifier-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-identifier-strict.js"),
  );
  it(
    "yield-newline.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-newline.js"),
  );
  it(
    "yield-spread-arr-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-spread-arr-multiple.js"),
  );
  it(
    "yield-spread-arr-single.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-spread-arr-single.js"),
  );
  it(
    "yield-spread-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-spread-obj.js"),
  );
  it(
    "yield-star-after-newline.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-star-after-newline.js"),
  );
  it(
    "yield-star-before-newline.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-star-before-newline.js"),
  );
  it(
    "yield-weak-binding.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/generators/yield-weak-binding.js"),
  );
});
