import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("async-function", () => {
  it(
    "await-as-binding-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/await-as-binding-identifier-escaped.js"),
  );
  it(
    "await-as-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/await-as-binding-identifier.js"),
  );
  it(
    "await-as-identifier-reference-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/await-as-identifier-reference-escaped.js",
    ),
  );
  it(
    "await-as-identifier-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/await-as-identifier-reference.js"),
  );
  it(
    "await-as-label-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/await-as-label-identifier-escaped.js"),
  );
  it(
    "await-as-label-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/await-as-label-identifier.js"),
  );
  it(
    "early-errors-expression-NSPL-with-USD.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-NSPL-with-USD.js",
    ),
  );
  it(
    "early-errors-expression-binding-identifier-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-binding-identifier-arguments.js",
    ),
  );
  it(
    "early-errors-expression-binding-identifier-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-binding-identifier-eval.js",
    ),
  );
  it(
    "early-errors-expression-body-contains-super-call.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-body-contains-super-call.js",
    ),
  );
  it(
    "early-errors-expression-body-contains-super-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-body-contains-super-property.js",
    ),
  );
  it(
    "early-errors-expression-eval-in-formal-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-eval-in-formal-parameters.js",
    ),
  );
  it(
    "early-errors-expression-formals-body-duplicate.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-formals-body-duplicate.js",
    ),
  );
  it(
    "early-errors-expression-formals-contains-super-call.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-formals-contains-super-call.js",
    ),
  );
  it(
    "early-errors-expression-formals-contains-super-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-formals-contains-super-property.js",
    ),
  );
  it(
    "early-errors-expression-not-simple-assignment-target.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/early-errors-expression-not-simple-assignment-target.js",
    ),
  );
  it(
    "escaped-async.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/escaped-async.js"),
  );
  it(
    "expression-returns-promise.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/expression-returns-promise.js"),
  );
  describe("forbidden-ext", () => {
    describe("b1", () => {
      it(
        "async-func-expr-named-forbidden-ext-direct-access-prop-arguments.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b1/async-func-expr-named-forbidden-ext-direct-access-prop-arguments.js",
        ),
      );
      it(
        "async-func-expr-named-forbidden-ext-direct-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b1/async-func-expr-named-forbidden-ext-direct-access-prop-caller.js",
        ),
      );
      it(
        "async-func-expr-nameless-forbidden-ext-direct-access-prop-arguments.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b1/async-func-expr-nameless-forbidden-ext-direct-access-prop-arguments.js",
        ),
      );
      it(
        "async-func-expr-nameless-forbidden-ext-direct-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b1/async-func-expr-nameless-forbidden-ext-direct-access-prop-caller.js",
        ),
      );
    });
    describe("b2", () => {
      it(
        "async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-get.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b2/async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-get.js",
        ),
      );
      it(
        "async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-value.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b2/async-func-expr-named-forbidden-ext-indirect-access-own-prop-caller-value.js",
        ),
      );
      it(
        "async-func-expr-named-forbidden-ext-indirect-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b2/async-func-expr-named-forbidden-ext-indirect-access-prop-caller.js",
        ),
      );
      it(
        "async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-get.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b2/async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-get.js",
        ),
      );
      it(
        "async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-value.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b2/async-func-expr-nameless-forbidden-ext-indirect-access-own-prop-caller-value.js",
        ),
      );
      it(
        "async-func-expr-nameless-forbidden-ext-indirect-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/async-function/forbidden-ext/b2/async-func-expr-nameless-forbidden-ext-indirect-access-prop-caller.js",
        ),
      );
    });
  });
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/name.js"),
  );
  it(
    "named-array-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-array-destructuring-param-strict-body.js",
    ),
  );
  it(
    "named-await-as-binding-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-await-as-binding-identifier-escaped.js",
    ),
  );
  it(
    "named-await-as-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-await-as-binding-identifier.js"),
  );
  it(
    "named-await-as-identifier-reference-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-await-as-identifier-reference-escaped.js",
    ),
  );
  it(
    "named-await-as-identifier-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-await-as-identifier-reference.js"),
  );
  it(
    "named-await-as-label-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-await-as-label-identifier-escaped.js",
    ),
  );
  it(
    "named-await-as-label-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-await-as-label-identifier.js"),
  );
  it(
    "named-dflt-params-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-abrupt.js"),
  );
  it(
    "named-dflt-params-arg-val-not-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-dflt-params-arg-val-not-undefined.js",
    ),
  );
  it(
    "named-dflt-params-arg-val-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-arg-val-undefined.js"),
  );
  it(
    "named-dflt-params-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-duplicates.js"),
  );
  it(
    "named-dflt-params-ref-later.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-ref-later.js"),
  );
  it(
    "named-dflt-params-ref-prior.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-ref-prior.js"),
  );
  it(
    "named-dflt-params-ref-self.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-ref-self.js"),
  );
  it(
    "named-dflt-params-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-rest.js"),
  );
  it(
    "named-dflt-params-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-dflt-params-trailing-comma.js"),
  );
  it(
    "named-eval-var-scope-syntax-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-eval-var-scope-syntax-err.js"),
  );
  it(
    "named-object-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-object-destructuring-param-strict-body.js",
    ),
  );
  it(
    "named-params-trailing-comma-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-params-trailing-comma-multiple.js",
    ),
  );
  it(
    "named-params-trailing-comma-single.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-params-trailing-comma-single.js"),
  );
  it(
    "named-reassign-fn-name-in-body-in-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-reassign-fn-name-in-body-in-arrow.js",
    ),
  );
  it(
    "named-reassign-fn-name-in-body-in-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-reassign-fn-name-in-body-in-eval.js",
    ),
  );
  it(
    "named-reassign-fn-name-in-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-reassign-fn-name-in-body.js"),
  );
  it(
    "named-rest-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-rest-param-strict-body.js"),
  );
  it(
    "named-rest-params-trailing-comma-early-error.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-rest-params-trailing-comma-early-error.js",
    ),
  );
  it(
    "named-returns-async-arrow-returns-arguments-from-parent-function.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-returns-async-arrow-returns-arguments-from-parent-function.js",
    ),
  );
  it(
    "named-returns-async-arrow-returns-newtarget.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-returns-async-arrow-returns-newtarget.js",
    ),
  );
  it(
    "named-returns-async-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-returns-async-arrow.js"),
  );
  it(
    "named-returns-async-function-returns-arguments-from-own-function.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-returns-async-function-returns-arguments-from-own-function.js",
    ),
  );
  it(
    "named-returns-async-function-returns-newtarget.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-returns-async-function-returns-newtarget.js",
    ),
  );
  it(
    "named-returns-async-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-returns-async-function.js"),
  );
  it(
    "named-strict-error-reassign-fn-name-in-body-in-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-strict-error-reassign-fn-name-in-body-in-arrow.js",
    ),
  );
  it(
    "named-strict-error-reassign-fn-name-in-body-in-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-strict-error-reassign-fn-name-in-body-in-eval.js",
    ),
  );
  it(
    "named-strict-error-reassign-fn-name-in-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/named-strict-error-reassign-fn-name-in-body.js",
    ),
  );
  it(
    "named-unscopables-with-in-nested-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-unscopables-with-in-nested-fn.js"),
  );
  it(
    "named-unscopables-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/named-unscopables-with.js"),
  );
  it(
    "nameless-array-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-array-destructuring-param-strict-body.js",
    ),
  );
  it(
    "nameless-dflt-params-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-dflt-params-abrupt.js"),
  );
  it(
    "nameless-dflt-params-arg-val-not-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-dflt-params-arg-val-not-undefined.js",
    ),
  );
  it(
    "nameless-dflt-params-arg-val-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-dflt-params-arg-val-undefined.js",
    ),
  );
  it(
    "nameless-dflt-params-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-dflt-params-duplicates.js"),
  );
  it(
    "nameless-dflt-params-ref-later.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-dflt-params-ref-later.js"),
  );
  it(
    "nameless-dflt-params-ref-prior.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-dflt-params-ref-prior.js"),
  );
  it(
    "nameless-dflt-params-ref-self.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-dflt-params-ref-self.js"),
  );
  it(
    "nameless-dflt-params-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-dflt-params-rest.js"),
  );
  it(
    "nameless-dflt-params-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-dflt-params-trailing-comma.js"),
  );
  it(
    "nameless-eval-var-scope-syntax-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-eval-var-scope-syntax-err.js"),
  );
  it(
    "nameless-object-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-object-destructuring-param-strict-body.js",
    ),
  );
  it(
    "nameless-params-trailing-comma-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-params-trailing-comma-multiple.js",
    ),
  );
  it(
    "nameless-params-trailing-comma-single.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-params-trailing-comma-single.js",
    ),
  );
  it(
    "nameless-rest-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-rest-param-strict-body.js"),
  );
  it(
    "nameless-rest-params-trailing-comma-early-error.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-rest-params-trailing-comma-early-error.js",
    ),
  );
  it(
    "nameless-unscopables-with-in-nested-fn.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/nameless-unscopables-with-in-nested-fn.js",
    ),
  );
  it(
    "nameless-unscopables-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/nameless-unscopables-with.js"),
  );
  it(
    "syntax-expression-is-PrimaryExpression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/async-function/syntax-expression-is-PrimaryExpression.js",
    ),
  );
  it(
    "try-reject-finally-reject.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-reject-finally-reject.js"),
  );
  it(
    "try-reject-finally-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-reject-finally-return.js"),
  );
  it(
    "try-reject-finally-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-reject-finally-throw.js"),
  );
  it(
    "try-return-finally-reject.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-return-finally-reject.js"),
  );
  it(
    "try-return-finally-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-return-finally-return.js"),
  );
  it(
    "try-return-finally-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-return-finally-throw.js"),
  );
  it(
    "try-throw-finally-reject.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-throw-finally-reject.js"),
  );
  it(
    "try-throw-finally-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-throw-finally-return.js"),
  );
  it(
    "try-throw-finally-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/async-function/try-throw-finally-throw.js"),
  );
});
