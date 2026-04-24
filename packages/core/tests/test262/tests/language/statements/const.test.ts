import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("const", () => {
it("block-local-closure-get-before-initialization.js", createTestHandler("language/statements/const/block-local-closure-get-before-initialization.js"));
it("block-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/const/block-local-use-before-initialization-in-declaration-statement.js"));
it("block-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/const/block-local-use-before-initialization-in-prior-statement.js"));
it("cptn-value.js", createTestHandler("language/statements/const/cptn-value.js"));
describe("dstr", () => {
it("ary-init-iter-close.js", createTestHandler("language/statements/const/dstr/ary-init-iter-close.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err-array-prototype.js", createTestHandler("language/statements/const/dstr/ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err.js", createTestHandler("language/statements/const/dstr/ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("ary-init-iter-no-close.js", createTestHandler("language/statements/const/dstr/ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("ary-name-iter-val.js", createTestHandler("language/statements/const/dstr/ary-name-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-val-null.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-hole.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-throws.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-undef.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-done.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id-init.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-null.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-exhausted.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-step-err.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision.js", createTestHandler("language/statements/const/dstr/ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-empty.js", createTestHandler("language/statements/const/dstr/ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elem.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elision.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-empty.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-rest.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-direct.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-exhausted.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-ary.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-id.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-obj.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-ary.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-id.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-obj.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-id.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/statements/const/dstr/ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("obj-init-null.js", createTestHandler("language/statements/const/dstr/obj-init-null.js"));
});
describe("dstr", () => {
it("obj-init-undefined.js", createTestHandler("language/statements/const/dstr/obj-init-undefined.js"));
});
describe("dstr", () => {
it("obj-ptrn-empty.js", createTestHandler("language/statements/const/dstr/obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-get-value-err.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-skipped.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-throws.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-unresolvable.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-trailing-comma.js", createTestHandler("language/statements/const/dstr/obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-list-err.js", createTestHandler("language/statements/const/dstr/obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-init.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-value-null.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-eval-err.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-throws.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-init.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-null.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj.js", createTestHandler("language/statements/const/dstr/obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-getter.js", createTestHandler("language/statements/const/dstr/obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/statements/const/dstr/obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-val-obj.js", createTestHandler("language/statements/const/dstr/obj-ptrn-rest-val-obj.js"));
});
it("fn-name-arrow.js", createTestHandler("language/statements/const/fn-name-arrow.js"));
it("fn-name-class.js", createTestHandler("language/statements/const/fn-name-class.js"));
it("fn-name-cover.js", createTestHandler("language/statements/const/fn-name-cover.js"));
it("fn-name-fn.js", createTestHandler("language/statements/const/fn-name-fn.js"));
it("fn-name-gen.js", createTestHandler("language/statements/const/fn-name-gen.js"));
it("function-local-closure-get-before-initialization.js", createTestHandler("language/statements/const/function-local-closure-get-before-initialization.js"));
it("function-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/const/function-local-use-before-initialization-in-declaration-statement.js"));
it("function-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/const/function-local-use-before-initialization-in-prior-statement.js"));
it("global-closure-get-before-initialization.js", createTestHandler("language/statements/const/global-closure-get-before-initialization.js"));
it("global-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/const/global-use-before-initialization-in-declaration-statement.js"));
it("global-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/const/global-use-before-initialization-in-prior-statement.js"));
it("redeclaration-error-from-within-strict-mode-function-const.js", createTestHandler("language/statements/const/redeclaration-error-from-within-strict-mode-function-const.js"));
it("static-init-await-binding-invalid.js", createTestHandler("language/statements/const/static-init-await-binding-invalid.js"));
it("static-init-await-binding-valid.js", createTestHandler("language/statements/const/static-init-await-binding-valid.js"));
describe("syntax", () => {
it("block-scope-syntax-const-declarations-mixed-with-without-initialiser.js", createTestHandler("language/statements/const/syntax/block-scope-syntax-const-declarations-mixed-with-without-initialiser.js"));
});
describe("syntax", () => {
it("block-scope-syntax-const-declarations-mixed-without-with-initialiser.js", createTestHandler("language/statements/const/syntax/block-scope-syntax-const-declarations-mixed-without-with-initialiser.js"));
});
describe("syntax", () => {
it("block-scope-syntax-const-declarations-without-initialiser.js", createTestHandler("language/statements/const/syntax/block-scope-syntax-const-declarations-without-initialiser.js"));
});
describe("syntax", () => {
it("const-declaring-let-split-across-two-lines.js", createTestHandler("language/statements/const/syntax/const-declaring-let-split-across-two-lines.js"));
});
describe("syntax", () => {
it("const-invalid-assignment-next-expression-for.js", createTestHandler("language/statements/const/syntax/const-invalid-assignment-next-expression-for.js"));
});
describe("syntax", () => {
it("const-invalid-assignment-statement-body-for-in.js", createTestHandler("language/statements/const/syntax/const-invalid-assignment-statement-body-for-in.js"));
});
describe("syntax", () => {
it("const-invalid-assignment-statement-body-for-of.js", createTestHandler("language/statements/const/syntax/const-invalid-assignment-statement-body-for-of.js"));
});
describe("syntax", () => {
it("const-outer-inner-let-bindings.js", createTestHandler("language/statements/const/syntax/const-outer-inner-let-bindings.js"));
});
describe("syntax", () => {
it("const.js", createTestHandler("language/statements/const/syntax/const.js"));
});
describe("syntax", () => {
it("with-initializer-case-expression-statement-list.js", createTestHandler("language/statements/const/syntax/with-initializer-case-expression-statement-list.js"));
});
describe("syntax", () => {
it("with-initializer-default-statement-list.js", createTestHandler("language/statements/const/syntax/with-initializer-default-statement-list.js"));
});
describe("syntax", () => {
it("with-initializer-do-statement-while-expression.js", createTestHandler("language/statements/const/syntax/with-initializer-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("with-initializer-for-statement.js", createTestHandler("language/statements/const/syntax/with-initializer-for-statement.js"));
});
describe("syntax", () => {
it("with-initializer-if-expression-statement-else-statement.js", createTestHandler("language/statements/const/syntax/with-initializer-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("with-initializer-if-expression-statement.js", createTestHandler("language/statements/const/syntax/with-initializer-if-expression-statement.js"));
});
describe("syntax", () => {
it("with-initializer-label-statement.js", createTestHandler("language/statements/const/syntax/with-initializer-label-statement.js"));
});
describe("syntax", () => {
it("with-initializer-while-expression-statement.js", createTestHandler("language/statements/const/syntax/with-initializer-while-expression-statement.js"));
});
describe("syntax", () => {
it("without-initializer-case-expression-statement-list.js", createTestHandler("language/statements/const/syntax/without-initializer-case-expression-statement-list.js"));
});
describe("syntax", () => {
it("without-initializer-default-statement-list.js", createTestHandler("language/statements/const/syntax/without-initializer-default-statement-list.js"));
});
describe("syntax", () => {
it("without-initializer-do-statement-while-expression.js", createTestHandler("language/statements/const/syntax/without-initializer-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("without-initializer-for-statement.js", createTestHandler("language/statements/const/syntax/without-initializer-for-statement.js"));
});
describe("syntax", () => {
it("without-initializer-if-expression-statement-else-statement.js", createTestHandler("language/statements/const/syntax/without-initializer-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("without-initializer-if-expression-statement.js", createTestHandler("language/statements/const/syntax/without-initializer-if-expression-statement.js"));
});
describe("syntax", () => {
it("without-initializer-label-statement.js", createTestHandler("language/statements/const/syntax/without-initializer-label-statement.js"));
});
describe("syntax", () => {
it("without-initializer-while-expression-statement.js", createTestHandler("language/statements/const/syntax/without-initializer-while-expression-statement.js"));
});
});
