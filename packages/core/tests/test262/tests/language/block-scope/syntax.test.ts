import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("syntax", () => {
describe("for-in", () => {
it("acquire-properties-from-array.js", createTestHandler("language/block-scope/syntax/for-in/acquire-properties-from-array.js"));
});
describe("for-in", () => {
it("acquire-properties-from-object.js", createTestHandler("language/block-scope/syntax/for-in/acquire-properties-from-object.js"));
});
describe("for-in", () => {
it("disallow-initialization-assignment.js", createTestHandler("language/block-scope/syntax/for-in/disallow-initialization-assignment.js"));
});
describe("for-in", () => {
it("disallow-multiple-lexical-bindings-with-and-without-initializer.js", createTestHandler("language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings-with-and-without-initializer.js"));
});
describe("for-in", () => {
it("disallow-multiple-lexical-bindings-with-initializer.js", createTestHandler("language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings-with-initializer.js"));
});
describe("for-in", () => {
it("disallow-multiple-lexical-bindings-without-and-with-initializer.js", createTestHandler("language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings-without-and-with-initializer.js"));
});
describe("for-in", () => {
it("disallow-multiple-lexical-bindings.js", createTestHandler("language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings.js"));
});
describe("for-in", () => {
it("mixed-values-in-iteration.js", createTestHandler("language/block-scope/syntax/for-in/mixed-values-in-iteration.js"));
});
describe("function-declarations", () => {
it("in-statement-position-case-expression-statement-list.js", createTestHandler("language/block-scope/syntax/function-declarations/in-statement-position-case-expression-statement-list.js"));
});
describe("function-declarations", () => {
it("in-statement-position-default-statement-list.js", createTestHandler("language/block-scope/syntax/function-declarations/in-statement-position-default-statement-list.js"));
});
describe("function-declarations", () => {
it("in-statement-position-do-statement-while-expression.js", createTestHandler("language/block-scope/syntax/function-declarations/in-statement-position-do-statement-while-expression.js"));
});
describe("function-declarations", () => {
it("in-statement-position-for-statement.js", createTestHandler("language/block-scope/syntax/function-declarations/in-statement-position-for-statement.js"));
});
describe("function-declarations", () => {
it("in-statement-position-if-expression-statement-else-statement.js", createTestHandler("language/block-scope/syntax/function-declarations/in-statement-position-if-expression-statement-else-statement.js"));
});
describe("function-declarations", () => {
it("in-statement-position-if-expression-statement.js", createTestHandler("language/block-scope/syntax/function-declarations/in-statement-position-if-expression-statement.js"));
});
describe("function-declarations", () => {
it("in-statement-position-while-expression-statement.js", createTestHandler("language/block-scope/syntax/function-declarations/in-statement-position-while-expression-statement.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("fn-scope-var-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("function-declaration-attempt-to-redeclare-with-var-declaration-nested-in-function.js", createTestHandler("language/block-scope/syntax/redeclaration/function-declaration-attempt-to-redeclare-with-var-declaration-nested-in-function.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("inner-block-var-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("inner-block-var-redeclaration-attempt-after-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-async-function.js"));
});
describe("redeclaration", () => {
it("inner-block-var-redeclaration-attempt-after-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-async-generator.js"));
});
describe("redeclaration", () => {
it("inner-block-var-redeclaration-attempt-after-class.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-class.js"));
});
describe("redeclaration", () => {
it("inner-block-var-redeclaration-attempt-after-const.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-const.js"));
});
describe("redeclaration", () => {
it("inner-block-var-redeclaration-attempt-after-function.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-function.js"));
});
describe("redeclaration", () => {
it("inner-block-var-redeclaration-attempt-after-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-generator.js"));
});
describe("redeclaration", () => {
it("inner-block-var-redeclaration-attempt-after-let.js", createTestHandler("language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-let.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-async-function.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-async-generator.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-class.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-class.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-const.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-const.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-function.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-function.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-generator.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-let.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-let.js"));
});
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-var.js"));
});
describe("redeclaration", () => {
it("var-redeclaration-attempt-after-async-function.js", createTestHandler("language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-async-function.js"));
});
describe("redeclaration", () => {
it("var-redeclaration-attempt-after-async-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-async-generator.js"));
});
describe("redeclaration", () => {
it("var-redeclaration-attempt-after-class.js", createTestHandler("language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-class.js"));
});
describe("redeclaration", () => {
it("var-redeclaration-attempt-after-const.js", createTestHandler("language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-const.js"));
});
describe("redeclaration", () => {
it("var-redeclaration-attempt-after-function.js", createTestHandler("language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-function.js"));
});
describe("redeclaration", () => {
it("var-redeclaration-attempt-after-generator.js", createTestHandler("language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-generator.js"));
});
describe("redeclaration", () => {
it("var-redeclaration-attempt-after-let.js", createTestHandler("language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-let.js"));
});
describe("redeclaration-global", () => {
it("allowed-to-declare-function-with-function-declaration.js", createTestHandler("language/block-scope/syntax/redeclaration-global/allowed-to-declare-function-with-function-declaration.js"));
});
describe("redeclaration-global", () => {
it("allowed-to-redeclare-function-declaration-with-var.js", createTestHandler("language/block-scope/syntax/redeclaration-global/allowed-to-redeclare-function-declaration-with-var.js"));
});
describe("redeclaration-global", () => {
it("allowed-to-redeclare-var-with-function-declaration.js", createTestHandler("language/block-scope/syntax/redeclaration-global/allowed-to-redeclare-var-with-function-declaration.js"));
});
});
