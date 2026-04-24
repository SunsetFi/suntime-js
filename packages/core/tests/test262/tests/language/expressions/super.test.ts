import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("super", () => {
  it(
    "call-arg-evaluation-err.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-arg-evaluation-err.js"),
  );
  it(
    "call-bind-this-value-twice.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-bind-this-value-twice.js"),
  );
  it(
    "call-bind-this-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-bind-this-value.js"),
  );
  it(
    "call-construct-error.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-construct-error.js"),
  );
  it(
    "call-construct-invocation.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-construct-invocation.js"),
  );
  it(
    "call-expr-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-expr-value.js"),
  );
  it(
    "call-poisoned-underscore-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-poisoned-underscore-proto.js"),
  );
  it(
    "call-proto-not-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-proto-not-ctor.js"),
  );
  it(
    "call-spread-err-mult-err-expr-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-expr-throws.js"),
  );
  it(
    "call-spread-err-mult-err-iter-get-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-iter-get-value.js"),
  );
  it(
    "call-spread-err-mult-err-itr-get-call.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-itr-get-call.js"),
  );
  it(
    "call-spread-err-mult-err-itr-get-get.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-itr-get-get.js"),
  );
  it(
    "call-spread-err-mult-err-itr-step.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-itr-step.js"),
  );
  it(
    "call-spread-err-mult-err-itr-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-itr-value.js"),
  );
  it(
    "call-spread-err-mult-err-obj-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-obj-unresolvable.js"),
  );
  it(
    "call-spread-err-mult-err-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-mult-err-unresolvable.js"),
  );
  it(
    "call-spread-err-sngl-err-expr-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-expr-throws.js"),
  );
  it(
    "call-spread-err-sngl-err-itr-get-call.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-itr-get-call.js"),
  );
  it(
    "call-spread-err-sngl-err-itr-get-get.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-itr-get-get.js"),
  );
  it(
    "call-spread-err-sngl-err-itr-get-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-itr-get-value.js"),
  );
  it(
    "call-spread-err-sngl-err-itr-step.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-itr-step.js"),
  );
  it(
    "call-spread-err-sngl-err-itr-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-itr-value.js"),
  );
  it(
    "call-spread-err-sngl-err-obj-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-obj-unresolvable.js"),
  );
  it(
    "call-spread-err-sngl-err-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-err-sngl-err-unresolvable.js"),
  );
  it(
    "call-spread-mult-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-mult-empty.js"),
  );
  it(
    "call-spread-mult-expr.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-mult-expr.js"),
  );
  it(
    "call-spread-mult-iter.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-mult-iter.js"),
  );
  it(
    "call-spread-mult-literal.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-mult-literal.js"),
  );
  it(
    "call-spread-mult-obj-ident.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-mult-obj-ident.js"),
  );
  it(
    "call-spread-mult-obj-null.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-mult-obj-null.js"),
  );
  it(
    "call-spread-mult-obj-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-mult-obj-undefined.js"),
  );
  it(
    "call-spread-obj-getter-descriptor.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-getter-descriptor.js"),
  );
  it(
    "call-spread-obj-getter-init.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-getter-init.js"),
  );
  it(
    "call-spread-obj-manipulate-outter-obj-in-getter.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/super/call-spread-obj-manipulate-outter-obj-in-getter.js",
    ),
  );
  it(
    "call-spread-obj-mult-spread-getter.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-mult-spread-getter.js"),
  );
  it(
    "call-spread-obj-mult-spread.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-mult-spread.js"),
  );
  it(
    "call-spread-obj-null.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-null.js"),
  );
  it(
    "call-spread-obj-override-immutable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-override-immutable.js"),
  );
  it(
    "call-spread-obj-overrides-prev-properties.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-overrides-prev-properties.js"),
  );
  it(
    "call-spread-obj-skip-non-enumerable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-skip-non-enumerable.js"),
  );
  it(
    "call-spread-obj-spread-order.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-spread-order.js"),
  );
  it(
    "call-spread-obj-symbol-property.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-symbol-property.js"),
  );
  it(
    "call-spread-obj-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-undefined.js"),
  );
  it(
    "call-spread-obj-with-overrides.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-obj-with-overrides.js"),
  );
  it(
    "call-spread-sngl-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-sngl-empty.js"),
  );
  it(
    "call-spread-sngl-expr.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-sngl-expr.js"),
  );
  it(
    "call-spread-sngl-iter.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-sngl-iter.js"),
  );
  it(
    "call-spread-sngl-literal.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-sngl-literal.js"),
  );
  it(
    "call-spread-sngl-obj-ident.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/call-spread-sngl-obj-ident.js"),
  );
  it(
    "prop-dot-cls-null-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-cls-null-proto.js"),
  );
  it(
    "prop-dot-cls-ref-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-cls-ref-strict.js"),
  );
  it(
    "prop-dot-cls-ref-this.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-cls-ref-this.js"),
  );
  it(
    "prop-dot-cls-this-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-cls-this-uninit.js"),
  );
  it(
    "prop-dot-cls-val-from-arrow.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-cls-val-from-arrow.js"),
  );
  it(
    "prop-dot-cls-val-from-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-cls-val-from-eval.js"),
  );
  it(
    "prop-dot-cls-val.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-cls-val.js"),
  );
  it(
    "prop-dot-obj-null-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-obj-null-proto.js"),
  );
  it(
    "prop-dot-obj-ref-non-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-obj-ref-non-strict.js"),
  );
  it(
    "prop-dot-obj-ref-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-obj-ref-strict.js"),
  );
  it(
    "prop-dot-obj-ref-this.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-obj-ref-this.js"),
  );
  it(
    "prop-dot-obj-val-from-arrow.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-obj-val-from-arrow.js"),
  );
  it(
    "prop-dot-obj-val-from-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-obj-val-from-eval.js"),
  );
  it(
    "prop-dot-obj-val.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-dot-obj-val.js"),
  );
  it(
    "prop-expr-cls-err.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-err.js"),
  );
  it(
    "prop-expr-cls-key-err.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-key-err.js"),
  );
  it(
    "prop-expr-cls-null-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-null-proto.js"),
  );
  it(
    "prop-expr-cls-ref-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-ref-strict.js"),
  );
  it(
    "prop-expr-cls-ref-this.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-ref-this.js"),
  );
  it(
    "prop-expr-cls-this-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-this-uninit.js"),
  );
  it(
    "prop-expr-cls-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-unresolvable.js"),
  );
  it(
    "prop-expr-cls-val-from-arrow.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-val-from-arrow.js"),
  );
  it(
    "prop-expr-cls-val-from-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-val-from-eval.js"),
  );
  it(
    "prop-expr-cls-val.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-cls-val.js"),
  );
  it(
    "prop-expr-getsuperbase-before-topropertykey-getvalue.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/super/prop-expr-getsuperbase-before-topropertykey-getvalue.js",
    ),
  );
  it(
    "prop-expr-getsuperbase-before-topropertykey-putvalue-compound-assign.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/super/prop-expr-getsuperbase-before-topropertykey-putvalue-compound-assign.js",
    ),
  );
  it(
    "prop-expr-getsuperbase-before-topropertykey-putvalue-increment.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/super/prop-expr-getsuperbase-before-topropertykey-putvalue-increment.js",
    ),
  );
  it(
    "prop-expr-getsuperbase-before-topropertykey-putvalue.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/super/prop-expr-getsuperbase-before-topropertykey-putvalue.js",
    ),
  );
  it(
    "prop-expr-obj-err.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-err.js"),
  );
  it(
    "prop-expr-obj-key-err.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-key-err.js"),
  );
  it(
    "prop-expr-obj-null-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-null-proto.js"),
  );
  it(
    "prop-expr-obj-ref-non-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-ref-non-strict.js"),
  );
  it(
    "prop-expr-obj-ref-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-ref-strict.js"),
  );
  it(
    "prop-expr-obj-ref-this.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-ref-this.js"),
  );
  it(
    "prop-expr-obj-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-unresolvable.js"),
  );
  it(
    "prop-expr-obj-val-from-arrow.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-val-from-arrow.js"),
  );
  it(
    "prop-expr-obj-val-from-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-val-from-eval.js"),
  );
  it(
    "prop-expr-obj-val.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-obj-val.js"),
  );
  it(
    "prop-expr-uninitialized-this-getvalue.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-uninitialized-this-getvalue.js"),
  );
  it(
    "prop-expr-uninitialized-this-putvalue-compound-assign.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/super/prop-expr-uninitialized-this-putvalue-compound-assign.js",
    ),
  );
  it(
    "prop-expr-uninitialized-this-putvalue-increment.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/super/prop-expr-uninitialized-this-putvalue-increment.js",
    ),
  );
  it(
    "prop-expr-uninitialized-this-putvalue.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-expr-uninitialized-this-putvalue.js"),
  );
  it(
    "prop-poisoned-underscore-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/prop-poisoned-underscore-proto.js"),
  );
  it(
    "realm.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/realm.js"),
  );
  it(
    "super-reference-resolution.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/super/super-reference-resolution.js"),
  );
});
