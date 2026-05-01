import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-local-closure-get-before-initialization.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/block-local-closure-get-before-initialization.js"),
);

it(
  "block-local-closure-set-before-initialization.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/block-local-closure-set-before-initialization.js"),
);

it(
  "block-local-use-before-initialization-in-declaration-statement.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/let/block-local-use-before-initialization-in-declaration-statement.js",
  ),
);

it(
  "block-local-use-before-initialization-in-prior-statement.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/let/block-local-use-before-initialization-in-prior-statement.js",
  ),
);

it(
  "cptn-value.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/cptn-value.js"),
);

describe("dstr", () => {
  it(
    "ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-init-iter-close.js"),
  );
  it(
    "ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-init-iter-get-err-array-prototype.js"),
  );
  it(
    "ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-init-iter-get-err.js"),
  );
  it(
    "ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-init-iter-no-close.js"),
  );
  it(
    "ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-name-iter-val.js"),
  );
  it(
    "ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elem-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elem-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elision-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elision-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-empty-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-empty-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-rest-init.js"),
  );
  it(
    "ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-rest-iter.js"),
  );
  it(
    "ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-val-null.js"),
  );
  it(
    "ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-exhausted.js"),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-class.js"),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"),
  );
  it(
    "ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"),
  );
  it(
    "ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-hole.js"),
  );
  it(
    "ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-skipped.js"),
  );
  it(
    "ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-throws.js"),
  );
  it(
    "ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-undef.js"),
  );
  it(
    "ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-unresolvable.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-complete.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-done.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-step-err.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-val-err.js"),
  );
  it(
    "ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-val.js"),
  );
  it(
    "ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-id-init.js"),
  );
  it(
    "ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-id.js"),
  );
  it(
    "ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-prop-id-init.js"),
  );
  it(
    "ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-prop-id.js"),
  );
  it(
    "ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-val-null.js"),
  );
  it(
    "ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-val-undef.js"),
  );
  it(
    "ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elision-exhausted.js"),
  );
  it(
    "ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elision-step-err.js"),
  );
  it(
    "ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-elision.js"),
  );
  it(
    "ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-empty.js"),
  );
  it(
    "ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-elision.js"),
  );
  it(
    "ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-direct.js"),
  );
  it(
    "ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-elision-next-err.js"),
  );
  it(
    "ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-elision.js"),
  );
  it(
    "ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-exhausted.js"),
  );
  it(
    "ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-iter-step-err.js"),
  );
  it(
    "ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-iter-val-err.js"),
  );
  it(
    "ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id.js"),
  );
  it(
    "ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-init-ary.js"),
  );
  it(
    "ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-init-id.js"),
  );
  it(
    "ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-init-obj.js"),
  );
  it(
    "ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-not-final-ary.js"),
  );
  it(
    "ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-not-final-id.js"),
  );
  it(
    "ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-not-final-obj.js"),
  );
  it(
    "ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-obj-id.js"),
  );
  it(
    "ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/ary-ptrn-rest-obj-prop-id.js"),
  );
  it(
    "obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-init-null.js"),
  );
  it(
    "obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-init-undefined.js"),
  );
  it(
    "obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-empty.js"),
  );
  it(
    "obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-get-value-err.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-arrow.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-class.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-cover.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-fn.js"),
  );
  it(
    "obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-gen.js"),
  );
  it(
    "obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-skipped.js"),
  );
  it(
    "obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-throws.js"),
  );
  it(
    "obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-unresolvable.js"),
  );
  it(
    "obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-id-trailing-comma.js"),
  );
  it(
    "obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-list-err.js"),
  );
  it(
    "obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary-init.js"),
  );
  it(
    "obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary-trailing-comma.js"),
  );
  it(
    "obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary-value-null.js"),
  );
  it(
    "obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary.js"),
  );
  it(
    "obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-eval-err.js"),
  );
  it(
    "obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-get-value-err.js"),
  );
  it(
    "obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init-skipped.js"),
  );
  it(
    "obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init-throws.js"),
  );
  it(
    "obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init-unresolvable.js"),
  );
  it(
    "obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init.js"),
  );
  it(
    "obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-trailing-comma.js"),
  );
  it(
    "obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id.js"),
  );
  it(
    "obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj-init.js"),
  );
  it(
    "obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj-value-null.js"),
  );
  it(
    "obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj-value-undef.js"),
  );
  it(
    "obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj.js"),
  );
  it(
    "obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-rest-getter.js"),
  );
  it(
    "obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-rest-skip-non-enumerable.js"),
  );
  it(
    "obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/dstr/obj-ptrn-rest-val-obj.js"),
  );
});

it(
  "fn-name-arrow.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/fn-name-arrow.js"),
);

it(
  "fn-name-class.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/fn-name-class.js"),
);

it(
  "fn-name-cover.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/fn-name-cover.js"),
);

it(
  "fn-name-fn.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/fn-name-fn.js"),
);

it(
  "fn-name-gen.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/fn-name-gen.js"),
);

it(
  "function-local-closure-get-before-initialization.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/function-local-closure-get-before-initialization.js"),
);

it(
  "function-local-closure-set-before-initialization.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/function-local-closure-set-before-initialization.js"),
);

it(
  "function-local-use-before-initialization-in-declaration-statement.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/let/function-local-use-before-initialization-in-declaration-statement.js",
  ),
);

it(
  "function-local-use-before-initialization-in-prior-statement.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/let/function-local-use-before-initialization-in-prior-statement.js",
  ),
);

it(
  "global-closure-get-before-initialization.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/global-closure-get-before-initialization.js"),
);

it(
  "global-closure-set-before-initialization.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/global-closure-set-before-initialization.js"),
);

it(
  "global-use-before-initialization-in-declaration-statement.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/let/global-use-before-initialization-in-declaration-statement.js",
  ),
);

it(
  "global-use-before-initialization-in-prior-statement.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/let/global-use-before-initialization-in-prior-statement.js",
  ),
);

it(
  "redeclaration-error-from-within-strict-mode-function.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/let/redeclaration-error-from-within-strict-mode-function.js",
  ),
);

it(
  "static-init-await-binding-invalid.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/static-init-await-binding-invalid.js"),
);

it(
  "static-init-await-binding-valid.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/let/static-init-await-binding-valid.js"),
);

describe("syntax", () => {
  it(
    "escaped-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/escaped-let.js"),
  );
  it(
    "identifier-let-allowed-as-lefthandside-expression-strict.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/identifier-let-allowed-as-lefthandside-expression-strict.js",
    ),
  );
  it(
    "identifier-let-disallowed-as-boundname.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/identifier-let-disallowed-as-boundname.js"),
  );
  it(
    "let-closure-inside-condition.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let-closure-inside-condition.js"),
  );
  it(
    "let-closure-inside-initialization.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let-closure-inside-initialization.js"),
  );
  it(
    "let-closure-inside-next-expression.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let-closure-inside-next-expression.js"),
  );
  it(
    "let-iteration-variable-is-freshly-allocated-for-each-iteration-multi-let-binding.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/let-iteration-variable-is-freshly-allocated-for-each-iteration-multi-let-binding.js",
    ),
  );
  it(
    "let-iteration-variable-is-freshly-allocated-for-each-iteration-single-let-binding.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/let-iteration-variable-is-freshly-allocated-for-each-iteration-single-let-binding.js",
    ),
  );
  it(
    "let-let-declaration-split-across-two-lines.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/let-let-declaration-split-across-two-lines.js",
    ),
  );
  it(
    "let-let-declaration-with-initializer-split-across-two-lines.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/let-let-declaration-with-initializer-split-across-two-lines.js",
    ),
  );
  it(
    "let-newline-await-in-normal-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let-newline-await-in-normal-function.js"),
  );
  it(
    "let-newline-yield-in-generator-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let-newline-yield-in-generator-function.js"),
  );
  it(
    "let-newline-yield-in-normal-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let-newline-yield-in-normal-function.js"),
  );
  it(
    "let-outer-inner-let-bindings.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let-outer-inner-let-bindings.js"),
  );
  it(
    "let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/let/syntax/let.js"),
  );
  it(
    "with-initialisers-in-statement-positions-case-expression-statement-list.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-case-expression-statement-list.js",
    ),
  );
  it(
    "with-initialisers-in-statement-positions-default-statement-list.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-default-statement-list.js",
    ),
  );
  it(
    "with-initialisers-in-statement-positions-do-statement-while-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-do-statement-while-expression.js",
    ),
  );
  it(
    "with-initialisers-in-statement-positions-for-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-for-statement.js",
    ),
  );
  it(
    "with-initialisers-in-statement-positions-if-expression-statement-else-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-if-expression-statement-else-statement.js",
    ),
  );
  it(
    "with-initialisers-in-statement-positions-if-expression-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-if-expression-statement.js",
    ),
  );
  it(
    "with-initialisers-in-statement-positions-label-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-label-statement.js",
    ),
  );
  it(
    "with-initialisers-in-statement-positions-while-expression-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/with-initialisers-in-statement-positions-while-expression-statement.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-case-expression-statement-list.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-case-expression-statement-list.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-default-statement-list.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-default-statement-list.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-do-statement-while-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-do-statement-while-expression.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-for-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-for-statement.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-if-expression-statement-else-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-if-expression-statement-else-statement.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-if-expression-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-if-expression-statement.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-label-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-label-statement.js",
    ),
  );
  it(
    "without-initialisers-in-statement-positions-while-expression-statement.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/let/syntax/without-initialisers-in-statement-positions-while-expression-statement.js",
    ),
  );
});
