import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("await", () => {
it("async-await-interleaved.js", createTestHandler("language/expressions/await/async-await-interleaved.js"));
it("async-generator-interleaved.js", createTestHandler("language/expressions/await/async-generator-interleaved.js"));
it("await-BindingIdentifier-in-global.js", createTestHandler("language/expressions/await/await-BindingIdentifier-in-global.js"));
it("await-BindingIdentifier-nested.js", createTestHandler("language/expressions/await/await-BindingIdentifier-nested.js"));
it("await-awaits-thenable-not-callable.js", createTestHandler("language/expressions/await/await-awaits-thenable-not-callable.js"));
it("await-awaits-thenables-that-throw.js", createTestHandler("language/expressions/await/await-awaits-thenables-that-throw.js"));
it("await-awaits-thenables.js", createTestHandler("language/expressions/await/await-awaits-thenables.js"));
it("await-in-function.js", createTestHandler("language/expressions/await/await-in-function.js"));
it("await-in-generator.js", createTestHandler("language/expressions/await/await-in-generator.js"));
it("await-in-global.js", createTestHandler("language/expressions/await/await-in-global.js"));
it("await-in-nested-function.js", createTestHandler("language/expressions/await/await-in-nested-function.js"));
it("await-in-nested-generator.js", createTestHandler("language/expressions/await/await-in-nested-generator.js"));
it("await-monkey-patched-promise.js", createTestHandler("language/expressions/await/await-monkey-patched-promise.js"));
it("await-non-promise-thenable.js", createTestHandler("language/expressions/await/await-non-promise-thenable.js"));
it("await-non-promise.js", createTestHandler("language/expressions/await/await-non-promise.js"));
it("await-throws-rejections.js", createTestHandler("language/expressions/await/await-throws-rejections.js"));
it("early-errors-await-not-simple-assignment-target.js", createTestHandler("language/expressions/await/early-errors-await-not-simple-assignment-target.js"));
it("for-await-of-interleaved.js", createTestHandler("language/expressions/await/for-await-of-interleaved.js"));
it("no-operand.js", createTestHandler("language/expressions/await/no-operand.js"));
it("syntax-await-has-UnaryExpression-with-MultiplicativeExpression.js", createTestHandler("language/expressions/await/syntax-await-has-UnaryExpression-with-MultiplicativeExpression.js"));
it("syntax-await-has-UnaryExpression.js", createTestHandler("language/expressions/await/syntax-await-has-UnaryExpression.js"));
it("syntax-await-in-ConditionalExpression.js", createTestHandler("language/expressions/await/syntax-await-in-ConditionalExpression.js"));
});
