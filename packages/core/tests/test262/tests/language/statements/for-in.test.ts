import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "12.6.4-1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/12.6.4-1.js"),
);

it(
  "12.6.4-2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/12.6.4-2.js"),
);

it(
  "S12.6.4_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A1.js"),
);

it(
  "S12.6.4_A14_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A14_T2.js"),
);

it(
  "S12.6.4_A15.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A15.js"),
);

it(
  "S12.6.4_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A2.js"),
);

it(
  "S12.6.4_A3.1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A3.1.js"),
);

it(
  "S12.6.4_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A3.js"),
);

it(
  "S12.6.4_A4.1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A4.1.js"),
);

it(
  "S12.6.4_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A4.js"),
);

it(
  "S12.6.4_A5.1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A5.1.js"),
);

it(
  "S12.6.4_A5.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A5.js"),
);

it(
  "S12.6.4_A6.1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A6.1.js"),
);

it(
  "S12.6.4_A6.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A6.js"),
);

it(
  "S12.6.4_A7_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A7_T1.js"),
);

it(
  "S12.6.4_A7_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/S12.6.4_A7_T2.js"),
);

it(
  "cptn-decl-abrupt-empty.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-decl-abrupt-empty.js"),
);

it(
  "cptn-decl-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-decl-itr.js"),
);

it(
  "cptn-decl-skip-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-decl-skip-itr.js"),
);

it(
  "cptn-decl-zero-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-decl-zero-itr.js"),
);

it(
  "cptn-expr-abrupt-empty.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-expr-abrupt-empty.js"),
);

it(
  "cptn-expr-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-expr-itr.js"),
);

it(
  "cptn-expr-skip-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-expr-skip-itr.js"),
);

it(
  "cptn-expr-zero-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/cptn-expr-zero-itr.js"),
);

it(
  "decl-async-fun.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/decl-async-fun.js"),
);

it(
  "decl-async-gen.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/decl-async-gen.js"),
);

it(
  "decl-cls.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/decl-cls.js"),
);

it(
  "decl-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/decl-const.js"),
);

it(
  "decl-fun.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/decl-fun.js"),
);

it(
  "decl-gen.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/decl-gen.js"),
);

it(
  "decl-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/decl-let.js"),
);

describe("dstr", () => {
  it(
    "array-elem-init-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-elem-init-yield-ident-invalid.js"),
  );
  it(
    "array-elem-nested-array-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-elem-nested-array-invalid.js"),
  );
  it(
    "array-elem-nested-array-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/array-elem-nested-array-yield-ident-invalid.js",
    ),
  );
  it(
    "array-elem-nested-memberexpr-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/array-elem-nested-memberexpr-optchain-prop-ref-init.js",
    ),
  );
  it(
    "array-elem-nested-obj-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-elem-nested-obj-invalid.js"),
  );
  it(
    "array-elem-nested-obj-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/array-elem-nested-obj-yield-ident-invalid.js",
    ),
  );
  it(
    "array-elem-put-obj-literal-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/array-elem-put-obj-literal-optchain-prop-ref-init.js",
    ),
  );
  it(
    "array-elem-target-simple-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-elem-target-simple-strict.js"),
  );
  it(
    "array-elem-target-yield-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-elem-target-yield-invalid.js"),
  );
  it(
    "array-rest-before-element.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-before-element.js"),
  );
  it(
    "array-rest-before-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-before-elision.js"),
  );
  it(
    "array-rest-before-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-before-rest.js"),
  );
  it(
    "array-rest-elision-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-elision-invalid.js"),
  );
  it(
    "array-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-init.js"),
  );
  it(
    "array-rest-nested-array-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-nested-array-invalid.js"),
  );
  it(
    "array-rest-nested-array-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/array-rest-nested-array-yield-ident-invalid.js",
    ),
  );
  it(
    "array-rest-nested-obj-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-nested-obj-invalid.js"),
  );
  it(
    "array-rest-nested-obj-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/array-rest-nested-obj-yield-ident-invalid.js",
    ),
  );
  it(
    "array-rest-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/array-rest-yield-ident-invalid.js"),
  );
  it(
    "obj-id-identifier-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-id-identifier-yield-expr.js"),
  );
  it(
    "obj-id-identifier-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-id-identifier-yield-ident-invalid.js"),
  );
  it(
    "obj-id-init-simple-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-id-init-simple-strict.js"),
  );
  it(
    "obj-id-init-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-id-init-yield-ident-invalid.js"),
  );
  it(
    "obj-id-simple-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-id-simple-strict.js"),
  );
  it(
    "obj-prop-elem-init-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-prop-elem-init-yield-ident-invalid.js"),
  );
  it(
    "obj-prop-elem-target-memberexpr-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/obj-prop-elem-target-memberexpr-optchain-prop-ref-init.js",
    ),
  );
  it(
    "obj-prop-elem-target-obj-literal-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/obj-prop-elem-target-obj-literal-optchain-prop-ref-init.js",
    ),
  );
  it(
    "obj-prop-elem-target-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/obj-prop-elem-target-yield-ident-invalid.js",
    ),
  );
  it(
    "obj-prop-nested-array-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-prop-nested-array-invalid.js"),
  );
  it(
    "obj-prop-nested-array-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-in/dstr/obj-prop-nested-array-yield-ident-invalid.js",
    ),
  );
  it(
    "obj-prop-nested-obj-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-prop-nested-obj-invalid.js"),
  );
  it(
    "obj-prop-nested-obj-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-prop-nested-obj-yield-ident-invalid.js"),
  );
  it(
    "obj-rest-not-last-element-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-in/dstr/obj-rest-not-last-element-invalid.js"),
  );
});

it(
  "head-const-bound-names-dup.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-const-bound-names-dup.js"),
);

it(
  "head-const-bound-names-fordecl-tdz.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-const-bound-names-fordecl-tdz.js"),
);

it(
  "head-const-bound-names-in-stmt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-const-bound-names-in-stmt.js"),
);

it(
  "head-const-bound-names-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-const-bound-names-let.js"),
);

it(
  "head-const-fresh-binding-per-iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-const-fresh-binding-per-iteration.js"),
);

it(
  "head-decl-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-decl-expr.js"),
);

it(
  "head-expr-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-expr-expr.js"),
);

it(
  "head-let-bound-names-dup.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-let-bound-names-dup.js"),
);

it(
  "head-let-bound-names-fordecl-tdz.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-let-bound-names-fordecl-tdz.js"),
);

it(
  "head-let-bound-names-in-stmt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-let-bound-names-in-stmt.js"),
);

it(
  "head-let-bound-names-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-let-bound-names-let.js"),
);

it(
  "head-let-destructuring.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-let-destructuring.js"),
);

it(
  "head-let-fresh-binding-per-iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-let-fresh-binding-per-iteration.js"),
);

it(
  "head-lhs-cover-non-asnmt-trgt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-lhs-cover-non-asnmt-trgt.js"),
);

it(
  "head-lhs-cover.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-lhs-cover.js"),
);

it(
  "head-lhs-invalid-asnmt-ptrn-ary.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-lhs-invalid-asnmt-ptrn-ary.js"),
);

it(
  "head-lhs-invalid-asnmt-ptrn-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-lhs-invalid-asnmt-ptrn-obj.js"),
);

it(
  "head-lhs-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-lhs-let.js"),
);

it(
  "head-lhs-member.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-lhs-member.js"),
);

it(
  "head-lhs-non-asnmt-trgt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-lhs-non-asnmt-trgt.js"),
);

it(
  "head-var-bound-names-dup.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-var-bound-names-dup.js"),
);

it(
  "head-var-bound-names-in-stmt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-var-bound-names-in-stmt.js"),
);

it(
  "head-var-bound-names-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-var-bound-names-let.js"),
);

it(
  "head-var-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/head-var-expr.js"),
);

it(
  "identifier-let-allowed-as-lefthandside-expression-not-strict.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/for-in/identifier-let-allowed-as-lefthandside-expression-not-strict.js",
  ),
);

it(
  "labelled-fn-stmt-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/labelled-fn-stmt-const.js"),
);

it(
  "labelled-fn-stmt-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/labelled-fn-stmt-let.js"),
);

it(
  "labelled-fn-stmt-lhs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/labelled-fn-stmt-lhs.js"),
);

it(
  "labelled-fn-stmt-var.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/labelled-fn-stmt-var.js"),
);

it(
  "let-array-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/let-array-with-newline.js"),
);

it(
  "let-block-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/let-block-with-newline.js"),
);

it(
  "let-identifier-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/let-identifier-with-newline.js"),
);

it(
  "order-after-define-property.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/order-after-define-property.js"),
);

it(
  "order-enumerable-shadowed.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/order-enumerable-shadowed.js"),
);

it(
  "order-property-added.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/order-property-added.js"),
);

it(
  "order-property-on-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/order-property-on-prototype.js"),
);

it(
  "order-simple-object.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/order-simple-object.js"),
);

it.skip("resizable-buffer.js", () => {
  /* Ignored Test */
});

it(
  "scope-body-lex-boundary.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/scope-body-lex-boundary.js"),
);

it(
  "scope-body-lex-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/scope-body-lex-close.js"),
);

it(
  "scope-body-lex-open.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/scope-body-lex-open.js"),
);

it(
  "scope-body-var-none.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/scope-body-var-none.js"),
);

it(
  "scope-head-lex-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/scope-head-lex-close.js"),
);

it(
  "scope-head-lex-open.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/scope-head-lex-open.js"),
);

it(
  "scope-head-var-none.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/scope-head-var-none.js"),
);

it(
  "var-arguments-fn-strict-init.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/var-arguments-fn-strict-init.js"),
);

it(
  "var-arguments-fn-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/var-arguments-fn-strict.js"),
);

it(
  "var-arguments-strict-init.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/var-arguments-strict-init.js"),
);

it(
  "var-arguments-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/var-arguments-strict.js"),
);

it(
  "var-eval-strict-init.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/var-eval-strict-init.js"),
);

it(
  "var-eval-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-in/var-eval-strict.js"),
);
