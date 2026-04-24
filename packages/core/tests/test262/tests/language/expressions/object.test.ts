import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("object", () => {
it("11.1.5-0-1.js", createTestHandler("language/expressions/object/11.1.5-0-1.js"));
it("11.1.5-0-2.js", createTestHandler("language/expressions/object/11.1.5-0-2.js"));
it("11.1.5-1gs.js", createTestHandler("language/expressions/object/11.1.5-1gs.js"));
it("11.1.5-2gs.js", createTestHandler("language/expressions/object/11.1.5-2gs.js"));
it("11.1.5_3-3-1.js", createTestHandler("language/expressions/object/11.1.5_3-3-1.js"));
it("11.1.5_4-4-a-3.js", createTestHandler("language/expressions/object/11.1.5_4-4-a-3.js"));
it("11.1.5_4-4-b-1.js", createTestHandler("language/expressions/object/11.1.5_4-4-b-1.js"));
it("11.1.5_4-5-1.js", createTestHandler("language/expressions/object/11.1.5_4-5-1.js"));
it("11.1.5_5-4-1.js", createTestHandler("language/expressions/object/11.1.5_5-4-1.js"));
it("11.1.5_6-3-1.js", createTestHandler("language/expressions/object/11.1.5_6-3-1.js"));
it("11.1.5_6-3-2.js", createTestHandler("language/expressions/object/11.1.5_6-3-2.js"));
it("11.1.5_7-3-1.js", createTestHandler("language/expressions/object/11.1.5_7-3-1.js"));
it("11.1.5_7-3-2.js", createTestHandler("language/expressions/object/11.1.5_7-3-2.js"));
it("S11.1.5_A1.1.js", createTestHandler("language/expressions/object/S11.1.5_A1.1.js"));
it("S11.1.5_A1.2.js", createTestHandler("language/expressions/object/S11.1.5_A1.2.js"));
it("S11.1.5_A1.3.js", createTestHandler("language/expressions/object/S11.1.5_A1.3.js"));
it("S11.1.5_A1.4.js", createTestHandler("language/expressions/object/S11.1.5_A1.4.js"));
it("S11.1.5_A2.js", createTestHandler("language/expressions/object/S11.1.5_A2.js"));
it("S11.1.5_A3.js", createTestHandler("language/expressions/object/S11.1.5_A3.js"));
it("S11.1.5_A4.1.js", createTestHandler("language/expressions/object/S11.1.5_A4.1.js"));
it("S11.1.5_A4.2.js", createTestHandler("language/expressions/object/S11.1.5_A4.2.js"));
it("S11.1.5_A4.3.js", createTestHandler("language/expressions/object/S11.1.5_A4.3.js"));
it("__proto__-duplicate-computed.js", createTestHandler("language/expressions/object/__proto__-duplicate-computed.js"));
it("__proto__-duplicate.js", createTestHandler("language/expressions/object/__proto__-duplicate.js"));
it("__proto__-fn-name.js", createTestHandler("language/expressions/object/__proto__-fn-name.js"));
it("__proto__-permitted-dup-shorthand.js", createTestHandler("language/expressions/object/__proto__-permitted-dup-shorthand.js"));
it("__proto__-permitted-dup.js", createTestHandler("language/expressions/object/__proto__-permitted-dup.js"));
it("__proto__-poisoned-object-prototype.js", createTestHandler("language/expressions/object/__proto__-poisoned-object-prototype.js"));
it("__proto__-value-non-object.js", createTestHandler("language/expressions/object/__proto__-value-non-object.js"));
it("__proto__-value-null.js", createTestHandler("language/expressions/object/__proto__-value-null.js"));
it("__proto__-value-obj.js", createTestHandler("language/expressions/object/__proto__-value-obj.js"));
it("accessor-name-computed-err-evaluation.js", createTestHandler("language/expressions/object/accessor-name-computed-err-evaluation.js"));
it("accessor-name-computed-err-to-prop-key.js", createTestHandler("language/expressions/object/accessor-name-computed-err-to-prop-key.js"));
it("accessor-name-computed-err-unresolvable.js", createTestHandler("language/expressions/object/accessor-name-computed-err-unresolvable.js"));
it("accessor-name-computed-in.js", createTestHandler("language/expressions/object/accessor-name-computed-in.js"));
it("accessor-name-computed-yield-expr.js", createTestHandler("language/expressions/object/accessor-name-computed-yield-expr.js"));
it("accessor-name-computed-yield-id.js", createTestHandler("language/expressions/object/accessor-name-computed-yield-id.js"));
it("accessor-name-computed.js", createTestHandler("language/expressions/object/accessor-name-computed.js"));
it("accessor-name-literal-numeric-binary.js", createTestHandler("language/expressions/object/accessor-name-literal-numeric-binary.js"));
it("accessor-name-literal-numeric-exponent.js", createTestHandler("language/expressions/object/accessor-name-literal-numeric-exponent.js"));
it("accessor-name-literal-numeric-hex.js", createTestHandler("language/expressions/object/accessor-name-literal-numeric-hex.js"));
it("accessor-name-literal-numeric-leading-decimal.js", createTestHandler("language/expressions/object/accessor-name-literal-numeric-leading-decimal.js"));
it("accessor-name-literal-numeric-non-canonical.js", createTestHandler("language/expressions/object/accessor-name-literal-numeric-non-canonical.js"));
it("accessor-name-literal-numeric-octal.js", createTestHandler("language/expressions/object/accessor-name-literal-numeric-octal.js"));
it("accessor-name-literal-numeric-zero.js", createTestHandler("language/expressions/object/accessor-name-literal-numeric-zero.js"));
it("accessor-name-literal-string-char-escape.js", createTestHandler("language/expressions/object/accessor-name-literal-string-char-escape.js"));
it("accessor-name-literal-string-default-escaped-ext.js", createTestHandler("language/expressions/object/accessor-name-literal-string-default-escaped-ext.js"));
it("accessor-name-literal-string-default-escaped.js", createTestHandler("language/expressions/object/accessor-name-literal-string-default-escaped.js"));
it("accessor-name-literal-string-default.js", createTestHandler("language/expressions/object/accessor-name-literal-string-default.js"));
it("accessor-name-literal-string-double-quote.js", createTestHandler("language/expressions/object/accessor-name-literal-string-double-quote.js"));
it("accessor-name-literal-string-empty.js", createTestHandler("language/expressions/object/accessor-name-literal-string-empty.js"));
it("accessor-name-literal-string-hex-escape.js", createTestHandler("language/expressions/object/accessor-name-literal-string-hex-escape.js"));
it("accessor-name-literal-string-line-continuation.js", createTestHandler("language/expressions/object/accessor-name-literal-string-line-continuation.js"));
it("accessor-name-literal-string-single-quote.js", createTestHandler("language/expressions/object/accessor-name-literal-string-single-quote.js"));
it("accessor-name-literal-string-unicode-escape.js", createTestHandler("language/expressions/object/accessor-name-literal-string-unicode-escape.js"));
it("computed-__proto__.js", createTestHandler("language/expressions/object/computed-__proto__.js"));
it("computed-property-evaluation-order.js", createTestHandler("language/expressions/object/computed-property-evaluation-order.js"));
it("computed-property-name-topropertykey-before-value-evaluation.js", createTestHandler("language/expressions/object/computed-property-name-topropertykey-before-value-evaluation.js"));
it("concise-generator.js", createTestHandler("language/expressions/object/concise-generator.js"));
it("cover-initialized-name.js", createTestHandler("language/expressions/object/cover-initialized-name.js"));
it("covered-ident-name-prop-name-literal-break-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-break-escaped.js"));
it("covered-ident-name-prop-name-literal-case-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-case-escaped.js"));
it("covered-ident-name-prop-name-literal-catch-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-catch-escaped.js"));
it("covered-ident-name-prop-name-literal-class-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-class-escaped.js"));
it("covered-ident-name-prop-name-literal-const-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-const-escaped.js"));
it("covered-ident-name-prop-name-literal-continue-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-continue-escaped.js"));
it("covered-ident-name-prop-name-literal-debugger-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-debugger-escaped.js"));
it("covered-ident-name-prop-name-literal-default-escaped-ext.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-default-escaped-ext.js"));
it("covered-ident-name-prop-name-literal-default-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-default-escaped.js"));
it("covered-ident-name-prop-name-literal-default.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-default.js"));
it("covered-ident-name-prop-name-literal-delete-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-delete-escaped.js"));
it("covered-ident-name-prop-name-literal-do-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-do-escaped.js"));
it("covered-ident-name-prop-name-literal-else-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-else-escaped.js"));
it("covered-ident-name-prop-name-literal-enum-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-enum-escaped.js"));
it("covered-ident-name-prop-name-literal-export-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-export-escaped.js"));
it("covered-ident-name-prop-name-literal-extends-escaped-ext.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-extends-escaped-ext.js"));
it("covered-ident-name-prop-name-literal-extends-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-extends-escaped.js"));
it("covered-ident-name-prop-name-literal-extends.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-extends.js"));
it("covered-ident-name-prop-name-literal-finally-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-finally-escaped.js"));
it("covered-ident-name-prop-name-literal-for-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-for-escaped.js"));
it("covered-ident-name-prop-name-literal-function-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-function-escaped.js"));
it("covered-ident-name-prop-name-literal-if-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-if-escaped.js"));
it("covered-ident-name-prop-name-literal-implements-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-implements-escaped.js"));
it("covered-ident-name-prop-name-literal-import-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-import-escaped.js"));
it("covered-ident-name-prop-name-literal-in-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-in-escaped.js"));
it("covered-ident-name-prop-name-literal-instanceof-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-instanceof-escaped.js"));
it("covered-ident-name-prop-name-literal-interface-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-interface-escaped.js"));
it("covered-ident-name-prop-name-literal-let-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-let-escaped.js"));
it("covered-ident-name-prop-name-literal-new-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-new-escaped.js"));
it("covered-ident-name-prop-name-literal-package-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-package-escaped.js"));
it("covered-ident-name-prop-name-literal-private-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-private-escaped.js"));
it("covered-ident-name-prop-name-literal-protected-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-protected-escaped.js"));
it("covered-ident-name-prop-name-literal-public-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-public-escaped.js"));
it("covered-ident-name-prop-name-literal-return-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-return-escaped.js"));
it("covered-ident-name-prop-name-literal-static-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-static-escaped.js"));
it("covered-ident-name-prop-name-literal-super-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-super-escaped.js"));
it("covered-ident-name-prop-name-literal-switch-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-switch-escaped.js"));
it("covered-ident-name-prop-name-literal-this-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-this-escaped.js"));
it("covered-ident-name-prop-name-literal-throw-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-throw-escaped.js"));
it("covered-ident-name-prop-name-literal-try-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-try-escaped.js"));
it("covered-ident-name-prop-name-literal-typeof-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-typeof-escaped.js"));
it("covered-ident-name-prop-name-literal-var-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-var-escaped.js"));
it("covered-ident-name-prop-name-literal-void-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-void-escaped.js"));
it("covered-ident-name-prop-name-literal-while-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-while-escaped.js"));
it("covered-ident-name-prop-name-literal-with-escaped.js", createTestHandler("language/expressions/object/covered-ident-name-prop-name-literal-with-escaped.js"));
it("cpn-obj-lit-computed-property-name-from-additive-expression-add.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-additive-expression-add.js"));
it("cpn-obj-lit-computed-property-name-from-additive-expression-subtract.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-additive-expression-subtract.js"));
it("cpn-obj-lit-computed-property-name-from-arrow-function-expression.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-arrow-function-expression.js"));
it("cpn-obj-lit-computed-property-name-from-assignment-expression-assignment.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-assignment.js"));
it("cpn-obj-lit-computed-property-name-from-assignment-expression-bitwise-or.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-bitwise-or.js"));
it("cpn-obj-lit-computed-property-name-from-assignment-expression-coalesce.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-coalesce.js"));
it("cpn-obj-lit-computed-property-name-from-assignment-expression-logical-and.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-logical-and.js"));
it("cpn-obj-lit-computed-property-name-from-assignment-expression-logical-or.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-logical-or.js"));
it("cpn-obj-lit-computed-property-name-from-async-arrow-function-expression.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-async-arrow-function-expression.js"));
it("cpn-obj-lit-computed-property-name-from-await-expression.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-await-expression.js"));
it("cpn-obj-lit-computed-property-name-from-condition-expression-false.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-condition-expression-false.js"));
it("cpn-obj-lit-computed-property-name-from-condition-expression-true.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-condition-expression-true.js"));
it("cpn-obj-lit-computed-property-name-from-decimal-e-notational-literal.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-decimal-e-notational-literal.js"));
it("cpn-obj-lit-computed-property-name-from-decimal-literal.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-decimal-literal.js"));
it("cpn-obj-lit-computed-property-name-from-exponetiation-expression.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-exponetiation-expression.js"));
it("cpn-obj-lit-computed-property-name-from-expression-coalesce.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-expression-coalesce.js"));
it("cpn-obj-lit-computed-property-name-from-expression-logical-and.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-expression-logical-and.js"));
it("cpn-obj-lit-computed-property-name-from-expression-logical-or.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-expression-logical-or.js"));
it("cpn-obj-lit-computed-property-name-from-function-declaration.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-function-declaration.js"));
it("cpn-obj-lit-computed-property-name-from-function-expression.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-function-expression.js"));
it("cpn-obj-lit-computed-property-name-from-generator-function-declaration.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-generator-function-declaration.js"));
it("cpn-obj-lit-computed-property-name-from-identifier.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-identifier.js"));
it("cpn-obj-lit-computed-property-name-from-integer-e-notational-literal.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-integer-e-notational-literal.js"));
it("cpn-obj-lit-computed-property-name-from-integer-separators.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-integer-separators.js"));
it("cpn-obj-lit-computed-property-name-from-math.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-math.js"));
it("cpn-obj-lit-computed-property-name-from-multiplicative-expression-div.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-multiplicative-expression-div.js"));
it("cpn-obj-lit-computed-property-name-from-multiplicative-expression-mult.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-multiplicative-expression-mult.js"));
it("cpn-obj-lit-computed-property-name-from-null.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-null.js"));
it("cpn-obj-lit-computed-property-name-from-numeric-literal.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-numeric-literal.js"));
it("cpn-obj-lit-computed-property-name-from-string-literal.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-string-literal.js"));
it("cpn-obj-lit-computed-property-name-from-yield-expression.js", createTestHandler("language/expressions/object/cpn-obj-lit-computed-property-name-from-yield-expression.js"));
describe("dstr", () => {
it("async-gen-meth-ary-init-iter-close.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-init-iter-get-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-init-iter-no-close.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-name-iter-val.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-elision.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-init-iter-close.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-init-iter-get-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-init-iter-no-close.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-name-iter-val.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-elision.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-init-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-init-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-init-undefined.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-init-undefined.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-list-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("async-gen-meth-dflt-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-init-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-init-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-init-undefined.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-init-undefined.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-list-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-id.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("async-gen-meth-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("gen-meth-ary-init-iter-close.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("gen-meth-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("gen-meth-ary-init-iter-get-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("gen-meth-ary-init-iter-no-close.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("gen-meth-ary-name-iter-val.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-elision.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("gen-meth-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-init-iter-close.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-init-iter-get-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-init-iter-no-close.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-name-iter-val.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-elision.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-init-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-init-null.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-init-undefined.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-init-undefined.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-list-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("gen-meth-dflt-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("gen-meth-obj-init-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-init-null.js"));
});
describe("dstr", () => {
it("gen-meth-obj-init-undefined.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-init-undefined.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-list-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-id.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("gen-meth-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("meth-ary-init-iter-close.js", createTestHandler("language/expressions/object/dstr/meth-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("meth-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/object/dstr/meth-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("meth-ary-init-iter-get-err.js", createTestHandler("language/expressions/object/dstr/meth-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("meth-ary-init-iter-no-close.js", createTestHandler("language/expressions/object/dstr/meth-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("meth-ary-name-iter-val.js", createTestHandler("language/expressions/object/dstr/meth-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-elision.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-id.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("meth-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-init-iter-close.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-init-iter-get-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-init-iter-no-close.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-name-iter-val.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-elision.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("meth-dflt-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-init-null.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-init-null.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-init-undefined.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-init-undefined.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-list-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-id.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("meth-dflt-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("meth-obj-init-null.js", createTestHandler("language/expressions/object/dstr/meth-obj-init-null.js"));
});
describe("dstr", () => {
it("meth-obj-init-undefined.js", createTestHandler("language/expressions/object/dstr/meth-obj-init-undefined.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-empty.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-list-err.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-id.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("meth-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("object-rest-proxy-get-not-called-on-dontenum-keys.js", createTestHandler("language/expressions/object/dstr/object-rest-proxy-get-not-called-on-dontenum-keys.js"));
});
describe("dstr", () => {
it("object-rest-proxy-gopd-not-called-on-excluded-keys.js", createTestHandler("language/expressions/object/dstr/object-rest-proxy-gopd-not-called-on-excluded-keys.js"));
});
describe("dstr", () => {
it("object-rest-proxy-ownkeys-returned-keys-order.js", createTestHandler("language/expressions/object/dstr/object-rest-proxy-ownkeys-returned-keys-order.js"));
});
it("fn-name-accessor-get.js", createTestHandler("language/expressions/object/fn-name-accessor-get.js"));
it("fn-name-accessor-set.js", createTestHandler("language/expressions/object/fn-name-accessor-set.js"));
it("fn-name-arrow.js", createTestHandler("language/expressions/object/fn-name-arrow.js"));
it("fn-name-class.js", createTestHandler("language/expressions/object/fn-name-class.js"));
it("fn-name-cover.js", createTestHandler("language/expressions/object/fn-name-cover.js"));
it("fn-name-fn.js", createTestHandler("language/expressions/object/fn-name-fn.js"));
it("fn-name-gen.js", createTestHandler("language/expressions/object/fn-name-gen.js"));
it("getter-body-strict-inside.js", createTestHandler("language/expressions/object/getter-body-strict-inside.js"));
it("getter-body-strict-outside.js", createTestHandler("language/expressions/object/getter-body-strict-outside.js"));
it("getter-param-dflt.js", createTestHandler("language/expressions/object/getter-param-dflt.js"));
it("getter-prop-desc.js", createTestHandler("language/expressions/object/getter-prop-desc.js"));
it("getter-super-prop.js", createTestHandler("language/expressions/object/getter-super-prop.js"));
it("ident-name-method-def-break-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-break-escaped.js"));
it("ident-name-method-def-case-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-case-escaped.js"));
it("ident-name-method-def-catch-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-catch-escaped.js"));
it("ident-name-method-def-class-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-class-escaped.js"));
it("ident-name-method-def-const-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-const-escaped.js"));
it("ident-name-method-def-continue-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-continue-escaped.js"));
it("ident-name-method-def-debugger-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-debugger-escaped.js"));
it("ident-name-method-def-default-escaped-ext.js", createTestHandler("language/expressions/object/ident-name-method-def-default-escaped-ext.js"));
it("ident-name-method-def-default-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-default-escaped.js"));
it("ident-name-method-def-default.js", createTestHandler("language/expressions/object/ident-name-method-def-default.js"));
it("ident-name-method-def-delete-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-delete-escaped.js"));
it("ident-name-method-def-do-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-do-escaped.js"));
it("ident-name-method-def-else-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-else-escaped.js"));
it("ident-name-method-def-enum-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-enum-escaped.js"));
it("ident-name-method-def-export-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-export-escaped.js"));
it("ident-name-method-def-extends-escaped-ext.js", createTestHandler("language/expressions/object/ident-name-method-def-extends-escaped-ext.js"));
it("ident-name-method-def-extends-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-extends-escaped.js"));
it("ident-name-method-def-extends.js", createTestHandler("language/expressions/object/ident-name-method-def-extends.js"));
it("ident-name-method-def-finally-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-finally-escaped.js"));
it("ident-name-method-def-for-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-for-escaped.js"));
it("ident-name-method-def-function-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-function-escaped.js"));
it("ident-name-method-def-if-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-if-escaped.js"));
it("ident-name-method-def-implements-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-implements-escaped.js"));
it("ident-name-method-def-import-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-import-escaped.js"));
it("ident-name-method-def-in-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-in-escaped.js"));
it("ident-name-method-def-instanceof-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-instanceof-escaped.js"));
it("ident-name-method-def-interface-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-interface-escaped.js"));
it("ident-name-method-def-let-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-let-escaped.js"));
it("ident-name-method-def-new-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-new-escaped.js"));
it("ident-name-method-def-package-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-package-escaped.js"));
it("ident-name-method-def-private-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-private-escaped.js"));
it("ident-name-method-def-protected-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-protected-escaped.js"));
it("ident-name-method-def-public-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-public-escaped.js"));
it("ident-name-method-def-return-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-return-escaped.js"));
it("ident-name-method-def-static-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-static-escaped.js"));
it("ident-name-method-def-super-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-super-escaped.js"));
it("ident-name-method-def-switch-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-switch-escaped.js"));
it("ident-name-method-def-this-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-this-escaped.js"));
it("ident-name-method-def-throw-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-throw-escaped.js"));
it("ident-name-method-def-try-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-try-escaped.js"));
it("ident-name-method-def-typeof-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-typeof-escaped.js"));
it("ident-name-method-def-var-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-var-escaped.js"));
it("ident-name-method-def-void-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-void-escaped.js"));
it("ident-name-method-def-while-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-while-escaped.js"));
it("ident-name-method-def-with-escaped.js", createTestHandler("language/expressions/object/ident-name-method-def-with-escaped.js"));
it("ident-name-prop-name-literal-await-static-init.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-await-static-init.js"));
it("ident-name-prop-name-literal-break-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-break-escaped.js"));
it("ident-name-prop-name-literal-case-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-case-escaped.js"));
it("ident-name-prop-name-literal-catch-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-catch-escaped.js"));
it("ident-name-prop-name-literal-class-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-class-escaped.js"));
it("ident-name-prop-name-literal-const-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-const-escaped.js"));
it("ident-name-prop-name-literal-continue-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-continue-escaped.js"));
it("ident-name-prop-name-literal-debugger-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-debugger-escaped.js"));
it("ident-name-prop-name-literal-default-escaped-ext.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-default-escaped-ext.js"));
it("ident-name-prop-name-literal-default-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-default-escaped.js"));
it("ident-name-prop-name-literal-default.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-default.js"));
it("ident-name-prop-name-literal-delete-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-delete-escaped.js"));
it("ident-name-prop-name-literal-do-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-do-escaped.js"));
it("ident-name-prop-name-literal-else-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-else-escaped.js"));
it("ident-name-prop-name-literal-enum-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-enum-escaped.js"));
it("ident-name-prop-name-literal-export-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-export-escaped.js"));
it("ident-name-prop-name-literal-extends-escaped-ext.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-extends-escaped-ext.js"));
it("ident-name-prop-name-literal-extends-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-extends-escaped.js"));
it("ident-name-prop-name-literal-extends.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-extends.js"));
it("ident-name-prop-name-literal-finally-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-finally-escaped.js"));
it("ident-name-prop-name-literal-for-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-for-escaped.js"));
it("ident-name-prop-name-literal-function-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-function-escaped.js"));
it("ident-name-prop-name-literal-if-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-if-escaped.js"));
it("ident-name-prop-name-literal-implements-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-implements-escaped.js"));
it("ident-name-prop-name-literal-import-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-import-escaped.js"));
it("ident-name-prop-name-literal-in-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-in-escaped.js"));
it("ident-name-prop-name-literal-instanceof-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-instanceof-escaped.js"));
it("ident-name-prop-name-literal-interface-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-interface-escaped.js"));
it("ident-name-prop-name-literal-let-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-let-escaped.js"));
it("ident-name-prop-name-literal-new-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-new-escaped.js"));
it("ident-name-prop-name-literal-package-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-package-escaped.js"));
it("ident-name-prop-name-literal-private-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-private-escaped.js"));
it("ident-name-prop-name-literal-protected-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-protected-escaped.js"));
it("ident-name-prop-name-literal-public-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-public-escaped.js"));
it("ident-name-prop-name-literal-return-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-return-escaped.js"));
it("ident-name-prop-name-literal-static-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-static-escaped.js"));
it("ident-name-prop-name-literal-super-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-super-escaped.js"));
it("ident-name-prop-name-literal-switch-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-switch-escaped.js"));
it("ident-name-prop-name-literal-this-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-this-escaped.js"));
it("ident-name-prop-name-literal-throw-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-throw-escaped.js"));
it("ident-name-prop-name-literal-try-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-try-escaped.js"));
it("ident-name-prop-name-literal-typeof-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-typeof-escaped.js"));
it("ident-name-prop-name-literal-var-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-var-escaped.js"));
it("ident-name-prop-name-literal-void-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-void-escaped.js"));
it("ident-name-prop-name-literal-while-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-while-escaped.js"));
it("ident-name-prop-name-literal-with-escaped.js", createTestHandler("language/expressions/object/ident-name-prop-name-literal-with-escaped.js"));
it("identifier-shorthand-await-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-await-strict-mode.js"));
it("identifier-shorthand-implements-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-implements-invalid-strict-mode.js"));
it("identifier-shorthand-interface-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-interface-invalid-strict-mode.js"));
it("identifier-shorthand-invalid-computed-name.js", createTestHandler("language/expressions/object/identifier-shorthand-invalid-computed-name.js"));
it("identifier-shorthand-invalid-zero.js", createTestHandler("language/expressions/object/identifier-shorthand-invalid-zero.js"));
it("identifier-shorthand-let-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-let-invalid-strict-mode.js"));
it("identifier-shorthand-package-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-package-invalid-strict-mode.js"));
it("identifier-shorthand-private-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-private-invalid-strict-mode.js"));
it("identifier-shorthand-protected-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-protected-invalid-strict-mode.js"));
it("identifier-shorthand-public-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-public-invalid-strict-mode.js"));
it("identifier-shorthand-static-init-await-invalid.js", createTestHandler("language/expressions/object/identifier-shorthand-static-init-await-invalid.js"));
it("identifier-shorthand-static-init-await-valid.js", createTestHandler("language/expressions/object/identifier-shorthand-static-init-await-valid.js"));
it("identifier-shorthand-static-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-static-invalid-strict-mode.js"));
it("identifier-shorthand-yield-invalid-strict-mode.js", createTestHandler("language/expressions/object/identifier-shorthand-yield-invalid-strict-mode.js"));
it("let-non-strict-access.js", createTestHandler("language/expressions/object/let-non-strict-access.js"));
it("let-non-strict-syntax.js", createTestHandler("language/expressions/object/let-non-strict-syntax.js"));
it("literal-property-name-bigint.js", createTestHandler("language/expressions/object/literal-property-name-bigint.js"));
describe("method-definition", () => {
it("async-await-as-binding-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/async-await-as-binding-identifier-escaped.js"));
});
describe("method-definition", () => {
it("async-await-as-binding-identifier.js", createTestHandler("language/expressions/object/method-definition/async-await-as-binding-identifier.js"));
});
describe("method-definition", () => {
it("async-await-as-identifier-reference-escaped.js", createTestHandler("language/expressions/object/method-definition/async-await-as-identifier-reference-escaped.js"));
});
describe("method-definition", () => {
it("async-await-as-identifier-reference.js", createTestHandler("language/expressions/object/method-definition/async-await-as-identifier-reference.js"));
});
describe("method-definition", () => {
it("async-await-as-label-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/async-await-as-label-identifier-escaped.js"));
});
describe("method-definition", () => {
it("async-await-as-label-identifier.js", createTestHandler("language/expressions/object/method-definition/async-await-as-label-identifier.js"));
});
describe("method-definition", () => {
it("async-gen-await-as-binding-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/async-gen-await-as-binding-identifier-escaped.js"));
});
describe("method-definition", () => {
it("async-gen-await-as-binding-identifier.js", createTestHandler("language/expressions/object/method-definition/async-gen-await-as-binding-identifier.js"));
});
describe("method-definition", () => {
it("async-gen-await-as-identifier-reference-escaped.js", createTestHandler("language/expressions/object/method-definition/async-gen-await-as-identifier-reference-escaped.js"));
});
describe("method-definition", () => {
it("async-gen-await-as-identifier-reference.js", createTestHandler("language/expressions/object/method-definition/async-gen-await-as-identifier-reference.js"));
});
describe("method-definition", () => {
it("async-gen-await-as-label-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/async-gen-await-as-label-identifier-escaped.js"));
});
describe("method-definition", () => {
it("async-gen-await-as-label-identifier.js", createTestHandler("language/expressions/object/method-definition/async-gen-await-as-label-identifier.js"));
});
describe("method-definition", () => {
it("async-gen-meth-array-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-array-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-arg-val-not-undefined.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-arg-val-undefined.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-duplicates.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-duplicates.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-ref-later.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-ref-later.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-ref-prior.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-ref-prior.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-ref-self.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-ref-self.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-rest.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-rest.js"));
});
describe("method-definition", () => {
it("async-gen-meth-dflt-params-trailing-comma.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-dflt-params-trailing-comma.js"));
});
describe("method-definition", () => {
it("async-gen-meth-escaped-async.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-escaped-async.js"));
});
describe("method-definition", () => {
it("async-gen-meth-eval-var-scope-syntax-err.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-eval-var-scope-syntax-err.js"));
});
describe("method-definition", () => {
it("async-gen-meth-object-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-object-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("async-gen-meth-params-trailing-comma-multiple.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-params-trailing-comma-multiple.js"));
});
describe("method-definition", () => {
it("async-gen-meth-params-trailing-comma-single.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-params-trailing-comma-single.js"));
});
describe("method-definition", () => {
it("async-gen-meth-rest-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-rest-param-strict-body.js"));
});
describe("method-definition", () => {
it("async-gen-meth-rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/object/method-definition/async-gen-meth-rest-params-trailing-comma-early-error.js"));
});
describe("method-definition", () => {
it("async-gen-yield-as-binding-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-as-binding-identifier-escaped.js"));
});
describe("method-definition", () => {
it("async-gen-yield-as-binding-identifier.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-as-binding-identifier.js"));
});
describe("method-definition", () => {
it("async-gen-yield-as-identifier-reference-escaped.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-as-identifier-reference-escaped.js"));
});
describe("method-definition", () => {
it("async-gen-yield-as-identifier-reference.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-as-identifier-reference.js"));
});
describe("method-definition", () => {
it("async-gen-yield-as-label-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-as-label-identifier-escaped.js"));
});
describe("method-definition", () => {
it("async-gen-yield-as-label-identifier.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-as-label-identifier.js"));
});
describe("method-definition", () => {
it("async-gen-yield-identifier-non-strict.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-identifier-non-strict.js"));
});
describe("method-definition", () => {
it("async-gen-yield-identifier-spread-non-strict.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-identifier-spread-non-strict.js"));
});
describe("method-definition", () => {
it("async-gen-yield-identifier-spread-strict.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-identifier-spread-strict.js"));
});
describe("method-definition", () => {
it("async-gen-yield-identifier-strict.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-identifier-strict.js"));
});
describe("method-definition", () => {
it("async-gen-yield-promise-reject-next-catch.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-promise-reject-next-catch.js"));
});
describe("method-definition", () => {
it("async-gen-yield-promise-reject-next-for-await-of-async-iterator.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-promise-reject-next-for-await-of-async-iterator.js"));
});
describe("method-definition", () => {
it("async-gen-yield-promise-reject-next-for-await-of-sync-iterator.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-promise-reject-next-for-await-of-sync-iterator.js"));
});
describe("method-definition", () => {
it("async-gen-yield-promise-reject-next-yield-star-async-iterator.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-promise-reject-next-yield-star-async-iterator.js"));
});
describe("method-definition", () => {
it("async-gen-yield-promise-reject-next-yield-star-sync-iterator.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-promise-reject-next-yield-star-sync-iterator.js"));
});
describe("method-definition", () => {
it("async-gen-yield-promise-reject-next.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-promise-reject-next.js"));
});
describe("method-definition", () => {
it("async-gen-yield-spread-arr-multiple.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-spread-arr-multiple.js"));
});
describe("method-definition", () => {
it("async-gen-yield-spread-arr-single.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-spread-arr-single.js"));
});
describe("method-definition", () => {
it("async-gen-yield-spread-obj.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-spread-obj.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-async-next.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-async-next.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-async-return.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-async-return.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-async-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-async-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-expr-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-expr-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-not-callable-boolean-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-boolean-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-not-callable-number-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-number-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-not-callable-object-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-object-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-not-callable-string-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-string-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-not-callable-symbol-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-symbol-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-null-sync-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-null-sync-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-returns-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-returns-boolean-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-boolean-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-returns-null-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-null-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-returns-number-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-number-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-returns-string-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-string-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-returns-symbol-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-symbol-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-returns-undefined-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-undefined-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-async-undefined-sync-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-async-undefined-sync-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-not-callable-boolean-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-boolean-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-not-callable-number-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-number-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-not-callable-object-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-object-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-not-callable-string-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-string-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-not-callable-symbol-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-symbol-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-returns-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-returns-boolean-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-boolean-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-returns-null-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-null-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-returns-number-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-number-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-returns-string-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-string-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-returns-symbol-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-symbol-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-getiter-sync-returns-undefined-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-undefined-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-call-done-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-call-done-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-call-returns-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-call-returns-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-call-value-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-call-value-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-non-object-ignores-then.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-non-object-ignores-then.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-not-callable-boolean-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-boolean-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-not-callable-null-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-null-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-not-callable-number-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-number-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-not-callable-object-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-object-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-not-callable-string-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-string-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-not-callable-symbol-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-symbol-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-not-callable-undefined-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-undefined-throw.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-get-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-get-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-non-callable-boolean-fulfillpromise.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-boolean-fulfillpromise.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-non-callable-null-fulfillpromise.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-null-fulfillpromise.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-non-callable-number-fulfillpromise.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-number-fulfillpromise.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-non-callable-object-fulfillpromise.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-object-fulfillpromise.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-non-callable-string-fulfillpromise.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-string-fulfillpromise.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-non-callable-symbol-fulfillpromise.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-symbol-fulfillpromise.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-non-callable-undefined-fulfillpromise.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-undefined-fulfillpromise.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-next-then-returns-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-next-then-returns-abrupt.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-sync-next.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-sync-next.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-sync-return.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-sync-return.js"));
});
describe("method-definition", () => {
it("async-gen-yield-star-sync-throw.js", createTestHandler("language/expressions/object/method-definition/async-gen-yield-star-sync-throw.js"));
});
describe("method-definition", () => {
it("async-meth-array-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/async-meth-array-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-abrupt.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-abrupt.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-arg-val-not-undefined.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-arg-val-undefined.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-duplicates.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-duplicates.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-ref-later.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-ref-later.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-ref-prior.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-ref-prior.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-ref-self.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-ref-self.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-rest.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-rest.js"));
});
describe("method-definition", () => {
it("async-meth-dflt-params-trailing-comma.js", createTestHandler("language/expressions/object/method-definition/async-meth-dflt-params-trailing-comma.js"));
});
describe("method-definition", () => {
it("async-meth-escaped-async.js", createTestHandler("language/expressions/object/method-definition/async-meth-escaped-async.js"));
});
describe("method-definition", () => {
it("async-meth-eval-var-scope-syntax-err.js", createTestHandler("language/expressions/object/method-definition/async-meth-eval-var-scope-syntax-err.js"));
});
describe("method-definition", () => {
it("async-meth-object-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/async-meth-object-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("async-meth-params-trailing-comma-multiple.js", createTestHandler("language/expressions/object/method-definition/async-meth-params-trailing-comma-multiple.js"));
});
describe("method-definition", () => {
it("async-meth-params-trailing-comma-single.js", createTestHandler("language/expressions/object/method-definition/async-meth-params-trailing-comma-single.js"));
});
describe("method-definition", () => {
it("async-meth-rest-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/async-meth-rest-param-strict-body.js"));
});
describe("method-definition", () => {
it("async-meth-rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/object/method-definition/async-meth-rest-params-trailing-comma-early-error.js"));
});
describe("method-definition", () => {
it("async-returns-async-arrow-returns-arguments-from-parent-function.js", createTestHandler("language/expressions/object/method-definition/async-returns-async-arrow-returns-arguments-from-parent-function.js"));
});
describe("method-definition", () => {
it("async-returns-async-arrow-returns-newtarget.js", createTestHandler("language/expressions/object/method-definition/async-returns-async-arrow-returns-newtarget.js"));
});
describe("method-definition", () => {
it("async-returns-async-arrow.js", createTestHandler("language/expressions/object/method-definition/async-returns-async-arrow.js"));
});
describe("method-definition", () => {
it("async-returns-async-function-returns-arguments-from-own-function.js", createTestHandler("language/expressions/object/method-definition/async-returns-async-function-returns-arguments-from-own-function.js"));
});
describe("method-definition", () => {
it("async-returns-async-function-returns-newtarget.js", createTestHandler("language/expressions/object/method-definition/async-returns-async-function-returns-newtarget.js"));
});
describe("method-definition", () => {
it("async-returns-async-function.js", createTestHandler("language/expressions/object/method-definition/async-returns-async-function.js"));
});
describe("method-definition", () => {
it("async-super-call-body.js", createTestHandler("language/expressions/object/method-definition/async-super-call-body.js"));
});
describe("method-definition", () => {
it("async-super-call-param.js", createTestHandler("language/expressions/object/method-definition/async-super-call-param.js"));
});
describe("method-definition", () => {
it("computed-property-name-yield-expression.js", createTestHandler("language/expressions/object/method-definition/computed-property-name-yield-expression.js"));
});
describe("method-definition", () => {
it("early-errors-object-async-method-duplicate-parameters.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-async-method-duplicate-parameters.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-NSPL-with-USD.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-NSPL-with-USD.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-arguments-in-formal-parameters.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-arguments-in-formal-parameters.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-async-lineterminator.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-async-lineterminator.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-await-in-formals-default.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-await-in-formals-default.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-await-in-formals.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-await-in-formals.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-body-contains-super-call.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-body-contains-super-call.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-duplicate-parameters.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-duplicate-parameters.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-eval-in-formal-parameters.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-eval-in-formal-parameters.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-formals-body-duplicate.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-formals-body-duplicate.js"));
});
describe("method-definition", () => {
it("early-errors-object-method-formals-contains-super-call.js", createTestHandler("language/expressions/object/method-definition/early-errors-object-method-formals-contains-super-call.js"));
});
describe("method-definition", () => {
it("escaped-get-e.js", createTestHandler("language/expressions/object/method-definition/escaped-get-e.js"));
});
describe("method-definition", () => {
it("escaped-get-g.js", createTestHandler("language/expressions/object/method-definition/escaped-get-g.js"));
});
describe("method-definition", () => {
it("escaped-get-t.js", createTestHandler("language/expressions/object/method-definition/escaped-get-t.js"));
});
describe("method-definition", () => {
it("escaped-get.js", createTestHandler("language/expressions/object/method-definition/escaped-get.js"));
});
describe("method-definition", () => {
it("escaped-set-e.js", createTestHandler("language/expressions/object/method-definition/escaped-set-e.js"));
});
describe("method-definition", () => {
it("escaped-set-s.js", createTestHandler("language/expressions/object/method-definition/escaped-set-s.js"));
});
describe("method-definition", () => {
it("escaped-set-t.js", createTestHandler("language/expressions/object/method-definition/escaped-set-t.js"));
});
describe("method-definition", () => {
it("escaped-set.js", createTestHandler("language/expressions/object/method-definition/escaped-set.js"));
});
describe("method-definition", () => {
it("fn-name-fn.js", createTestHandler("language/expressions/object/method-definition/fn-name-fn.js"));
});
describe("method-definition", () => {
it("fn-name-gen.js", createTestHandler("language/expressions/object/method-definition/fn-name-gen.js"));
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-gen-meth-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/async-gen-meth-forbidden-ext-direct-access-prop-arguments.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-gen-meth-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/async-gen-meth-forbidden-ext-direct-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-meth-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/async-meth-forbidden-ext-direct-access-prop-arguments.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-meth-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/async-meth-forbidden-ext-direct-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("gen-meth-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/gen-meth-forbidden-ext-direct-access-prop-arguments.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("gen-meth-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/gen-meth-forbidden-ext-direct-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("meth-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/meth-forbidden-ext-direct-access-prop-arguments.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b1", () => {
it("meth-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b1/meth-forbidden-ext-direct-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-gen-meth-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/async-gen-meth-forbidden-ext-indirect-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-meth-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/async-meth-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-meth-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/async-meth-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-meth-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/async-meth-forbidden-ext-indirect-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-meth-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/gen-meth-forbidden-ext-indirect-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("meth-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/meth-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("meth-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/meth-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
});
describe("method-definition", () => {
describe("forbidden-ext", () => {
describe("b2", () => {
it("meth-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/object/method-definition/forbidden-ext/b2/meth-forbidden-ext-indirect-access-prop-caller.js"));
});
});
});
describe("method-definition", () => {
it("gen-meth-array-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/gen-meth-array-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-abrupt.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-abrupt.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-arg-val-not-undefined.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-arg-val-undefined.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-duplicates.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-duplicates.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-ref-later.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-ref-later.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-ref-prior.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-ref-prior.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-ref-self.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-ref-self.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-rest.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-rest.js"));
});
describe("method-definition", () => {
it("gen-meth-dflt-params-trailing-comma.js", createTestHandler("language/expressions/object/method-definition/gen-meth-dflt-params-trailing-comma.js"));
});
describe("method-definition", () => {
it("gen-meth-eval-var-scope-syntax-err.js", createTestHandler("language/expressions/object/method-definition/gen-meth-eval-var-scope-syntax-err.js"));
});
describe("method-definition", () => {
it("gen-meth-object-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/gen-meth-object-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("gen-meth-params-trailing-comma-multiple.js", createTestHandler("language/expressions/object/method-definition/gen-meth-params-trailing-comma-multiple.js"));
});
describe("method-definition", () => {
it("gen-meth-params-trailing-comma-single.js", createTestHandler("language/expressions/object/method-definition/gen-meth-params-trailing-comma-single.js"));
});
describe("method-definition", () => {
it("gen-meth-rest-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/gen-meth-rest-param-strict-body.js"));
});
describe("method-definition", () => {
it("gen-meth-rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/object/method-definition/gen-meth-rest-params-trailing-comma-early-error.js"));
});
describe("method-definition", () => {
it("gen-yield-as-binding-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/gen-yield-as-binding-identifier-escaped.js"));
});
describe("method-definition", () => {
it("gen-yield-as-binding-identifier.js", createTestHandler("language/expressions/object/method-definition/gen-yield-as-binding-identifier.js"));
});
describe("method-definition", () => {
it("gen-yield-as-identifier-reference-escaped.js", createTestHandler("language/expressions/object/method-definition/gen-yield-as-identifier-reference-escaped.js"));
});
describe("method-definition", () => {
it("gen-yield-as-identifier-reference.js", createTestHandler("language/expressions/object/method-definition/gen-yield-as-identifier-reference.js"));
});
describe("method-definition", () => {
it("gen-yield-as-label-identifier-escaped.js", createTestHandler("language/expressions/object/method-definition/gen-yield-as-label-identifier-escaped.js"));
});
describe("method-definition", () => {
it("gen-yield-as-label-identifier.js", createTestHandler("language/expressions/object/method-definition/gen-yield-as-label-identifier.js"));
});
describe("method-definition", () => {
it("gen-yield-identifier-non-strict.js", createTestHandler("language/expressions/object/method-definition/gen-yield-identifier-non-strict.js"));
});
describe("method-definition", () => {
it("gen-yield-identifier-spread-non-strict.js", createTestHandler("language/expressions/object/method-definition/gen-yield-identifier-spread-non-strict.js"));
});
describe("method-definition", () => {
it("gen-yield-identifier-spread-strict.js", createTestHandler("language/expressions/object/method-definition/gen-yield-identifier-spread-strict.js"));
});
describe("method-definition", () => {
it("gen-yield-identifier-strict.js", createTestHandler("language/expressions/object/method-definition/gen-yield-identifier-strict.js"));
});
describe("method-definition", () => {
it("gen-yield-spread-arr-multiple.js", createTestHandler("language/expressions/object/method-definition/gen-yield-spread-arr-multiple.js"));
});
describe("method-definition", () => {
it("gen-yield-spread-arr-single.js", createTestHandler("language/expressions/object/method-definition/gen-yield-spread-arr-single.js"));
});
describe("method-definition", () => {
it("gen-yield-spread-obj.js", createTestHandler("language/expressions/object/method-definition/gen-yield-spread-obj.js"));
});
describe("method-definition", () => {
it("generator-invoke-ctor.js", createTestHandler("language/expressions/object/method-definition/generator-invoke-ctor.js"));
});
describe("method-definition", () => {
it("generator-invoke-fn-no-strict.js", createTestHandler("language/expressions/object/method-definition/generator-invoke-fn-no-strict.js"));
});
describe("method-definition", () => {
it("generator-invoke-fn-strict.js", createTestHandler("language/expressions/object/method-definition/generator-invoke-fn-strict.js"));
});
describe("method-definition", () => {
it("generator-length-dflt.js", createTestHandler("language/expressions/object/method-definition/generator-length-dflt.js"));
});
describe("method-definition", () => {
it("generator-length.js", createTestHandler("language/expressions/object/method-definition/generator-length.js"));
});
describe("method-definition", () => {
it("generator-name-prop-string.js", createTestHandler("language/expressions/object/method-definition/generator-name-prop-string.js"));
});
describe("method-definition", () => {
it("generator-name-prop-symbol.js", createTestHandler("language/expressions/object/method-definition/generator-name-prop-symbol.js"));
});
describe("method-definition", () => {
it("generator-no-yield.js", createTestHandler("language/expressions/object/method-definition/generator-no-yield.js"));
});
describe("method-definition", () => {
it("generator-param-id-yield.js", createTestHandler("language/expressions/object/method-definition/generator-param-id-yield.js"));
});
describe("method-definition", () => {
it("generator-param-init-yield.js", createTestHandler("language/expressions/object/method-definition/generator-param-init-yield.js"));
});
describe("method-definition", () => {
it("generator-param-redecl-const.js", createTestHandler("language/expressions/object/method-definition/generator-param-redecl-const.js"));
});
describe("method-definition", () => {
it("generator-param-redecl-let.js", createTestHandler("language/expressions/object/method-definition/generator-param-redecl-let.js"));
});
describe("method-definition", () => {
it("generator-params.js", createTestHandler("language/expressions/object/method-definition/generator-params.js"));
});
describe("method-definition", () => {
it("generator-prop-name-eval-error.js", createTestHandler("language/expressions/object/method-definition/generator-prop-name-eval-error.js"));
});
describe("method-definition", () => {
it("generator-prop-name-yield-expr.js", createTestHandler("language/expressions/object/method-definition/generator-prop-name-yield-expr.js"));
});
describe("method-definition", () => {
it("generator-prop-name-yield-id.js", createTestHandler("language/expressions/object/method-definition/generator-prop-name-yield-id.js"));
});
describe("method-definition", () => {
it("generator-property-desc.js", createTestHandler("language/expressions/object/method-definition/generator-property-desc.js"));
});
describe("method-definition", () => {
it("generator-prototype-prop.js", createTestHandler("language/expressions/object/method-definition/generator-prototype-prop.js"));
});
describe("method-definition", () => {
it("generator-prototype.js", createTestHandler("language/expressions/object/method-definition/generator-prototype.js"));
});
describe("method-definition", () => {
it("generator-return.js", createTestHandler("language/expressions/object/method-definition/generator-return.js"));
});
describe("method-definition", () => {
it("generator-super-call-body.js", createTestHandler("language/expressions/object/method-definition/generator-super-call-body.js"));
});
describe("method-definition", () => {
it("generator-super-call-param.js", createTestHandler("language/expressions/object/method-definition/generator-super-call-param.js"));
});
describe("method-definition", () => {
it("generator-super-prop-body.js", createTestHandler("language/expressions/object/method-definition/generator-super-prop-body.js"));
});
describe("method-definition", () => {
it("generator-super-prop-param.js", createTestHandler("language/expressions/object/method-definition/generator-super-prop-param.js"));
});
describe("method-definition", () => {
it("generator-use-strict-with-non-simple-param.js", createTestHandler("language/expressions/object/method-definition/generator-use-strict-with-non-simple-param.js"));
});
describe("method-definition", () => {
it("meth-array-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/meth-array-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-abrupt.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-abrupt.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-arg-val-not-undefined.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-arg-val-undefined.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-duplicates.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-duplicates.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-ref-later.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-ref-later.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-ref-prior.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-ref-prior.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-ref-self.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-ref-self.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-rest.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-rest.js"));
});
describe("method-definition", () => {
it("meth-dflt-params-trailing-comma.js", createTestHandler("language/expressions/object/method-definition/meth-dflt-params-trailing-comma.js"));
});
describe("method-definition", () => {
it("meth-eval-var-scope-syntax-err.js", createTestHandler("language/expressions/object/method-definition/meth-eval-var-scope-syntax-err.js"));
});
describe("method-definition", () => {
it("meth-object-destructuring-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/meth-object-destructuring-param-strict-body.js"));
});
describe("method-definition", () => {
it("meth-params-trailing-comma-multiple.js", createTestHandler("language/expressions/object/method-definition/meth-params-trailing-comma-multiple.js"));
});
describe("method-definition", () => {
it("meth-params-trailing-comma-single.js", createTestHandler("language/expressions/object/method-definition/meth-params-trailing-comma-single.js"));
});
describe("method-definition", () => {
it("meth-rest-param-strict-body.js", createTestHandler("language/expressions/object/method-definition/meth-rest-param-strict-body.js"));
});
describe("method-definition", () => {
it("meth-rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/object/method-definition/meth-rest-params-trailing-comma-early-error.js"));
});
describe("method-definition", () => {
it("name-invoke-ctor.js", createTestHandler("language/expressions/object/method-definition/name-invoke-ctor.js"));
});
describe("method-definition", () => {
it("name-invoke-fn-no-strict.js", createTestHandler("language/expressions/object/method-definition/name-invoke-fn-no-strict.js"));
});
describe("method-definition", () => {
it("name-invoke-fn-strict.js", createTestHandler("language/expressions/object/method-definition/name-invoke-fn-strict.js"));
});
describe("method-definition", () => {
it("name-length-dflt.js", createTestHandler("language/expressions/object/method-definition/name-length-dflt.js"));
});
describe("method-definition", () => {
it("name-length.js", createTestHandler("language/expressions/object/method-definition/name-length.js"));
});
describe("method-definition", () => {
it("name-name-prop-string.js", createTestHandler("language/expressions/object/method-definition/name-name-prop-string.js"));
});
describe("method-definition", () => {
it("name-name-prop-symbol.js", createTestHandler("language/expressions/object/method-definition/name-name-prop-symbol.js"));
});
describe("method-definition", () => {
it("name-param-id-yield.js", createTestHandler("language/expressions/object/method-definition/name-param-id-yield.js"));
});
describe("method-definition", () => {
it("name-param-init-yield.js", createTestHandler("language/expressions/object/method-definition/name-param-init-yield.js"));
});
describe("method-definition", () => {
it("name-param-redecl.js", createTestHandler("language/expressions/object/method-definition/name-param-redecl.js"));
});
describe("method-definition", () => {
it("name-params.js", createTestHandler("language/expressions/object/method-definition/name-params.js"));
});
describe("method-definition", () => {
it("name-prop-name-eval-error.js", createTestHandler("language/expressions/object/method-definition/name-prop-name-eval-error.js"));
});
describe("method-definition", () => {
it("name-prop-name-yield-expr.js", createTestHandler("language/expressions/object/method-definition/name-prop-name-yield-expr.js"));
});
describe("method-definition", () => {
it("name-prop-name-yield-id.js", createTestHandler("language/expressions/object/method-definition/name-prop-name-yield-id.js"));
});
describe("method-definition", () => {
it("name-property-desc.js", createTestHandler("language/expressions/object/method-definition/name-property-desc.js"));
});
describe("method-definition", () => {
it("name-prototype-prop.js", createTestHandler("language/expressions/object/method-definition/name-prototype-prop.js"));
});
describe("method-definition", () => {
it("name-prototype.js", createTestHandler("language/expressions/object/method-definition/name-prototype.js"));
});
describe("method-definition", () => {
it("name-super-call-body.js", createTestHandler("language/expressions/object/method-definition/name-super-call-body.js"));
});
describe("method-definition", () => {
it("name-super-call-param.js", createTestHandler("language/expressions/object/method-definition/name-super-call-param.js"));
});
describe("method-definition", () => {
it("name-super-prop-body.js", createTestHandler("language/expressions/object/method-definition/name-super-prop-body.js"));
});
describe("method-definition", () => {
it("name-super-prop-param.js", createTestHandler("language/expressions/object/method-definition/name-super-prop-param.js"));
});
describe("method-definition", () => {
it("object-method-returns-promise.js", createTestHandler("language/expressions/object/method-definition/object-method-returns-promise.js"));
});
describe("method-definition", () => {
it("params-dflt-gen-meth-args-unmapped.js", createTestHandler("language/expressions/object/method-definition/params-dflt-gen-meth-args-unmapped.js"));
});
describe("method-definition", () => {
it("params-dflt-gen-meth-ref-arguments.js", createTestHandler("language/expressions/object/method-definition/params-dflt-gen-meth-ref-arguments.js"));
});
describe("method-definition", () => {
it("params-dflt-meth-args-unmapped.js", createTestHandler("language/expressions/object/method-definition/params-dflt-meth-args-unmapped.js"));
});
describe("method-definition", () => {
it("params-dflt-meth-ref-arguments.js", createTestHandler("language/expressions/object/method-definition/params-dflt-meth-ref-arguments.js"));
});
describe("method-definition", () => {
it("private-name-early-error-async-fn-inside-class.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-async-fn-inside-class.js"));
});
describe("method-definition", () => {
it("private-name-early-error-async-fn.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-async-fn.js"));
});
describe("method-definition", () => {
it("private-name-early-error-async-gen-inside-class.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-async-gen-inside-class.js"));
});
describe("method-definition", () => {
it("private-name-early-error-async-gen.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-async-gen.js"));
});
describe("method-definition", () => {
it("private-name-early-error-gen-inside-class.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-gen-inside-class.js"));
});
describe("method-definition", () => {
it("private-name-early-error-gen.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-gen.js"));
});
describe("method-definition", () => {
it("private-name-early-error-get-method-inside-class.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-get-method-inside-class.js"));
});
describe("method-definition", () => {
it("private-name-early-error-get-method.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-get-method.js"));
});
describe("method-definition", () => {
it("private-name-early-error-method-inside-class.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-method-inside-class.js"));
});
describe("method-definition", () => {
it("private-name-early-error-method.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-method.js"));
});
describe("method-definition", () => {
it("private-name-early-error-set-method-inside-class.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-set-method-inside-class.js"));
});
describe("method-definition", () => {
it("private-name-early-error-set-method.js", createTestHandler("language/expressions/object/method-definition/private-name-early-error-set-method.js"));
});
describe("method-definition", () => {
it("setter-use-strict-with-non-simple-param.js", createTestHandler("language/expressions/object/method-definition/setter-use-strict-with-non-simple-param.js"));
});
describe("method-definition", () => {
it("static-init-await-binding-accessor.js", createTestHandler("language/expressions/object/method-definition/static-init-await-binding-accessor.js"));
});
describe("method-definition", () => {
it("static-init-await-binding-generator.js", createTestHandler("language/expressions/object/method-definition/static-init-await-binding-generator.js"));
});
describe("method-definition", () => {
it("static-init-await-binding-normal.js", createTestHandler("language/expressions/object/method-definition/static-init-await-binding-normal.js"));
});
describe("method-definition", () => {
it("static-init-await-reference-accessor.js", createTestHandler("language/expressions/object/method-definition/static-init-await-reference-accessor.js"));
});
describe("method-definition", () => {
it("static-init-await-reference-generator.js", createTestHandler("language/expressions/object/method-definition/static-init-await-reference-generator.js"));
});
describe("method-definition", () => {
it("static-init-await-reference-normal.js", createTestHandler("language/expressions/object/method-definition/static-init-await-reference-normal.js"));
});
describe("method-definition", () => {
it("use-strict-with-non-simple-param.js", createTestHandler("language/expressions/object/method-definition/use-strict-with-non-simple-param.js"));
});
describe("method-definition", () => {
it("yield-as-expression-with-rhs.js", createTestHandler("language/expressions/object/method-definition/yield-as-expression-with-rhs.js"));
});
describe("method-definition", () => {
it("yield-as-expression-without-rhs.js", createTestHandler("language/expressions/object/method-definition/yield-as-expression-without-rhs.js"));
});
describe("method-definition", () => {
it("yield-as-function-expression-binding-identifier.js", createTestHandler("language/expressions/object/method-definition/yield-as-function-expression-binding-identifier.js"));
});
describe("method-definition", () => {
it("yield-as-generator-method-binding-identifier.js", createTestHandler("language/expressions/object/method-definition/yield-as-generator-method-binding-identifier.js"));
});
describe("method-definition", () => {
it("yield-as-identifier-in-nested-function.js", createTestHandler("language/expressions/object/method-definition/yield-as-identifier-in-nested-function.js"));
});
describe("method-definition", () => {
it("yield-as-literal-property-name.js", createTestHandler("language/expressions/object/method-definition/yield-as-literal-property-name.js"));
});
describe("method-definition", () => {
it("yield-as-logical-or-expression.js", createTestHandler("language/expressions/object/method-definition/yield-as-logical-or-expression.js"));
});
describe("method-definition", () => {
it("yield-as-parameter.js", createTestHandler("language/expressions/object/method-definition/yield-as-parameter.js"));
});
describe("method-definition", () => {
it("yield-as-property-name.js", createTestHandler("language/expressions/object/method-definition/yield-as-property-name.js"));
});
describe("method-definition", () => {
it("yield-as-statement.js", createTestHandler("language/expressions/object/method-definition/yield-as-statement.js"));
});
describe("method-definition", () => {
it("yield-as-yield-operand.js", createTestHandler("language/expressions/object/method-definition/yield-as-yield-operand.js"));
});
describe("method-definition", () => {
it("yield-newline.js", createTestHandler("language/expressions/object/method-definition/yield-newline.js"));
});
describe("method-definition", () => {
it("yield-return.js", createTestHandler("language/expressions/object/method-definition/yield-return.js"));
});
describe("method-definition", () => {
it("yield-star-after-newline.js", createTestHandler("language/expressions/object/method-definition/yield-star-after-newline.js"));
});
describe("method-definition", () => {
it("yield-star-before-newline.js", createTestHandler("language/expressions/object/method-definition/yield-star-before-newline.js"));
});
describe("method-definition", () => {
it("yield-weak-binding.js", createTestHandler("language/expressions/object/method-definition/yield-weak-binding.js"));
});
it("method.js", createTestHandler("language/expressions/object/method.js"));
it("not-defined.js", createTestHandler("language/expressions/object/not-defined.js"));
it("object-spread-proxy-get-not-called-on-dontenum-keys.js", createTestHandler("language/expressions/object/object-spread-proxy-get-not-called-on-dontenum-keys.js"));
it("object-spread-proxy-no-excluded-keys.js", createTestHandler("language/expressions/object/object-spread-proxy-no-excluded-keys.js"));
it("object-spread-proxy-ownkeys-returned-keys-order.js", createTestHandler("language/expressions/object/object-spread-proxy-ownkeys-returned-keys-order.js"));
it("prop-def-id-eval-error-2.js", createTestHandler("language/expressions/object/prop-def-id-eval-error-2.js"));
it("prop-def-id-eval-error.js", createTestHandler("language/expressions/object/prop-def-id-eval-error.js"));
it("prop-def-id-get-error.js", createTestHandler("language/expressions/object/prop-def-id-get-error.js"));
it("prop-def-id-valid.js", createTestHandler("language/expressions/object/prop-def-id-valid.js"));
it("prop-def-invalid-async-prefix.js", createTestHandler("language/expressions/object/prop-def-invalid-async-prefix.js"));
it("prop-def-invalid-star-prefix.js", createTestHandler("language/expressions/object/prop-def-invalid-star-prefix.js"));
it("prop-dup-data-data.js", createTestHandler("language/expressions/object/prop-dup-data-data.js"));
it("prop-dup-data-set.js", createTestHandler("language/expressions/object/prop-dup-data-set.js"));
it("prop-dup-get-data.js", createTestHandler("language/expressions/object/prop-dup-get-data.js"));
it("prop-dup-get-get.js", createTestHandler("language/expressions/object/prop-dup-get-get.js"));
it("prop-dup-get-set-get.js", createTestHandler("language/expressions/object/prop-dup-get-set-get.js"));
it("prop-dup-set-data.js", createTestHandler("language/expressions/object/prop-dup-set-data.js"));
it("prop-dup-set-get-set.js", createTestHandler("language/expressions/object/prop-dup-set-get-set.js"));
it("prop-dup-set-set.js", createTestHandler("language/expressions/object/prop-dup-set-set.js"));
it("properties-names-eval-arguments.js", createTestHandler("language/expressions/object/properties-names-eval-arguments.js"));
it("property-name-yield.js", createTestHandler("language/expressions/object/property-name-yield.js"));
it("scope-gen-meth-body-lex-distinct.js", createTestHandler("language/expressions/object/scope-gen-meth-body-lex-distinct.js"));
it("scope-gen-meth-param-elem-var-close.js", createTestHandler("language/expressions/object/scope-gen-meth-param-elem-var-close.js"));
it("scope-gen-meth-param-elem-var-open.js", createTestHandler("language/expressions/object/scope-gen-meth-param-elem-var-open.js"));
it("scope-gen-meth-param-rest-elem-var-close.js", createTestHandler("language/expressions/object/scope-gen-meth-param-rest-elem-var-close.js"));
it("scope-gen-meth-param-rest-elem-var-open.js", createTestHandler("language/expressions/object/scope-gen-meth-param-rest-elem-var-open.js"));
it("scope-gen-meth-paramsbody-var-close.js", createTestHandler("language/expressions/object/scope-gen-meth-paramsbody-var-close.js"));
it("scope-gen-meth-paramsbody-var-open.js", createTestHandler("language/expressions/object/scope-gen-meth-paramsbody-var-open.js"));
it("scope-getter-body-lex-distinc.js", createTestHandler("language/expressions/object/scope-getter-body-lex-distinc.js"));
it("scope-meth-body-lex-distinct.js", createTestHandler("language/expressions/object/scope-meth-body-lex-distinct.js"));
it("scope-meth-param-elem-var-close.js", createTestHandler("language/expressions/object/scope-meth-param-elem-var-close.js"));
it("scope-meth-param-elem-var-open.js", createTestHandler("language/expressions/object/scope-meth-param-elem-var-open.js"));
it("scope-meth-param-rest-elem-var-close.js", createTestHandler("language/expressions/object/scope-meth-param-rest-elem-var-close.js"));
it("scope-meth-param-rest-elem-var-open.js", createTestHandler("language/expressions/object/scope-meth-param-rest-elem-var-open.js"));
it("scope-meth-paramsbody-var-close.js", createTestHandler("language/expressions/object/scope-meth-paramsbody-var-close.js"));
it("scope-meth-paramsbody-var-open.js", createTestHandler("language/expressions/object/scope-meth-paramsbody-var-open.js"));
it("scope-setter-body-lex-distinc.js", createTestHandler("language/expressions/object/scope-setter-body-lex-distinc.js"));
it("scope-setter-paramsbody-var-close.js", createTestHandler("language/expressions/object/scope-setter-paramsbody-var-close.js"));
it("scope-setter-paramsbody-var-open.js", createTestHandler("language/expressions/object/scope-setter-paramsbody-var-open.js"));
it("setter-body-strict-inside.js", createTestHandler("language/expressions/object/setter-body-strict-inside.js"));
it("setter-body-strict-outside.js", createTestHandler("language/expressions/object/setter-body-strict-outside.js"));
it("setter-length-dflt.js", createTestHandler("language/expressions/object/setter-length-dflt.js"));
it("setter-param-arguments-strict-inside.js", createTestHandler("language/expressions/object/setter-param-arguments-strict-inside.js"));
it("setter-param-arguments-strict-outside.js", createTestHandler("language/expressions/object/setter-param-arguments-strict-outside.js"));
it("setter-param-eval-strict-inside.js", createTestHandler("language/expressions/object/setter-param-eval-strict-inside.js"));
it("setter-param-eval-strict-outside.js", createTestHandler("language/expressions/object/setter-param-eval-strict-outside.js"));
it("setter-prop-desc.js", createTestHandler("language/expressions/object/setter-prop-desc.js"));
it("setter-super-prop.js", createTestHandler("language/expressions/object/setter-super-prop.js"));
it("yield-non-strict-access.js", createTestHandler("language/expressions/object/yield-non-strict-access.js"));
it("yield-non-strict-syntax.js", createTestHandler("language/expressions/object/yield-non-strict-syntax.js"));
});
