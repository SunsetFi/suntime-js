import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("async-arrow-function", () => {
  it(
    "array-destructuring-param-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/array-destructuring-param-strict-body.js",
    ),
  );
  it(
    "arrow-returns-promise.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/arrow-returns-promise.js"),
  );
  it(
    "async-lineterminator-identifier-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/async-lineterminator-identifier-throws.js",
    ),
  );
  it(
    "await-as-binding-identifier-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/await-as-binding-identifier-escaped.js",
    ),
  );
  it(
    "await-as-binding-identifier.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/await-as-binding-identifier.js"),
  );
  it(
    "await-as-identifier-reference-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/await-as-identifier-reference-escaped.js",
    ),
  );
  it(
    "await-as-identifier-reference.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/await-as-identifier-reference.js"),
  );
  it(
    "await-as-label-identifier-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/await-as-label-identifier-escaped.js",
    ),
  );
  it(
    "await-as-label-identifier.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/await-as-label-identifier.js"),
  );
  it(
    "await-as-param-ident-nested-arrow-parameter-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/await-as-param-ident-nested-arrow-parameter-position.js",
    ),
  );
  it(
    "await-as-param-nested-arrow-body-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/await-as-param-nested-arrow-body-position.js",
    ),
  );
  it(
    "await-as-param-nested-arrow-parameter-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/await-as-param-nested-arrow-parameter-position.js",
    ),
  );
  it(
    "await-as-param-rest-nested-arrow-parameter-position.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/await-as-param-rest-nested-arrow-parameter-position.js",
    ),
  );
  it(
    "dflt-params-abrupt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-abrupt.js"),
  );
  it(
    "dflt-params-arg-val-not-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/dflt-params-arg-val-not-undefined.js",
    ),
  );
  it(
    "dflt-params-arg-val-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-arg-val-undefined.js"),
  );
  it(
    "dflt-params-duplicates.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-duplicates.js"),
  );
  it(
    "dflt-params-ref-later.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-ref-later.js"),
  );
  it(
    "dflt-params-ref-prior.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-ref-prior.js"),
  );
  it(
    "dflt-params-ref-self.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-ref-self.js"),
  );
  it(
    "dflt-params-rest.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-rest.js"),
  );
  it(
    "dflt-params-trailing-comma.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/dflt-params-trailing-comma.js"),
  );
  it(
    "early-errors-arrow-NSPL-with-USD.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-NSPL-with-USD.js",
    ),
  );
  it(
    "early-errors-arrow-arguments-in-formal-parameters.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-arguments-in-formal-parameters.js",
    ),
  );
  it(
    "early-errors-arrow-await-in-formals-default.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-await-in-formals-default.js",
    ),
  );
  it(
    "early-errors-arrow-await-in-formals.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-await-in-formals.js",
    ),
  );
  it(
    "early-errors-arrow-body-contains-super-call.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-body-contains-super-call.js",
    ),
  );
  it(
    "early-errors-arrow-body-contains-super-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-body-contains-super-property.js",
    ),
  );
  it(
    "early-errors-arrow-duplicate-parameters.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-duplicate-parameters.js",
    ),
  );
  it(
    "early-errors-arrow-eval-in-formal-parameters.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-eval-in-formal-parameters.js",
    ),
  );
  it(
    "early-errors-arrow-formals-body-duplicate.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-formals-body-duplicate.js",
    ),
  );
  it(
    "early-errors-arrow-formals-contains-super-call.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-formals-contains-super-call.js",
    ),
  );
  it(
    "early-errors-arrow-formals-contains-super-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-formals-contains-super-property.js",
    ),
  );
  it(
    "early-errors-arrow-formals-lineterminator.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/early-errors-arrow-formals-lineterminator.js",
    ),
  );
  it(
    "escaped-async-line-terminator.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/escaped-async-line-terminator.js"),
  );
  it(
    "escaped-async.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/escaped-async.js"),
  );
  it(
    "eval-var-scope-syntax-err.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/eval-var-scope-syntax-err.js"),
  );
  describe("forbidden-ext", () => {
    describe("b1", () => {
      it(
        "async-arrow-function-forbidden-ext-direct-access-prop-arguments.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/async-arrow-function/forbidden-ext/b1/async-arrow-function-forbidden-ext-direct-access-prop-arguments.js",
        ),
      );
      it(
        "async-arrow-function-forbidden-ext-direct-access-prop-caller.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/async-arrow-function/forbidden-ext/b1/async-arrow-function-forbidden-ext-direct-access-prop-caller.js",
        ),
      );
    });
    describe("b2", () => {
      it(
        "async-arrow-function-forbidden-ext-indirect-access-own-prop-caller-get.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/async-arrow-function/forbidden-ext/b2/async-arrow-function-forbidden-ext-indirect-access-own-prop-caller-get.js",
        ),
      );
      it(
        "async-arrow-function-forbidden-ext-indirect-access-own-prop-caller-value.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/async-arrow-function/forbidden-ext/b2/async-arrow-function-forbidden-ext-indirect-access-own-prop-caller-value.js",
        ),
      );
      it(
        "async-arrow-function-forbidden-ext-indirect-access-prop-caller.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/async-arrow-function/forbidden-ext/b2/async-arrow-function-forbidden-ext-indirect-access-prop-caller.js",
        ),
      );
    });
  });
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/name.js"),
  );
  it(
    "object-destructuring-param-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/object-destructuring-param-strict-body.js",
    ),
  );
  it(
    "params-trailing-comma-multiple.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/params-trailing-comma-multiple.js",
    ),
  );
  it(
    "params-trailing-comma-single.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/params-trailing-comma-single.js"),
  );
  it(
    "prototype.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/prototype.js"),
  );
  it(
    "rest-param-strict-body.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/rest-param-strict-body.js"),
  );
  it(
    "rest-params-trailing-comma-early-error.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/async-arrow-function/rest-params-trailing-comma-early-error.js",
    ),
  );
  it(
    "try-reject-finally-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-reject-finally-reject.js"),
  );
  it(
    "try-reject-finally-return.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-reject-finally-return.js"),
  );
  it(
    "try-reject-finally-throw.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-reject-finally-throw.js"),
  );
  it(
    "try-return-finally-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-return-finally-reject.js"),
  );
  it(
    "try-return-finally-return.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-return-finally-return.js"),
  );
  it(
    "try-return-finally-throw.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-return-finally-throw.js"),
  );
  it(
    "try-throw-finally-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-throw-finally-reject.js"),
  );
  it(
    "try-throw-finally-return.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-throw-finally-return.js"),
  );
  it(
    "try-throw-finally-throw.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/try-throw-finally-throw.js"),
  );
  it(
    "unscopables-with-in-nested-fn.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/unscopables-with-in-nested-fn.js"),
  );
  it(
    "unscopables-with.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/async-arrow-function/unscopables-with.js"),
  );
});
