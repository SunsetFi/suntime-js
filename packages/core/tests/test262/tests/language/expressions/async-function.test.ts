import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("async-function", () => {
it("await-as-binding-identifier-escaped.js", createTestHandler("language/expressions/async-function/await-as-binding-identifier-escaped.js"));
it("await-as-binding-identifier.js", createTestHandler("language/expressions/async-function/await-as-binding-identifier.js"));
it("await-as-identifier-reference-escaped.js", createTestHandler("language/expressions/async-function/await-as-identifier-reference-escaped.js"));
it("await-as-identifier-reference.js", createTestHandler("language/expressions/async-function/await-as-identifier-reference.js"));
it("await-as-label-identifier-escaped.js", createTestHandler("language/expressions/async-function/await-as-label-identifier-escaped.js"));
it("await-as-label-identifier.js", createTestHandler("language/expressions/async-function/await-as-label-identifier.js"));
it("early-errors-expression-NSPL-with-USD.js", createTestHandler("language/expressions/async-function/early-errors-expression-NSPL-with-USD.js"));
it("early-errors-expression-binding-identifier-arguments.js", createTestHandler("language/expressions/async-function/early-errors-expression-binding-identifier-arguments.js"));
it("early-errors-expression-binding-identifier-eval.js", createTestHandler("language/expressions/async-function/early-errors-expression-binding-identifier-eval.js"));
it("early-errors-expression-body-contains-super-call.js", createTestHandler("language/expressions/async-function/early-errors-expression-body-contains-super-call.js"));
it("early-errors-expression-body-contains-super-property.js", createTestHandler("language/expressions/async-function/early-errors-expression-body-contains-super-property.js"));
it("early-errors-expression-eval-in-formal-parameters.js", createTestHandler("language/expressions/async-function/early-errors-expression-eval-in-formal-parameters.js"));
it("early-errors-expression-formals-body-duplicate.js", createTestHandler("language/expressions/async-function/early-errors-expression-formals-body-duplicate.js"));
it("early-errors-expression-formals-contains-super-call.js", createTestHandler("language/expressions/async-function/early-errors-expression-formals-contains-super-call.js"));
it("early-errors-expression-formals-contains-super-property.js", createTestHandler("language/expressions/async-function/early-errors-expression-formals-contains-super-property.js"));
it("early-errors-expression-not-simple-assignment-target.js", createTestHandler("language/expressions/async-function/early-errors-expression-not-simple-assignment-target.js"));
it("escaped-async.js", createTestHandler("language/expressions/async-function/escaped-async.js"));
it("expression-returns-promise.js", createTestHandler("language/expressions/async-function/expression-returns-promise.js"));
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-func-expr-named-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/async-function/forbidden-ext/b1/async-func-expr-named-forbidden-ext-direct-access-prop-arguments.js"));
});
});
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-func-expr-named-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/async-function/forbidden-ext/b1/async-func-expr-named-forbidden-ext-direct-access-prop-caller.js"));
});
});
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-func-expr-nameless-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/async-function/forbidden-ext/b1/async-func-expr-nameless-forbidden-ext-direct-access-prop-arguments.js"));
});
});
describe("forbidden-ext", () => {
describe("b1", () => {
it("async-func-expr-nameless-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/async-function/forbidden-ext/b1/async-func-expr-nameless-forbidden-ext-direct-access-prop-caller.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/async-function/forbidden-ext/b2/async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/async-function/forbidden-ext/b2/async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-func-expr-named-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/async-function/forbidden-ext/b2/async-func-expr-named-forbidden-ext-indirect-access-prop-caller.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/async-function/forbidden-ext/b2/async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/async-function/forbidden-ext/b2/async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("async-func-expr-nameless-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/async-function/forbidden-ext/b2/async-func-expr-nameless-forbidden-ext-indirect-access-prop-caller.js"));
});
});
it("name.js", createTestHandler("language/expressions/async-function/name.js"));
it("named-array-destructuring-param-strict-body.js", createTestHandler("language/expressions/async-function/named-array-destructuring-param-strict-body.js"));
it("named-await-as-binding-identifier-escaped.js", createTestHandler("language/expressions/async-function/named-await-as-binding-identifier-escaped.js"));
it("named-await-as-binding-identifier.js", createTestHandler("language/expressions/async-function/named-await-as-binding-identifier.js"));
it("named-await-as-identifier-reference-escaped.js", createTestHandler("language/expressions/async-function/named-await-as-identifier-reference-escaped.js"));
it("named-await-as-identifier-reference.js", createTestHandler("language/expressions/async-function/named-await-as-identifier-reference.js"));
it("named-await-as-label-identifier-escaped.js", createTestHandler("language/expressions/async-function/named-await-as-label-identifier-escaped.js"));
it("named-await-as-label-identifier.js", createTestHandler("language/expressions/async-function/named-await-as-label-identifier.js"));
it("named-dflt-params-abrupt.js", createTestHandler("language/expressions/async-function/named-dflt-params-abrupt.js"));
it("named-dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/async-function/named-dflt-params-arg-val-not-undefined.js"));
it("named-dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/async-function/named-dflt-params-arg-val-undefined.js"));
it("named-dflt-params-duplicates.js", createTestHandler("language/expressions/async-function/named-dflt-params-duplicates.js"));
it("named-dflt-params-ref-later.js", createTestHandler("language/expressions/async-function/named-dflt-params-ref-later.js"));
it("named-dflt-params-ref-prior.js", createTestHandler("language/expressions/async-function/named-dflt-params-ref-prior.js"));
it("named-dflt-params-ref-self.js", createTestHandler("language/expressions/async-function/named-dflt-params-ref-self.js"));
it("named-dflt-params-rest.js", createTestHandler("language/expressions/async-function/named-dflt-params-rest.js"));
it("named-dflt-params-trailing-comma.js", createTestHandler("language/expressions/async-function/named-dflt-params-trailing-comma.js"));
it("named-eval-var-scope-syntax-err.js", createTestHandler("language/expressions/async-function/named-eval-var-scope-syntax-err.js"));
it("named-object-destructuring-param-strict-body.js", createTestHandler("language/expressions/async-function/named-object-destructuring-param-strict-body.js"));
it("named-params-trailing-comma-multiple.js", createTestHandler("language/expressions/async-function/named-params-trailing-comma-multiple.js"));
it("named-params-trailing-comma-single.js", createTestHandler("language/expressions/async-function/named-params-trailing-comma-single.js"));
it("named-reassign-fn-name-in-body-in-arrow.js", createTestHandler("language/expressions/async-function/named-reassign-fn-name-in-body-in-arrow.js"));
it("named-reassign-fn-name-in-body-in-eval.js", createTestHandler("language/expressions/async-function/named-reassign-fn-name-in-body-in-eval.js"));
it("named-reassign-fn-name-in-body.js", createTestHandler("language/expressions/async-function/named-reassign-fn-name-in-body.js"));
it("named-rest-param-strict-body.js", createTestHandler("language/expressions/async-function/named-rest-param-strict-body.js"));
it("named-rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/async-function/named-rest-params-trailing-comma-early-error.js"));
it("named-returns-async-arrow-returns-arguments-from-parent-function.js", createTestHandler("language/expressions/async-function/named-returns-async-arrow-returns-arguments-from-parent-function.js"));
it("named-returns-async-arrow-returns-newtarget.js", createTestHandler("language/expressions/async-function/named-returns-async-arrow-returns-newtarget.js"));
it("named-returns-async-arrow.js", createTestHandler("language/expressions/async-function/named-returns-async-arrow.js"));
it("named-returns-async-function-returns-arguments-from-own-function.js", createTestHandler("language/expressions/async-function/named-returns-async-function-returns-arguments-from-own-function.js"));
it("named-returns-async-function-returns-newtarget.js", createTestHandler("language/expressions/async-function/named-returns-async-function-returns-newtarget.js"));
it("named-returns-async-function.js", createTestHandler("language/expressions/async-function/named-returns-async-function.js"));
it("named-strict-error-reassign-fn-name-in-body-in-arrow.js", createTestHandler("language/expressions/async-function/named-strict-error-reassign-fn-name-in-body-in-arrow.js"));
it("named-strict-error-reassign-fn-name-in-body-in-eval.js", createTestHandler("language/expressions/async-function/named-strict-error-reassign-fn-name-in-body-in-eval.js"));
it("named-strict-error-reassign-fn-name-in-body.js", createTestHandler("language/expressions/async-function/named-strict-error-reassign-fn-name-in-body.js"));
it("named-unscopables-with-in-nested-fn.js", createTestHandler("language/expressions/async-function/named-unscopables-with-in-nested-fn.js"));
it("named-unscopables-with.js", createTestHandler("language/expressions/async-function/named-unscopables-with.js"));
it("nameless-array-destructuring-param-strict-body.js", createTestHandler("language/expressions/async-function/nameless-array-destructuring-param-strict-body.js"));
it("nameless-dflt-params-abrupt.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-abrupt.js"));
it("nameless-dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-arg-val-not-undefined.js"));
it("nameless-dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-arg-val-undefined.js"));
it("nameless-dflt-params-duplicates.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-duplicates.js"));
it("nameless-dflt-params-ref-later.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-ref-later.js"));
it("nameless-dflt-params-ref-prior.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-ref-prior.js"));
it("nameless-dflt-params-ref-self.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-ref-self.js"));
it("nameless-dflt-params-rest.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-rest.js"));
it("nameless-dflt-params-trailing-comma.js", createTestHandler("language/expressions/async-function/nameless-dflt-params-trailing-comma.js"));
it("nameless-eval-var-scope-syntax-err.js", createTestHandler("language/expressions/async-function/nameless-eval-var-scope-syntax-err.js"));
it("nameless-object-destructuring-param-strict-body.js", createTestHandler("language/expressions/async-function/nameless-object-destructuring-param-strict-body.js"));
it("nameless-params-trailing-comma-multiple.js", createTestHandler("language/expressions/async-function/nameless-params-trailing-comma-multiple.js"));
it("nameless-params-trailing-comma-single.js", createTestHandler("language/expressions/async-function/nameless-params-trailing-comma-single.js"));
it("nameless-rest-param-strict-body.js", createTestHandler("language/expressions/async-function/nameless-rest-param-strict-body.js"));
it("nameless-rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/async-function/nameless-rest-params-trailing-comma-early-error.js"));
it("nameless-unscopables-with-in-nested-fn.js", createTestHandler("language/expressions/async-function/nameless-unscopables-with-in-nested-fn.js"));
it("nameless-unscopables-with.js", createTestHandler("language/expressions/async-function/nameless-unscopables-with.js"));
it("syntax-expression-is-PrimaryExpression.js", createTestHandler("language/expressions/async-function/syntax-expression-is-PrimaryExpression.js"));
it("try-reject-finally-reject.js", createTestHandler("language/expressions/async-function/try-reject-finally-reject.js"));
it("try-reject-finally-return.js", createTestHandler("language/expressions/async-function/try-reject-finally-return.js"));
it("try-reject-finally-throw.js", createTestHandler("language/expressions/async-function/try-reject-finally-throw.js"));
it("try-return-finally-reject.js", createTestHandler("language/expressions/async-function/try-return-finally-reject.js"));
it("try-return-finally-return.js", createTestHandler("language/expressions/async-function/try-return-finally-return.js"));
it("try-return-finally-throw.js", createTestHandler("language/expressions/async-function/try-return-finally-throw.js"));
it("try-throw-finally-reject.js", createTestHandler("language/expressions/async-function/try-throw-finally-reject.js"));
it("try-throw-finally-return.js", createTestHandler("language/expressions/async-function/try-throw-finally-return.js"));
it("try-throw-finally-throw.js", createTestHandler("language/expressions/async-function/try-throw-finally-throw.js"));
});
