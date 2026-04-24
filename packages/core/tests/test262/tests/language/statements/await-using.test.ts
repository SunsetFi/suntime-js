import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("await-using", () => {
it("Symbol.asyncDispose-getter.js", createTestHandler("language/statements/await-using/Symbol.asyncDispose-getter.js"));
it("Symbol.asyncDispose-method-called-with-correct-this.js", createTestHandler("language/statements/await-using/Symbol.asyncDispose-method-called-with-correct-this.js"));
it("Symbol.asyncDispose-method-not-async.js", createTestHandler("language/statements/await-using/Symbol.asyncDispose-method-not-async.js"));
it("Symbol.dispose-getter.js", createTestHandler("language/statements/await-using/Symbol.dispose-getter.js"));
it("Symbol.dispose-method-called-with-correct-this.js", createTestHandler("language/statements/await-using/Symbol.dispose-method-called-with-correct-this.js"));
it("await-using-Symbol.asyncDispose-allows-non-promise-return-value.js", createTestHandler("language/statements/await-using/await-using-Symbol.asyncDispose-allows-non-promise-return-value.js"));
it("await-using-Symbol.asyncDispose-allows-promiselike-return-value.js", createTestHandler("language/statements/await-using/await-using-Symbol.asyncDispose-allows-promiselike-return-value.js"));
it("await-using-allows-null-initializer.js", createTestHandler("language/statements/await-using/await-using-allows-null-initializer.js"));
it("await-using-allows-undefined-initializer.js", createTestHandler("language/statements/await-using/await-using-allows-undefined-initializer.js"));
it("await-using-does-not-imply-await-if-not-evaluated.js", createTestHandler("language/statements/await-using/await-using-does-not-imply-await-if-not-evaluated.js"));
it("await-using-implies-await-if-evaluated.js", createTestHandler("language/statements/await-using/await-using-implies-await-if-evaluated.js"));
it("block-local-closure-get-before-initialization.js", createTestHandler("language/statements/await-using/block-local-closure-get-before-initialization.js"));
it("block-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/await-using/block-local-use-before-initialization-in-declaration-statement.js"));
it("block-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/await-using/block-local-use-before-initialization-in-prior-statement.js"));
it("fn-name-arrow.js", createTestHandler("language/statements/await-using/fn-name-arrow.js"));
it("fn-name-class.js", createTestHandler("language/statements/await-using/fn-name-class.js"));
it("fn-name-cover.js", createTestHandler("language/statements/await-using/fn-name-cover.js"));
it("fn-name-fn.js", createTestHandler("language/statements/await-using/fn-name-fn.js"));
it("fn-name-gen.js", createTestHandler("language/statements/await-using/fn-name-gen.js"));
it("function-local-closure-get-before-initialization.js", createTestHandler("language/statements/await-using/function-local-closure-get-before-initialization.js"));
it("function-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/await-using/function-local-use-before-initialization-in-declaration-statement.js"));
it("function-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/await-using/function-local-use-before-initialization-in-prior-statement.js"));
it("gets-initializer-Symbol.asyncDispose-property-once.js", createTestHandler("language/statements/await-using/gets-initializer-Symbol.asyncDispose-property-once.js"));
it("gets-initializer-Symbol.dispose-after-Symbol.asyncDispose-is-null.js", createTestHandler("language/statements/await-using/gets-initializer-Symbol.dispose-after-Symbol.asyncDispose-is-null.js"));
it("gets-initializer-Symbol.dispose-after-Symbol.asyncDispose-is-undefined.js", createTestHandler("language/statements/await-using/gets-initializer-Symbol.dispose-after-Symbol.asyncDispose-is-undefined.js"));
it("gets-initializer-Symbol.dispose-property-once.js", createTestHandler("language/statements/await-using/gets-initializer-Symbol.dispose-property-once.js"));
it("gets-initializer-does-not-read-Symbol.dispose-if-Symbol.asyncDispose-exists.js", createTestHandler("language/statements/await-using/gets-initializer-does-not-read-Symbol.dispose-if-Symbol.asyncDispose-exists.js"));
it("global-closure-get-before-initialization.js", createTestHandler("language/statements/await-using/global-closure-get-before-initialization.js"));
it("global-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/await-using/global-use-before-initialization-in-declaration-statement.js"));
it("global-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/await-using/global-use-before-initialization-in-prior-statement.js"));
it("initializer-Symbol.asyncDispose-called-at-end-of-asyncfunctionbody.js", createTestHandler("language/statements/await-using/initializer-Symbol.asyncDispose-called-at-end-of-asyncfunctionbody.js"));
it("initializer-Symbol.asyncDispose-called-at-end-of-asyncgeneratorbody.js", createTestHandler("language/statements/await-using/initializer-Symbol.asyncDispose-called-at-end-of-asyncgeneratorbody.js"));
it("initializer-Symbol.asyncDispose-called-at-end-of-block.js", createTestHandler("language/statements/await-using/initializer-Symbol.asyncDispose-called-at-end-of-block.js"));
it("initializer-Symbol.asyncDispose-called-at-end-of-each-iteration-of-forofstatement.js", createTestHandler("language/statements/await-using/initializer-Symbol.asyncDispose-called-at-end-of-each-iteration-of-forofstatement.js"));
it("initializer-Symbol.asyncDispose-called-at-end-of-forstatement.js", createTestHandler("language/statements/await-using/initializer-Symbol.asyncDispose-called-at-end-of-forstatement.js"));
it("initializer-Symbol.asyncDispose-called-if-subsequent-initializer-throws-in-forstatement-head.js", createTestHandler("language/statements/await-using/initializer-Symbol.asyncDispose-called-if-subsequent-initializer-throws-in-forstatement-head.js"));
it("initializer-Symbol.asyncDispose-called-if-subsequent-initializer-throws.js", createTestHandler("language/statements/await-using/initializer-Symbol.asyncDispose-called-if-subsequent-initializer-throws.js"));
it("initializer-Symbol.dispose-called-at-end-of-asyncfunctionbody.js", createTestHandler("language/statements/await-using/initializer-Symbol.dispose-called-at-end-of-asyncfunctionbody.js"));
it("initializer-Symbol.dispose-called-at-end-of-asyncgeneratorbody.js", createTestHandler("language/statements/await-using/initializer-Symbol.dispose-called-at-end-of-asyncgeneratorbody.js"));
it("initializer-Symbol.dispose-called-at-end-of-block.js", createTestHandler("language/statements/await-using/initializer-Symbol.dispose-called-at-end-of-block.js"));
it("initializer-Symbol.dispose-called-at-end-of-each-iteration-of-forofstatement.js", createTestHandler("language/statements/await-using/initializer-Symbol.dispose-called-at-end-of-each-iteration-of-forofstatement.js"));
it("initializer-Symbol.dispose-called-at-end-of-forstatement.js", createTestHandler("language/statements/await-using/initializer-Symbol.dispose-called-at-end-of-forstatement.js"));
it("initializer-Symbol.dispose-called-if-subsequent-initializer-throws-in-forstatement-head.js", createTestHandler("language/statements/await-using/initializer-Symbol.dispose-called-if-subsequent-initializer-throws-in-forstatement-head.js"));
it("initializer-Symbol.dispose-called-if-subsequent-initializer-throws.js", createTestHandler("language/statements/await-using/initializer-Symbol.dispose-called-if-subsequent-initializer-throws.js"));
it("multiple-resources-disposed-in-reverse-order.js", createTestHandler("language/statements/await-using/multiple-resources-disposed-in-reverse-order.js"));
it("puts-initializer-on-top-of-disposableresourcestack-multiple-bindings.js", createTestHandler("language/statements/await-using/puts-initializer-on-top-of-disposableresourcestack-multiple-bindings.js"));
it("puts-initializer-on-top-of-disposableresourcestack-subsequent-usings.js", createTestHandler("language/statements/await-using/puts-initializer-on-top-of-disposableresourcestack-subsequent-usings.js"));
it("redeclaration-error-from-within-strict-mode-function-await-using.js", createTestHandler("language/statements/await-using/redeclaration-error-from-within-strict-mode-function-await-using.js"));
describe("syntax", () => {
it("await-using-allowed-at-top-level-of-module.js", createTestHandler("language/statements/await-using/syntax/await-using-allowed-at-top-level-of-module.js"));
});
describe("syntax", () => {
it("await-using-allows-bindingidentifier.js", createTestHandler("language/statements/await-using/syntax/await-using-allows-bindingidentifier.js"));
});
describe("syntax", () => {
it("await-using-allows-multiple-bindings.js", createTestHandler("language/statements/await-using/syntax/await-using-allows-multiple-bindings.js"));
});
describe("syntax", () => {
it("await-using-declaring-let-split-across-two-lines.js", createTestHandler("language/statements/await-using/syntax/await-using-declaring-let-split-across-two-lines.js"));
});
describe("syntax", () => {
it("await-using-invalid-arraybindingpattern-after-bindingidentifier.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-arraybindingpattern-after-bindingidentifier.js"));
});
describe("syntax", () => {
it("await-using-invalid-arraybindingpattern-does-not-break-element-access.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-arraybindingpattern-does-not-break-element-access.js"));
});
describe("syntax", () => {
it("await-using-invalid-arraybindingpattern.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-arraybindingpattern.js"));
});
describe("syntax", () => {
it("await-using-invalid-assignment-next-expression-for.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-assignment-next-expression-for.js"));
});
describe("syntax", () => {
it("await-using-invalid-assignment-statement-body-for-of.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-assignment-statement-body-for-of.js"));
});
describe("syntax", () => {
it("await-using-invalid-for-in.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-for-in.js"));
});
describe("syntax", () => {
it("await-using-invalid-objectbindingpattern-after-bindingidentifier.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-objectbindingpattern-after-bindingidentifier.js"));
});
describe("syntax", () => {
it("await-using-invalid-objectbindingpattern.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-objectbindingpattern.js"));
});
describe("syntax", () => {
it("await-using-invalid-switchstatement-caseclause.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-switchstatement-caseclause.js"));
});
describe("syntax", () => {
it("await-using-invalid-switchstatement-defaultclause.js", createTestHandler("language/statements/await-using/syntax/await-using-invalid-switchstatement-defaultclause.js"));
});
describe("syntax", () => {
it("await-using-not-allowed-at-top-level-of-eval.js", createTestHandler("language/statements/await-using/syntax/await-using-not-allowed-at-top-level-of-eval.js"));
});
describe("syntax", () => {
it("await-using-not-allowed-at-top-level-of-script.js", createTestHandler("language/statements/await-using/syntax/await-using-not-allowed-at-top-level-of-script.js"));
});
describe("syntax", () => {
it("await-using-outer-inner-using-bindings.js", createTestHandler("language/statements/await-using/syntax/await-using-outer-inner-using-bindings.js"));
});
describe("syntax", () => {
it("await-using-valid-for-await-using-of-of.js", createTestHandler("language/statements/await-using/syntax/await-using-valid-for-await-using-of-of.js"));
});
describe("syntax", () => {
it("await-using.js", createTestHandler("language/statements/await-using/syntax/await-using.js"));
});
describe("syntax", () => {
it("block-scope-syntax-await-using-declarations-mixed-with-without-initializer.js", createTestHandler("language/statements/await-using/syntax/block-scope-syntax-await-using-declarations-mixed-with-without-initializer.js"));
});
describe("syntax", () => {
it("block-scope-syntax-await-using-declarations-mixed-without-with-initializer.js", createTestHandler("language/statements/await-using/syntax/block-scope-syntax-await-using-declarations-mixed-without-with-initializer.js"));
});
describe("syntax", () => {
it("block-scope-syntax-await-using-declarations-without-initializer.js", createTestHandler("language/statements/await-using/syntax/block-scope-syntax-await-using-declarations-without-initializer.js"));
});
describe("syntax", () => {
it("with-initializer-case-expression-statement-list.js", createTestHandler("language/statements/await-using/syntax/with-initializer-case-expression-statement-list.js"));
});
describe("syntax", () => {
it("with-initializer-default-statement-list.js", createTestHandler("language/statements/await-using/syntax/with-initializer-default-statement-list.js"));
});
describe("syntax", () => {
it("with-initializer-do-statement-while-expression.js", createTestHandler("language/statements/await-using/syntax/with-initializer-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("with-initializer-for-statement.js", createTestHandler("language/statements/await-using/syntax/with-initializer-for-statement.js"));
});
describe("syntax", () => {
it("with-initializer-if-expression-statement-else-statement.js", createTestHandler("language/statements/await-using/syntax/with-initializer-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("with-initializer-if-expression-statement.js", createTestHandler("language/statements/await-using/syntax/with-initializer-if-expression-statement.js"));
});
describe("syntax", () => {
it("with-initializer-label-statement.js", createTestHandler("language/statements/await-using/syntax/with-initializer-label-statement.js"));
});
describe("syntax", () => {
it("with-initializer-while-expression-statement.js", createTestHandler("language/statements/await-using/syntax/with-initializer-while-expression-statement.js"));
});
describe("syntax", () => {
it("without-initializer-do-statement-while-expression.js", createTestHandler("language/statements/await-using/syntax/without-initializer-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("without-initializer-for-statement.js", createTestHandler("language/statements/await-using/syntax/without-initializer-for-statement.js"));
});
describe("syntax", () => {
it("without-initializer-if-expression-statement-else-statement.js", createTestHandler("language/statements/await-using/syntax/without-initializer-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("without-initializer-if-expression-statement.js", createTestHandler("language/statements/await-using/syntax/without-initializer-if-expression-statement.js"));
});
describe("syntax", () => {
it("without-initializer-label-statement.js", createTestHandler("language/statements/await-using/syntax/without-initializer-label-statement.js"));
});
describe("syntax", () => {
it("without-initializer-while-expression-statement.js", createTestHandler("language/statements/await-using/syntax/without-initializer-while-expression-statement.js"));
});
it("throws-error-as-is-if-only-one-error-during-disposal.js", createTestHandler("language/statements/await-using/throws-error-as-is-if-only-one-error-during-disposal.js"));
it("throws-if-initializer-Symbol.asyncDispose-property-is-null.js", createTestHandler("language/statements/await-using/throws-if-initializer-Symbol.asyncDispose-property-is-null.js"));
it("throws-if-initializer-Symbol.asyncDispose-property-is-undefined.js", createTestHandler("language/statements/await-using/throws-if-initializer-Symbol.asyncDispose-property-is-undefined.js"));
it("throws-if-initializer-Symbol.asyncDispose-property-not-callable.js", createTestHandler("language/statements/await-using/throws-if-initializer-Symbol.asyncDispose-property-not-callable.js"));
it("throws-if-initializer-Symbol.dispose-property-is-null.js", createTestHandler("language/statements/await-using/throws-if-initializer-Symbol.dispose-property-is-null.js"));
it("throws-if-initializer-Symbol.dispose-property-is-undefined.js", createTestHandler("language/statements/await-using/throws-if-initializer-Symbol.dispose-property-is-undefined.js"));
it("throws-if-initializer-Symbol.dispose-property-not-callable.js", createTestHandler("language/statements/await-using/throws-if-initializer-Symbol.dispose-property-not-callable.js"));
it("throws-if-initializer-missing-both-Symbol.asyncDispose-and-Symbol.dispose.js", createTestHandler("language/statements/await-using/throws-if-initializer-missing-both-Symbol.asyncDispose-and-Symbol.dispose.js"));
it("throws-if-initializer-not-object.js", createTestHandler("language/statements/await-using/throws-if-initializer-not-object.js"));
it("throws-suppressederror-if-multiple-errors-during-disposal.js", createTestHandler("language/statements/await-using/throws-suppressederror-if-multiple-errors-during-disposal.js"));
});
