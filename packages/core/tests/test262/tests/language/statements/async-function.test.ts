import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("async-function", () => {
  it(
    "array-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/array-destructuring-param-strict-body.js",
    ),
  );
  it(
    "await-as-binding-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/await-as-binding-identifier-escaped.js"),
  );
  it(
    "await-as-binding-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/await-as-binding-identifier.js"),
  );
  it(
    "await-as-identifier-reference-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/await-as-identifier-reference-escaped.js",
    ),
  );
  it(
    "await-as-identifier-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/await-as-identifier-reference.js"),
  );
  it(
    "await-as-label-identifier-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/await-as-label-identifier-escaped.js"),
  );
  it(
    "await-as-label-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/await-as-label-identifier.js"),
  );
  it(
    "cptn-decl.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/cptn-decl.js"),
  );
  it(
    "declaration-returns-promise.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/declaration-returns-promise.js"),
  );
  it(
    "dflt-params-abrupt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-abrupt.js"),
  );
  it(
    "dflt-params-arg-val-not-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-arg-val-not-undefined.js"),
  );
  it(
    "dflt-params-arg-val-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-arg-val-undefined.js"),
  );
  it(
    "dflt-params-duplicates.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-duplicates.js"),
  );
  it(
    "dflt-params-ref-later.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-ref-later.js"),
  );
  it(
    "dflt-params-ref-prior.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-ref-prior.js"),
  );
  it(
    "dflt-params-ref-self.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-ref-self.js"),
  );
  it(
    "dflt-params-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-rest.js"),
  );
  it(
    "dflt-params-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/dflt-params-trailing-comma.js"),
  );
  it(
    "early-errors-declaration-NSPL-with-USD.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-NSPL-with-USD.js",
    ),
  );
  it(
    "early-errors-declaration-arguments-in-formal-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-arguments-in-formal-parameters.js",
    ),
  );
  it(
    "early-errors-declaration-await-in-formals-default.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-await-in-formals-default.js",
    ),
  );
  it(
    "early-errors-declaration-await-in-formals.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-await-in-formals.js",
    ),
  );
  it(
    "early-errors-declaration-binding-identifier-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-binding-identifier-arguments.js",
    ),
  );
  it(
    "early-errors-declaration-binding-identifier-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-binding-identifier-eval.js",
    ),
  );
  it(
    "early-errors-declaration-body-contains-super-call.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-body-contains-super-call.js",
    ),
  );
  it(
    "early-errors-declaration-body-contains-super-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-body-contains-super-property.js",
    ),
  );
  it(
    "early-errors-declaration-duplicate-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-duplicate-parameters.js",
    ),
  );
  it(
    "early-errors-declaration-eval-in-formal-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-eval-in-formal-parameters.js",
    ),
  );
  it(
    "early-errors-declaration-formals-body-duplicate.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-formals-body-duplicate.js",
    ),
  );
  it(
    "early-errors-declaration-formals-contains-super-call.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-formals-contains-super-call.js",
    ),
  );
  it(
    "early-errors-declaration-formals-contains-super-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/early-errors-declaration-formals-contains-super-property.js",
    ),
  );
  it(
    "escaped-async.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/escaped-async.js"),
  );
  it(
    "eval-var-scope-syntax-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/eval-var-scope-syntax-err.js"),
  );
  it(
    "evaluation-body-that-returns-after-await.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/evaluation-body-that-returns-after-await.js",
    ),
  );
  it(
    "evaluation-body-that-returns.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/evaluation-body-that-returns.js"),
  );
  it(
    "evaluation-body-that-throws-after-await.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/evaluation-body-that-throws-after-await.js",
    ),
  );
  it(
    "evaluation-body-that-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/evaluation-body-that-throws.js"),
  );
  it(
    "evaluation-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/async-function/evaluation-body.js"),
  );
  it(
    "evaluation-default-that-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/evaluation-default-that-throws.js"),
  );
  it(
    "evaluation-mapped-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/evaluation-mapped-arguments.js"),
  );
  it(
    "evaluation-this-value-global.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/evaluation-this-value-global.js"),
  );
  it(
    "evaluation-this-value-passed.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/evaluation-this-value-passed.js"),
  );
  it(
    "evaluation-unmapped-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/evaluation-unmapped-arguments.js"),
  );
  describe("forbidden-ext", () => {
    describe("b1", () => {
      it(
        "async-func-decl-forbidden-ext-direct-access-prop-arguments.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-function/forbidden-ext/b1/async-func-decl-forbidden-ext-direct-access-prop-arguments.js",
        ),
      );
      it(
        "async-func-decl-forbidden-ext-direct-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-function/forbidden-ext/b1/async-func-decl-forbidden-ext-direct-access-prop-caller.js",
        ),
      );
    });
    describe("b2", () => {
      it(
        "async-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-function/forbidden-ext/b2/async-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js",
        ),
      );
      it(
        "async-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-function/forbidden-ext/b2/async-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js",
        ),
      );
      it(
        "async-func-decl-forbidden-ext-indirect-access-prop-caller.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/async-function/forbidden-ext/b2/async-func-decl-forbidden-ext-indirect-access-prop-caller.js",
        ),
      );
    });
  });
  it(
    "let-newline-await-in-async-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/let-newline-await-in-async-function.js"),
  );
  it(
    "object-destructuring-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/object-destructuring-param-strict-body.js",
    ),
  );
  it(
    "params-trailing-comma-multiple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/params-trailing-comma-multiple.js"),
  );
  it(
    "params-trailing-comma-single.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/params-trailing-comma-single.js"),
  );
  it(
    "rest-param-strict-body.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/rest-param-strict-body.js"),
  );
  it(
    "rest-params-trailing-comma-early-error.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/rest-params-trailing-comma-early-error.js",
    ),
  );
  it(
    "returns-async-arrow-returns-arguments-from-parent-function.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/returns-async-arrow-returns-arguments-from-parent-function.js",
    ),
  );
  it(
    "returns-async-arrow-returns-newtarget.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/returns-async-arrow-returns-newtarget.js",
    ),
  );
  it(
    "returns-async-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/returns-async-arrow.js"),
  );
  it(
    "returns-async-function-returns-arguments-from-own-function.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/returns-async-function-returns-arguments-from-own-function.js",
    ),
  );
  it(
    "returns-async-function-returns-newtarget.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/returns-async-function-returns-newtarget.js",
    ),
  );
  it(
    "returns-async-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/returns-async-function.js"),
  );
  it(
    "syntax-declaration-line-terminators-allowed.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/syntax-declaration-line-terminators-allowed.js",
    ),
  );
  it(
    "syntax-declaration-no-line-terminator.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/async-function/syntax-declaration-no-line-terminator.js",
    ),
  );
  it(
    "syntax-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/syntax-declaration.js"),
  );
  it(
    "try-reject-finally-reject.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-reject-finally-reject.js"),
  );
  it(
    "try-reject-finally-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-reject-finally-return.js"),
  );
  it(
    "try-reject-finally-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-reject-finally-throw.js"),
  );
  it(
    "try-return-finally-reject.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-return-finally-reject.js"),
  );
  it(
    "try-return-finally-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-return-finally-return.js"),
  );
  it(
    "try-return-finally-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-return-finally-throw.js"),
  );
  it(
    "try-throw-finally-reject.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-throw-finally-reject.js"),
  );
  it(
    "try-throw-finally-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-throw-finally-return.js"),
  );
  it(
    "try-throw-finally-throw.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/try-throw-finally-throw.js"),
  );
  it(
    "unscopables-with-in-nested-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/unscopables-with-in-nested-fn.js"),
  );
  it(
    "unscopables-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/async-function/unscopables-with.js"),
  );
});
