import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("class", () => {
  describe("accessor-name-inst", () => {
    it(
      "computed-err-evaluation.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/computed-err-evaluation.js"),
    );
    it(
      "computed-err-to-prop-key.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/computed-err-to-prop-key.js",
      ),
    );
    it(
      "computed-err-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/computed-err-unresolvable.js",
      ),
    );
    it(
      "computed.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/computed.js"),
    );
    it(
      "literal-numeric-binary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/literal-numeric-binary.js"),
    );
    it(
      "literal-numeric-exponent.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-numeric-exponent.js",
      ),
    );
    it(
      "literal-numeric-hex.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/literal-numeric-hex.js"),
    );
    it(
      "literal-numeric-leading-decimal.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-numeric-leading-decimal.js",
      ),
    );
    it(
      "literal-numeric-non-canonical.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-numeric-non-canonical.js",
      ),
    );
    it(
      "literal-numeric-octal.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/literal-numeric-octal.js"),
    );
    it(
      "literal-numeric-zero.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/literal-numeric-zero.js"),
    );
    it(
      "literal-string-char-escape.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-char-escape.js",
      ),
    );
    it(
      "literal-string-default-escaped-ext.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-default-escaped-ext.js",
      ),
    );
    it(
      "literal-string-default-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-default-escaped.js",
      ),
    );
    it(
      "literal-string-default.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/literal-string-default.js"),
    );
    it(
      "literal-string-double-quote.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-double-quote.js",
      ),
    );
    it(
      "literal-string-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-inst/literal-string-empty.js"),
    );
    it(
      "literal-string-hex-escape.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-hex-escape.js",
      ),
    );
    it(
      "literal-string-line-continuation.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-line-continuation.js",
      ),
    );
    it(
      "literal-string-single-quote.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-single-quote.js",
      ),
    );
    it(
      "literal-string-unicode-escape.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-inst/literal-string-unicode-escape.js",
      ),
    );
  });
  it(
    "accessor-name-inst-computed-in.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/accessor-name-inst-computed-in.js"),
  );
  it(
    "accessor-name-inst-computed-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/accessor-name-inst-computed-yield-expr.js"),
  );
  describe("accessor-name-static", () => {
    it(
      "computed-err-evaluation.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/computed-err-evaluation.js",
      ),
    );
    it(
      "computed-err-to-prop-key.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/computed-err-to-prop-key.js",
      ),
    );
    it(
      "computed-err-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/computed-err-unresolvable.js",
      ),
    );
    it(
      "computed.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-static/computed.js"),
    );
    it(
      "literal-numeric-binary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-numeric-binary.js",
      ),
    );
    it(
      "literal-numeric-exponent.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-numeric-exponent.js",
      ),
    );
    it(
      "literal-numeric-hex.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-static/literal-numeric-hex.js"),
    );
    it(
      "literal-numeric-leading-decimal.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-numeric-leading-decimal.js",
      ),
    );
    it(
      "literal-numeric-non-canonical.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-numeric-non-canonical.js",
      ),
    );
    it(
      "literal-numeric-octal.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-static/literal-numeric-octal.js"),
    );
    it(
      "literal-numeric-zero.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-static/literal-numeric-zero.js"),
    );
    it(
      "literal-string-char-escape.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-char-escape.js",
      ),
    );
    it(
      "literal-string-default-escaped-ext.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-default-escaped-ext.js",
      ),
    );
    it(
      "literal-string-default-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-default-escaped.js",
      ),
    );
    it(
      "literal-string-default.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-default.js",
      ),
    );
    it(
      "literal-string-double-quote.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-double-quote.js",
      ),
    );
    it(
      "literal-string-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/accessor-name-static/literal-string-empty.js"),
    );
    it(
      "literal-string-hex-escape.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-hex-escape.js",
      ),
    );
    it(
      "literal-string-line-continuation.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-line-continuation.js",
      ),
    );
    it(
      "literal-string-single-quote.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-single-quote.js",
      ),
    );
    it(
      "literal-string-unicode-escape.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/accessor-name-static/literal-string-unicode-escape.js",
      ),
    );
  });
  it(
    "accessor-name-static-computed-in.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/accessor-name-static-computed-in.js"),
  );
  it(
    "accessor-name-static-computed-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/accessor-name-static-computed-yield-expr.js"),
  );
  describe("async-gen-method", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "await-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/await-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "await-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/await-as-binding-identifier.js",
      ),
    );
    it(
      "await-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/await-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "await-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/await-as-identifier-reference.js",
      ),
    );
    it(
      "await-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/await-as-label-identifier-escaped.js",
      ),
    );
    it(
      "await-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/await-as-label-identifier.js"),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/dflt-params-duplicates.js"),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/dflt-params-ref-later.js"),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/dflt-params-ref-prior.js"),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/dflt-params-ref-self.js"),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/dflt-params-trailing-comma.js",
      ),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-async-gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method/forbidden-ext/b1/cls-expr-async-gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-async-gen-meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method/forbidden-ext/b1/cls-expr-async-gen-meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method/forbidden-ext/b2/cls-expr-async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method/forbidden-ext/b2/cls-expr-async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-async-gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method/forbidden-ext/b2/cls-expr-async-gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/params-trailing-comma-multiple.js",
      ),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/params-trailing-comma-single.js",
      ),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/rest-param-strict-body.js"),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "yield-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-as-binding-identifier.js",
      ),
    );
    it(
      "yield-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "yield-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-as-identifier-reference.js",
      ),
    );
    it(
      "yield-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-as-label-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-as-label-identifier.js"),
    );
    it(
      "yield-identifier-spread-strict.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-identifier-spread-strict.js",
      ),
    );
    it(
      "yield-identifier-strict.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-identifier-strict.js"),
    );
    it(
      "yield-promise-reject-next-catch.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-promise-reject-next-catch.js",
      ),
    );
    it(
      "yield-promise-reject-next-for-await-of-async-iterator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-promise-reject-next-for-await-of-async-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next-for-await-of-sync-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-promise-reject-next-for-await-of-sync-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next-yield-star-async-iterator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-promise-reject-next-yield-star-async-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next-yield-star-sync-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-promise-reject-next-yield-star-sync-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-promise-reject-next.js"),
    );
    it(
      "yield-spread-arr-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-spread-arr-multiple.js"),
    );
    it(
      "yield-spread-arr-single.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-spread-arr-single.js"),
    );
    it(
      "yield-spread-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-spread-obj.js"),
    );
    it(
      "yield-star-async-next.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-star-async-next.js"),
    );
    it(
      "yield-star-async-return.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-star-async-return.js"),
    );
    it(
      "yield-star-async-throw.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-star-async-throw.js"),
    );
    it(
      "yield-star-expr-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-star-expr-abrupt.js"),
    );
    it(
      "yield-star-getiter-async-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-not-callable-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-not-callable-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-not-callable-object-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-not-callable-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-not-callable-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-null-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-null-sync-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-returns-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-returns-null-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-returns-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-returns-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-returns-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-returns-undefined-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-undefined-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-async-undefined-sync-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-not-callable-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-not-callable-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-not-callable-object-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-not-callable-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-not-callable-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-returns-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-returns-null-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-returns-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-returns-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-returns-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-getiter-sync-returns-undefined-throw.js",
      ),
    );
    it(
      "yield-star-next-call-done-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-call-done-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-call-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-call-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-next-call-value-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-call-value-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-non-object-ignores-then.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-non-object-ignores-then.js",
      ),
    );
    it(
      "yield-star-next-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-not-callable-boolean-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-not-callable-null-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-not-callable-number-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-not-callable-object-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-not-callable-string-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-not-callable-symbol-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-not-callable-undefined-throw.js",
      ),
    );
    it(
      "yield-star-next-then-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-boolean-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-non-callable-boolean-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-null-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-non-callable-null-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-number-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-non-callable-number-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-object-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-non-callable-object-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-string-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-non-callable-string-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-symbol-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-non-callable-symbol-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-undefined-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-non-callable-undefined-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method/yield-star-next-then-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-sync-next.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-star-sync-next.js"),
    );
    it(
      "yield-star-sync-return.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-star-sync-return.js"),
    );
    it(
      "yield-star-sync-throw.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method/yield-star-sync-throw.js"),
    );
  });
  describe("async-gen-method-static", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "await-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/await-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "await-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/await-as-binding-identifier.js",
      ),
    );
    it(
      "await-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/await-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "await-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/await-as-identifier-reference.js",
      ),
    );
    it(
      "await-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/await-as-label-identifier-escaped.js",
      ),
    );
    it(
      "await-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/await-as-label-identifier.js",
      ),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method-static/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/dflt-params-duplicates.js",
      ),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/dflt-params-ref-later.js",
      ),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/dflt-params-ref-prior.js",
      ),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/dflt-params-ref-self.js",
      ),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-gen-method-static/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/dflt-params-trailing-comma.js",
      ),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-async-gen-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method-static/forbidden-ext/b1/cls-expr-async-gen-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-async-gen-meth-static-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method-static/forbidden-ext/b1/cls-expr-async-gen-meth-static-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-async-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method-static/forbidden-ext/b2/cls-expr-async-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-async-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method-static/forbidden-ext/b2/cls-expr-async-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-async-gen-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-gen-method-static/forbidden-ext/b2/cls-expr-async-gen-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/params-trailing-comma-multiple.js",
      ),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/params-trailing-comma-single.js",
      ),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/rest-param-strict-body.js",
      ),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "yield-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-as-binding-identifier.js",
      ),
    );
    it(
      "yield-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "yield-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-as-identifier-reference.js",
      ),
    );
    it(
      "yield-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-as-label-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-as-label-identifier.js",
      ),
    );
    it(
      "yield-identifier-spread-strict.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-identifier-spread-strict.js",
      ),
    );
    it(
      "yield-identifier-strict.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-identifier-strict.js",
      ),
    );
    it(
      "yield-promise-reject-next-catch.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-promise-reject-next-catch.js",
      ),
    );
    it(
      "yield-promise-reject-next-for-await-of-async-iterator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-promise-reject-next-for-await-of-async-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next-for-await-of-sync-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-promise-reject-next-for-await-of-sync-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next-yield-star-async-iterator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-promise-reject-next-yield-star-async-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next-yield-star-sync-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-promise-reject-next-yield-star-sync-iterator.js",
      ),
    );
    it(
      "yield-promise-reject-next.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-promise-reject-next.js",
      ),
    );
    it(
      "yield-spread-arr-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-spread-arr-multiple.js",
      ),
    );
    it(
      "yield-spread-arr-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-spread-arr-single.js",
      ),
    );
    it(
      "yield-spread-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-gen-method-static/yield-spread-obj.js"),
    );
    it(
      "yield-star-async-next.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-async-next.js",
      ),
    );
    it(
      "yield-star-async-return.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-async-return.js",
      ),
    );
    it(
      "yield-star-async-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-async-throw.js",
      ),
    );
    it(
      "yield-star-expr-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-expr-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-async-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-not-callable-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-not-callable-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-not-callable-object-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-not-callable-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-not-callable-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-null-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-null-sync-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-returns-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-returns-null-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-returns-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-returns-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-returns-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-returns-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-returns-undefined-throw.js",
      ),
    );
    it(
      "yield-star-getiter-async-undefined-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-async-undefined-sync-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-get-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-not-callable-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-not-callable-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-not-callable-object-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-not-callable-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-not-callable-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-returns-boolean-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-returns-null-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-returns-number-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-returns-string-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-returns-symbol-throw.js",
      ),
    );
    it(
      "yield-star-getiter-sync-returns-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-getiter-sync-returns-undefined-throw.js",
      ),
    );
    it(
      "yield-star-next-call-done-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-call-done-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-call-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-call-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-next-call-value-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-call-value-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-non-object-ignores-then.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-non-object-ignores-then.js",
      ),
    );
    it(
      "yield-star-next-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-not-callable-boolean-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-not-callable-null-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-not-callable-number-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-not-callable-object-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-not-callable-string-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-not-callable-symbol-throw.js",
      ),
    );
    it(
      "yield-star-next-not-callable-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-not-callable-undefined-throw.js",
      ),
    );
    it(
      "yield-star-next-then-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-get-abrupt.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-boolean-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-non-callable-boolean-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-null-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-non-callable-null-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-number-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-non-callable-number-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-object-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-non-callable-object-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-string-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-non-callable-string-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-symbol-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-non-callable-symbol-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-non-callable-undefined-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-non-callable-undefined-fulfillpromise.js",
      ),
    );
    it(
      "yield-star-next-then-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-next-then-returns-abrupt.js",
      ),
    );
    it(
      "yield-star-sync-next.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-sync-next.js",
      ),
    );
    it(
      "yield-star-sync-return.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-sync-return.js",
      ),
    );
    it(
      "yield-star-sync-throw.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-gen-method-static/yield-star-sync-throw.js",
      ),
    );
  });
  describe("async-method", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "await-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method/await-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "await-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method/await-as-binding-identifier.js"),
    );
    it(
      "await-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method/await-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "await-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method/await-as-identifier-reference.js"),
    );
    it(
      "await-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method/await-as-label-identifier-escaped.js",
      ),
    );
    it(
      "await-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method/await-as-label-identifier.js"),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method/dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-arg-val-undefined.js"),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-duplicates.js"),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-ref-later.js"),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-ref-prior.js"),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-ref-self.js"),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/dflt-params-trailing-comma.js"),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-async-meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method/forbidden-ext/b1/cls-expr-async-meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-async-meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method/forbidden-ext/b1/cls-expr-async-meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-async-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method/forbidden-ext/b2/cls-expr-async-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-async-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method/forbidden-ext/b2/cls-expr-async-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-async-meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method/forbidden-ext/b2/cls-expr-async-meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method/params-trailing-comma-multiple.js",
      ),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/params-trailing-comma-single.js"),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method/rest-param-strict-body.js"),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method/rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "returns-async-arrow-returns-arguments-from-parent-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method/returns-async-arrow-returns-arguments-from-parent-function.js",
      ),
    );
    it(
      "returns-async-arrow-returns-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method/returns-async-arrow-returns-newtarget.js",
      ),
    );
    it(
      "returns-async-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/returns-async-arrow.js"),
    );
    it(
      "returns-async-function-returns-arguments-from-own-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method/returns-async-function-returns-arguments-from-own-function.js",
      ),
    );
    it(
      "returns-async-function-returns-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method/returns-async-function-returns-newtarget.js",
      ),
    );
    it(
      "returns-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method/returns-async-function.js"),
    );
  });
  describe("async-method-static", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "await-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/await-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "await-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/await-as-binding-identifier.js",
      ),
    );
    it(
      "await-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/await-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "await-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/await-as-identifier-reference.js",
      ),
    );
    it(
      "await-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/await-as-label-identifier-escaped.js",
      ),
    );
    it(
      "await-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/await-as-label-identifier.js",
      ),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method-static/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method-static/dflt-params-duplicates.js"),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method-static/dflt-params-ref-later.js"),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method-static/dflt-params-ref-prior.js"),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method-static/dflt-params-ref-self.js"),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method-static/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/dflt-params-trailing-comma.js",
      ),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-async-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method-static/forbidden-ext/b1/cls-expr-async-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-async-meth-static-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method-static/forbidden-ext/b1/cls-expr-async-meth-static-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-async-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method-static/forbidden-ext/b2/cls-expr-async-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-async-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method-static/forbidden-ext/b2/cls-expr-async-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-async-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/async-method-static/forbidden-ext/b2/cls-expr-async-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/params-trailing-comma-multiple.js",
      ),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/params-trailing-comma-single.js",
      ),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/async-method-static/rest-param-strict-body.js"),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "returns-async-arrow-returns-arguments-from-parent-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/returns-async-arrow-returns-arguments-from-parent-function.js",
      ),
    );
    it(
      "returns-async-arrow-returns-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/returns-async-arrow-returns-newtarget.js",
      ),
    );
    it(
      "returns-async-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method-static/returns-async-arrow.js"),
    );
    it(
      "returns-async-function-returns-arguments-from-own-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/returns-async-function-returns-arguments-from-own-function.js",
      ),
    );
    it(
      "returns-async-function-returns-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/async-method-static/returns-async-function-returns-newtarget.js",
      ),
    );
    it(
      "returns-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/async-method-static/returns-async-function.js"),
    );
  });
  it(
    "class-name-ident-await-escaped-module.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-await-escaped-module.js"),
  );
  it(
    "class-name-ident-await-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/class-name-ident-await-escaped.js"),
  );
  it(
    "class-name-ident-await-module.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-await-module.js"),
  );
  it(
    "class-name-ident-await.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/class-name-ident-await.js"),
  );
  it(
    "class-name-ident-let-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-let-escaped.js"),
  );
  it(
    "class-name-ident-let.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-let.js"),
  );
  it(
    "class-name-ident-static-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-static-escaped.js"),
  );
  it(
    "class-name-ident-static.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-static.js"),
  );
  it(
    "class-name-ident-yield-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-yield-escaped.js"),
  );
  it(
    "class-name-ident-yield.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/class-name-ident-yield.js"),
  );
  it(
    "constructor-this-tdz-during-initializers.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/constructor-this-tdz-during-initializers.js"),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-additive-expression-add.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-additive-expression-add.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-additive-expression-subtract.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-additive-expression-subtract.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-assignment-expression-assignment.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-assignment-expression-assignment.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-assignment-expression-bitwise-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-assignment-expression-bitwise-or.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-assignment-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-assignment-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-assignment-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-assignment-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-assignment-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-assignment-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-async-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-async-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-await-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-await-expression.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-condition-expression-false.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-condition-expression-false.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-condition-expression-true.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-condition-expression-true.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-decimal-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-decimal-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-decimal-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-decimal-literal.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-exponetiation-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-exponetiation-expression.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-generator-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-generator-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-identifier.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-integer-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-integer-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-integer-separators.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-integer-separators.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-math.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-math.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-multiplicative-expression-div.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-multiplicative-expression-div.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-multiplicative-expression-mult.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-multiplicative-expression-mult.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-null.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-numeric-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-numeric-literal.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-string-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-string-literal.js",
    ),
  );
  it(
    "cpn-class-expr-accessors-computed-property-name-from-yield-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-accessors-computed-property-name-from-yield-expression.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-additive-expression-add.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-additive-expression-add.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-additive-expression-subtract.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-additive-expression-subtract.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-assignment-expression-assignment.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-assignment-expression-assignment.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-assignment-expression-bitwise-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-assignment-expression-bitwise-or.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-assignment-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-assignment-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-assignment-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-assignment-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-assignment-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-assignment-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-async-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-async-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-await-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-await-expression.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-condition-expression-false.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-condition-expression-false.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-condition-expression-true.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-condition-expression-true.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-decimal-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-decimal-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-decimal-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-decimal-literal.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-exponetiation-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-exponetiation-expression.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-generator-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-generator-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-identifier.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-integer-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-integer-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-integer-separators.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-integer-separators.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-math.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-math.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-multiplicative-expression-div.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-multiplicative-expression-div.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-multiplicative-expression-mult.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-multiplicative-expression-mult.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-null.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-numeric-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-numeric-literal.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-string-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-string-literal.js",
    ),
  );
  it(
    "cpn-class-expr-computed-property-name-from-yield-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-computed-property-name-from-yield-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-additive-expression-add.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-additive-expression-add.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-additive-expression-subtract.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-additive-expression-subtract.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-assignment-expression-assignment.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-assignment-expression-assignment.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-assignment-expression-bitwise-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-assignment-expression-bitwise-or.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-assignment-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-assignment-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-assignment-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-assignment-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-assignment-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-assignment-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-async-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-async-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-await-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-await-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-condition-expression-false.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-condition-expression-false.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-condition-expression-true.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-condition-expression-true.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-decimal-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-decimal-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-decimal-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-decimal-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-exponetiation-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-exponetiation-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-generator-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-generator-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-identifier.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-integer-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-integer-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-integer-separators.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-integer-separators.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-math.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-math.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-multiplicative-expression-div.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-multiplicative-expression-div.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-multiplicative-expression-mult.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-multiplicative-expression-mult.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-null.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-numeric-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-numeric-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-string-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-string-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-computed-property-name-from-yield-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-computed-property-name-from-yield-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-additive-expression-add.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-additive-expression-add.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-additive-expression-subtract.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-additive-expression-subtract.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-assignment.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-assignment.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-bitwise-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-bitwise-or.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-assignment-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-async-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-async-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-await-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-await-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-condition-expression-false.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-condition-expression-false.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-condition-expression-true.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-condition-expression-true.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-decimal-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-decimal-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-decimal-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-decimal-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-exponetiation-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-exponetiation-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-expression-coalesce.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-expression-logical-and.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-expression-logical-or.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-function-expression.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-generator-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-generator-function-declaration.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-identifier.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-integer-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-integer-e-notational-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-integer-separators.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-integer-separators.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-math.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-math.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-multiplicative-expression-div.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-multiplicative-expression-div.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-multiplicative-expression-mult.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-multiplicative-expression-mult.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-null.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-numeric-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-numeric-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-string-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-string-literal.js",
    ),
  );
  it(
    "cpn-class-expr-fields-methods-computed-property-name-from-yield-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/cpn-class-expr-fields-methods-computed-property-name-from-yield-expression.js",
    ),
  );
  describe("decorator", () => {
    describe("syntax", () => {
      describe("class-valid", () => {
        it(
          "decorator-member-expr-private-identifier.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/class-valid/decorator-member-expr-private-identifier.js",
          ),
        );
      });
      describe("valid", () => {
        it(
          "decorator-call-expr-identifier-reference-yield.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/valid/decorator-call-expr-identifier-reference-yield.js",
          ),
        );
        it(
          "decorator-call-expr-identifier-reference.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/valid/decorator-call-expr-identifier-reference.js",
          ),
        );
        it(
          "decorator-member-expr-decorator-member-expr.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/valid/decorator-member-expr-decorator-member-expr.js",
          ),
        );
        it(
          "decorator-member-expr-identifier-reference-yield.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/valid/decorator-member-expr-identifier-reference-yield.js",
          ),
        );
        it(
          "decorator-member-expr-identifier-reference.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/valid/decorator-member-expr-identifier-reference.js",
          ),
        );
        it(
          "decorator-parenthesized-expr-identifier-reference-yield.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/valid/decorator-parenthesized-expr-identifier-reference-yield.js",
          ),
        );
        it(
          "decorator-parenthesized-expr-identifier-reference.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/decorator/syntax/valid/decorator-parenthesized-expr-identifier-reference.js",
          ),
        );
      });
    });
  });
  describe("dstr", () => {
    it(
      "async-gen-meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-init-iter-close.js"),
    );
    it(
      "async-gen-meth-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-init-iter-get-err.js"),
    );
    it(
      "async-gen-meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-init-iter-no-close.js"),
    );
    it(
      "async-gen-meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-name-iter-val.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-elision.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-init-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-init-iter-get-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-ary-name-iter-val.js"),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-elision.js"),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-obj-init-null.js"),
    );
    it(
      "async-gen-meth-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-init-undefined.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-list-err.js"),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "async-gen-meth-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-init-null.js"),
    );
    it(
      "async-gen-meth-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-init-undefined.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-list-err.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-id-init.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-id.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "async-gen-meth-static-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-init-iter-close.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-init-iter-get-err.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-name-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-elision.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-init-iter-get-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-elision.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-empty.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-init-null.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-init-undefined.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-empty.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-list-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-static-obj-init-null.js"),
    );
    it(
      "async-gen-meth-static-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-init-undefined.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-list-err.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-gen-meth-static-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-gen-meth-static-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-init-iter-close.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-name-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-empty.js"),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-private-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-empty.js"),
    );
    it(
      "async-private-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-private-gen-meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-init-iter-close.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-name-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-private-gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-empty.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-private-gen-meth-static-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/async-private-gen-meth-static-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "gen-meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-init-iter-close.js"),
    );
    it(
      "gen-meth-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "gen-meth-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-init-iter-get-err.js"),
    );
    it(
      "gen-meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-init-iter-no-close.js"),
    );
    it(
      "gen-meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-name-iter-val.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "gen-meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "gen-meth-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elision-step-err.js"),
    );
    it(
      "gen-meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-elision.js"),
    );
    it(
      "gen-meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-empty.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-init-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "gen-meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-init-iter-close.js"),
    );
    it(
      "gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-init-iter-get-err.js"),
    );
    it(
      "gen-meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-init-iter-no-close.js"),
    );
    it(
      "gen-meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-name-iter-val.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-elision.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-init-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-init-null.js"),
    );
    it(
      "gen-meth-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-init-undefined.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-throws.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-list-err.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-id-init.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-dflt-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "gen-meth-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-init-null.js"),
    );
    it(
      "gen-meth-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-init-undefined.js"),
    );
    it(
      "gen-meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-empty.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-throws.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "gen-meth-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-list-err.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-id-init.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-id.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "gen-meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "gen-meth-static-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-init-iter-close.js"),
    );
    it(
      "gen-meth-static-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "gen-meth-static-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-init-iter-get-err.js"),
    );
    it(
      "gen-meth-static-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-init-iter-no-close.js",
      ),
    );
    it(
      "gen-meth-static-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-name-iter-val.js"),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-ptrn-elision.js"),
    );
    it(
      "gen-meth-static-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-ptrn-empty.js"),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-id.js"),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-init-id.js"),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-init-iter-get-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-elision.js"),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-empty.js"),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-dflt-obj-init-null.js"),
    );
    it(
      "gen-meth-static-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-init-undefined.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-empty.js"),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-list-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "gen-meth-static-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-init-null.js"),
    );
    it(
      "gen-meth-static-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-init-undefined.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-empty.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-list-err.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-ary.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-id-init.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-id.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-prop-obj.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-rest-getter.js"),
    );
    it(
      "gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "gen-meth-static-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/gen-meth-static-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-init-iter-close.js"),
    );
    it(
      "meth-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "meth-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-init-iter-get-err.js"),
    );
    it(
      "meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-init-iter-no-close.js"),
    );
    it(
      "meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-name-iter-val.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-elision-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-elision-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-exhausted.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-fn-name-fn.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-skipped.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-iter-complete.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-iter-step-err.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-iter-val-err.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-obj-prop-id-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "meth-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elision-step-err.js"),
    );
    it(
      "meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-elision.js"),
    );
    it(
      "meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-empty.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-id-iter-step-err.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-id-iter-val-err.js"),
    );
    it(
      "meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-init-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-init-iter-close.js"),
    );
    it(
      "meth-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "meth-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-init-iter-get-err.js"),
    );
    it(
      "meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-init-iter-no-close.js"),
    );
    it(
      "meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-name-iter-val.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elision-step-err.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-elision.js"),
    );
    it(
      "meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-init-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "meth-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-init-null.js"),
    );
    it(
      "meth-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-init-undefined.js"),
    );
    it(
      "meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-throws.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "meth-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-list-err.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-id-init.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-dflt-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "meth-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-init-null.js"),
    );
    it(
      "meth-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-init-undefined.js"),
    );
    it(
      "meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-empty.js"),
    );
    it(
      "meth-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-fn-name-arrow.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-fn-name-class.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-fn-name-cover.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "meth-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-throws.js"),
    );
    it(
      "meth-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-init-unresolvable.js"),
    );
    it(
      "meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "meth-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-list-err.js"),
    );
    it(
      "meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-ary-trailing-comma.js"),
    );
    it(
      "meth-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "meth-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-id-get-value-err.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-id-init-skipped.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-id-init.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-id-trailing-comma.js"),
    );
    it(
      "meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-id.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-obj-value-undef.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "meth-static-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-init-iter-close.js"),
    );
    it(
      "meth-static-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "meth-static-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-init-iter-get-err.js"),
    );
    it(
      "meth-static-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-init-iter-no-close.js"),
    );
    it(
      "meth-static-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-name-iter-val.js"),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "meth-static-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "meth-static-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "meth-static-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-elision-step-err.js"),
    );
    it(
      "meth-static-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-elision.js"),
    );
    it(
      "meth-static-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-empty.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-id.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-init-id.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "meth-static-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "meth-static-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "meth-static-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-ary-init-iter-close.js"),
    );
    it(
      "meth-static-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "meth-static-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-init-iter-get-err.js",
      ),
    );
    it(
      "meth-static-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "meth-static-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-ary-name-iter-val.js"),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-ary-ptrn-elision.js"),
    );
    it(
      "meth-static-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-ary-ptrn-empty.js"),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "meth-static-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-init-null.js"),
    );
    it(
      "meth-static-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-init-undefined.js"),
    );
    it(
      "meth-static-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-ptrn-empty.js"),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-ptrn-list-err.js"),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "meth-static-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "meth-static-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "meth-static-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-init-null.js"),
    );
    it(
      "meth-static-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-init-undefined.js"),
    );
    it(
      "meth-static-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-empty.js"),
    );
    it(
      "meth-static-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "meth-static-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-id-init-throws.js"),
    );
    it(
      "meth-static-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-list-err.js"),
    );
    it(
      "meth-static-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-prop-ary.js"),
    );
    it(
      "meth-static-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "meth-static-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-prop-id-init.js"),
    );
    it(
      "meth-static-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-prop-id.js"),
    );
    it(
      "meth-static-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "meth-static-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-prop-obj.js"),
    );
    it(
      "meth-static-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-rest-getter.js"),
    );
    it(
      "meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "meth-static-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/meth-static-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "private-gen-meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-ary-init-iter-close.js"),
    );
    it(
      "private-gen-meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-init-iter-no-close.js",
      ),
    );
    it(
      "private-gen-meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-ary-name-iter-val.js"),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-ary-ptrn-elision.js"),
    );
    it(
      "private-gen-meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-ary-ptrn-empty.js"),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-id.js"),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "private-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-elision.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-obj-ptrn-empty.js"),
    );
    it(
      "private-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-id.js"),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "private-gen-meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-gen-meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "private-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-gen-meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-init-iter-close.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-init-iter-no-close.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-name-iter-val.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-elision.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-empty.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "private-gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-elision.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-empty.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-empty.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-empty.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-gen-meth-static-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-gen-meth-static-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "private-meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-init-iter-close.js"),
    );
    it(
      "private-meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-init-iter-no-close.js"),
    );
    it(
      "private-meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-name-iter-val.js"),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "private-meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-elision.js"),
    );
    it(
      "private-meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-empty.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-id.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-init-id.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "private-meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-ary-init-iter-close.js"),
    );
    it(
      "private-meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "private-meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-ary-name-iter-val.js"),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-ary-ptrn-elision.js"),
    );
    it(
      "private-meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "private-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "private-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "private-meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-empty.js"),
    );
    it(
      "private-meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "private-meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "private-meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "private-meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-prop-id-init.js"),
    );
    it(
      "private-meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-prop-id.js"),
    );
    it(
      "private-meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "private-meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "private-meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "private-meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "private-meth-static-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-init-iter-close.js",
      ),
    );
    it(
      "private-meth-static-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-init-iter-no-close.js",
      ),
    );
    it(
      "private-meth-static-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-ary-name-iter-val.js"),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-ary-ptrn-elision.js"),
    );
    it(
      "private-meth-static-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-ary-ptrn-empty.js"),
    );
    it(
      "private-meth-static-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-id.js"),
    );
    it(
      "private-meth-static-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "private-meth-static-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-elision.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-empty.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-empty.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-id.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-obj-ptrn-empty.js"),
    );
    it(
      "private-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-ary.js"),
    );
    it(
      "private-meth-static-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-id.js"),
    );
    it(
      "private-meth-static-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/dstr/private-meth-static-obj-ptrn-prop-obj.js"),
    );
    it(
      "private-meth-static-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "private-meth-static-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/dstr/private-meth-static-obj-ptrn-rest-val-obj.js",
      ),
    );
  });
  describe("elements", () => {
    it(
      "after-same-line-gen-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-computed-names.js",
      ),
    );
    it(
      "after-same-line-gen-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-computed-symbol-names.js",
      ),
    );
    it(
      "after-same-line-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "after-same-line-gen-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-literal-names-asi.js",
      ),
    );
    it(
      "after-same-line-gen-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/after-same-line-gen-literal-names.js"),
    );
    it(
      "after-same-line-gen-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-private-field-usage.js",
      ),
    );
    it(
      "after-same-line-gen-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-private-method-getter-usage.js",
      ),
    );
    it(
      "after-same-line-gen-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-private-method-usage.js",
      ),
    );
    it(
      "after-same-line-gen-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/after-same-line-gen-private-names.js"),
    );
    it(
      "after-same-line-gen-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-gen-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-field-identifier.js",
      ),
    );
    it(
      "after-same-line-gen-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-private-getter-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-private-getter.js",
      ),
    );
    it(
      "after-same-line-gen-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-private-method-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-private-method.js",
      ),
    );
    it(
      "after-same-line-gen-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-private-setter-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-private-setter.js",
      ),
    );
    it(
      "after-same-line-gen-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-gen-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-gen-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-gen-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-static-private-fields.js",
      ),
    );
    it(
      "after-same-line-gen-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-static-private-methods-with-fields.js",
      ),
    );
    it(
      "after-same-line-gen-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-static-private-methods.js",
      ),
    );
    it(
      "after-same-line-gen-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-gen-string-literal-names.js",
      ),
    );
    it(
      "after-same-line-method-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-computed-names.js",
      ),
    );
    it(
      "after-same-line-method-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-computed-symbol-names.js",
      ),
    );
    it(
      "after-same-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "after-same-line-method-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-literal-names-asi.js",
      ),
    );
    it(
      "after-same-line-method-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-literal-names.js",
      ),
    );
    it(
      "after-same-line-method-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-private-field-usage.js",
      ),
    );
    it(
      "after-same-line-method-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-private-method-getter-usage.js",
      ),
    );
    it(
      "after-same-line-method-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-private-method-usage.js",
      ),
    );
    it(
      "after-same-line-method-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-private-names.js",
      ),
    );
    it(
      "after-same-line-method-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-method-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-field-identifier.js",
      ),
    );
    it(
      "after-same-line-method-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-private-getter-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-private-getter.js",
      ),
    );
    it(
      "after-same-line-method-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-private-method-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-private-method.js",
      ),
    );
    it(
      "after-same-line-method-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-private-setter-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-private-setter.js",
      ),
    );
    it(
      "after-same-line-method-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-method-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-method-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-method-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-static-private-fields.js",
      ),
    );
    it(
      "after-same-line-method-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-static-private-methods-with-fields.js",
      ),
    );
    it(
      "after-same-line-method-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-static-private-methods.js",
      ),
    );
    it(
      "after-same-line-method-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-method-string-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-computed-names.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-computed-symbol-names.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-literal-names-asi.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-private-field-usage.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-private-method-getter-usage.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-private-method-usage.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-private-names.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-field-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-private-getter-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-private-getter.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-private-method-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-private-method.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-private-setter-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-private-setter.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-static-private-fields.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-static-private-methods-with-fields.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-static-private-methods.js",
      ),
    );
    it(
      "after-same-line-static-async-gen-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-gen-string-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-async-method-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-computed-names.js",
      ),
    );
    it(
      "after-same-line-static-async-method-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-computed-symbol-names.js",
      ),
    );
    it(
      "after-same-line-static-async-method-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "after-same-line-static-async-method-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-literal-names-asi.js",
      ),
    );
    it(
      "after-same-line-static-async-method-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-async-method-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-private-field-usage.js",
      ),
    );
    it(
      "after-same-line-static-async-method-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-private-method-getter-usage.js",
      ),
    );
    it(
      "after-same-line-static-async-method-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-private-method-usage.js",
      ),
    );
    it(
      "after-same-line-static-async-method-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-private-names.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-field-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-private-getter-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-private-getter.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-private-method-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-private-method.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-private-setter-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-private-setter.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-async-method-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-async-method-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-static-private-fields.js",
      ),
    );
    it(
      "after-same-line-static-async-method-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-static-private-methods-with-fields.js",
      ),
    );
    it(
      "after-same-line-static-async-method-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-static-private-methods.js",
      ),
    );
    it(
      "after-same-line-static-async-method-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-async-method-string-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-gen-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-computed-names.js",
      ),
    );
    it(
      "after-same-line-static-gen-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-computed-symbol-names.js",
      ),
    );
    it(
      "after-same-line-static-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "after-same-line-static-gen-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-literal-names-asi.js",
      ),
    );
    it(
      "after-same-line-static-gen-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-gen-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-private-field-usage.js",
      ),
    );
    it(
      "after-same-line-static-gen-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-private-method-getter-usage.js",
      ),
    );
    it(
      "after-same-line-static-gen-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-private-method-usage.js",
      ),
    );
    it(
      "after-same-line-static-gen-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-private-names.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-field-identifier.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-private-getter-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-private-getter.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-private-method-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-private-method.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-private-setter-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-private-setter.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-gen-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-gen-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-static-private-fields.js",
      ),
    );
    it(
      "after-same-line-static-gen-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-static-private-methods-with-fields.js",
      ),
    );
    it(
      "after-same-line-static-gen-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-static-private-methods.js",
      ),
    );
    it(
      "after-same-line-static-gen-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-gen-string-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-method-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-computed-names.js",
      ),
    );
    it(
      "after-same-line-static-method-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-computed-symbol-names.js",
      ),
    );
    it(
      "after-same-line-static-method-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "after-same-line-static-method-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-literal-names-asi.js",
      ),
    );
    it(
      "after-same-line-static-method-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-literal-names.js",
      ),
    );
    it(
      "after-same-line-static-method-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-private-field-usage.js",
      ),
    );
    it(
      "after-same-line-static-method-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-private-method-getter-usage.js",
      ),
    );
    it(
      "after-same-line-static-method-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-private-method-usage.js",
      ),
    );
    it(
      "after-same-line-static-method-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-private-names.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-field-identifier.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-private-getter-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-private-getter.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-private-method-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-private-method.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-private-setter-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-private-setter.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "after-same-line-static-method-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "after-same-line-static-method-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-static-private-fields.js",
      ),
    );
    it(
      "after-same-line-static-method-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-static-private-methods-with-fields.js",
      ),
    );
    it(
      "after-same-line-static-method-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-static-private-methods.js",
      ),
    );
    it(
      "after-same-line-static-method-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/after-same-line-static-method-string-literal-names.js",
      ),
    );
    it(
      "arrow-body-derived-cls-direct-eval-contains-superproperty-1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-direct-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "arrow-body-derived-cls-direct-eval-contains-superproperty-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-direct-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "arrow-body-derived-cls-direct-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-direct-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "arrow-body-derived-cls-direct-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-direct-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "arrow-body-derived-cls-direct-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-direct-eval-err-contains-supercall.js",
      ),
    );
    it(
      "arrow-body-derived-cls-indirect-eval-contains-superproperty-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-indirect-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "arrow-body-derived-cls-indirect-eval-contains-superproperty-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-indirect-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "arrow-body-derived-cls-indirect-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-indirect-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "arrow-body-derived-cls-indirect-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-indirect-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "arrow-body-derived-cls-indirect-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-derived-cls-indirect-eval-err-contains-supercall.js",
      ),
    );
    it(
      "arrow-body-direct-eval-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-direct-eval-err-contains-arguments.js",
      ),
    );
    it(
      "arrow-body-direct-eval-err-contains-newtarget.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-direct-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "arrow-body-indirect-eval-err-contains-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-indirect-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-direct-eval-contains-superproperty-1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-direct-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-direct-eval-contains-superproperty-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-direct-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-direct-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-direct-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-direct-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-direct-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-direct-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-direct-eval-err-contains-supercall.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-indirect-eval-contains-superproperty-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-indirect-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-indirect-eval-contains-superproperty-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-indirect-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-indirect-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-indirect-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-indirect-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-indirect-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "arrow-body-private-derived-cls-indirect-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-derived-cls-indirect-eval-err-contains-supercall.js",
      ),
    );
    it(
      "arrow-body-private-direct-eval-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-direct-eval-err-contains-arguments.js",
      ),
    );
    it(
      "arrow-body-private-direct-eval-err-contains-newtarget.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-direct-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "arrow-body-private-indirect-eval-err-contains-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-body-private-indirect-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "arrow-fnc-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/arrow-fnc-init-err-contains-arguments.js",
      ),
    );
    it(
      "arrow-fnc-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/arrow-fnc-init-err-contains-super.js"),
    );
    describe("async-gen-private-method", () => {
      it(
        "await-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/await-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "await-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/await-as-binding-identifier.js",
        ),
      );
      it(
        "await-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/await-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "await-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/await-as-identifier-reference.js",
        ),
      );
      it(
        "await-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/await-as-label-identifier-escaped.js",
        ),
      );
      it(
        "await-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/await-as-label-identifier.js",
        ),
      );
      it(
        "yield-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-as-binding-identifier.js",
        ),
      );
      it(
        "yield-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "yield-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-as-identifier-reference.js",
        ),
      );
      it(
        "yield-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-as-label-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-as-label-identifier.js",
        ),
      );
      it(
        "yield-identifier-spread-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-identifier-spread-strict.js",
        ),
      );
      it(
        "yield-identifier-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-identifier-strict.js",
        ),
      );
      it(
        "yield-promise-reject-next-catch.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-promise-reject-next-catch.js",
        ),
      );
      it(
        "yield-promise-reject-next-for-await-of-async-iterator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-promise-reject-next-for-await-of-async-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next-for-await-of-sync-iterator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-promise-reject-next-for-await-of-sync-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next-yield-star-async-iterator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-promise-reject-next-yield-star-async-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next-yield-star-sync-iterator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-promise-reject-next-yield-star-sync-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-promise-reject-next.js",
        ),
      );
      it(
        "yield-spread-arr-multiple.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-spread-arr-multiple.js",
        ),
      );
      it(
        "yield-spread-arr-single.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-spread-arr-single.js",
        ),
      );
      it(
        "yield-spread-obj.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-spread-obj.js",
        ),
      );
      it(
        "yield-star-async-next.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-async-next.js",
        ),
      );
      it(
        "yield-star-async-return.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-async-return.js",
        ),
      );
      it(
        "yield-star-async-throw.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-async-throw.js",
        ),
      );
      it(
        "yield-star-expr-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-expr-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-not-callable-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-not-callable-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-object-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-not-callable-object-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-not-callable-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-not-callable-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-null-sync-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-null-sync-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-returns-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-null-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-returns-null-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-returns-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-returns-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-returns-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-undefined-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-returns-undefined-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-undefined-sync-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-async-undefined-sync-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-sync-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-not-callable-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-not-callable-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-object-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-not-callable-object-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-not-callable-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-not-callable-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-returns-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-null-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-returns-null-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-returns-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-returns-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-returns-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-undefined-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-getiter-sync-returns-undefined-throw.js",
        ),
      );
      it(
        "yield-star-next-call-done-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-call-done-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-call-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-call-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-next-call-value-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-call-value-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-non-object-ignores-then.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-non-object-ignores-then.js",
        ),
      );
      it(
        "yield-star-next-not-callable-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-not-callable-boolean-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-null-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-not-callable-null-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-not-callable-number-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-object-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-not-callable-object-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-not-callable-string-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-not-callable-symbol-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-undefined-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-not-callable-undefined-throw.js",
        ),
      );
      it(
        "yield-star-next-then-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-boolean-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-non-callable-boolean-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-null-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-non-callable-null-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-number-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-non-callable-number-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-object-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-non-callable-object-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-string-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-non-callable-string-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-symbol-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-non-callable-symbol-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-undefined-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-non-callable-undefined-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-next-then-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-sync-next.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-sync-next.js",
        ),
      );
      it(
        "yield-star-sync-return.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-sync-return.js",
        ),
      );
      it(
        "yield-star-sync-throw.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method/yield-star-sync-throw.js",
        ),
      );
    });
    describe("async-gen-private-method-static", () => {
      it(
        "await-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/await-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "await-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/await-as-binding-identifier.js",
        ),
      );
      it(
        "await-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/await-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "await-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/await-as-identifier-reference.js",
        ),
      );
      it(
        "await-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/await-as-label-identifier-escaped.js",
        ),
      );
      it(
        "await-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/await-as-label-identifier.js",
        ),
      );
      it(
        "yield-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-as-binding-identifier.js",
        ),
      );
      it(
        "yield-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "yield-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-as-identifier-reference.js",
        ),
      );
      it(
        "yield-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-as-label-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-as-label-identifier.js",
        ),
      );
      it(
        "yield-identifier-spread-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-identifier-spread-strict.js",
        ),
      );
      it(
        "yield-identifier-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-identifier-strict.js",
        ),
      );
      it(
        "yield-promise-reject-next-catch.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-promise-reject-next-catch.js",
        ),
      );
      it(
        "yield-promise-reject-next-for-await-of-async-iterator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-promise-reject-next-for-await-of-async-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next-for-await-of-sync-iterator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-promise-reject-next-for-await-of-sync-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next-yield-star-async-iterator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-promise-reject-next-yield-star-async-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next-yield-star-sync-iterator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-promise-reject-next-yield-star-sync-iterator.js",
        ),
      );
      it(
        "yield-promise-reject-next.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-promise-reject-next.js",
        ),
      );
      it(
        "yield-spread-arr-multiple.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-spread-arr-multiple.js",
        ),
      );
      it(
        "yield-spread-arr-single.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-spread-arr-single.js",
        ),
      );
      it(
        "yield-spread-obj.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-spread-obj.js",
        ),
      );
      it(
        "yield-star-async-next.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-async-next.js",
        ),
      );
      it(
        "yield-star-async-return.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-async-return.js",
        ),
      );
      it(
        "yield-star-async-throw.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-async-throw.js",
        ),
      );
      it(
        "yield-star-expr-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-expr-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-not-callable-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-not-callable-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-object-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-not-callable-object-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-not-callable-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-not-callable-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-not-callable-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-null-sync-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-null-sync-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-returns-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-null-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-returns-null-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-returns-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-returns-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-returns-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-returns-undefined-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-returns-undefined-throw.js",
        ),
      );
      it(
        "yield-star-getiter-async-undefined-sync-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-async-undefined-sync-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-sync-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-get-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-not-callable-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-not-callable-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-object-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-not-callable-object-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-not-callable-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-not-callable-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-not-callable-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-returns-boolean-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-null-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-returns-null-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-returns-number-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-returns-string-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-returns-symbol-throw.js",
        ),
      );
      it(
        "yield-star-getiter-sync-returns-undefined-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-getiter-sync-returns-undefined-throw.js",
        ),
      );
      it(
        "yield-star-next-call-done-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-call-done-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-call-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-call-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-next-call-value-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-call-value-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-non-object-ignores-then.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-non-object-ignores-then.js",
        ),
      );
      it(
        "yield-star-next-not-callable-boolean-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-not-callable-boolean-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-null-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-not-callable-null-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-number-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-not-callable-number-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-object-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-not-callable-object-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-string-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-not-callable-string-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-symbol-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-not-callable-symbol-throw.js",
        ),
      );
      it(
        "yield-star-next-not-callable-undefined-throw.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-not-callable-undefined-throw.js",
        ),
      );
      it(
        "yield-star-next-then-get-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-get-abrupt.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-boolean-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-non-callable-boolean-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-null-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-non-callable-null-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-number-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-non-callable-number-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-object-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-non-callable-object-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-string-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-non-callable-string-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-symbol-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-non-callable-symbol-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-non-callable-undefined-fulfillpromise.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-non-callable-undefined-fulfillpromise.js",
        ),
      );
      it(
        "yield-star-next-then-returns-abrupt.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-next-then-returns-abrupt.js",
        ),
      );
      it(
        "yield-star-sync-next.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-sync-next.js",
        ),
      );
      it(
        "yield-star-sync-return.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-sync-return.js",
        ),
      );
      it(
        "yield-star-sync-throw.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-gen-private-method-static/yield-star-sync-throw.js",
        ),
      );
    });
    describe("async-private-method", () => {
      it(
        "await-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/await-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "await-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/await-as-binding-identifier.js",
        ),
      );
      it(
        "await-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/await-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "await-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/await-as-identifier-reference.js",
        ),
      );
      it(
        "await-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/await-as-label-identifier-escaped.js",
        ),
      );
      it(
        "await-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/await-as-label-identifier.js",
        ),
      );
      it(
        "returns-async-arrow-returns-arguments-from-parent-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/returns-async-arrow-returns-arguments-from-parent-function.js",
        ),
      );
      it(
        "returns-async-arrow-returns-newtarget.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/returns-async-arrow-returns-newtarget.js",
        ),
      );
      it(
        "returns-async-arrow.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/returns-async-arrow.js",
        ),
      );
      it(
        "returns-async-function-returns-arguments-from-own-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/returns-async-function-returns-arguments-from-own-function.js",
        ),
      );
      it(
        "returns-async-function-returns-newtarget.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/returns-async-function-returns-newtarget.js",
        ),
      );
      it(
        "returns-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method/returns-async-function.js",
        ),
      );
    });
    describe("async-private-method-static", () => {
      it(
        "await-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/await-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "await-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/await-as-binding-identifier.js",
        ),
      );
      it(
        "await-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/await-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "await-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/await-as-identifier-reference.js",
        ),
      );
      it(
        "await-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/await-as-label-identifier-escaped.js",
        ),
      );
      it(
        "await-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/await-as-label-identifier.js",
        ),
      );
      it(
        "returns-async-arrow-returns-arguments-from-parent-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/returns-async-arrow-returns-arguments-from-parent-function.js",
        ),
      );
      it(
        "returns-async-arrow-returns-newtarget.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/returns-async-arrow-returns-newtarget.js",
        ),
      );
      it(
        "returns-async-arrow.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/returns-async-arrow.js",
        ),
      );
      it(
        "returns-async-function-returns-arguments-from-own-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/returns-async-function-returns-arguments-from-own-function.js",
        ),
      );
      it(
        "returns-async-function-returns-newtarget.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/returns-async-function-returns-newtarget.js",
        ),
      );
      it(
        "returns-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/async-private-method-static/returns-async-function.js",
        ),
      );
    });
    it(
      "class-name-static-initializer-anonymous.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/class-name-static-initializer-anonymous.js",
      ),
    );
    it(
      "class-name-static-initializer-decl.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/class-name-static-initializer-decl.js",
      ),
    );
    it(
      "class-name-static-initializer-default-export.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/class-name-static-initializer-default-export.js",
      ),
    );
    it(
      "class-name-static-initializer-expr.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/class-name-static-initializer-expr.js",
      ),
    );
    it(
      "comp-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/comp-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "comp-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/comp-name-init-err-contains-super.js"),
    );
    it(
      "computed-name-toprimitive-symbol.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/computed-name-toprimitive-symbol.js"),
    );
    it(
      "computed-name-toprimitive.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/computed-name-toprimitive.js"),
    );
    it(
      "ctor-called-after-fields-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/ctor-called-after-fields-init.js"),
    );
    it(
      "derived-cls-direct-eval-contains-superproperty-1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-direct-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "derived-cls-direct-eval-contains-superproperty-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-direct-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "derived-cls-direct-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-direct-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "derived-cls-direct-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-direct-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "derived-cls-direct-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-direct-eval-err-contains-supercall.js",
      ),
    );
    it(
      "derived-cls-indirect-eval-contains-superproperty-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-indirect-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "derived-cls-indirect-eval-contains-superproperty-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-indirect-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "derived-cls-indirect-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-indirect-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "derived-cls-indirect-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-indirect-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "derived-cls-indirect-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/derived-cls-indirect-eval-err-contains-supercall.js",
      ),
    );
    it(
      "direct-eval-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/direct-eval-err-contains-arguments.js",
      ),
    );
    it(
      "direct-eval-err-contains-newtarget.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/direct-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "equality-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/equality-init-err-contains-arguments.js",
      ),
    );
    it(
      "equality-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/equality-init-err-contains-super.js"),
    );
    describe("evaluation-error", () => {
      it(
        "computed-name-referenceerror.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/evaluation-error/computed-name-referenceerror.js",
        ),
      );
      it(
        "computed-name-toprimitive-err.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/evaluation-error/computed-name-toprimitive-err.js",
        ),
      );
      it(
        "computed-name-toprimitive-returns-noncallable.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/evaluation-error/computed-name-toprimitive-returns-noncallable.js",
        ),
      );
      it(
        "computed-name-toprimitive-returns-nonobject.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/evaluation-error/computed-name-toprimitive-returns-nonobject.js",
        ),
      );
      it(
        "computed-name-tostring-err.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/evaluation-error/computed-name-tostring-err.js",
        ),
      );
      it(
        "computed-name-valueof-err.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/evaluation-error/computed-name-valueof-err.js",
        ),
      );
    });
    it(
      "field-declaration.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/field-declaration.js"),
    );
    it(
      "field-definition-accessor-no-line-terminator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/field-definition-accessor-no-line-terminator.js",
      ),
    );
    it(
      "fields-anonymous-function-length.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/fields-anonymous-function-length.js"),
    );
    it(
      "fields-asi-1.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/fields-asi-1.js"),
    );
    it(
      "fields-asi-2.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/fields-asi-2.js"),
    );
    it(
      "fields-asi-3.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/fields-asi-3.js"),
    );
    it(
      "fields-asi-4.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/fields-asi-4.js"),
    );
    it(
      "fields-asi-5.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/fields-asi-5.js"),
    );
    it(
      "fields-asi-same-line-1.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/fields-asi-same-line-1.js"),
    );
    it(
      "fields-asi-same-line-2.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/fields-asi-same-line-2.js"),
    );
    it(
      "fields-computed-name-static-propname-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-computed-name-static-propname-prototype.js",
      ),
    );
    it(
      "fields-duplicate-privatenames.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/fields-duplicate-privatenames.js"),
    );
    it(
      "fields-literal-name-propname-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-literal-name-propname-constructor.js",
      ),
    );
    it(
      "fields-literal-name-static-propname-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-literal-name-static-propname-constructor.js",
      ),
    );
    it(
      "fields-literal-name-static-propname-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-literal-name-static-propname-prototype.js",
      ),
    );
    it(
      "fields-multiple-definitions-static-private-methods-proxy.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-multiple-definitions-static-private-methods-proxy.js",
      ),
    );
    it(
      "fields-run-once-on-double-super.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/fields-run-once-on-double-super.js"),
    );
    it(
      "fields-string-name-propname-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-string-name-propname-constructor.js",
      ),
    );
    it(
      "fields-string-name-static-propname-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-string-name-static-propname-constructor.js",
      ),
    );
    it(
      "fields-string-name-static-propname-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/fields-string-name-static-propname-prototype.js",
      ),
    );
    describe("gen-private-method", () => {
      it(
        "yield-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-as-binding-identifier.js",
        ),
      );
      it(
        "yield-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "yield-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-as-identifier-reference.js",
        ),
      );
      it(
        "yield-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-as-label-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-as-label-identifier.js",
        ),
      );
      it(
        "yield-identifier-spread-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-identifier-spread-strict.js",
        ),
      );
      it(
        "yield-identifier-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-identifier-strict.js",
        ),
      );
      it(
        "yield-spread-arr-multiple.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-spread-arr-multiple.js",
        ),
      );
      it(
        "yield-spread-arr-single.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-spread-arr-single.js",
        ),
      );
      it(
        "yield-spread-obj.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method/yield-spread-obj.js",
        ),
      );
    });
    describe("gen-private-method-static", () => {
      it(
        "yield-as-binding-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-as-binding-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-binding-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-as-binding-identifier.js",
        ),
      );
      it(
        "yield-as-identifier-reference-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-as-identifier-reference-escaped.js",
        ),
      );
      it(
        "yield-as-identifier-reference.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-as-identifier-reference.js",
        ),
      );
      it(
        "yield-as-label-identifier-escaped.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-as-label-identifier-escaped.js",
        ),
      );
      it(
        "yield-as-label-identifier.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-as-label-identifier.js",
        ),
      );
      it(
        "yield-identifier-spread-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-identifier-spread-strict.js",
        ),
      );
      it(
        "yield-identifier-strict.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-identifier-strict.js",
        ),
      );
      it(
        "yield-spread-arr-multiple.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-spread-arr-multiple.js",
        ),
      );
      it(
        "yield-spread-arr-single.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-spread-arr-single.js",
        ),
      );
      it(
        "yield-spread-obj.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/gen-private-method-static/yield-spread-obj.js",
        ),
      );
    });
    it(
      "grammar-private-field-optional-chaining.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/grammar-private-field-optional-chaining.js",
      ),
    );
    it(
      "indirect-eval-contains-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/indirect-eval-contains-arguments.js"),
    );
    it(
      "indirect-eval-err-contains-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/indirect-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "init-err-evaluation.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/init-err-evaluation.js"),
    );
    it(
      "init-value-defined-after-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/init-value-defined-after-class.js"),
    );
    it(
      "init-value-incremental.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/init-value-incremental.js"),
    );
    it(
      "intercalated-static-non-static-computed-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/intercalated-static-non-static-computed-fields.js",
      ),
    );
    it(
      "literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "multiple-definitions-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-computed-names.js",
      ),
    );
    it(
      "multiple-definitions-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-computed-symbol-names.js",
      ),
    );
    it(
      "multiple-definitions-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "multiple-definitions-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-literal-names-asi.js",
      ),
    );
    it(
      "multiple-definitions-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-literal-names.js",
      ),
    );
    it(
      "multiple-definitions-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-private-field-usage.js",
      ),
    );
    it(
      "multiple-definitions-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-private-method-getter-usage.js",
      ),
    );
    it(
      "multiple-definitions-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-private-method-usage.js",
      ),
    );
    it(
      "multiple-definitions-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-private-names.js",
      ),
    );
    it(
      "multiple-definitions-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "multiple-definitions-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-field-identifier.js",
      ),
    );
    it(
      "multiple-definitions-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-private-getter-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-private-getter.js",
      ),
    );
    it(
      "multiple-definitions-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-private-method-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-private-method.js",
      ),
    );
    it(
      "multiple-definitions-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-private-setter-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-private-setter.js",
      ),
    );
    it(
      "multiple-definitions-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "multiple-definitions-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-privatename-identifier.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "multiple-definitions-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "multiple-definitions-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-static-private-fields.js",
      ),
    );
    it(
      "multiple-definitions-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-static-private-methods-with-fields.js",
      ),
    );
    it(
      "multiple-definitions-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-static-private-methods.js",
      ),
    );
    it(
      "multiple-definitions-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-definitions-string-literal-names.js",
      ),
    );
    it(
      "multiple-stacked-definitions-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-computed-names.js",
      ),
    );
    it(
      "multiple-stacked-definitions-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-computed-symbol-names.js",
      ),
    );
    it(
      "multiple-stacked-definitions-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "multiple-stacked-definitions-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-literal-names-asi.js",
      ),
    );
    it(
      "multiple-stacked-definitions-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-literal-names.js",
      ),
    );
    it(
      "multiple-stacked-definitions-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-private-field-usage.js",
      ),
    );
    it(
      "multiple-stacked-definitions-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-private-method-getter-usage.js",
      ),
    );
    it(
      "multiple-stacked-definitions-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-private-method-usage.js",
      ),
    );
    it(
      "multiple-stacked-definitions-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-private-names.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-field-identifier.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-private-getter-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-private-getter.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-private-method-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-private-method.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-private-setter-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-private-setter.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-privatename-identifier.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "multiple-stacked-definitions-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "multiple-stacked-definitions-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-static-private-fields.js",
      ),
    );
    it(
      "multiple-stacked-definitions-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-static-private-methods-with-fields.js",
      ),
    );
    it(
      "multiple-stacked-definitions-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-static-private-methods.js",
      ),
    );
    it(
      "multiple-stacked-definitions-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/multiple-stacked-definitions-string-literal-names.js",
      ),
    );
    it(
      "nested-arrow-fnc-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-arrow-fnc-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-arrow-fnc-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-arrow-fnc-init-err-contains-super.js",
      ),
    );
    it(
      "nested-comp-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-comp-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-comp-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-comp-name-init-err-contains-super.js",
      ),
    );
    it(
      "nested-derived-cls-direct-eval-contains-superproperty-1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-direct-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "nested-derived-cls-direct-eval-contains-superproperty-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-direct-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "nested-derived-cls-direct-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-direct-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "nested-derived-cls-direct-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-direct-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "nested-derived-cls-direct-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-direct-eval-err-contains-supercall.js",
      ),
    );
    it(
      "nested-derived-cls-indirect-eval-contains-superproperty-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-indirect-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "nested-derived-cls-indirect-eval-contains-superproperty-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-indirect-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "nested-derived-cls-indirect-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-indirect-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "nested-derived-cls-indirect-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-indirect-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "nested-derived-cls-indirect-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-derived-cls-indirect-eval-err-contains-supercall.js",
      ),
    );
    it(
      "nested-direct-eval-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-direct-eval-err-contains-arguments.js",
      ),
    );
    it(
      "nested-direct-eval-err-contains-newtarget.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-direct-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "nested-equality-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-equality-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-equality-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-equality-init-err-contains-super.js",
      ),
    );
    it(
      "nested-indirect-eval-contains-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-indirect-eval-contains-arguments.js",
      ),
    );
    it(
      "nested-indirect-eval-err-contains-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-indirect-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "nested-literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "nested-private-arrow-fnc-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-arrow-fnc-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-private-arrow-fnc-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-arrow-fnc-init-err-contains-super.js",
      ),
    );
    it(
      "nested-private-derived-cls-direct-eval-contains-superproperty-1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-direct-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "nested-private-derived-cls-direct-eval-contains-superproperty-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-direct-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "nested-private-derived-cls-direct-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-direct-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "nested-private-derived-cls-direct-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-direct-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "nested-private-derived-cls-direct-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-direct-eval-err-contains-supercall.js",
      ),
    );
    it(
      "nested-private-derived-cls-indirect-eval-contains-superproperty-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-indirect-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "nested-private-derived-cls-indirect-eval-contains-superproperty-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-indirect-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "nested-private-derived-cls-indirect-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-indirect-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "nested-private-derived-cls-indirect-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-indirect-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "nested-private-derived-cls-indirect-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-derived-cls-indirect-eval-err-contains-supercall.js",
      ),
    );
    it(
      "nested-private-direct-eval-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-direct-eval-err-contains-arguments.js",
      ),
    );
    it(
      "nested-private-direct-eval-err-contains-newtarget.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-direct-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "nested-private-indirect-eval-contains-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-indirect-eval-contains-arguments.js",
      ),
    );
    it(
      "nested-private-indirect-eval-err-contains-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-indirect-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "nested-private-literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-private-literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "nested-private-ternary-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-ternary-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-private-ternary-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-ternary-init-err-contains-super.js",
      ),
    );
    it(
      "nested-private-typeof-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-typeof-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-private-typeof-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-private-typeof-init-err-contains-super.js",
      ),
    );
    it(
      "nested-static-comp-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-comp-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-static-comp-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-comp-name-init-err-contains-super.js",
      ),
    );
    it(
      "nested-static-literal-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-literal-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-static-literal-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-literal-init-err-contains-super.js",
      ),
    );
    it(
      "nested-static-private-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-private-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-static-private-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-private-init-err-contains-super.js",
      ),
    );
    it(
      "nested-static-string-literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-string-literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-static-string-literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-static-string-literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "nested-string-literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-string-literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-string-literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-string-literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "nested-ternary-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-ternary-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-ternary-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-ternary-init-err-contains-super.js",
      ),
    );
    it(
      "nested-typeof-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-typeof-init-err-contains-arguments.js",
      ),
    );
    it(
      "nested-typeof-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/nested-typeof-init-err-contains-super.js",
      ),
    );
    it(
      "new-no-sc-line-method-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-computed-names.js",
      ),
    );
    it(
      "new-no-sc-line-method-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-computed-symbol-names.js",
      ),
    );
    it(
      "new-no-sc-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "new-no-sc-line-method-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-literal-names-asi.js",
      ),
    );
    it(
      "new-no-sc-line-method-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-literal-names.js",
      ),
    );
    it(
      "new-no-sc-line-method-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-private-field-usage.js",
      ),
    );
    it(
      "new-no-sc-line-method-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-private-method-getter-usage.js",
      ),
    );
    it(
      "new-no-sc-line-method-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-private-method-usage.js",
      ),
    );
    it(
      "new-no-sc-line-method-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-private-names.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-field-identifier.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-private-getter-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-private-getter.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-private-method-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-private-method.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-private-setter-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-private-setter.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-privatename-identifier.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "new-no-sc-line-method-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "new-no-sc-line-method-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-static-private-fields.js",
      ),
    );
    it(
      "new-no-sc-line-method-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-static-private-methods-with-fields.js",
      ),
    );
    it(
      "new-no-sc-line-method-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-static-private-methods.js",
      ),
    );
    it(
      "new-no-sc-line-method-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-no-sc-line-method-string-literal-names.js",
      ),
    );
    it(
      "new-sc-line-gen-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-gen-computed-names.js"),
    );
    it(
      "new-sc-line-gen-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-computed-symbol-names.js",
      ),
    );
    it(
      "new-sc-line-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "new-sc-line-gen-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-gen-literal-names-asi.js"),
    );
    it(
      "new-sc-line-gen-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-gen-literal-names.js"),
    );
    it(
      "new-sc-line-gen-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-private-field-usage.js",
      ),
    );
    it(
      "new-sc-line-gen-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-private-method-getter-usage.js",
      ),
    );
    it(
      "new-sc-line-gen-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-private-method-usage.js",
      ),
    );
    it(
      "new-sc-line-gen-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-gen-private-names.js"),
    );
    it(
      "new-sc-line-gen-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-field-identifier.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-private-getter-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-gen-rs-private-getter.js"),
    );
    it(
      "new-sc-line-gen-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-private-method-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-gen-rs-private-method.js"),
    );
    it(
      "new-sc-line-gen-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-private-setter-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-gen-rs-private-setter.js"),
    );
    it(
      "new-sc-line-gen-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "new-sc-line-gen-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-gen-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-static-private-fields.js",
      ),
    );
    it(
      "new-sc-line-gen-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-static-private-methods-with-fields.js",
      ),
    );
    it(
      "new-sc-line-gen-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-static-private-methods.js",
      ),
    );
    it(
      "new-sc-line-gen-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-gen-string-literal-names.js",
      ),
    );
    it(
      "new-sc-line-method-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-method-computed-names.js"),
    );
    it(
      "new-sc-line-method-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-computed-symbol-names.js",
      ),
    );
    it(
      "new-sc-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "new-sc-line-method-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-literal-names-asi.js",
      ),
    );
    it(
      "new-sc-line-method-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-method-literal-names.js"),
    );
    it(
      "new-sc-line-method-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-private-field-usage.js",
      ),
    );
    it(
      "new-sc-line-method-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-private-method-getter-usage.js",
      ),
    );
    it(
      "new-sc-line-method-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-private-method-usage.js",
      ),
    );
    it(
      "new-sc-line-method-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/new-sc-line-method-private-names.js"),
    );
    it(
      "new-sc-line-method-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "new-sc-line-method-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-field-identifier.js",
      ),
    );
    it(
      "new-sc-line-method-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-private-getter-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-private-getter.js",
      ),
    );
    it(
      "new-sc-line-method-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-private-method-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-private-method.js",
      ),
    );
    it(
      "new-sc-line-method-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-private-setter-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-private-setter.js",
      ),
    );
    it(
      "new-sc-line-method-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "new-sc-line-method-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "new-sc-line-method-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "new-sc-line-method-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-static-private-fields.js",
      ),
    );
    it(
      "new-sc-line-method-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-static-private-methods-with-fields.js",
      ),
    );
    it(
      "new-sc-line-method-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-static-private-methods.js",
      ),
    );
    it(
      "new-sc-line-method-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/new-sc-line-method-string-literal-names.js",
      ),
    );
    describe("private-accessor-name", () => {
      it(
        "inst-private-escape-sequence-ZWJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-escape-sequence-ZWJ.js",
        ),
      );
      it(
        "inst-private-escape-sequence-ZWNJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-escape-sequence-ZWNJ.js",
        ),
      );
      it(
        "inst-private-escape-sequence-u2118.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-escape-sequence-u2118.js",
        ),
      );
      it(
        "inst-private-escape-sequence-u6F.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-escape-sequence-u6F.js",
        ),
      );
      it(
        "inst-private-name-ZWJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-name-ZWJ.js",
        ),
      );
      it(
        "inst-private-name-ZWNJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-name-ZWNJ.js",
        ),
      );
      it(
        "inst-private-name-common.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-name-common.js",
        ),
      );
      it(
        "inst-private-name-dollar.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-name-dollar.js",
        ),
      );
      it(
        "inst-private-name-u2118.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-name-u2118.js",
        ),
      );
      it(
        "inst-private-name-underscore.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/inst-private-name-underscore.js",
        ),
      );
      it(
        "static-private-escape-sequence-ZWJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-escape-sequence-ZWJ.js",
        ),
      );
      it(
        "static-private-escape-sequence-ZWNJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-escape-sequence-ZWNJ.js",
        ),
      );
      it(
        "static-private-escape-sequence-u2118.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-escape-sequence-u2118.js",
        ),
      );
      it(
        "static-private-escape-sequence-u6F.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-escape-sequence-u6F.js",
        ),
      );
      it(
        "static-private-name-ZWJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-name-ZWJ.js",
        ),
      );
      it(
        "static-private-name-ZWNJ.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-name-ZWNJ.js",
        ),
      );
      it(
        "static-private-name-common.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-name-common.js",
        ),
      );
      it(
        "static-private-name-dollar.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-name-dollar.js",
        ),
      );
      it(
        "static-private-name-u2118.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-name-u2118.js",
        ),
      );
      it(
        "static-private-name-underscore.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-accessor-name/static-private-name-underscore.js",
        ),
      );
    });
    it(
      "private-arrow-fnc-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-arrow-fnc-init-err-contains-arguments.js",
      ),
    );
    it(
      "private-arrow-fnc-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-arrow-fnc-init-err-contains-super.js",
      ),
    );
    it(
      "private-async-generator-method-name.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-async-generator-method-name.js",
      ),
    );
    it(
      "private-async-method-name.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/private-async-method-name.js"),
    );
    it(
      "private-derived-cls-direct-eval-contains-superproperty-1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-direct-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "private-derived-cls-direct-eval-contains-superproperty-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-direct-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "private-derived-cls-direct-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-direct-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "private-derived-cls-direct-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-direct-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "private-derived-cls-direct-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-direct-eval-err-contains-supercall.js",
      ),
    );
    it(
      "private-derived-cls-indirect-eval-contains-superproperty-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-indirect-eval-contains-superproperty-1.js",
      ),
    );
    it(
      "private-derived-cls-indirect-eval-contains-superproperty-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-indirect-eval-contains-superproperty-2.js",
      ),
    );
    it(
      "private-derived-cls-indirect-eval-err-contains-supercall-1.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-indirect-eval-err-contains-supercall-1.js",
      ),
    );
    it(
      "private-derived-cls-indirect-eval-err-contains-supercall-2.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-indirect-eval-err-contains-supercall-2.js",
      ),
    );
    it(
      "private-derived-cls-indirect-eval-err-contains-supercall.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-derived-cls-indirect-eval-err-contains-supercall.js",
      ),
    );
    it(
      "private-direct-eval-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-direct-eval-err-contains-arguments.js",
      ),
    );
    it(
      "private-direct-eval-err-contains-newtarget.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-direct-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "private-field-access-on-inner-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-field-access-on-inner-arrow-function.js",
      ),
    );
    it(
      "private-field-access-on-inner-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-field-access-on-inner-function.js",
      ),
    );
    it(
      "private-field-after-optional-chain.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-field-after-optional-chain.js",
      ),
    );
    it(
      "private-field-as-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-field-as-arrow-function.js"),
    );
    it(
      "private-field-as-async-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-field-as-async-arrow-function.js",
      ),
    );
    it(
      "private-field-as-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-field-as-async-function.js"),
    );
    it(
      "private-field-as-function.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-field-as-function.js"),
    );
    it(
      "private-field-on-nested-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-field-on-nested-class.js"),
    );
    it(
      "private-fields-proxy-default-handler-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-fields-proxy-default-handler-throws.js",
      ),
    );
    it(
      "private-generator-method-name.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/private-generator-method-name.js"),
    );
    it(
      "private-getter-access-on-inner-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-getter-access-on-inner-arrow-function.js",
      ),
    );
    it(
      "private-getter-access-on-inner-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-getter-access-on-inner-function.js",
      ),
    );
    it(
      "private-getter-is-not-a-own-property.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-getter-is-not-a-own-property.js",
      ),
    );
    it(
      "private-getter-on-nested-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-getter-on-nested-class.js"),
    );
    it(
      "private-getter-shadowed-by-field-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-getter-shadowed-by-field-on-nested-class.js",
      ),
    );
    it(
      "private-getter-shadowed-by-getter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-getter-shadowed-by-getter-on-nested-class.js",
      ),
    );
    it(
      "private-getter-shadowed-by-method-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-getter-shadowed-by-method-on-nested-class.js",
      ),
    );
    it(
      "private-getter-shadowed-by-setter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-getter-shadowed-by-setter-on-nested-class.js",
      ),
    );
    it(
      "private-indirect-eval-contains-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-indirect-eval-contains-arguments.js",
      ),
    );
    it(
      "private-indirect-eval-err-contains-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-indirect-eval-err-contains-newtarget.js",
      ),
    );
    it(
      "private-literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "private-literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "private-method-access-on-inner-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-access-on-inner-arrow-function.js",
      ),
    );
    it(
      "private-method-access-on-inner-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-access-on-inner-function.js",
      ),
    );
    it(
      "private-method-comparison.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-method-comparison.js"),
    );
    it(
      "private-method-get-and-call.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-method-get-and-call.js"),
    );
    it(
      "private-method-is-not-a-own-property.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-is-not-a-own-property.js",
      ),
    );
    it(
      "private-method-length.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-method-length.js"),
    );
    it(
      "private-method-on-nested-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-method-on-nested-class.js"),
    );
    it(
      "private-method-referenced-from-static-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-referenced-from-static-method.js",
      ),
    );
    it(
      "private-method-shadowed-by-field-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-shadowed-by-field-on-nested-class.js",
      ),
    );
    it(
      "private-method-shadowed-by-getter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-shadowed-by-getter-on-nested-class.js",
      ),
    );
    it(
      "private-method-shadowed-by-setter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-shadowed-by-setter-on-nested-class.js",
      ),
    );
    it(
      "private-method-shadowed-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-method-shadowed-on-nested-class.js",
      ),
    );
    describe("private-methods", () => {
      it(
        "prod-private-async-generator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/private-methods/prod-private-async-generator.js",
        ),
      );
      it(
        "prod-private-async-method.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/private-methods/prod-private-async-method.js",
        ),
      );
      it(
        "prod-private-generator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/private-methods/prod-private-generator.js",
        ),
      );
      it(
        "prod-private-method-initialize-order.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/expressions/class/elements/private-methods/prod-private-method-initialize-order.js",
        ),
      );
      it(
        "prod-private-method.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "language/expressions/class/elements/private-methods/prod-private-method.js",
        ),
      );
    });
    it(
      "private-setter-access-on-inner-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-setter-access-on-inner-arrow-function.js",
      ),
    );
    it(
      "private-setter-access-on-inner-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-setter-access-on-inner-function.js",
      ),
    );
    it(
      "private-setter-is-not-a-own-property.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-setter-is-not-a-own-property.js",
      ),
    );
    it(
      "private-setter-on-nested-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-setter-on-nested-class.js"),
    );
    it(
      "private-setter-shadowed-by-field-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-setter-shadowed-by-field-on-nested-class.js",
      ),
    );
    it(
      "private-setter-shadowed-by-getter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-setter-shadowed-by-getter-on-nested-class.js",
      ),
    );
    it(
      "private-setter-shadowed-by-method-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-setter-shadowed-by-method-on-nested-class.js",
      ),
    );
    it(
      "private-setter-shadowed-by-setter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-setter-shadowed-by-setter-on-nested-class.js",
      ),
    );
    it(
      "private-static-async-generator-method-name.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-async-generator-method-name.js",
      ),
    );
    it(
      "private-static-async-method-name.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/private-static-async-method-name.js"),
    );
    it(
      "private-static-field-shadowed-by-field-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-field-shadowed-by-field-on-nested-class.js",
      ),
    );
    it(
      "private-static-field-shadowed-by-getter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-field-shadowed-by-getter-on-nested-class.js",
      ),
    );
    it(
      "private-static-field-shadowed-by-method-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-field-shadowed-by-method-on-nested-class.js",
      ),
    );
    it(
      "private-static-field-shadowed-by-setter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-field-shadowed-by-setter-on-nested-class.js",
      ),
    );
    it(
      "private-static-field-usage-inside-nested-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-field-usage-inside-nested-class.js",
      ),
    );
    it(
      "private-static-generator-method-name.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-generator-method-name.js",
      ),
    );
    it(
      "private-static-method-length.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/private-static-method-length.js"),
    );
    it(
      "private-static-method-name.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/private-static-method-name.js"),
    );
    it(
      "private-static-method-shadowed-by-field-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-method-shadowed-by-field-on-nested-class.js",
      ),
    );
    it(
      "private-static-method-shadowed-by-getter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-method-shadowed-by-getter-on-nested-class.js",
      ),
    );
    it(
      "private-static-method-shadowed-by-method-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-method-shadowed-by-method-on-nested-class.js",
      ),
    );
    it(
      "private-static-method-shadowed-by-setter-on-nested-class.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-method-shadowed-by-setter-on-nested-class.js",
      ),
    );
    it(
      "private-static-method-usage-inside-nested-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/private-static-method-usage-inside-nested-class.js",
      ),
    );
    it(
      "private-ternary-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-ternary-init-err-contains-arguments.js",
      ),
    );
    it(
      "private-ternary-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-ternary-init-err-contains-super.js",
      ),
    );
    it(
      "private-typeof-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-typeof-init-err-contains-arguments.js",
      ),
    );
    it(
      "private-typeof-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/private-typeof-init-err-contains-super.js",
      ),
    );
    it(
      "prod-private-getter-before-super-return-in-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/prod-private-getter-before-super-return-in-constructor.js",
      ),
    );
    it(
      "prod-private-getter-before-super-return-in-field-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/prod-private-getter-before-super-return-in-field-initializer.js",
      ),
    );
    it(
      "prod-private-method-before-super-return-in-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/prod-private-method-before-super-return-in-constructor.js",
      ),
    );
    it(
      "prod-private-method-before-super-return-in-field-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/prod-private-method-before-super-return-in-field-initializer.js",
      ),
    );
    it(
      "prod-private-setter-before-super-return-in-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/prod-private-setter-before-super-return-in-constructor.js",
      ),
    );
    it(
      "prod-private-setter-before-super-return-in-field-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/prod-private-setter-before-super-return-in-field-initializer.js",
      ),
    );
    it(
      "redeclaration-symbol.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/redeclaration-symbol.js"),
    );
    it(
      "redeclaration.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/redeclaration.js"),
    );
    it(
      "regular-definitions-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-computed-names.js",
      ),
    );
    it(
      "regular-definitions-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-computed-symbol-names.js",
      ),
    );
    it(
      "regular-definitions-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "regular-definitions-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-literal-names-asi.js",
      ),
    );
    it(
      "regular-definitions-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/regular-definitions-literal-names.js"),
    );
    it(
      "regular-definitions-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-private-field-usage.js",
      ),
    );
    it(
      "regular-definitions-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-private-method-getter-usage.js",
      ),
    );
    it(
      "regular-definitions-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-private-method-usage.js",
      ),
    );
    it(
      "regular-definitions-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/regular-definitions-private-names.js"),
    );
    it(
      "regular-definitions-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "regular-definitions-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-field-identifier.js",
      ),
    );
    it(
      "regular-definitions-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-private-getter-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-private-getter.js",
      ),
    );
    it(
      "regular-definitions-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-private-method-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-private-method.js",
      ),
    );
    it(
      "regular-definitions-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-private-setter-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-private-setter.js",
      ),
    );
    it(
      "regular-definitions-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "regular-definitions-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-privatename-identifier.js",
      ),
    );
    it(
      "regular-definitions-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "regular-definitions-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "regular-definitions-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "regular-definitions-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "regular-definitions-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "regular-definitions-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "regular-definitions-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "regular-definitions-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "regular-definitions-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "regular-definitions-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "regular-definitions-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-static-private-fields.js",
      ),
    );
    it(
      "regular-definitions-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-static-private-methods-with-fields.js",
      ),
    );
    it(
      "regular-definitions-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-static-private-methods.js",
      ),
    );
    it(
      "regular-definitions-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/regular-definitions-string-literal-names.js",
      ),
    );
    it(
      "same-line-async-gen-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-computed-names.js",
      ),
    );
    it(
      "same-line-async-gen-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-computed-symbol-names.js",
      ),
    );
    it(
      "same-line-async-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "same-line-async-gen-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-literal-names-asi.js",
      ),
    );
    it(
      "same-line-async-gen-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-async-gen-literal-names.js"),
    );
    it(
      "same-line-async-gen-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-private-field-usage.js",
      ),
    );
    it(
      "same-line-async-gen-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-private-method-getter-usage.js",
      ),
    );
    it(
      "same-line-async-gen-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-private-method-usage.js",
      ),
    );
    it(
      "same-line-async-gen-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-async-gen-private-names.js"),
    );
    it(
      "same-line-async-gen-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "same-line-async-gen-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-field-identifier.js",
      ),
    );
    it(
      "same-line-async-gen-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-private-getter-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-private-getter.js",
      ),
    );
    it(
      "same-line-async-gen-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-private-method-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-private-method.js",
      ),
    );
    it(
      "same-line-async-gen-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-private-setter-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-private-setter.js",
      ),
    );
    it(
      "same-line-async-gen-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-async-gen-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-async-gen-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-gen-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-static-private-fields.js",
      ),
    );
    it(
      "same-line-async-gen-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-static-private-methods-with-fields.js",
      ),
    );
    it(
      "same-line-async-gen-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-static-private-methods.js",
      ),
    );
    it(
      "same-line-async-gen-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-gen-string-literal-names.js",
      ),
    );
    it(
      "same-line-async-method-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-computed-names.js",
      ),
    );
    it(
      "same-line-async-method-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-computed-symbol-names.js",
      ),
    );
    it(
      "same-line-async-method-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "same-line-async-method-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-literal-names-asi.js",
      ),
    );
    it(
      "same-line-async-method-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-literal-names.js",
      ),
    );
    it(
      "same-line-async-method-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-private-field-usage.js",
      ),
    );
    it(
      "same-line-async-method-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-private-method-getter-usage.js",
      ),
    );
    it(
      "same-line-async-method-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-private-method-usage.js",
      ),
    );
    it(
      "same-line-async-method-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-private-names.js",
      ),
    );
    it(
      "same-line-async-method-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "same-line-async-method-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-field-identifier.js",
      ),
    );
    it(
      "same-line-async-method-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-private-getter-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-private-getter.js",
      ),
    );
    it(
      "same-line-async-method-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-private-method-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-private-method.js",
      ),
    );
    it(
      "same-line-async-method-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-private-setter-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-private-setter.js",
      ),
    );
    it(
      "same-line-async-method-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-async-method-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-async-method-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "same-line-async-method-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-static-private-fields.js",
      ),
    );
    it(
      "same-line-async-method-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-static-private-methods-with-fields.js",
      ),
    );
    it(
      "same-line-async-method-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-static-private-methods.js",
      ),
    );
    it(
      "same-line-async-method-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-async-method-string-literal-names.js",
      ),
    );
    it(
      "same-line-gen-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-computed-names.js"),
    );
    it(
      "same-line-gen-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-computed-symbol-names.js",
      ),
    );
    it(
      "same-line-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "same-line-gen-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-literal-names-asi.js"),
    );
    it(
      "same-line-gen-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-literal-names.js"),
    );
    it(
      "same-line-gen-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-private-field-usage.js"),
    );
    it(
      "same-line-gen-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-private-method-getter-usage.js",
      ),
    );
    it(
      "same-line-gen-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-private-method-usage.js",
      ),
    );
    it(
      "same-line-gen-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-private-names.js"),
    );
    it(
      "same-line-gen-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "same-line-gen-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-rs-field-identifier.js"),
    );
    it(
      "same-line-gen-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-private-getter-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-rs-private-getter.js"),
    );
    it(
      "same-line-gen-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-private-method-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-rs-private-method.js"),
    );
    it(
      "same-line-gen-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-private-setter-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-gen-rs-private-setter.js"),
    );
    it(
      "same-line-gen-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-gen-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-privatename-identifier.js",
      ),
    );
    it(
      "same-line-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-gen-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-gen-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-gen-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-gen-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "same-line-gen-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "same-line-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "same-line-gen-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-gen-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-gen-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "same-line-gen-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-static-private-fields.js",
      ),
    );
    it(
      "same-line-gen-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-static-private-methods-with-fields.js",
      ),
    );
    it(
      "same-line-gen-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-static-private-methods.js",
      ),
    );
    it(
      "same-line-gen-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-gen-string-literal-names.js",
      ),
    );
    it(
      "same-line-method-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-method-computed-names.js"),
    );
    it(
      "same-line-method-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-computed-symbol-names.js",
      ),
    );
    it(
      "same-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "same-line-method-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-literal-names-asi.js",
      ),
    );
    it(
      "same-line-method-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-method-literal-names.js"),
    );
    it(
      "same-line-method-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-private-field-usage.js",
      ),
    );
    it(
      "same-line-method-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-private-method-getter-usage.js",
      ),
    );
    it(
      "same-line-method-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-private-method-usage.js",
      ),
    );
    it(
      "same-line-method-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/same-line-method-private-names.js"),
    );
    it(
      "same-line-method-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "same-line-method-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-field-identifier.js",
      ),
    );
    it(
      "same-line-method-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-private-getter-alt.js",
      ),
    );
    it(
      "same-line-method-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-private-getter.js",
      ),
    );
    it(
      "same-line-method-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-private-method-alt.js",
      ),
    );
    it(
      "same-line-method-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-private-method.js",
      ),
    );
    it(
      "same-line-method-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-private-setter-alt.js",
      ),
    );
    it(
      "same-line-method-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-private-setter.js",
      ),
    );
    it(
      "same-line-method-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-method-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-method-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-method-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-privatename-identifier.js",
      ),
    );
    it(
      "same-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-method-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-method-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-method-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-method-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-method-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-method-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "same-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "same-line-method-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "same-line-method-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "same-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "same-line-method-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "same-line-method-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "same-line-method-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "same-line-method-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-static-private-fields.js",
      ),
    );
    it(
      "same-line-method-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-static-private-methods-with-fields.js",
      ),
    );
    it(
      "same-line-method-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-static-private-methods.js",
      ),
    );
    it(
      "same-line-method-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/same-line-method-string-literal-names.js",
      ),
    );
    it(
      "static-as-valid-instance-field-assigned.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-as-valid-instance-field-assigned.js",
      ),
    );
    it(
      "static-as-valid-instance-field.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/static-as-valid-instance-field.js"),
    );
    it(
      "static-as-valid-static-field-assigned.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-as-valid-static-field-assigned.js",
      ),
    );
    it(
      "static-as-valid-static-field.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/static-as-valid-static-field.js"),
    );
    it(
      "static-comp-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-comp-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "static-comp-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-comp-name-init-err-contains-super.js",
      ),
    );
    it(
      "static-field-anonymous-function-length.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-field-anonymous-function-length.js",
      ),
    );
    it(
      "static-field-anonymous-function-name.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-field-anonymous-function-name.js",
      ),
    );
    it(
      "static-field-declaration.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/static-field-declaration.js"),
    );
    it(
      "static-field-init-this-inside-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-field-init-this-inside-arrow-function.js",
      ),
    );
    it(
      "static-field-init-with-this.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/static-field-init-with-this.js"),
    );
    it(
      "static-field-redeclaration.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/static-field-redeclaration.js"),
    );
    it(
      "static-literal-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-literal-init-err-contains-arguments.js",
      ),
    );
    it(
      "static-literal-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-literal-init-err-contains-super.js",
      ),
    );
    it(
      "static-private-fields-proxy-default-handler-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-fields-proxy-default-handler-throws.js",
      ),
    );
    it(
      "static-private-getter-access-on-inner-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-getter-access-on-inner-arrow-function.js",
      ),
    );
    it(
      "static-private-getter-access-on-inner-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-getter-access-on-inner-class.js",
      ),
    );
    it(
      "static-private-getter-access-on-inner-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-getter-access-on-inner-function.js",
      ),
    );
    it(
      "static-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/static-private-getter.js"),
    );
    it(
      "static-private-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-init-err-contains-arguments.js",
      ),
    );
    it(
      "static-private-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-init-err-contains-super.js",
      ),
    );
    it(
      "static-private-method-access-on-inner-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-method-access-on-inner-arrow-function.js",
      ),
    );
    it(
      "static-private-method-access-on-inner-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-method-access-on-inner-function.js",
      ),
    );
    it(
      "static-private-method-and-instance-method-brand-check.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-method-and-instance-method-brand-check.js",
      ),
    );
    it(
      "static-private-method-referenced-from-instance-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-method-referenced-from-instance-method.js",
      ),
    );
    it(
      "static-private-method-subclass-receiver.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-method-subclass-receiver.js",
      ),
    );
    it(
      "static-private-methods-proxy-default-handler-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-methods-proxy-default-handler-throws.js",
      ),
    );
    it(
      "static-private-setter-access-on-inner-arrow-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-setter-access-on-inner-arrow-function.js",
      ),
    );
    it(
      "static-private-setter-access-on-inner-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-setter-access-on-inner-class.js",
      ),
    );
    it(
      "static-private-setter-access-on-inner-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/static-private-setter-access-on-inner-function.js",
      ),
    );
    it(
      "static-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/static-private-setter.js"),
    );
    it(
      "static-string-literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-string-literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "static-string-literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/static-string-literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "string-literal-name-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/string-literal-name-init-err-contains-arguments.js",
      ),
    );
    it(
      "string-literal-name-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/string-literal-name-init-err-contains-super.js",
      ),
    );
    it(
      "super-access-from-arrow-func-on-field.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/super-access-from-arrow-func-on-field.js",
      ),
    );
    describe("syntax", () => {
      describe("early-errors", () => {
        it(
          "class-heritage-array-literal-arrow-heritage.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/class-heritage-array-literal-arrow-heritage.js",
          ),
        );
        it(
          "class-heritage-array-literal-async-arrow-heritage.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/class-heritage-array-literal-async-arrow-heritage.js",
          ),
        );
        describe("delete", () => {
          it(
            "field-delete-covered-err-delete-call-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-call-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-call-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-private-method-async-gen.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-call-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-private-method-async.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-call-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-private-method-gen.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-call-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-private-method.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-call-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-private-no-reference.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-call-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-call-expression-privatename.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-private-method-async-gen.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-private-method-async.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-private-method-gen.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-private-method.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-private-no-reference.js",
            ),
          );
          it(
            "field-delete-covered-err-delete-member-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-covered-err-delete-member-expression-privatename.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-private-method-async-gen.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-private-method-async.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-private-method-gen.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-private-method.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-private-no-reference.js",
            ),
          );
          it(
            "field-delete-err-delete-call-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-call-expression-privatename.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-private-method-async-gen.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-private-method-async.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-private-method-gen.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-private-method.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-private-no-reference.js",
            ),
          );
          it(
            "field-delete-err-delete-member-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-err-delete-member-expression-privatename.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-private-method-async-gen.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-private-method-async.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-private-method-gen.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-private-method.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-private-no-reference.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-call-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-call-expression-privatename.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-private-method-async-gen.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-private-method-async.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-private-method-gen.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-private-method.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-private-no-reference.js",
            ),
          );
          it(
            "field-delete-twice-covered-err-delete-member-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/field-delete-twice-covered-err-delete-member-expression-privatename.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-private-method-async-gen.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-private-method-async.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-private-method-gen.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-private-method.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-private-no-reference.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-call-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-call-expression-privatename.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-private-method-async-gen.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-private-method-async.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-private-method-gen.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-private-method.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-private-no-reference.js",
            ),
          );
          it(
            "method-delete-covered-err-delete-member-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-covered-err-delete-member-expression-privatename.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-private-method-async-gen.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-private-method-async.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-private-method-gen.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-private-method.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-private-no-reference.js",
            ),
          );
          it(
            "method-delete-err-delete-call-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-call-expression-privatename.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-private-method-async-gen.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-private-method-async.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-private-method-gen.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-private-method.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-private-no-reference.js",
            ),
          );
          it(
            "method-delete-err-delete-member-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-err-delete-member-expression-privatename.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-private-method-async-gen.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-private-method-async.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-private-method-gen.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-private-method.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-private-no-reference.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-call-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-call-expression-privatename.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-private-method-accessor-get.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-private-method-accessor-get.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-private-method-accessor-set.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-private-method-accessor-set.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-private-method-async-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-private-method-async-gen.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-private-method-async.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-private-method-async.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-private-method-gen.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-private-method-gen.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-private-method.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-private-method.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-private-no-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-private-no-reference.js",
            ),
          );
          it(
            "method-delete-twice-covered-err-delete-member-expression-privatename.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/delete/method-delete-twice-covered-err-delete-member-expression-privatename.js",
            ),
          );
        });
        it(
          "grammar-class-body-ctor-duplicate.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-class-body-ctor-duplicate.js",
          ),
        );
        it(
          "grammar-ctor-super-no-heritage.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-ctor-super-no-heritage.js",
          ),
        );
        it(
          "grammar-field-identifier-invalid-ues-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-field-identifier-invalid-ues-error.js",
          ),
        );
        it(
          "grammar-field-identifier-invalid-zwj-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-field-identifier-invalid-zwj-error.js",
          ),
        );
        it(
          "grammar-field-identifier-invalid-zwnj-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-field-identifier-invalid-zwnj-error.js",
          ),
        );
        it(
          "grammar-fields-same-line-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-fields-same-line-error.js",
          ),
        );
        it(
          "grammar-private-environment-on-class-heritage-array-literal.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-environment-on-class-heritage-array-literal.js",
          ),
        );
        it(
          "grammar-private-environment-on-class-heritage-chained-usage.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-environment-on-class-heritage-chained-usage.js",
          ),
        );
        it(
          "grammar-private-environment-on-class-heritage-function-expression.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-environment-on-class-heritage-function-expression.js",
          ),
        );
        it(
          "grammar-private-environment-on-class-heritage-obj-literal.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-environment-on-class-heritage-obj-literal.js",
          ),
        );
        it(
          "grammar-private-environment-on-class-heritage-recursive.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-environment-on-class-heritage-recursive.js",
          ),
        );
        it(
          "grammar-private-environment-on-class-heritage.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-environment-on-class-heritage.js",
          ),
        );
        it(
          "grammar-private-field-on-object-destructuring.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-field-on-object-destructuring.js",
          ),
        );
        it(
          "grammar-private-field-super-access.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-private-field-super-access.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-async-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-async-gen.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-async.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-async.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-gen.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-get-field.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-get-field.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-get-get.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-get-get.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-meth-field.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-meth-field.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-meth-get.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-meth-get.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-meth-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-meth-meth.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-meth-set.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-meth-set.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-meth-staticfield.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-meth-staticfield.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-meth-staticmeth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-meth-staticmeth.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-set-field.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-set-field.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-set-set.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatemeth-duplicate-set-set.js",
          ),
        );
        it(
          "grammar-privatename-constructor.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-constructor.js",
          ),
        );
        it(
          "grammar-privatename-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-error.js",
          ),
        );
        it(
          "grammar-privatename-identifier-invalid-ues.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-identifier-invalid-ues.js",
          ),
        );
        it(
          "grammar-privatename-identifier-invalid-zwj-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-identifier-invalid-zwj-error.js",
          ),
        );
        it(
          "grammar-privatename-identifier-invalid-zwnj-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-identifier-invalid-zwnj-error.js",
          ),
        );
        it(
          "grammar-privatename-in-computed-property-missing.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-in-computed-property-missing.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-accessor-get-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-accessor-get-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-accessor-set-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-accessor-set-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-async-gen-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-async-gen-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-async-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-async-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-call-expr.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-call-expr.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-field-init.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-field-init.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-field.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-field.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-gen-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-gen-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-member-expr.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-member-expr.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-accessor-get-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-accessor-get-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-accessor-set-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-accessor-set-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-async-gen-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-async-gen-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-async-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-async-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-field-init.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-field-init.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-field.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-field.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-gen-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-gen-meth.js",
          ),
        );
        it(
          "grammar-privatename-whitespace-error-static-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatename-whitespace-error-static-meth.js",
          ),
        );
        it(
          "grammar-privatenames-same-line-error.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-privatenames-same-line-error.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-async-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-async-gen.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-async.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-async.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-gen.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-get.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-get.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-method.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-method.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-private-async-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-private-async-gen.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-private-async.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-private-async.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-private-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-private-gen.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-private-method.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-private-method.js",
          ),
        );
        it(
          "grammar-special-meth-contains-super-set.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-contains-super-set.js",
          ),
        );
        it(
          "grammar-special-meth-ctor-async-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-ctor-async-gen.js",
          ),
        );
        it(
          "grammar-special-meth-ctor-async-meth.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-ctor-async-meth.js",
          ),
        );
        it(
          "grammar-special-meth-ctor-gen.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-ctor-gen.js",
          ),
        );
        it(
          "grammar-special-meth-ctor-get.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-ctor-get.js",
          ),
        );
        it(
          "grammar-special-meth-ctor-set.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-special-meth-ctor-set.js",
          ),
        );
        it(
          "grammar-static-async-gen-meth-prototype.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-async-gen-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-async-gen-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-async-gen-meth-super.js",
          ),
        );
        it(
          "grammar-static-async-meth-prototype.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-async-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-async-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-async-meth-super.js",
          ),
        );
        it(
          "grammar-static-gen-meth-prototype.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-gen-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-gen-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-gen-meth-super.js",
          ),
        );
        it(
          "grammar-static-get-meth-prototype.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-get-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-get-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-get-meth-super.js",
          ),
        );
        it(
          "grammar-static-meth-prototype.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-meth-super.js",
          ),
        );
        it(
          "grammar-static-private-async-gen-meth-constructor.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-async-gen-meth-constructor.js",
          ),
        );
        it(
          "grammar-static-private-async-gen-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-async-gen-meth-super.js",
          ),
        );
        it(
          "grammar-static-private-async-meth-constructor.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-async-meth-constructor.js",
          ),
        );
        it(
          "grammar-static-private-async-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-async-meth-super.js",
          ),
        );
        it(
          "grammar-static-private-gen-meth-constructor.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-gen-meth-constructor.js",
          ),
        );
        it(
          "grammar-static-private-gen-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-gen-meth-super.js",
          ),
        );
        it(
          "grammar-static-private-meth-constructor.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-meth-constructor.js",
          ),
        );
        it(
          "grammar-static-private-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-private-meth-super.js",
          ),
        );
        it(
          "grammar-static-privatename-constructor.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-privatename-constructor.js",
          ),
        );
        it(
          "grammar-static-set-meth-prototype.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-set-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-set-meth-super.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/grammar-static-set-meth-super.js",
          ),
        );
        describe("invalid-names", () => {
          it(
            "field-init-call-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-call-expression-bad-reference.js",
            ),
          );
          it(
            "field-init-call-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-call-expression-this.js",
            ),
          );
          it(
            "field-init-fn-call-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-fn-call-expression-bad-reference.js",
            ),
          );
          it(
            "field-init-fn-call-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-fn-call-expression-this.js",
            ),
          );
          it(
            "field-init-fn-member-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-fn-member-expression-bad-reference.js",
            ),
          );
          it(
            "field-init-fn-member-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-fn-member-expression-this.js",
            ),
          );
          it(
            "field-init-heritage-call-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-heritage-call-expression-bad-reference.js",
            ),
          );
          it(
            "field-init-heritage-call-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-heritage-call-expression-this.js",
            ),
          );
          it(
            "field-init-heritage-member-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-heritage-member-expression-bad-reference.js",
            ),
          );
          it(
            "field-init-heritage-member-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-heritage-member-expression-this.js",
            ),
          );
          it(
            "field-init-member-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-member-expression-bad-reference.js",
            ),
          );
          it(
            "field-init-member-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/field-init-member-expression-this.js",
            ),
          );
          it(
            "method-call-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-call-expression-bad-reference.js",
            ),
          );
          it(
            "method-call-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-call-expression-this.js",
            ),
          );
          it(
            "method-fn-call-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-fn-call-expression-bad-reference.js",
            ),
          );
          it(
            "method-fn-call-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-fn-call-expression-this.js",
            ),
          );
          it(
            "method-fn-member-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-fn-member-expression-bad-reference.js",
            ),
          );
          it(
            "method-fn-member-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-fn-member-expression-this.js",
            ),
          );
          it(
            "method-heritage-call-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-heritage-call-expression-bad-reference.js",
            ),
          );
          it(
            "method-heritage-call-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-heritage-call-expression-this.js",
            ),
          );
          it(
            "method-heritage-member-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-heritage-member-expression-bad-reference.js",
            ),
          );
          it(
            "method-heritage-member-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-heritage-member-expression-this.js",
            ),
          );
          it(
            "method-member-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-member-expression-bad-reference.js",
            ),
          );
          it(
            "method-member-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-member-expression-this.js",
            ),
          );
          it(
            "method-outter-call-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-outter-call-expression-bad-reference.js",
            ),
          );
          it(
            "method-outter-call-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-outter-call-expression-this.js",
            ),
          );
          it(
            "method-outter-member-expression-bad-reference.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-outter-member-expression-bad-reference.js",
            ),
          );
          it(
            "method-outter-member-expression-this.js",
            { tags: ["known-failing"] },
            createTestHandler(
              "language/expressions/class/elements/syntax/early-errors/invalid-names/method-outter-member-expression-this.js",
            ),
          );
        });
        it(
          "private-async-generator-cannot-escape-token.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/private-async-generator-cannot-escape-token.js",
          ),
        );
        it(
          "private-async-method-cannot-escape-token.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/private-async-method-cannot-escape-token.js",
          ),
        );
        it(
          "private-call-exp-cannot-escape-token.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/private-call-exp-cannot-escape-token.js",
          ),
        );
        it(
          "private-field-cannot-escape-token.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/private-field-cannot-escape-token.js",
          ),
        );
        it(
          "private-generator-cannot-escape-token.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/private-generator-cannot-escape-token.js",
          ),
        );
        it(
          "private-member-exp-cannot-escape-token.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/private-member-exp-cannot-escape-token.js",
          ),
        );
        it(
          "private-method-cannot-escape-token.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/private-method-cannot-escape-token.js",
          ),
        );
        it(
          "super-private-access-invalid.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/early-errors/super-private-access-invalid.js",
          ),
        );
      });
      describe("valid", () => {
        it(
          "grammar-class-body-ctor-no-heritage.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-class-body-ctor-no-heritage.js",
          ),
        );
        it(
          "grammar-field-accessor.js",
          { tags: ["known-failing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-field-accessor.js",
          ),
        );
        it(
          "grammar-field-classelementname-initializer-alt.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-field-classelementname-initializer-alt.js",
          ),
        );
        it(
          "grammar-field-classelementname-initializer.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-field-classelementname-initializer.js",
          ),
        );
        it(
          "grammar-field-identifier-alt.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-field-identifier-alt.js",
          ),
        );
        it(
          "grammar-field-identifier.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-field-identifier.js",
          ),
        );
        it(
          "grammar-fields-multi-line.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-fields-multi-line.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-get-set.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-privatemeth-duplicate-get-set.js",
          ),
        );
        it(
          "grammar-privatemeth-duplicate-meth-nestedclassmeth.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-privatemeth-duplicate-meth-nestedclassmeth.js",
          ),
        );
        it(
          "grammar-privatename-classelementname-initializer-alt.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-privatename-classelementname-initializer-alt.js",
          ),
        );
        it(
          "grammar-privatename-classelementname-initializer.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-privatename-classelementname-initializer.js",
          ),
        );
        it(
          "grammar-privatename-identifier.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-privatename-identifier.js",
          ),
        );
        it(
          "grammar-privatename-no-initializer-with-method.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-privatename-no-initializer-with-method.js",
          ),
        );
        it(
          "grammar-privatenames-multi-line.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-privatenames-multi-line.js",
          ),
        );
        it(
          "grammar-special-prototype-accessor-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-special-prototype-accessor-meth-valid.js",
          ),
        );
        it(
          "grammar-special-prototype-async-gen-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-special-prototype-async-gen-meth-valid.js",
          ),
        );
        it(
          "grammar-special-prototype-async-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-special-prototype-async-meth-valid.js",
          ),
        );
        it(
          "grammar-special-prototype-gen-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-special-prototype-gen-meth-valid.js",
          ),
        );
        it(
          "grammar-special-prototype-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-special-prototype-meth-valid.js",
          ),
        );
        it(
          "grammar-static-ctor-accessor-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-ctor-accessor-meth-valid.js",
          ),
        );
        it(
          "grammar-static-ctor-async-gen-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-ctor-async-gen-meth-valid.js",
          ),
        );
        it(
          "grammar-static-ctor-async-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-ctor-async-meth-valid.js",
          ),
        );
        it(
          "grammar-static-ctor-gen-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-ctor-gen-meth-valid.js",
          ),
        );
        it(
          "grammar-static-ctor-meth-valid.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-ctor-meth-valid.js",
          ),
        );
        it(
          "grammar-static-private-async-gen-meth-prototype.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-private-async-gen-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-private-async-meth-prototype.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-private-async-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-private-gen-meth-prototype.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-private-gen-meth-prototype.js",
          ),
        );
        it(
          "grammar-static-private-meth-prototype.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/elements/syntax/valid/grammar-static-private-meth-prototype.js",
          ),
        );
      });
    });
    it(
      "ternary-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/ternary-init-err-contains-arguments.js",
      ),
    );
    it(
      "ternary-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/ternary-init-err-contains-super.js"),
    );
    it(
      "typeof-init-err-contains-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/elements/typeof-init-err-contains-arguments.js",
      ),
    );
    it(
      "typeof-init-err-contains-super.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/elements/typeof-init-err-contains-super.js"),
    );
    it(
      "wrapped-in-sc-computed-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-computed-names.js"),
    );
    it(
      "wrapped-in-sc-computed-symbol-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-computed-symbol-names.js",
      ),
    );
    it(
      "wrapped-in-sc-grammar-privatename-identifier-semantics-stringvalue.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-grammar-privatename-identifier-semantics-stringvalue.js",
      ),
    );
    it(
      "wrapped-in-sc-literal-names-asi.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-literal-names-asi.js"),
    );
    it(
      "wrapped-in-sc-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-literal-names.js"),
    );
    it(
      "wrapped-in-sc-private-field-usage.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-private-field-usage.js"),
    );
    it(
      "wrapped-in-sc-private-method-getter-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-private-method-getter-usage.js",
      ),
    );
    it(
      "wrapped-in-sc-private-method-usage.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-private-method-usage.js",
      ),
    );
    it(
      "wrapped-in-sc-private-names.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-private-names.js"),
    );
    it(
      "wrapped-in-sc-rs-field-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-field-identifier-initializer.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-field-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-rs-field-identifier.js"),
    );
    it(
      "wrapped-in-sc-rs-private-getter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-private-getter-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-private-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-rs-private-getter.js"),
    );
    it(
      "wrapped-in-sc-rs-private-method-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-private-method-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-private-method.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-rs-private-method.js"),
    );
    it(
      "wrapped-in-sc-rs-private-setter-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-private-setter-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-private-setter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/elements/wrapped-in-sc-rs-private-setter.js"),
    );
    it(
      "wrapped-in-sc-rs-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-privatename-identifier-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-privatename-identifier-initializer.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-privatename-identifier.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-async-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-async-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-async-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-async-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-async-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-async-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-async-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-async-method-privatename-identifier.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-generator-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-generator-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-generator-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-generator-method-privatename-identifier.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-method-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-method-privatename-identifier-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-method-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-method-privatename-identifier.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-privatename-identifier-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-privatename-identifier-alt-by-classname.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-privatename-identifier-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-privatename-identifier-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-privatename-identifier-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-privatename-identifier-by-classname.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-privatename-identifier-initializer-alt-by-classname.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-privatename-identifier-initializer-alt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-privatename-identifier-initializer-alt.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-privatename-identifier-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-privatename-identifier-initializer.js",
      ),
    );
    it(
      "wrapped-in-sc-rs-static-privatename-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-rs-static-privatename-identifier.js",
      ),
    );
    it(
      "wrapped-in-sc-static-private-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-static-private-fields.js",
      ),
    );
    it(
      "wrapped-in-sc-static-private-methods-with-fields.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-static-private-methods-with-fields.js",
      ),
    );
    it(
      "wrapped-in-sc-static-private-methods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-static-private-methods.js",
      ),
    );
    it(
      "wrapped-in-sc-string-literal-names.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/elements/wrapped-in-sc-string-literal-names.js",
      ),
    );
  });
  describe("gen-method", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/gen-method/dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-arg-val-undefined.js"),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-duplicates.js"),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-ref-later.js"),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-ref-prior.js"),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-ref-self.js"),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/dflt-params-trailing-comma.js"),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method/forbidden-ext/b1/cls-expr-gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-gen-meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method/forbidden-ext/b1/cls-expr-gen-meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method/forbidden-ext/b2/cls-expr-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method/forbidden-ext/b2/cls-expr-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method/forbidden-ext/b2/cls-expr-gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/params-trailing-comma-multiple.js"),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/params-trailing-comma-single.js"),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/rest-param-strict-body.js"),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method/rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "yield-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method/yield-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/yield-as-binding-identifier.js"),
    );
    it(
      "yield-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method/yield-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "yield-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/yield-as-identifier-reference.js"),
    );
    it(
      "yield-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method/yield-as-label-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/yield-as-label-identifier.js"),
    );
    it(
      "yield-identifier-spread-strict.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/yield-identifier-spread-strict.js"),
    );
    it(
      "yield-identifier-strict.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method/yield-identifier-strict.js"),
    );
    it(
      "yield-spread-arr-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/yield-spread-arr-multiple.js"),
    );
    it(
      "yield-spread-arr-single.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/yield-spread-arr-single.js"),
    );
    it(
      "yield-spread-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method/yield-spread-obj.js"),
    );
  });
  it(
    "gen-method-length-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/gen-method-length-dflt.js"),
  );
  it(
    "gen-method-param-dflt-yield.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/gen-method-param-dflt-yield.js"),
  );
  describe("gen-method-static", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method-static/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method-static/dflt-params-duplicates.js"),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method-static/dflt-params-ref-later.js"),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method-static/dflt-params-ref-prior.js"),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method-static/dflt-params-ref-self.js"),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method-static/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/dflt-params-trailing-comma.js",
      ),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-gen-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method-static/forbidden-ext/b1/cls-expr-gen-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-gen-meth-static-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method-static/forbidden-ext/b1/cls-expr-gen-meth-static-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method-static/forbidden-ext/b2/cls-expr-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method-static/forbidden-ext/b2/cls-expr-gen-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-gen-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/gen-method-static/forbidden-ext/b2/cls-expr-gen-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/params-trailing-comma-multiple.js",
      ),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/params-trailing-comma-single.js",
      ),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method-static/rest-param-strict-body.js"),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "yield-as-binding-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-binding-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-as-binding-identifier.js",
      ),
    );
    it(
      "yield-as-identifier-reference-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "yield-as-identifier-reference.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-as-identifier-reference.js",
      ),
    );
    it(
      "yield-as-label-identifier-escaped.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-as-label-identifier-escaped.js",
      ),
    );
    it(
      "yield-as-label-identifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-as-label-identifier.js",
      ),
    );
    it(
      "yield-identifier-spread-strict.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-identifier-spread-strict.js",
      ),
    );
    it(
      "yield-identifier-strict.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/gen-method-static/yield-identifier-strict.js"),
    );
    it(
      "yield-spread-arr-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/gen-method-static/yield-spread-arr-multiple.js",
      ),
    );
    it(
      "yield-spread-arr-single.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method-static/yield-spread-arr-single.js"),
    );
    it(
      "yield-spread-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/gen-method-static/yield-spread-obj.js"),
    );
  });
  it(
    "getter-param-dflt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/getter-param-dflt.js"),
  );
  it(
    "heritage-arrow-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/heritage-arrow-function.js"),
  );
  it(
    "heritage-async-arrow-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/heritage-async-arrow-function.js"),
  );
  it(
    "ident-name-method-def-break-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-break-escaped.js"),
  );
  it(
    "ident-name-method-def-case-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-case-escaped.js"),
  );
  it(
    "ident-name-method-def-catch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-catch-escaped.js"),
  );
  it(
    "ident-name-method-def-class-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-class-escaped.js"),
  );
  it(
    "ident-name-method-def-const-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-const-escaped.js"),
  );
  it(
    "ident-name-method-def-continue-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-continue-escaped.js"),
  );
  it(
    "ident-name-method-def-debugger-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-debugger-escaped.js"),
  );
  it(
    "ident-name-method-def-default-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-default-escaped-ext.js"),
  );
  it(
    "ident-name-method-def-default-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-default-escaped.js"),
  );
  it(
    "ident-name-method-def-default.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-default.js"),
  );
  it(
    "ident-name-method-def-delete-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-delete-escaped.js"),
  );
  it(
    "ident-name-method-def-do-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-do-escaped.js"),
  );
  it(
    "ident-name-method-def-else-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-else-escaped.js"),
  );
  it(
    "ident-name-method-def-enum-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-enum-escaped.js"),
  );
  it(
    "ident-name-method-def-export-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-export-escaped.js"),
  );
  it(
    "ident-name-method-def-extends-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-extends-escaped-ext.js"),
  );
  it(
    "ident-name-method-def-extends-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-extends-escaped.js"),
  );
  it(
    "ident-name-method-def-extends.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-extends.js"),
  );
  it(
    "ident-name-method-def-finally-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-finally-escaped.js"),
  );
  it(
    "ident-name-method-def-for-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-for-escaped.js"),
  );
  it(
    "ident-name-method-def-function-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-function-escaped.js"),
  );
  it(
    "ident-name-method-def-if-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-if-escaped.js"),
  );
  it(
    "ident-name-method-def-implements-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-implements-escaped.js"),
  );
  it(
    "ident-name-method-def-import-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-import-escaped.js"),
  );
  it(
    "ident-name-method-def-in-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-in-escaped.js"),
  );
  it(
    "ident-name-method-def-instanceof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-instanceof-escaped.js"),
  );
  it(
    "ident-name-method-def-interface-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-interface-escaped.js"),
  );
  it(
    "ident-name-method-def-let-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-let-escaped.js"),
  );
  it(
    "ident-name-method-def-new-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-new-escaped.js"),
  );
  it(
    "ident-name-method-def-package-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-package-escaped.js"),
  );
  it(
    "ident-name-method-def-private-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-private-escaped.js"),
  );
  it(
    "ident-name-method-def-protected-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-protected-escaped.js"),
  );
  it(
    "ident-name-method-def-public-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-public-escaped.js"),
  );
  it(
    "ident-name-method-def-return-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-return-escaped.js"),
  );
  it(
    "ident-name-method-def-static-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-static-escaped.js"),
  );
  it(
    "ident-name-method-def-super-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-super-escaped.js"),
  );
  it(
    "ident-name-method-def-switch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-switch-escaped.js"),
  );
  it(
    "ident-name-method-def-this-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-this-escaped.js"),
  );
  it(
    "ident-name-method-def-throw-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-throw-escaped.js"),
  );
  it(
    "ident-name-method-def-try-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-try-escaped.js"),
  );
  it(
    "ident-name-method-def-typeof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-typeof-escaped.js"),
  );
  it(
    "ident-name-method-def-var-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-var-escaped.js"),
  );
  it(
    "ident-name-method-def-void-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-void-escaped.js"),
  );
  it(
    "ident-name-method-def-while-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-while-escaped.js"),
  );
  it(
    "ident-name-method-def-with-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/ident-name-method-def-with-escaped.js"),
  );
  describe("method", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/method/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/dflt-params-arg-val-not-undefined.js"),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/dflt-params-arg-val-undefined.js"),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/method/dflt-params-duplicates.js"),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/dflt-params-ref-later.js"),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/dflt-params-ref-prior.js"),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/dflt-params-ref-self.js"),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/method/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/dflt-params-trailing-comma.js"),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method/forbidden-ext/b1/cls-expr-meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method/forbidden-ext/b1/cls-expr-meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method/forbidden-ext/b2/cls-expr-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method/forbidden-ext/b2/cls-expr-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method/forbidden-ext/b2/cls-expr-meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/method/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/params-trailing-comma-multiple.js"),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method/params-trailing-comma-single.js"),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/method/rest-param-strict-body.js"),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/method/rest-params-trailing-comma-early-error.js",
      ),
    );
  });
  it(
    "method-length-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/method-length-dflt.js"),
  );
  it(
    "method-param-dflt-yield.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/method-param-dflt-yield.js"),
  );
  describe("method-static", () => {
    it(
      "array-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/method-static/array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method-static/dflt-params-abrupt.js"),
    );
    it(
      "dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/method-static/dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/method-static/dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "dflt-params-duplicates.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/method-static/dflt-params-duplicates.js"),
    );
    it(
      "dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method-static/dflt-params-ref-later.js"),
    );
    it(
      "dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method-static/dflt-params-ref-prior.js"),
    );
    it(
      "dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method-static/dflt-params-ref-self.js"),
    );
    it(
      "dflt-params-rest.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/method-static/dflt-params-rest.js"),
    );
    it(
      "dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method-static/dflt-params-trailing-comma.js"),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "cls-expr-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method-static/forbidden-ext/b1/cls-expr-meth-static-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "cls-expr-meth-static-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method-static/forbidden-ext/b1/cls-expr-meth-static-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "cls-expr-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method-static/forbidden-ext/b2/cls-expr-meth-static-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "cls-expr-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method-static/forbidden-ext/b2/cls-expr-meth-static-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "cls-expr-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/class/method-static/forbidden-ext/b2/cls-expr-meth-static-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "object-destructuring-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/method-static/object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/class/method-static/params-trailing-comma-multiple.js",
      ),
    );
    it(
      "params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/class/method-static/params-trailing-comma-single.js"),
    );
    it(
      "rest-param-strict-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/method-static/rest-param-strict-body.js"),
    );
    it(
      "rest-params-trailing-comma-early-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/method-static/rest-params-trailing-comma-early-error.js",
      ),
    );
  });
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/name.js"),
  );
  it(
    "params-dflt-gen-meth-args-unmapped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-gen-meth-args-unmapped.js"),
  );
  it(
    "params-dflt-gen-meth-ref-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-gen-meth-ref-arguments.js"),
  );
  it(
    "params-dflt-gen-meth-static-args-unmapped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-gen-meth-static-args-unmapped.js"),
  );
  it(
    "params-dflt-gen-meth-static-ref-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-gen-meth-static-ref-arguments.js"),
  );
  it(
    "params-dflt-meth-args-unmapped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-meth-args-unmapped.js"),
  );
  it(
    "params-dflt-meth-ref-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-meth-ref-arguments.js"),
  );
  it(
    "params-dflt-meth-static-args-unmapped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-meth-static-args-unmapped.js"),
  );
  it(
    "params-dflt-meth-static-ref-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/params-dflt-meth-static-ref-arguments.js"),
  );
  it(
    "poisoned-underscore-proto.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/poisoned-underscore-proto.js"),
  );
  it(
    "private-getter-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    ),
  );
  it(
    "private-getter-brand-check-multiple-evaluations-of-class-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-eval.js",
    ),
  );
  it(
    "private-getter-brand-check-multiple-evaluations-of-class-factory.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-factory.js",
    ),
  );
  it(
    "private-getter-brand-check-multiple-evaluations-of-class-function-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-function-ctor.js",
    ),
  );
  it(
    "private-getter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js",
    ),
  );
  it(
    "private-getter-brand-check-multiple-evaluations-of-class-realm.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm.js",
    ),
  );
  it(
    "private-method-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    ),
  );
  it(
    "private-method-brand-check-multiple-evaluations-of-class-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-eval.js",
    ),
  );
  it(
    "private-method-brand-check-multiple-evaluations-of-class-factory.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-factory.js",
    ),
  );
  it(
    "private-method-brand-check-multiple-evaluations-of-class-function-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-function-ctor.js",
    ),
  );
  it(
    "private-method-brand-check-multiple-evaluations-of-class-realm-function-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm-function-ctor.js",
    ),
  );
  it(
    "private-method-brand-check-multiple-evaluations-of-class-realm.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm.js",
    ),
  );
  it(
    "private-setter-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    ),
  );
  it(
    "private-setter-brand-check-multiple-evaluations-of-class-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-eval.js",
    ),
  );
  it(
    "private-setter-brand-check-multiple-evaluations-of-class-factory.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-factory.js",
    ),
  );
  it(
    "private-setter-brand-check-multiple-evaluations-of-class-function-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-function-ctor.js",
    ),
  );
  it(
    "private-setter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js",
    ),
  );
  it(
    "private-setter-brand-check-multiple-evaluations-of-class-realm.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm.js",
    ),
  );
  it(
    "private-static-field-multiple-evaluations-of-class-direct-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-field-multiple-evaluations-of-class-direct-eval.js",
    ),
  );
  it(
    "private-static-field-multiple-evaluations-of-class-eval-indirect.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-field-multiple-evaluations-of-class-eval-indirect.js",
    ),
  );
  it(
    "private-static-field-multiple-evaluations-of-class-factory.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-field-multiple-evaluations-of-class-factory.js",
    ),
  );
  it(
    "private-static-field-multiple-evaluations-of-class-function-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-field-multiple-evaluations-of-class-function-ctor.js",
    ),
  );
  it(
    "private-static-field-multiple-evaluations-of-class-realm.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-static-field-multiple-evaluations-of-class-realm.js",
    ),
  );
  it(
    "private-static-getter-multiple-evaluations-of-class-direct-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-getter-multiple-evaluations-of-class-direct-eval.js",
    ),
  );
  it(
    "private-static-getter-multiple-evaluations-of-class-eval-indirect.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-getter-multiple-evaluations-of-class-eval-indirect.js",
    ),
  );
  it(
    "private-static-getter-multiple-evaluations-of-class-factory.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-getter-multiple-evaluations-of-class-factory.js",
    ),
  );
  it(
    "private-static-getter-multiple-evaluations-of-class-function-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-getter-multiple-evaluations-of-class-function-ctor.js",
    ),
  );
  it(
    "private-static-getter-multiple-evaluations-of-class-realm.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-static-getter-multiple-evaluations-of-class-realm.js",
    ),
  );
  it(
    "private-static-method-brand-check-multiple-evaluations-of-class-direct-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-method-brand-check-multiple-evaluations-of-class-direct-eval.js",
    ),
  );
  it(
    "private-static-method-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-method-brand-check-multiple-evaluations-of-class-eval-indirect.js",
    ),
  );
  it(
    "private-static-method-brand-check-multiple-evaluations-of-class-factory.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-method-brand-check-multiple-evaluations-of-class-factory.js",
    ),
  );
  it(
    "private-static-method-brand-check-multiple-evaluations-of-class-function-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-method-brand-check-multiple-evaluations-of-class-function-ctor.js",
    ),
  );
  it(
    "private-static-method-brand-check-multiple-evaluations-of-class-realm.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-static-method-brand-check-multiple-evaluations-of-class-realm.js",
    ),
  );
  it(
    "private-static-setter-multiple-evaluations-of-class-direct-eval.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-setter-multiple-evaluations-of-class-direct-eval.js",
    ),
  );
  it(
    "private-static-setter-multiple-evaluations-of-class-eval-indirect.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-setter-multiple-evaluations-of-class-eval-indirect.js",
    ),
  );
  it(
    "private-static-setter-multiple-evaluations-of-class-factory.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-setter-multiple-evaluations-of-class-factory.js",
    ),
  );
  it(
    "private-static-setter-multiple-evaluations-of-class-function-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/class/private-static-setter-multiple-evaluations-of-class-function-ctor.js",
    ),
  );
  it(
    "private-static-setter-multiple-evaluations-of-class-realm.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/class/private-static-setter-multiple-evaluations-of-class-realm.js",
    ),
  );
  it(
    "restricted-properties.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/restricted-properties.js"),
  );
  it(
    "scope-gen-meth-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-gen-meth-paramsbody-var-close.js"),
  );
  it(
    "scope-gen-meth-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-gen-meth-paramsbody-var-open.js"),
  );
  it(
    "scope-meth-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-meth-paramsbody-var-close.js"),
  );
  it(
    "scope-meth-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-meth-paramsbody-var-open.js"),
  );
  it(
    "scope-name-lex-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-name-lex-close.js"),
  );
  it(
    "scope-name-lex-open-heritage.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-name-lex-open-heritage.js"),
  );
  it(
    "scope-name-lex-open-no-heritage.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-name-lex-open-no-heritage.js"),
  );
  it(
    "scope-setter-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-setter-paramsbody-var-close.js"),
  );
  it(
    "scope-setter-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-setter-paramsbody-var-open.js"),
  );
  it(
    "scope-static-gen-meth-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-static-gen-meth-paramsbody-var-close.js"),
  );
  it(
    "scope-static-gen-meth-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-static-gen-meth-paramsbody-var-open.js"),
  );
  it(
    "scope-static-meth-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-static-meth-paramsbody-var-close.js"),
  );
  it(
    "scope-static-meth-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-static-meth-paramsbody-var-open.js"),
  );
  it(
    "scope-static-setter-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-static-setter-paramsbody-var-close.js"),
  );
  it(
    "scope-static-setter-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/scope-static-setter-paramsbody-var-open.js"),
  );
  it(
    "setter-length-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/setter-length-dflt.js"),
  );
  it(
    "static-gen-method-param-dflt-yield.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/static-gen-method-param-dflt-yield.js"),
  );
  it(
    "static-init-await-binding.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/static-init-await-binding.js"),
  );
  it(
    "static-init-await-reference.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/static-init-await-reference.js"),
  );
  it(
    "static-method-length-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/class/static-method-length-dflt.js"),
  );
  it(
    "static-method-param-dflt-yield.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/class/static-method-param-dflt-yield.js"),
  );
  describe("subclass-builtins", () => {
    it(
      "subclass-AggregateError.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-AggregateError.js"),
    );
    it(
      "subclass-Array.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Array.js"),
    );
    it.skip("subclass-ArrayBuffer.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-BigInt64Array.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-BigUint64Array.js", () => {
      /* Ignored Test */
    });
    it(
      "subclass-Boolean.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Boolean.js"),
    );
    it.skip("subclass-DataView.js", () => {
      /* Ignored Test */
    });
    it(
      "subclass-Date.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Date.js"),
    );
    it(
      "subclass-Error.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Error.js"),
    );
    it(
      "subclass-EvalError.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-EvalError.js"),
    );
    it.skip("subclass-Float32Array.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-Float64Array.js", () => {
      /* Ignored Test */
    });
    it(
      "subclass-Function.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Function.js"),
    );
    it.skip("subclass-Int16Array.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-Int32Array.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-Int8Array.js", () => {
      /* Ignored Test */
    });
    it(
      "subclass-Map.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Map.js"),
    );
    it(
      "subclass-Number.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Number.js"),
    );
    it(
      "subclass-Object.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Object.js"),
    );
    it(
      "subclass-Promise.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Promise.js"),
    );
    it(
      "subclass-RangeError.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-RangeError.js"),
    );
    it(
      "subclass-ReferenceError.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-ReferenceError.js"),
    );
    it(
      "subclass-RegExp.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-RegExp.js"),
    );
    it(
      "subclass-Set.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-Set.js"),
    );
    it(
      "subclass-SharedArrayBuffer.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/class/subclass-builtins/subclass-SharedArrayBuffer.js",
      ),
    );
    it(
      "subclass-String.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-String.js"),
    );
    it(
      "subclass-SyntaxError.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-SyntaxError.js"),
    );
    it(
      "subclass-TypeError.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-TypeError.js"),
    );
    it(
      "subclass-URIError.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-URIError.js"),
    );
    it.skip("subclass-Uint16Array.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-Uint32Array.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-Uint8Array.js", () => {
      /* Ignored Test */
    });
    it.skip("subclass-Uint8ClampedArray.js", () => {
      /* Ignored Test */
    });
    it(
      "subclass-WeakMap.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-WeakMap.js"),
    );
    it(
      "subclass-WeakRef.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-WeakRef.js"),
    );
    it(
      "subclass-WeakSet.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/class/subclass-builtins/subclass-WeakSet.js"),
    );
  });
});
