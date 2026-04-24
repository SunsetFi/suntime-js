import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("const", () => {
  it(
    "block-local-closure-get-before-initialization.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/block-local-closure-get-before-initialization.js"),
  );
  it(
    "block-local-use-before-initialization-in-declaration-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/const/block-local-use-before-initialization-in-declaration-statement.js",
    ),
  );
  it(
    "block-local-use-before-initialization-in-prior-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/const/block-local-use-before-initialization-in-prior-statement.js",
    ),
  );
  it(
    "cptn-value.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/cptn-value.js"),
  );
  describe("dstr", () => {
    it(
      "ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-init-iter-close.js"),
    );
    it(
      "ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-init-iter-get-err-array-prototype.js"),
    );
    it(
      "ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-init-iter-get-err.js"),
    );
    it(
      "ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-init-iter-no-close.js"),
    );
    it(
      "ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-name-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elision-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elision-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-exhausted.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-class.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"),
    );
    it(
      "ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"),
    );
    it(
      "ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-skipped.js"),
    );
    it(
      "ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-unresolvable.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-complete.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-step-err.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/const/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-val-err.js"),
    );
    it(
      "ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-prop-id-init.js"),
    );
    it(
      "ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elision-exhausted.js"),
    );
    it(
      "ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elision-step-err.js"),
    );
    it(
      "ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-elision.js"),
    );
    it(
      "ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-direct.js"),
    );
    it(
      "ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-elision-next-err.js"),
    );
    it(
      "ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-elision.js"),
    );
    it(
      "ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-iter-step-err.js"),
    );
    it(
      "ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-iter-val-err.js"),
    );
    it(
      "ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id.js"),
    );
    it(
      "ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-init-ary.js"),
    );
    it(
      "ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-init-id.js"),
    );
    it(
      "ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-init-obj.js"),
    );
    it(
      "ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-obj-id.js"),
    );
    it(
      "ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-init-null.js"),
    );
    it(
      "obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-init-undefined.js"),
    );
    it(
      "obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-empty.js"),
    );
    it(
      "obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-get-value-err.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-arrow.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-class.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-cover.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-skipped.js"),
    );
    it(
      "obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-throws.js"),
    );
    it(
      "obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-unresolvable.js"),
    );
    it(
      "obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-list-err.js"),
    );
    it(
      "obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary-init.js"),
    );
    it(
      "obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary-trailing-comma.js"),
    );
    it(
      "obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary.js"),
    );
    it(
      "obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-eval-err.js"),
    );
    it(
      "obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-get-value-err.js"),
    );
    it(
      "obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init-skipped.js"),
    );
    it(
      "obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init-unresolvable.js"),
    );
    it(
      "obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init.js"),
    );
    it(
      "obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-trailing-comma.js"),
    );
    it(
      "obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id.js"),
    );
    it(
      "obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj-init.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj-value-undef.js"),
    );
    it(
      "obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj.js"),
    );
    it(
      "obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-rest-getter.js"),
    );
    it(
      "obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-rest-skip-non-enumerable.js"),
    );
    it(
      "obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/dstr/obj-ptrn-rest-val-obj.js"),
    );
  });
  it(
    "fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/fn-name-arrow.js"),
  );
  it(
    "fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/fn-name-class.js"),
  );
  it(
    "fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/fn-name-cover.js"),
  );
  it(
    "fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/fn-name-fn.js"),
  );
  it(
    "fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/fn-name-gen.js"),
  );
  it(
    "function-local-closure-get-before-initialization.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/const/function-local-closure-get-before-initialization.js",
    ),
  );
  it(
    "function-local-use-before-initialization-in-declaration-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/const/function-local-use-before-initialization-in-declaration-statement.js",
    ),
  );
  it(
    "function-local-use-before-initialization-in-prior-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/const/function-local-use-before-initialization-in-prior-statement.js",
    ),
  );
  it(
    "global-closure-get-before-initialization.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/global-closure-get-before-initialization.js"),
  );
  it(
    "global-use-before-initialization-in-declaration-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/const/global-use-before-initialization-in-declaration-statement.js",
    ),
  );
  it(
    "global-use-before-initialization-in-prior-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/const/global-use-before-initialization-in-prior-statement.js",
    ),
  );
  it(
    "redeclaration-error-from-within-strict-mode-function-const.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/statements/const/redeclaration-error-from-within-strict-mode-function-const.js",
    ),
  );
  it(
    "static-init-await-binding-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/const/static-init-await-binding-invalid.js"),
  );
  it(
    "static-init-await-binding-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/const/static-init-await-binding-valid.js"),
  );
  describe("syntax", () => {
    it(
      "block-scope-syntax-const-declarations-mixed-with-without-initialiser.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/block-scope-syntax-const-declarations-mixed-with-without-initialiser.js",
      ),
    );
    it(
      "block-scope-syntax-const-declarations-mixed-without-with-initialiser.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/block-scope-syntax-const-declarations-mixed-without-with-initialiser.js",
      ),
    );
    it(
      "block-scope-syntax-const-declarations-without-initialiser.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/block-scope-syntax-const-declarations-without-initialiser.js",
      ),
    );
    it(
      "const-declaring-let-split-across-two-lines.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/const-declaring-let-split-across-two-lines.js",
      ),
    );
    it(
      "const-invalid-assignment-next-expression-for.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/const/syntax/const-invalid-assignment-next-expression-for.js",
      ),
    );
    it(
      "const-invalid-assignment-statement-body-for-in.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/const/syntax/const-invalid-assignment-statement-body-for-in.js",
      ),
    );
    it(
      "const-invalid-assignment-statement-body-for-of.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/const/syntax/const-invalid-assignment-statement-body-for-of.js",
      ),
    );
    it(
      "const-outer-inner-let-bindings.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/syntax/const-outer-inner-let-bindings.js"),
    );
    it(
      "const.js",
      { tags: ["known-passing"] },
      createTestHandler("language/statements/const/syntax/const.js"),
    );
    it(
      "with-initializer-case-expression-statement-list.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/const/syntax/with-initializer-case-expression-statement-list.js",
      ),
    );
    it(
      "with-initializer-default-statement-list.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/statements/const/syntax/with-initializer-default-statement-list.js",
      ),
    );
    it(
      "with-initializer-do-statement-while-expression.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/with-initializer-do-statement-while-expression.js",
      ),
    );
    it(
      "with-initializer-for-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/syntax/with-initializer-for-statement.js"),
    );
    it(
      "with-initializer-if-expression-statement-else-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/with-initializer-if-expression-statement-else-statement.js",
      ),
    );
    it(
      "with-initializer-if-expression-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/with-initializer-if-expression-statement.js",
      ),
    );
    it(
      "with-initializer-label-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/syntax/with-initializer-label-statement.js"),
    );
    it(
      "with-initializer-while-expression-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/with-initializer-while-expression-statement.js",
      ),
    );
    it(
      "without-initializer-case-expression-statement-list.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/without-initializer-case-expression-statement-list.js",
      ),
    );
    it(
      "without-initializer-default-statement-list.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/without-initializer-default-statement-list.js",
      ),
    );
    it(
      "without-initializer-do-statement-while-expression.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/without-initializer-do-statement-while-expression.js",
      ),
    );
    it(
      "without-initializer-for-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/syntax/without-initializer-for-statement.js"),
    );
    it(
      "without-initializer-if-expression-statement-else-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/without-initializer-if-expression-statement-else-statement.js",
      ),
    );
    it(
      "without-initializer-if-expression-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/without-initializer-if-expression-statement.js",
      ),
    );
    it(
      "without-initializer-label-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("language/statements/const/syntax/without-initializer-label-statement.js"),
    );
    it(
      "without-initializer-while-expression-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/statements/const/syntax/without-initializer-while-expression-statement.js",
      ),
    );
  });
});
