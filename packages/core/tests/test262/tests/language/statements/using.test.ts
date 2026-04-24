import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("using", () => {
it("Symbol.dispose-getter.js", createTestHandler("language/statements/using/Symbol.dispose-getter.js"));
it("Symbol.dispose-method-called-with-correct-this.js", createTestHandler("language/statements/using/Symbol.dispose-method-called-with-correct-this.js"));
it("block-local-closure-get-before-initialization.js", createTestHandler("language/statements/using/block-local-closure-get-before-initialization.js"));
it("block-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/using/block-local-use-before-initialization-in-declaration-statement.js"));
it("block-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/using/block-local-use-before-initialization-in-prior-statement.js"));
it("cptn-value.js", createTestHandler("language/statements/using/cptn-value.js"));
it("fn-name-arrow.js", createTestHandler("language/statements/using/fn-name-arrow.js"));
it("fn-name-class.js", createTestHandler("language/statements/using/fn-name-class.js"));
it("fn-name-cover.js", createTestHandler("language/statements/using/fn-name-cover.js"));
it("fn-name-fn.js", createTestHandler("language/statements/using/fn-name-fn.js"));
it("fn-name-gen.js", createTestHandler("language/statements/using/fn-name-gen.js"));
it("function-local-closure-get-before-initialization.js", createTestHandler("language/statements/using/function-local-closure-get-before-initialization.js"));
it("function-local-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/using/function-local-use-before-initialization-in-declaration-statement.js"));
it("function-local-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/using/function-local-use-before-initialization-in-prior-statement.js"));
it("gets-initializer-Symbol.dispose-property-once.js", createTestHandler("language/statements/using/gets-initializer-Symbol.dispose-property-once.js"));
it("global-closure-get-before-initialization.js", createTestHandler("language/statements/using/global-closure-get-before-initialization.js"));
it("global-use-before-initialization-in-declaration-statement.js", createTestHandler("language/statements/using/global-use-before-initialization-in-declaration-statement.js"));
it("global-use-before-initialization-in-prior-statement.js", createTestHandler("language/statements/using/global-use-before-initialization-in-prior-statement.js"));
it("initializer-disposed-at-end-of-asyncfunctionbody.js", createTestHandler("language/statements/using/initializer-disposed-at-end-of-asyncfunctionbody.js"));
it("initializer-disposed-at-end-of-asyncgeneratorbody.js", createTestHandler("language/statements/using/initializer-disposed-at-end-of-asyncgeneratorbody.js"));
it("initializer-disposed-at-end-of-block.js", createTestHandler("language/statements/using/initializer-disposed-at-end-of-block.js"));
it("initializer-disposed-at-end-of-forstatement.js", createTestHandler("language/statements/using/initializer-disposed-at-end-of-forstatement.js"));
it("initializer-disposed-at-end-of-functionbody.js", createTestHandler("language/statements/using/initializer-disposed-at-end-of-functionbody.js"));
it("initializer-disposed-at-end-of-generatorbody.js", createTestHandler("language/statements/using/initializer-disposed-at-end-of-generatorbody.js"));
it("initializer-disposed-if-subsequent-initializer-throws-in-forstatement-head.js", createTestHandler("language/statements/using/initializer-disposed-if-subsequent-initializer-throws-in-forstatement-head.js"));
it("initializer-disposed-if-subsequent-initializer-throws.js", createTestHandler("language/statements/using/initializer-disposed-if-subsequent-initializer-throws.js"));
it("multiple-resources-disposed-in-reverse-order.js", createTestHandler("language/statements/using/multiple-resources-disposed-in-reverse-order.js"));
it("puts-initializer-on-top-of-disposableresourcestack-multiple-bindings.js", createTestHandler("language/statements/using/puts-initializer-on-top-of-disposableresourcestack-multiple-bindings.js"));
it("puts-initializer-on-top-of-disposableresourcestack-subsequent-usings.js", createTestHandler("language/statements/using/puts-initializer-on-top-of-disposableresourcestack-subsequent-usings.js"));
it("redeclaration-error-from-within-strict-mode-function-using.js", createTestHandler("language/statements/using/redeclaration-error-from-within-strict-mode-function-using.js"));
it("static-init-await-binding-invalid.js", createTestHandler("language/statements/using/static-init-await-binding-invalid.js"));
it("static-init-await-binding-valid.js", createTestHandler("language/statements/using/static-init-await-binding-valid.js"));
describe("syntax", () => {
it("block-scope-syntax-using-declarations-mixed-with-without-initializer.js", createTestHandler("language/statements/using/syntax/block-scope-syntax-using-declarations-mixed-with-without-initializer.js"));
});
describe("syntax", () => {
it("block-scope-syntax-using-declarations-mixed-without-with-initializer.js", createTestHandler("language/statements/using/syntax/block-scope-syntax-using-declarations-mixed-without-with-initializer.js"));
});
describe("syntax", () => {
it("block-scope-syntax-using-declarations-without-initializer.js", createTestHandler("language/statements/using/syntax/block-scope-syntax-using-declarations-without-initializer.js"));
});
describe("syntax", () => {
it("using-allowed-at-top-level-of-module.js", createTestHandler("language/statements/using/syntax/using-allowed-at-top-level-of-module.js"));
});
describe("syntax", () => {
it("using-allows-bindingidentifier.js", createTestHandler("language/statements/using/syntax/using-allows-bindingidentifier.js"));
});
describe("syntax", () => {
it("using-allows-multiple-bindings.js", createTestHandler("language/statements/using/syntax/using-allows-multiple-bindings.js"));
});
describe("syntax", () => {
it("using-declaring-let-split-across-two-lines.js", createTestHandler("language/statements/using/syntax/using-declaring-let-split-across-two-lines.js"));
});
describe("syntax", () => {
it("using-for-statement.js", createTestHandler("language/statements/using/syntax/using-for-statement.js"));
});
describe("syntax", () => {
it("using-for-using-of-of.js", createTestHandler("language/statements/using/syntax/using-for-using-of-of.js"));
});
describe("syntax", () => {
it("using-invalid-arraybindingpattern-after-bindingidentifier.js", createTestHandler("language/statements/using/syntax/using-invalid-arraybindingpattern-after-bindingidentifier.js"));
});
describe("syntax", () => {
it("using-invalid-arraybindingpattern-does-not-break-element-access.js", createTestHandler("language/statements/using/syntax/using-invalid-arraybindingpattern-does-not-break-element-access.js"));
});
describe("syntax", () => {
it("using-invalid-arraybindingpattern.js", createTestHandler("language/statements/using/syntax/using-invalid-arraybindingpattern.js"));
});
describe("syntax", () => {
it("using-invalid-assignment-next-expression-for.js", createTestHandler("language/statements/using/syntax/using-invalid-assignment-next-expression-for.js"));
});
describe("syntax", () => {
it("using-invalid-assignment-statement-body-for-of.js", createTestHandler("language/statements/using/syntax/using-invalid-assignment-statement-body-for-of.js"));
});
describe("syntax", () => {
it("using-invalid-for-in.js", createTestHandler("language/statements/using/syntax/using-invalid-for-in.js"));
});
describe("syntax", () => {
it("using-invalid-objectbindingpattern-after-bindingidentifier.js", createTestHandler("language/statements/using/syntax/using-invalid-objectbindingpattern-after-bindingidentifier.js"));
});
describe("syntax", () => {
it("using-invalid-objectbindingpattern.js", createTestHandler("language/statements/using/syntax/using-invalid-objectbindingpattern.js"));
});
describe("syntax", () => {
it("using-invalid-switchstatement-caseclause.js", createTestHandler("language/statements/using/syntax/using-invalid-switchstatement-caseclause.js"));
});
describe("syntax", () => {
it("using-invalid-switchstatement-defaultclause.js", createTestHandler("language/statements/using/syntax/using-invalid-switchstatement-defaultclause.js"));
});
describe("syntax", () => {
it("using-not-allowed-at-top-level-of-eval.js", createTestHandler("language/statements/using/syntax/using-not-allowed-at-top-level-of-eval.js"));
});
describe("syntax", () => {
it("using-not-allowed-at-top-level-of-script.js", createTestHandler("language/statements/using/syntax/using-not-allowed-at-top-level-of-script.js"));
});
describe("syntax", () => {
it("using-outer-inner-using-bindings.js", createTestHandler("language/statements/using/syntax/using-outer-inner-using-bindings.js"));
});
describe("syntax", () => {
it("using.js", createTestHandler("language/statements/using/syntax/using.js"));
});
describe("syntax", () => {
it("with-initializer-case-expression-statement-list.js", createTestHandler("language/statements/using/syntax/with-initializer-case-expression-statement-list.js"));
});
describe("syntax", () => {
it("with-initializer-default-statement-list.js", createTestHandler("language/statements/using/syntax/with-initializer-default-statement-list.js"));
});
describe("syntax", () => {
it("with-initializer-do-statement-while-expression.js", createTestHandler("language/statements/using/syntax/with-initializer-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("with-initializer-for-statement.js", createTestHandler("language/statements/using/syntax/with-initializer-for-statement.js"));
});
describe("syntax", () => {
it("with-initializer-if-expression-statement-else-statement.js", createTestHandler("language/statements/using/syntax/with-initializer-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("with-initializer-if-expression-statement.js", createTestHandler("language/statements/using/syntax/with-initializer-if-expression-statement.js"));
});
describe("syntax", () => {
it("with-initializer-label-statement.js", createTestHandler("language/statements/using/syntax/with-initializer-label-statement.js"));
});
describe("syntax", () => {
it("with-initializer-while-expression-statement.js", createTestHandler("language/statements/using/syntax/with-initializer-while-expression-statement.js"));
});
describe("syntax", () => {
it("without-initializer-do-statement-while-expression.js", createTestHandler("language/statements/using/syntax/without-initializer-do-statement-while-expression.js"));
});
describe("syntax", () => {
it("without-initializer-for-statement.js", createTestHandler("language/statements/using/syntax/without-initializer-for-statement.js"));
});
describe("syntax", () => {
it("without-initializer-if-expression-statement-else-statement.js", createTestHandler("language/statements/using/syntax/without-initializer-if-expression-statement-else-statement.js"));
});
describe("syntax", () => {
it("without-initializer-if-expression-statement.js", createTestHandler("language/statements/using/syntax/without-initializer-if-expression-statement.js"));
});
describe("syntax", () => {
it("without-initializer-label-statement.js", createTestHandler("language/statements/using/syntax/without-initializer-label-statement.js"));
});
describe("syntax", () => {
it("without-initializer-while-expression-statement.js", createTestHandler("language/statements/using/syntax/without-initializer-while-expression-statement.js"));
});
it("throws-error-as-is-if-only-one-error-during-disposal.js", createTestHandler("language/statements/using/throws-error-as-is-if-only-one-error-during-disposal.js"));
it("throws-if-initializer-Symbol.dispose-property-is-null.js", createTestHandler("language/statements/using/throws-if-initializer-Symbol.dispose-property-is-null.js"));
it("throws-if-initializer-Symbol.dispose-property-is-undefined.js", createTestHandler("language/statements/using/throws-if-initializer-Symbol.dispose-property-is-undefined.js"));
it("throws-if-initializer-Symbol.dispose-property-not-callable.js", createTestHandler("language/statements/using/throws-if-initializer-Symbol.dispose-property-not-callable.js"));
it("throws-if-initializer-missing-Symbol.dispose.js", createTestHandler("language/statements/using/throws-if-initializer-missing-Symbol.dispose.js"));
it("throws-if-initializer-not-object.js", createTestHandler("language/statements/using/throws-if-initializer-not-object.js"));
it("throws-suppressederror-if-multiple-errors-during-disposal.js", createTestHandler("language/statements/using/throws-suppressederror-if-multiple-errors-during-disposal.js"));
it("using-allows-null-initializer.js", createTestHandler("language/statements/using/using-allows-null-initializer.js"));
it("using-allows-undefined-initializer.js", createTestHandler("language/statements/using/using-allows-undefined-initializer.js"));
});
