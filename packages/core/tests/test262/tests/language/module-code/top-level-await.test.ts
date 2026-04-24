import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("top-level-await", () => {
it("async-module-does-not-block-sibling-modules.js", createTestHandler("language/module-code/top-level-await/async-module-does-not-block-sibling-modules.js"));
it("await-awaits-thenable-not-callable.js", createTestHandler("language/module-code/top-level-await/await-awaits-thenable-not-callable.js"));
it("await-awaits-thenables-that-throw.js", createTestHandler("language/module-code/top-level-await/await-awaits-thenables-that-throw.js"));
it("await-awaits-thenables.js", createTestHandler("language/module-code/top-level-await/await-awaits-thenables.js"));
it("await-dynamic-import-rejection.js", createTestHandler("language/module-code/top-level-await/await-dynamic-import-rejection.js"));
it("await-dynamic-import-resolution.js", createTestHandler("language/module-code/top-level-await/await-dynamic-import-resolution.js"));
it("await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/await-expr-func-expression.js"));
it("await-expr-new-expr-reject.js", createTestHandler("language/module-code/top-level-await/await-expr-new-expr-reject.js"));
it("await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/await-expr-new-expr.js"));
it("await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/await-expr-regexp.js"));
it("await-expr-reject-throws.js", createTestHandler("language/module-code/top-level-await/await-expr-reject-throws.js"));
it("await-expr-resolution.js", createTestHandler("language/module-code/top-level-await/await-expr-resolution.js"));
it("await-void-expr.js", createTestHandler("language/module-code/top-level-await/await-void-expr.js"));
it("dfs-invariant.js", createTestHandler("language/module-code/top-level-await/dfs-invariant.js"));
it("dynamic-import-of-waiting-module.js", createTestHandler("language/module-code/top-level-await/dynamic-import-of-waiting-module.js"));
it("dynamic-import-rejection.js", createTestHandler("language/module-code/top-level-await/dynamic-import-rejection.js"));
it("dynamic-import-resolution.js", createTestHandler("language/module-code/top-level-await/dynamic-import-resolution.js"));
it("early-errors-await-not-simple-assignment-target.js", createTestHandler("language/module-code/top-level-await/early-errors-await-not-simple-assignment-target.js"));
it("fulfillment-order.js", createTestHandler("language/module-code/top-level-await/fulfillment-order.js"));
it("if-await-expr.js", createTestHandler("language/module-code/top-level-await/if-await-expr.js"));
it("module-async-import-async-resolution-ticks.js", createTestHandler("language/module-code/top-level-await/module-async-import-async-resolution-ticks.js"));
it("module-graphs-does-not-hang.js", createTestHandler("language/module-code/top-level-await/module-graphs-does-not-hang.js"));
it("module-import-rejection-body.js", createTestHandler("language/module-code/top-level-await/module-import-rejection-body.js"));
it("module-import-rejection-tick.js", createTestHandler("language/module-code/top-level-await/module-import-rejection-tick.js"));
it("module-import-rejection.js", createTestHandler("language/module-code/top-level-await/module-import-rejection.js"));
it("module-import-resolution.js", createTestHandler("language/module-code/top-level-await/module-import-resolution.js"));
it("module-import-unwrapped.js", createTestHandler("language/module-code/top-level-await/module-import-unwrapped.js"));
it("module-self-import-async-resolution-ticks.js", createTestHandler("language/module-code/top-level-await/module-self-import-async-resolution-ticks.js"));
it("module-sync-import-async-resolution-ticks.js", createTestHandler("language/module-code/top-level-await/module-sync-import-async-resolution-ticks.js"));
it("new-await-parens.js", createTestHandler("language/module-code/top-level-await/new-await-parens.js"));
it("new-await-script-code.js", createTestHandler("language/module-code/top-level-await/new-await-script-code.js"));
it("new-await.js", createTestHandler("language/module-code/top-level-await/new-await.js"));
it("no-operand.js", createTestHandler("language/module-code/top-level-await/no-operand.js"));
it("pending-async-dep-from-cycle.js", createTestHandler("language/module-code/top-level-await/pending-async-dep-from-cycle.js"));
it("rejection-order.js", createTestHandler("language/module-code/top-level-await/rejection-order.js"));
describe("syntax", () => {
it("await-expr-dyn-import.js", createTestHandler("language/module-code/top-level-await/syntax/await-expr-dyn-import.js"));
});
describe("syntax", () => {
it("block-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("block-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("block-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-identifier.js"));
});
describe("syntax", () => {
it("block-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("block-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("block-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-nested.js"));
});
describe("syntax", () => {
it("block-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("block-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-null.js"));
});
describe("syntax", () => {
it("block-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("block-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-regexp.js"));
});
describe("syntax", () => {
it("block-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("block-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/block-await-expr-this.js"));
});
describe("syntax", () => {
it("catch-parameter.js", createTestHandler("language/module-code/top-level-await/syntax/catch-parameter.js"));
});
describe("syntax", () => {
it("early-does-not-propagate-to-fn-declaration-body.js", createTestHandler("language/module-code/top-level-await/syntax/early-does-not-propagate-to-fn-declaration-body.js"));
});
describe("syntax", () => {
it("early-does-not-propagate-to-fn-declaration-params.js", createTestHandler("language/module-code/top-level-await/syntax/early-does-not-propagate-to-fn-declaration-params.js"));
});
describe("syntax", () => {
it("early-does-not-propagate-to-fn-expr-body.js", createTestHandler("language/module-code/top-level-await/syntax/early-does-not-propagate-to-fn-expr-body.js"));
});
describe("syntax", () => {
it("early-does-not-propagate-to-fn-expr-params.js", createTestHandler("language/module-code/top-level-await/syntax/early-does-not-propagate-to-fn-expr-params.js"));
});
describe("syntax", () => {
it("early-no-escaped-await.js", createTestHandler("language/module-code/top-level-await/syntax/early-no-escaped-await.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-identifier.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-nested.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-null.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-regexp.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("export-class-decl-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/export-class-decl-await-expr-this.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-identifier.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-nested.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-null.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-regexp.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("export-dflt-assign-expr-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/export-dflt-assign-expr-await-expr-this.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-identifier.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-nested.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-null.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-regexp.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("export-dft-class-decl-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/export-dft-class-decl-await-expr-this.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-identifier.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-nested.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-null.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-regexp.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("export-lex-decl-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/export-lex-decl-await-expr-this.js"));
});
describe("syntax", () => {
it("export-var-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("export-var-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("export-var-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-identifier.js"));
});
describe("syntax", () => {
it("export-var-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("export-var-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("export-var-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-nested.js"));
});
describe("syntax", () => {
it("export-var-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("export-var-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-null.js"));
});
describe("syntax", () => {
it("export-var-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("export-var-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-regexp.js"));
});
describe("syntax", () => {
it("export-var-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("export-var-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/export-var-await-expr-this.js"));
});
describe("syntax", () => {
it("for-await-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("for-await-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("for-await-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-identifier.js"));
});
describe("syntax", () => {
it("for-await-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("for-await-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("for-await-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-nested.js"));
});
describe("syntax", () => {
it("for-await-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("for-await-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-null.js"));
});
describe("syntax", () => {
it("for-await-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("for-await-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-regexp.js"));
});
describe("syntax", () => {
it("for-await-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("for-await-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-await-expr-this.js"));
});
describe("syntax", () => {
it("for-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("for-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("for-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-identifier.js"));
});
describe("syntax", () => {
it("for-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("for-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("for-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-nested.js"));
});
describe("syntax", () => {
it("for-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("for-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-null.js"));
});
describe("syntax", () => {
it("for-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("for-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-regexp.js"));
});
describe("syntax", () => {
it("for-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("for-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/for-await-expr-this.js"));
});
describe("syntax", () => {
it("for-in-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("for-in-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("for-in-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-identifier.js"));
});
describe("syntax", () => {
it("for-in-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("for-in-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("for-in-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-nested.js"));
});
describe("syntax", () => {
it("for-in-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("for-in-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-null.js"));
});
describe("syntax", () => {
it("for-in-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("for-in-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-regexp.js"));
});
describe("syntax", () => {
it("for-in-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("for-in-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/for-in-await-expr-this.js"));
});
describe("syntax", () => {
it("for-of-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("for-of-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("for-of-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-identifier.js"));
});
describe("syntax", () => {
it("for-of-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("for-of-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("for-of-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-nested.js"));
});
describe("syntax", () => {
it("for-of-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("for-of-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-null.js"));
});
describe("syntax", () => {
it("for-of-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("for-of-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-regexp.js"));
});
describe("syntax", () => {
it("for-of-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("for-of-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/for-of-await-expr-this.js"));
});
describe("syntax", () => {
it("if-block-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("if-block-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("if-block-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-identifier.js"));
});
describe("syntax", () => {
it("if-block-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("if-block-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("if-block-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-nested.js"));
});
describe("syntax", () => {
it("if-block-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("if-block-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-null.js"));
});
describe("syntax", () => {
it("if-block-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("if-block-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-regexp.js"));
});
describe("syntax", () => {
it("if-block-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("if-block-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/if-block-await-expr-this.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-identifier.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-nested.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-null.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-regexp.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("if-expr-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/if-expr-await-expr-this.js"));
});
describe("syntax", () => {
it("top-level-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("top-level-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("top-level-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-identifier.js"));
});
describe("syntax", () => {
it("top-level-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("top-level-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("top-level-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-nested.js"));
});
describe("syntax", () => {
it("top-level-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("top-level-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-null.js"));
});
describe("syntax", () => {
it("top-level-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("top-level-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-regexp.js"));
});
describe("syntax", () => {
it("top-level-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("top-level-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/top-level-await-expr-this.js"));
});
describe("syntax", () => {
it("try-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("try-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("try-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-identifier.js"));
});
describe("syntax", () => {
it("try-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("try-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("try-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-nested.js"));
});
describe("syntax", () => {
it("try-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("try-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-null.js"));
});
describe("syntax", () => {
it("try-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("try-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-regexp.js"));
});
describe("syntax", () => {
it("try-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("try-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/try-await-expr-this.js"));
});
describe("syntax", () => {
it("typeof-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("typeof-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("typeof-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-identifier.js"));
});
describe("syntax", () => {
it("typeof-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("typeof-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("typeof-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-nested.js"));
});
describe("syntax", () => {
it("typeof-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("typeof-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-null.js"));
});
describe("syntax", () => {
it("typeof-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("typeof-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-regexp.js"));
});
describe("syntax", () => {
it("typeof-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("typeof-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/typeof-await-expr-this.js"));
});
describe("syntax", () => {
it("void-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("void-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("void-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-identifier.js"));
});
describe("syntax", () => {
it("void-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("void-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("void-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-nested.js"));
});
describe("syntax", () => {
it("void-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("void-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-null.js"));
});
describe("syntax", () => {
it("void-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("void-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-regexp.js"));
});
describe("syntax", () => {
it("void-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("void-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/void-await-expr-this.js"));
});
describe("syntax", () => {
it("while-await-expr-array-literal.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-array-literal.js"));
});
describe("syntax", () => {
it("while-await-expr-func-expression.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-func-expression.js"));
});
describe("syntax", () => {
it("while-await-expr-identifier.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-identifier.js"));
});
describe("syntax", () => {
it("while-await-expr-literal-number.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-literal-number.js"));
});
describe("syntax", () => {
it("while-await-expr-literal-string.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-literal-string.js"));
});
describe("syntax", () => {
it("while-await-expr-nested.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-nested.js"));
});
describe("syntax", () => {
it("while-await-expr-new-expr.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-new-expr.js"));
});
describe("syntax", () => {
it("while-await-expr-null.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-null.js"));
});
describe("syntax", () => {
it("while-await-expr-obj-literal.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-obj-literal.js"));
});
describe("syntax", () => {
it("while-await-expr-regexp.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-regexp.js"));
});
describe("syntax", () => {
it("while-await-expr-template-literal.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-template-literal.js"));
});
describe("syntax", () => {
it("while-await-expr-this.js", createTestHandler("language/module-code/top-level-await/syntax/while-await-expr-this.js"));
});
it("top-level-ticks-2.js", createTestHandler("language/module-code/top-level-await/top-level-ticks-2.js"));
it("top-level-ticks.js", createTestHandler("language/module-code/top-level-await/top-level-ticks.js"));
it("unobservable-global-async-evaluation-count-reset.js", createTestHandler("language/module-code/top-level-await/unobservable-global-async-evaluation-count-reset.js"));
it("void-await-expr.js", createTestHandler("language/module-code/top-level-await/void-await-expr.js"));
it("while-dynamic-evaluation.js", createTestHandler("language/module-code/top-level-await/while-dynamic-evaluation.js"));
});
