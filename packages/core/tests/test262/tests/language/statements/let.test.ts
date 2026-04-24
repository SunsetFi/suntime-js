import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("let", () => {
it("block-local-closure-get-before-initialization.js", createTestHandler("language/statements/let/block-local-closure-get-before-initialization.js"));
it("block-local-closure-set-before-initialization.js", createTestHandler("language/statements/let/block-local-closure-set-before-initialization.js"));
it("block-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/let/block-local-use-before-initialization-in-declaration-statement.js"));
it("block-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/let/block-local-use-before-initialization-in-prior-statement.js"));
it("cptn-value.js", createTestHandler("language/statements/let/cptn-value.js"));
describe("dstr", () => {
it("ary-init-iter-close.js", createTestHandler("language/statements/let/dstr/ary-init-iter-close.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err-array-prototype.js", createTestHandler("language/statements/let/dstr/ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err.js", createTestHandler("language/statements/let/dstr/ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("ary-init-iter-no-close.js", createTestHandler("language/statements/let/dstr/ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("ary-name-iter-val.js", createTestHandler("language/statements/let/dstr/ary-name-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-val-null.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-hole.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-throws.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-undef.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-done.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id-init.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-null.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-exhausted.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-step-err.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision.js", createTestHandler("language/statements/let/dstr/ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-empty.js", createTestHandler("language/statements/let/dstr/ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elem.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elision.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-empty.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-rest.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-direct.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-exhausted.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-ary.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-id.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-obj.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-ary.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-id.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-obj.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-id.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/statements/let/dstr/ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("obj-init-null.js", createTestHandler("language/statements/let/dstr/obj-init-null.js"));
});
describe("dstr", () => {
it("obj-init-undefined.js", createTestHandler("language/statements/let/dstr/obj-init-undefined.js"));
});
describe("dstr", () => {
it("obj-ptrn-empty.js", createTestHandler("language/statements/let/dstr/obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-get-value-err.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-skipped.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-throws.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-unresolvable.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-trailing-comma.js", createTestHandler("language/statements/let/dstr/obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-list-err.js", createTestHandler("language/statements/let/dstr/obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-init.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-value-null.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-eval-err.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-throws.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-init.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-null.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj.js", createTestHandler("language/statements/let/dstr/obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-getter.js", createTestHandler("language/statements/let/dstr/obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/statements/let/dstr/obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-val-obj.js", createTestHandler("language/statements/let/dstr/obj-ptrn-rest-val-obj.js"));
});
it("fn-name-arrow.js", createTestHandler("language/statements/let/fn-name-arrow.js"));
it("fn-name-class.js", createTestHandler("language/statements/let/fn-name-class.js"));
it("fn-name-cover.js", createTestHandler("language/statements/let/fn-name-cover.js"));
it("fn-name-fn.js", createTestHandler("language/statements/let/fn-name-fn.js"));
it("fn-name-gen.js", createTestHandler("language/statements/let/fn-name-gen.js"));
it("function-local-closure-get-before-initialization.js", createTestHandler("language/statements/let/function-local-closure-get-before-initialization.js"));
it("function-local-closure-set-before-initialization.js", createTestHandler("language/statements/let/function-local-closure-set-before-initialization.js"));
it("function-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/let/function-local-use-before-initialization-in-declaration-statement.js"));
it("function-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/let/function-local-use-before-initialization-in-prior-statement.js"));
it("global-closure-get-before-initialization.js", createTestHandler("language/statements/let/global-closure-get-before-initialization.js"));
it("global-closure-set-before-initialization.js", createTestHandler("language/statements/let/global-closure-set-before-initialization.js"));
it("global-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/let/global-use-before-initialization-in-declaration-statement.js"));
it("global-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/let/global-use-before-initialization-in-prior-statement.js"));
it("redeclaration-error-from-within-strict-mode-function.js", createTestHandler("language/statements/let/redeclaration-error-from-within-strict-mode-function.js"));
it("static-init-await-binding-invalid.js", createTestHandler("language/statements/let/static-init-await-binding-invalid.js"));
it("static-init-await-binding-valid.js", createTestHandler("language/statements/let/static-init-await-binding-valid.js"));
describe("syntax", () => {
it("escaped-let.js", createTestHandler("language/statements/let/syntax/escaped-let.js"));
});
describe("syntax", () => {
it("identifier-let-allowed-as-lefthandside-expression-strict.js", createTestHandler("language/statements/let/syntax/identifier-let-allowed-as-lefthandside-expression-strict.js"));
});
describe("syntax", () => {
it("identifier-let-disallowed-as-boundname.js", createTestHandler("language/statements/let/syntax/identifier-let-disallowed-as-boundname.js"));
});
describe("syntax", () => {
it("let-closure-inside-condition.js", createTestHandler("language/statements/let/syntax/let-closure-inside-condition.js"));
});
describe("syntax", () => {
it("let-closure-inside-initialization.js", createTestHandler("language/statements/let/syntax/let-closure-inside-initialization.js"));
});
describe("syntax", () => {
it("let-closure-inside-next-expression.js", createTestHandler("language/statements/let/syntax/let-closure-inside-next-expression.js"));
});
describe("syntax", () => {
it("let-iteration-variable-is-freshly-allocated-for-each-iteration-multi-let-binding.js", createTestHandler("language/statements/let/syntax/let-iteration-variable-is-freshly-allocated-for-each-iteration-multi-let-binding.js"));
});
describe("syntax", () => {
it("let-iteration-variable-is-freshly-allocated-for-each-iteration-single-let-binding.js", createTestHandler("language/statements/let/syntax/let-iteration-variable-is-freshly-allocated-for-each-iteration-single-let-binding.js"));
});
describe("syntax", () => {
it("let-let-declaration-split-across-two-lines.js", createTestHandler("language/statements/let/syntax/let-let-declaration-split-across-two-lines.js"));
});
describe("syntax", () => {
it("let-let-declaration-with-initializer-split-across-two-lines.js", createTestHandler("language/statements/let/syntax/let-let-declaration-with-initializer-split-across-two-lines.js"));
});
describe("syntax", () => {
it("let-newline-await-in-normal-function.js", createTestHandler("language/statements/let/syntax/let-newline-await-in-normal-function.js"));
});
describe("syntax", () => {
it("let-newline-yield-in-generator-function.js", createTestHandler("language/statements/let/syntax/let-newline-yield-in-generator-function.js"));
});
describe("syntax", () => {
it("let-newline-yield-in-normal-function.js", createTestHandler("language/statements/let/syntax/let-newline-yield-in-normal-function.js"));
});
describe("syntax", () => {
it("let-outer-inner-let-bindings.js", createTestHandler("language/statements/let/syntax/let-outer-inner-let-bindings.js"));
});
describe("syntax", () => {
it("let.js", createTestHandler("language/statements/let/syntax/let.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-case-expression-statement-list.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-case-expression-statement-list.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-default-statement-list.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-default-statement-list.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-do-statement-while-expression.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-for-statement.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-for-statement.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-if-expression-statement-else-statement.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-if-expression-statement.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-if-expression-statement.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-label-statement.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-label-statement.js"));
});
describe("syntax", () => {
it("with-initialisers-in-statement-positions-while-expression-statement.js", createTestHandler("language/statements/let/syntax/with-initialisers-in-statement-positions-while-expression-statement.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-case-expression-statement-list.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-case-expression-statement-list.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-default-statement-list.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-default-statement-list.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-do-statement-while-expression.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-for-statement.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-for-statement.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-if-expression-statement-else-statement.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-if-expression-statement.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-if-expression-statement.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-label-statement.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-label-statement.js"));
});
describe("syntax", () => {
it("without-initialisers-in-statement-positions-while-expression-statement.js", createTestHandler("language/statements/let/syntax/without-initialisers-in-statement-positions-while-expression-statement.js"));
});
});
