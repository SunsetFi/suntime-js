import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("new", () => {
  it(
    "S11.2.2_A1.1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A1.1.js"),
  );
  it(
    "S11.2.2_A1.2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A1.2.js"),
  );
  it(
    "S11.2.2_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A2.js"),
  );
  it(
    "S11.2.2_A3_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A3_T1.js"),
  );
  it(
    "S11.2.2_A3_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A3_T2.js"),
  );
  it(
    "S11.2.2_A3_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A3_T3.js"),
  );
  it(
    "S11.2.2_A3_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A3_T4.js"),
  );
  it(
    "S11.2.2_A3_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A3_T5.js"),
  );
  it(
    "S11.2.2_A4_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A4_T1.js"),
  );
  it(
    "S11.2.2_A4_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A4_T2.js"),
  );
  it(
    "S11.2.2_A4_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A4_T3.js"),
  );
  it(
    "S11.2.2_A4_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A4_T4.js"),
  );
  it(
    "S11.2.2_A4_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/S11.2.2_A4_T5.js"),
  );
  it(
    "ctorExpr-fn-ref-before-args-eval-fn-wrapup.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/ctorExpr-fn-ref-before-args-eval-fn-wrapup.js"),
  );
  it(
    "ctorExpr-fn-ref-before-args-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/ctorExpr-fn-ref-before-args-eval.js"),
  );
  it(
    "ctorExpr-isCtor-after-args-eval-fn-wrapup.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/ctorExpr-isCtor-after-args-eval-fn-wrapup.js"),
  );
  it(
    "ctorExpr-isCtor-after-args-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/ctorExpr-isCtor-after-args-eval.js"),
  );
  it(
    "non-ctor-err-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/non-ctor-err-realm.js"),
  );
  it(
    "spread-err-mult-err-expr-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-expr-throws.js"),
  );
  it(
    "spread-err-mult-err-iter-get-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-iter-get-value.js"),
  );
  it(
    "spread-err-mult-err-itr-get-call.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-itr-get-call.js"),
  );
  it(
    "spread-err-mult-err-itr-get-get.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-itr-get-get.js"),
  );
  it(
    "spread-err-mult-err-itr-step.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-itr-step.js"),
  );
  it(
    "spread-err-mult-err-itr-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-itr-value.js"),
  );
  it(
    "spread-err-mult-err-obj-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-obj-unresolvable.js"),
  );
  it(
    "spread-err-mult-err-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-mult-err-unresolvable.js"),
  );
  it(
    "spread-err-sngl-err-expr-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-expr-throws.js"),
  );
  it(
    "spread-err-sngl-err-itr-get-call.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-itr-get-call.js"),
  );
  it(
    "spread-err-sngl-err-itr-get-get.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-itr-get-get.js"),
  );
  it(
    "spread-err-sngl-err-itr-get-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-itr-get-value.js"),
  );
  it(
    "spread-err-sngl-err-itr-step.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-itr-step.js"),
  );
  it(
    "spread-err-sngl-err-itr-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-itr-value.js"),
  );
  it(
    "spread-err-sngl-err-obj-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-obj-unresolvable.js"),
  );
  it(
    "spread-err-sngl-err-unresolvable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-err-sngl-err-unresolvable.js"),
  );
  it(
    "spread-mult-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-mult-empty.js"),
  );
  it(
    "spread-mult-expr.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-mult-expr.js"),
  );
  it(
    "spread-mult-iter.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-mult-iter.js"),
  );
  it(
    "spread-mult-literal.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-mult-literal.js"),
  );
  it(
    "spread-mult-obj-ident.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-mult-obj-ident.js"),
  );
  it(
    "spread-mult-obj-null.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-mult-obj-null.js"),
  );
  it(
    "spread-mult-obj-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-mult-obj-undefined.js"),
  );
  it(
    "spread-obj-getter-descriptor.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-getter-descriptor.js"),
  );
  it(
    "spread-obj-getter-init.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-getter-init.js"),
  );
  it(
    "spread-obj-manipulate-outter-obj-in-getter.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-manipulate-outter-obj-in-getter.js"),
  );
  it(
    "spread-obj-mult-spread-getter.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-mult-spread-getter.js"),
  );
  it(
    "spread-obj-mult-spread.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-mult-spread.js"),
  );
  it(
    "spread-obj-null.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-null.js"),
  );
  it(
    "spread-obj-override-immutable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-override-immutable.js"),
  );
  it(
    "spread-obj-overrides-prev-properties.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-overrides-prev-properties.js"),
  );
  it(
    "spread-obj-skip-non-enumerable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-skip-non-enumerable.js"),
  );
  it(
    "spread-obj-spread-order.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-spread-order.js"),
  );
  it(
    "spread-obj-symbol-property.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-symbol-property.js"),
  );
  it(
    "spread-obj-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-undefined.js"),
  );
  it(
    "spread-obj-with-overrides.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-obj-with-overrides.js"),
  );
  it(
    "spread-sngl-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-sngl-empty.js"),
  );
  it(
    "spread-sngl-expr.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-sngl-expr.js"),
  );
  it(
    "spread-sngl-iter.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-sngl-iter.js"),
  );
  it(
    "spread-sngl-literal.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-sngl-literal.js"),
  );
  it(
    "spread-sngl-obj-ident.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new/spread-sngl-obj-ident.js"),
  );
});
