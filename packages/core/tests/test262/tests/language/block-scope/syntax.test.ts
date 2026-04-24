import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("syntax", () => {
  describe("for-in", () => {
    it(
      "acquire-properties-from-array.js",
      { tags: ["known-passing"] },
      createTestHandler("language/block-scope/syntax/for-in/acquire-properties-from-array.js"),
    );
    it(
      "acquire-properties-from-object.js",
      { tags: ["known-passing"] },
      createTestHandler("language/block-scope/syntax/for-in/acquire-properties-from-object.js"),
    );
    it(
      "disallow-initialization-assignment.js",
      { tags: ["known-passing"] },
      createTestHandler("language/block-scope/syntax/for-in/disallow-initialization-assignment.js"),
    );
    it(
      "disallow-multiple-lexical-bindings-with-and-without-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings-with-and-without-initializer.js",
      ),
    );
    it(
      "disallow-multiple-lexical-bindings-with-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings-with-initializer.js",
      ),
    );
    it(
      "disallow-multiple-lexical-bindings-without-and-with-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings-without-and-with-initializer.js",
      ),
    );
    it(
      "disallow-multiple-lexical-bindings.js",
      { tags: ["known-passing"] },
      createTestHandler("language/block-scope/syntax/for-in/disallow-multiple-lexical-bindings.js"),
    );
    it(
      "mixed-values-in-iteration.js",
      { tags: ["known-passing"] },
      createTestHandler("language/block-scope/syntax/for-in/mixed-values-in-iteration.js"),
    );
  });
  describe("function-declarations", () => {
    it(
      "in-statement-position-case-expression-statement-list.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/function-declarations/in-statement-position-case-expression-statement-list.js",
      ),
    );
    it(
      "in-statement-position-default-statement-list.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/function-declarations/in-statement-position-default-statement-list.js",
      ),
    );
    it(
      "in-statement-position-do-statement-while-expression.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/function-declarations/in-statement-position-do-statement-while-expression.js",
      ),
    );
    it(
      "in-statement-position-for-statement.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/function-declarations/in-statement-position-for-statement.js",
      ),
    );
    it(
      "in-statement-position-if-expression-statement-else-statement.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/function-declarations/in-statement-position-if-expression-statement-else-statement.js",
      ),
    );
    it(
      "in-statement-position-if-expression-statement.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/function-declarations/in-statement-position-if-expression-statement.js",
      ),
    );
    it(
      "in-statement-position-while-expression-statement.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/function-declarations/in-statement-position-while-expression-statement.js",
      ),
    );
  });
  describe("redeclaration", () => {
    it(
      "async-function-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "async-function-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "async-function-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "async-function-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "async-function-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "async-function-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "async-function-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "async-function-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-function-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "async-generator-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "class-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/class-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "const-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/const-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "fn-scope-var-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/fn-scope-var-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "function-declaration-attempt-to-redeclare-with-var-declaration-nested-in-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-declaration-attempt-to-redeclare-with-var-declaration-nested-in-function.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "function-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/function-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "generator-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/generator-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "inner-block-var-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "inner-block-var-redeclaration-attempt-after-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-async-function.js",
      ),
    );
    it(
      "inner-block-var-redeclaration-attempt-after-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-async-generator.js",
      ),
    );
    it(
      "inner-block-var-redeclaration-attempt-after-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-class.js",
      ),
    );
    it(
      "inner-block-var-redeclaration-attempt-after-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-const.js",
      ),
    );
    it(
      "inner-block-var-redeclaration-attempt-after-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-function.js",
      ),
    );
    it(
      "inner-block-var-redeclaration-attempt-after-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-generator.js",
      ),
    );
    it(
      "inner-block-var-redeclaration-attempt-after-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/inner-block-var-redeclaration-attempt-after-let.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "let-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/let-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-async-function.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-async-generator.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-class.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-const.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-function.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-generator.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-let.js",
      ),
    );
    it(
      "var-name-redeclaration-attempt-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-name-redeclaration-attempt-with-var.js",
      ),
    );
    it(
      "var-redeclaration-attempt-after-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-async-function.js",
      ),
    );
    it(
      "var-redeclaration-attempt-after-async-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-async-generator.js",
      ),
    );
    it(
      "var-redeclaration-attempt-after-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-class.js",
      ),
    );
    it(
      "var-redeclaration-attempt-after-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-const.js",
      ),
    );
    it(
      "var-redeclaration-attempt-after-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-function.js",
      ),
    );
    it(
      "var-redeclaration-attempt-after-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-generator.js",
      ),
    );
    it(
      "var-redeclaration-attempt-after-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration/var-redeclaration-attempt-after-let.js",
      ),
    );
  });
  describe("redeclaration-global", () => {
    it(
      "allowed-to-declare-function-with-function-declaration.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration-global/allowed-to-declare-function-with-function-declaration.js",
      ),
    );
    it(
      "allowed-to-redeclare-function-declaration-with-var.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration-global/allowed-to-redeclare-function-declaration-with-var.js",
      ),
    );
    it(
      "allowed-to-redeclare-var-with-function-declaration.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/block-scope/syntax/redeclaration-global/allowed-to-redeclare-var-with-function-declaration.js",
      ),
    );
  });
});
