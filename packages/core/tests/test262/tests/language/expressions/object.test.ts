import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("object", () => {
  it(
    "11.1.5-0-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5-0-1.js"),
  );
  it(
    "11.1.5-0-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5-0-2.js"),
  );
  it(
    "11.1.5-1gs.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5-1gs.js"),
  );
  it(
    "11.1.5-2gs.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5-2gs.js"),
  );
  it(
    "11.1.5_3-3-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_3-3-1.js"),
  );
  it(
    "11.1.5_4-4-a-3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_4-4-a-3.js"),
  );
  it(
    "11.1.5_4-4-b-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_4-4-b-1.js"),
  );
  it(
    "11.1.5_4-5-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_4-5-1.js"),
  );
  it(
    "11.1.5_5-4-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_5-4-1.js"),
  );
  it(
    "11.1.5_6-3-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_6-3-1.js"),
  );
  it(
    "11.1.5_6-3-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_6-3-2.js"),
  );
  it(
    "11.1.5_7-3-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_7-3-1.js"),
  );
  it(
    "11.1.5_7-3-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/11.1.5_7-3-2.js"),
  );
  it(
    "S11.1.5_A1.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A1.1.js"),
  );
  it(
    "S11.1.5_A1.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A1.2.js"),
  );
  it(
    "S11.1.5_A1.3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A1.3.js"),
  );
  it(
    "S11.1.5_A1.4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A1.4.js"),
  );
  it(
    "S11.1.5_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A2.js"),
  );
  it(
    "S11.1.5_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A3.js"),
  );
  it(
    "S11.1.5_A4.1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A4.1.js"),
  );
  it(
    "S11.1.5_A4.2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A4.2.js"),
  );
  it(
    "S11.1.5_A4.3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/S11.1.5_A4.3.js"),
  );
  it(
    "__proto__-duplicate-computed.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-duplicate-computed.js"),
  );
  it(
    "__proto__-duplicate.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-duplicate.js"),
  );
  it(
    "__proto__-fn-name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-fn-name.js"),
  );
  it(
    "__proto__-permitted-dup-shorthand.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-permitted-dup-shorthand.js"),
  );
  it(
    "__proto__-permitted-dup.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-permitted-dup.js"),
  );
  it(
    "__proto__-poisoned-object-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-poisoned-object-prototype.js"),
  );
  it(
    "__proto__-value-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/object/__proto__-value-non-object.js"),
  );
  it(
    "__proto__-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-value-null.js"),
  );
  it(
    "__proto__-value-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/__proto__-value-obj.js"),
  );
  it(
    "accessor-name-computed-err-evaluation.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-computed-err-evaluation.js"),
  );
  it(
    "accessor-name-computed-err-to-prop-key.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-computed-err-to-prop-key.js"),
  );
  it(
    "accessor-name-computed-err-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-computed-err-unresolvable.js"),
  );
  it(
    "accessor-name-computed-in.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-computed-in.js"),
  );
  it(
    "accessor-name-computed-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-computed-yield-expr.js"),
  );
  it(
    "accessor-name-computed-yield-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-computed-yield-id.js"),
  );
  it(
    "accessor-name-computed.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-computed.js"),
  );
  it(
    "accessor-name-literal-numeric-binary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-numeric-binary.js"),
  );
  it(
    "accessor-name-literal-numeric-exponent.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-numeric-exponent.js"),
  );
  it(
    "accessor-name-literal-numeric-hex.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-numeric-hex.js"),
  );
  it(
    "accessor-name-literal-numeric-leading-decimal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/accessor-name-literal-numeric-leading-decimal.js",
    ),
  );
  it(
    "accessor-name-literal-numeric-non-canonical.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-numeric-non-canonical.js"),
  );
  it(
    "accessor-name-literal-numeric-octal.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-numeric-octal.js"),
  );
  it(
    "accessor-name-literal-numeric-zero.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-numeric-zero.js"),
  );
  it(
    "accessor-name-literal-string-char-escape.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-string-char-escape.js"),
  );
  it(
    "accessor-name-literal-string-default-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/accessor-name-literal-string-default-escaped-ext.js",
    ),
  );
  it(
    "accessor-name-literal-string-default-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/accessor-name-literal-string-default-escaped.js",
    ),
  );
  it(
    "accessor-name-literal-string-default.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-string-default.js"),
  );
  it(
    "accessor-name-literal-string-double-quote.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-string-double-quote.js"),
  );
  it(
    "accessor-name-literal-string-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-string-empty.js"),
  );
  it(
    "accessor-name-literal-string-hex-escape.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-string-hex-escape.js"),
  );
  it(
    "accessor-name-literal-string-line-continuation.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/accessor-name-literal-string-line-continuation.js",
    ),
  );
  it(
    "accessor-name-literal-string-single-quote.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-string-single-quote.js"),
  );
  it(
    "accessor-name-literal-string-unicode-escape.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/accessor-name-literal-string-unicode-escape.js"),
  );
  it(
    "computed-__proto__.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/computed-__proto__.js"),
  );
  it(
    "computed-property-evaluation-order.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/computed-property-evaluation-order.js"),
  );
  it(
    "computed-property-name-topropertykey-before-value-evaluation.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/computed-property-name-topropertykey-before-value-evaluation.js",
    ),
  );
  it(
    "concise-generator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/concise-generator.js"),
  );
  it(
    "cover-initialized-name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/cover-initialized-name.js"),
  );
  it(
    "covered-ident-name-prop-name-literal-break-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-break-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-case-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-case-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-catch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-catch-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-class-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-class-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-const-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-const-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-continue-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-continue-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-debugger-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-debugger-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-default-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-default-escaped-ext.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-default-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-default-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-default.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-default.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-delete-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-delete-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-do-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-do-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-else-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-else-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-enum-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-enum-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-export-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-export-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-extends-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-extends-escaped-ext.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-extends-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-extends-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-extends.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-extends.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-finally-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-finally-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-for-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-for-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-function-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-function-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-if-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-if-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-implements-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-implements-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-import-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-import-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-in-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-in-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-instanceof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-instanceof-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-interface-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-interface-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-let-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-let-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-new-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-new-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-package-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-package-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-private-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-private-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-protected-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-protected-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-public-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-public-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-return-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-return-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-static-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-static-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-super-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-super-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-switch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-switch-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-this-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-this-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-throw-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-throw-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-try-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-try-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-typeof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-typeof-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-var-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-var-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-void-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-void-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-while-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-while-escaped.js",
    ),
  );
  it(
    "covered-ident-name-prop-name-literal-with-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/covered-ident-name-prop-name-literal-with-escaped.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-additive-expression-add.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-additive-expression-add.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-additive-expression-subtract.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-additive-expression-subtract.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-assignment-expression-assignment.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-assignment.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-assignment-expression-bitwise-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-bitwise-or.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-assignment-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-coalesce.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-assignment-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-logical-and.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-assignment-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-assignment-expression-logical-or.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-async-arrow-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-async-arrow-function-expression.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-await-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-await-expression.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-condition-expression-false.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-condition-expression-false.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-condition-expression-true.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-condition-expression-true.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-decimal-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-decimal-e-notational-literal.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-decimal-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-decimal-literal.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-exponetiation-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-exponetiation-expression.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-expression-coalesce.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-expression-coalesce.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-expression-logical-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-expression-logical-and.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-expression-logical-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-expression-logical-or.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-function-declaration.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-function-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-function-expression.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-generator-function-declaration.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-generator-function-declaration.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-identifier.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-integer-e-notational-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-integer-e-notational-literal.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-integer-separators.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-integer-separators.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-math.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-math.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-multiplicative-expression-div.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-multiplicative-expression-div.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-multiplicative-expression-mult.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-multiplicative-expression-mult.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-null.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-numeric-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-numeric-literal.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-string-literal.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-string-literal.js",
    ),
  );
  it(
    "cpn-obj-lit-computed-property-name-from-yield-expression.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/cpn-obj-lit-computed-property-name-from-yield-expression.js",
    ),
  );
  describe("dstr", () => {
    it(
      "async-gen-meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-init-iter-close.js"),
    );
    it(
      "async-gen-meth-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-init-iter-get-err.js"),
    );
    it(
      "async-gen-meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-gen-meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-name-iter-val.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-elision.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-init-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "async-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-close.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-get-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-init-iter-no-close.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-name-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-elision.js"),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-init-null.js"),
    );
    it(
      "async-gen-meth-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-init-undefined.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-list-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-ary.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-prop-obj.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-rest-getter.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      ),
    );
    it(
      "async-gen-meth-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-init-null.js"),
    );
    it(
      "async-gen-meth-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-init-undefined.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-empty.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-list-err.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary-init.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-eval-err.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-init.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-id.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj-init.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "async-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/async-gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "async-gen-meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/async-gen-meth-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "gen-meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-init-iter-close.js"),
    );
    it(
      "gen-meth-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "gen-meth-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-init-iter-get-err.js"),
    );
    it(
      "gen-meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-init-iter-no-close.js"),
    );
    it(
      "gen-meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-name-iter-val.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "gen-meth-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "gen-meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "gen-meth-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elision-step-err.js"),
    );
    it(
      "gen-meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-elision.js"),
    );
    it(
      "gen-meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-empty.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-init-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "gen-meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "gen-meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-close.js"),
    );
    it(
      "gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-get-err.js"),
    );
    it(
      "gen-meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-init-iter-no-close.js"),
    );
    it(
      "gen-meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-name-iter-val.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-ary-val-null.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-hole.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-done.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-id-iter-val.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-id-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-val-null.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elision-exhausted.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elision-step-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-elision.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-elision.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-empty.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-direct.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-elision.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-exhausted.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-init-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-id.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-init-null.js"),
    );
    it(
      "gen-meth-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-init-undefined.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-list-err.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-init.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "gen-meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-dflt-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "gen-meth-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-init-null.js"),
    );
    it(
      "gen-meth-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-init-undefined.js"),
    );
    it(
      "gen-meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-empty.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-throws.js"),
    );
    it(
      "gen-meth-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "gen-meth-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-list-err.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-init.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-id.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "gen-meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/gen-meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "gen-meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/gen-meth-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "meth-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-init-iter-close.js"),
    );
    it(
      "meth-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "meth-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-init-iter-get-err.js"),
    );
    it(
      "meth-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-init-iter-no-close.js"),
    );
    it(
      "meth-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-name-iter-val.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elem-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elem-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elision-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-elision-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-empty-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-empty-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-rest-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-rest-iter.js"),
    );
    it(
      "meth-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-exhausted.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-skipped.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-throws.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-undef.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-complete.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-step-err.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-val-err.js"),
    );
    it(
      "meth-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-prop-id-init.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "meth-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elem-obj-val-undef.js"),
    );
    it(
      "meth-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "meth-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elision-step-err.js"),
    );
    it(
      "meth-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-elision.js"),
    );
    it(
      "meth-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-empty.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "meth-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "meth-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-iter-step-err.js"),
    );
    it(
      "meth-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id-iter-val-err.js"),
    );
    it(
      "meth-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "meth-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-init-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "meth-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-not-final-ary.js"),
    );
    it(
      "meth-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-not-final-obj.js"),
    );
    it(
      "meth-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "meth-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "meth-dflt-ary-init-iter-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-init-iter-close.js"),
    );
    it(
      "meth-dflt-ary-init-iter-get-err-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-init-iter-get-err-array-prototype.js",
      ),
    );
    it(
      "meth-dflt-ary-init-iter-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-init-iter-get-err.js"),
    );
    it(
      "meth-dflt-ary-init-iter-no-close.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-init-iter-no-close.js"),
    );
    it(
      "meth-dflt-ary-name-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-name-iter-val.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elem-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elem-iter.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elision-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-elision-iter.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-empty-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-empty-iter.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-rest-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-rest-iter.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-ary-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-ary-val-null.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-exhausted.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-hole.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-hole.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-skipped.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-throws.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-undef.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-complete.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-done.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-done.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-step-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-val-array-prototype.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-val-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-id-iter-val.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-id-iter-val.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-id-init.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-prop-id-init.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-prop-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-val-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-val-null.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-elem-obj-val-undef.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-elision-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elision-exhausted.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elision-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elision-step-err.js"),
    );
    it(
      "meth-dflt-ary-ptrn-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-elision.js"),
    );
    it(
      "meth-dflt-ary-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-empty.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-elem.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-elem.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-elision.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-empty.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-ary-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-ary-rest.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-direct.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-direct.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-elision-next-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-elision.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-elision.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-exhausted.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-exhausted.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-iter-step-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id-iter-val-err.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-init-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-init-ary.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-init-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-init-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-init-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-init-obj.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-not-final-ary.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-not-final-ary.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-not-final-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-not-final-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-not-final-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-not-final-obj.js",
      ),
    );
    it(
      "meth-dflt-ary-ptrn-rest-obj-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-obj-id.js"),
    );
    it(
      "meth-dflt-ary-ptrn-rest-obj-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-ary-ptrn-rest-obj-prop-id.js"),
    );
    it(
      "meth-dflt-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-init-null.js"),
    );
    it(
      "meth-dflt-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-init-undefined.js"),
    );
    it(
      "meth-dflt-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-empty.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-arrow.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-class.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-cover.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-fn.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-fn-name-gen.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-throws.js"),
    );
    it(
      "meth-dflt-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "meth-dflt-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-list-err.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary-value-null.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-ary.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-get-value-err.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init-skipped.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init-throws.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-init.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id-trailing-comma.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-id.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj-value-null.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj-value-undef.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-prop-obj.js"),
    );
    it(
      "meth-dflt-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-rest-getter.js"),
    );
    it(
      "meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-dflt-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "meth-dflt-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-dflt-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "meth-obj-init-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-init-null.js"),
    );
    it(
      "meth-obj-init-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-init-undefined.js"),
    );
    it(
      "meth-obj-ptrn-empty.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-empty.js"),
    );
    it(
      "meth-obj-ptrn-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-get-value-err.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-arrow.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-class.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-class.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-cover.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-cover.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-fn.js"),
    );
    it(
      "meth-obj-ptrn-id-init-fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-fn-name-gen.js"),
    );
    it(
      "meth-obj-ptrn-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-skipped.js"),
    );
    it(
      "meth-obj-ptrn-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-throws.js"),
    );
    it(
      "meth-obj-ptrn-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-init-unresolvable.js"),
    );
    it(
      "meth-obj-ptrn-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-id-trailing-comma.js"),
    );
    it(
      "meth-obj-ptrn-list-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-list-err.js"),
    );
    it(
      "meth-obj-ptrn-prop-ary-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-ary-init.js"),
    );
    it(
      "meth-obj-ptrn-prop-ary-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-obj-ptrn-prop-ary-trailing-comma.js",
      ),
    );
    it(
      "meth-obj-ptrn-prop-ary-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-ary-value-null.js"),
    );
    it(
      "meth-obj-ptrn-prop-ary.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-ary.js"),
    );
    it(
      "meth-obj-ptrn-prop-eval-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-eval-err.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-get-value-err.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-get-value-err.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-init-skipped.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-init-skipped.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-init-throws.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-init-throws.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-init-unresolvable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-obj-ptrn-prop-id-init-unresolvable.js",
      ),
    );
    it(
      "meth-obj-ptrn-prop-id-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-init.js"),
    );
    it(
      "meth-obj-ptrn-prop-id-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id-trailing-comma.js"),
    );
    it(
      "meth-obj-ptrn-prop-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-id.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj-init.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj-init.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj-value-null.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj-value-null.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj-value-undef.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj-value-undef.js"),
    );
    it(
      "meth-obj-ptrn-prop-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-prop-obj.js"),
    );
    it(
      "meth-obj-ptrn-rest-getter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-rest-getter.js"),
    );
    it(
      "meth-obj-ptrn-rest-skip-non-enumerable.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/meth-obj-ptrn-rest-skip-non-enumerable.js",
      ),
    );
    it(
      "meth-obj-ptrn-rest-val-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/dstr/meth-obj-ptrn-rest-val-obj.js"),
    );
    it(
      "object-rest-proxy-get-not-called-on-dontenum-keys.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/object-rest-proxy-get-not-called-on-dontenum-keys.js",
      ),
    );
    it(
      "object-rest-proxy-gopd-not-called-on-excluded-keys.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/object-rest-proxy-gopd-not-called-on-excluded-keys.js",
      ),
    );
    it(
      "object-rest-proxy-ownkeys-returned-keys-order.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/dstr/object-rest-proxy-ownkeys-returned-keys-order.js",
      ),
    );
  });
  it(
    "fn-name-accessor-get.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/fn-name-accessor-get.js"),
  );
  it(
    "fn-name-accessor-set.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/fn-name-accessor-set.js"),
  );
  it(
    "fn-name-arrow.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/object/fn-name-arrow.js"),
  );
  it(
    "fn-name-class.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/object/fn-name-class.js"),
  );
  it(
    "fn-name-cover.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/object/fn-name-cover.js"),
  );
  it(
    "fn-name-fn.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/object/fn-name-fn.js"),
  );
  it(
    "fn-name-gen.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/object/fn-name-gen.js"),
  );
  it(
    "getter-body-strict-inside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/getter-body-strict-inside.js"),
  );
  it(
    "getter-body-strict-outside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/getter-body-strict-outside.js"),
  );
  it(
    "getter-param-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/getter-param-dflt.js"),
  );
  it(
    "getter-prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/getter-prop-desc.js"),
  );
  it(
    "getter-super-prop.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/getter-super-prop.js"),
  );
  it(
    "ident-name-method-def-break-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-break-escaped.js"),
  );
  it(
    "ident-name-method-def-case-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-case-escaped.js"),
  );
  it(
    "ident-name-method-def-catch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-catch-escaped.js"),
  );
  it(
    "ident-name-method-def-class-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-class-escaped.js"),
  );
  it(
    "ident-name-method-def-const-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-const-escaped.js"),
  );
  it(
    "ident-name-method-def-continue-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-continue-escaped.js"),
  );
  it(
    "ident-name-method-def-debugger-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-debugger-escaped.js"),
  );
  it(
    "ident-name-method-def-default-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-default-escaped-ext.js"),
  );
  it(
    "ident-name-method-def-default-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-default-escaped.js"),
  );
  it(
    "ident-name-method-def-default.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-default.js"),
  );
  it(
    "ident-name-method-def-delete-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-delete-escaped.js"),
  );
  it(
    "ident-name-method-def-do-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-do-escaped.js"),
  );
  it(
    "ident-name-method-def-else-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-else-escaped.js"),
  );
  it(
    "ident-name-method-def-enum-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-enum-escaped.js"),
  );
  it(
    "ident-name-method-def-export-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-export-escaped.js"),
  );
  it(
    "ident-name-method-def-extends-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-extends-escaped-ext.js"),
  );
  it(
    "ident-name-method-def-extends-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-extends-escaped.js"),
  );
  it(
    "ident-name-method-def-extends.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-extends.js"),
  );
  it(
    "ident-name-method-def-finally-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-finally-escaped.js"),
  );
  it(
    "ident-name-method-def-for-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-for-escaped.js"),
  );
  it(
    "ident-name-method-def-function-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-function-escaped.js"),
  );
  it(
    "ident-name-method-def-if-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-if-escaped.js"),
  );
  it(
    "ident-name-method-def-implements-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-implements-escaped.js"),
  );
  it(
    "ident-name-method-def-import-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-import-escaped.js"),
  );
  it(
    "ident-name-method-def-in-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-in-escaped.js"),
  );
  it(
    "ident-name-method-def-instanceof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-instanceof-escaped.js"),
  );
  it(
    "ident-name-method-def-interface-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-interface-escaped.js"),
  );
  it(
    "ident-name-method-def-let-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-let-escaped.js"),
  );
  it(
    "ident-name-method-def-new-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-new-escaped.js"),
  );
  it(
    "ident-name-method-def-package-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-package-escaped.js"),
  );
  it(
    "ident-name-method-def-private-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-private-escaped.js"),
  );
  it(
    "ident-name-method-def-protected-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-protected-escaped.js"),
  );
  it(
    "ident-name-method-def-public-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-public-escaped.js"),
  );
  it(
    "ident-name-method-def-return-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-return-escaped.js"),
  );
  it(
    "ident-name-method-def-static-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-static-escaped.js"),
  );
  it(
    "ident-name-method-def-super-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-super-escaped.js"),
  );
  it(
    "ident-name-method-def-switch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-switch-escaped.js"),
  );
  it(
    "ident-name-method-def-this-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-this-escaped.js"),
  );
  it(
    "ident-name-method-def-throw-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-throw-escaped.js"),
  );
  it(
    "ident-name-method-def-try-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-try-escaped.js"),
  );
  it(
    "ident-name-method-def-typeof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-typeof-escaped.js"),
  );
  it(
    "ident-name-method-def-var-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-var-escaped.js"),
  );
  it(
    "ident-name-method-def-void-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-void-escaped.js"),
  );
  it(
    "ident-name-method-def-while-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-while-escaped.js"),
  );
  it(
    "ident-name-method-def-with-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-method-def-with-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-await-static-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-await-static-init.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-break-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-break-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-case-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-case-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-catch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-catch-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-class-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-class-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-const-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-const-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-continue-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-continue-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-debugger-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-debugger-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-default-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-default-escaped-ext.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-default-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-default-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-default.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-default.js"),
  );
  it(
    "ident-name-prop-name-literal-delete-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-delete-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-do-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-do-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-else-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-else-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-enum-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-enum-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-export-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-export-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-extends-escaped-ext.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-extends-escaped-ext.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-extends-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-extends-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-extends.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-extends.js"),
  );
  it(
    "ident-name-prop-name-literal-finally-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-finally-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-for-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-for-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-function-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-function-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-if-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-if-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-implements-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-implements-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-import-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-import-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-in-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-in-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-instanceof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-instanceof-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-interface-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-interface-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-let-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-let-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-new-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-new-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-package-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-package-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-private-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-private-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-protected-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/ident-name-prop-name-literal-protected-escaped.js",
    ),
  );
  it(
    "ident-name-prop-name-literal-public-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-public-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-return-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-return-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-static-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-static-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-super-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-super-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-switch-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-switch-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-this-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-this-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-throw-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-throw-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-try-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-try-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-typeof-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-typeof-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-var-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-var-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-void-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-void-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-while-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-while-escaped.js"),
  );
  it(
    "ident-name-prop-name-literal-with-escaped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/ident-name-prop-name-literal-with-escaped.js"),
  );
  it(
    "identifier-shorthand-await-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/identifier-shorthand-await-strict-mode.js"),
  );
  it(
    "identifier-shorthand-implements-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-implements-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-interface-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-interface-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-invalid-computed-name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/identifier-shorthand-invalid-computed-name.js"),
  );
  it(
    "identifier-shorthand-invalid-zero.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/identifier-shorthand-invalid-zero.js"),
  );
  it(
    "identifier-shorthand-let-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-let-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-package-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-package-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-private-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-private-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-protected-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-protected-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-public-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-public-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-static-init-await-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-static-init-await-invalid.js",
    ),
  );
  it(
    "identifier-shorthand-static-init-await-valid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-static-init-await-valid.js",
    ),
  );
  it(
    "identifier-shorthand-static-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-static-invalid-strict-mode.js",
    ),
  );
  it(
    "identifier-shorthand-yield-invalid-strict-mode.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/identifier-shorthand-yield-invalid-strict-mode.js",
    ),
  );
  it(
    "let-non-strict-access.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/let-non-strict-access.js"),
  );
  it(
    "let-non-strict-syntax.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/let-non-strict-syntax.js"),
  );
  it(
    "literal-property-name-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/object/literal-property-name-bigint.js"),
  );
  describe("method-definition", () => {
    it(
      "async-await-as-binding-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-await-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "async-await-as-binding-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-await-as-binding-identifier.js",
      ),
    );
    it(
      "async-await-as-identifier-reference-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-await-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "async-await-as-identifier-reference.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-await-as-identifier-reference.js",
      ),
    );
    it(
      "async-await-as-label-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-await-as-label-identifier-escaped.js",
      ),
    );
    it(
      "async-await-as-label-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-await-as-label-identifier.js",
      ),
    );
    it(
      "async-gen-await-as-binding-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-await-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "async-gen-await-as-binding-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-await-as-binding-identifier.js",
      ),
    );
    it(
      "async-gen-await-as-identifier-reference-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-await-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "async-gen-await-as-identifier-reference.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-await-as-identifier-reference.js",
      ),
    );
    it(
      "async-gen-await-as-label-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-await-as-label-identifier-escaped.js",
      ),
    );
    it(
      "async-gen-await-as-label-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-await-as-label-identifier.js",
      ),
    );
    it(
      "async-gen-meth-array-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-abrupt.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-duplicates.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-duplicates.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-ref-later.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-ref-prior.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-ref-self.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-rest.js",
      ),
    );
    it(
      "async-gen-meth-dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-dflt-params-trailing-comma.js",
      ),
    );
    it(
      "async-gen-meth-escaped-async.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-escaped-async.js",
      ),
    );
    it(
      "async-gen-meth-eval-var-scope-syntax-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-eval-var-scope-syntax-err.js",
      ),
    );
    it(
      "async-gen-meth-object-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "async-gen-meth-params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-params-trailing-comma-multiple.js",
      ),
    );
    it(
      "async-gen-meth-params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-params-trailing-comma-single.js",
      ),
    );
    it(
      "async-gen-meth-rest-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-rest-param-strict-body.js",
      ),
    );
    it(
      "async-gen-meth-rest-params-trailing-comma-early-error.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-meth-rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "async-gen-yield-as-binding-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "async-gen-yield-as-binding-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-as-binding-identifier.js",
      ),
    );
    it(
      "async-gen-yield-as-identifier-reference-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "async-gen-yield-as-identifier-reference.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-as-identifier-reference.js",
      ),
    );
    it(
      "async-gen-yield-as-label-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-as-label-identifier-escaped.js",
      ),
    );
    it(
      "async-gen-yield-as-label-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-as-label-identifier.js",
      ),
    );
    it(
      "async-gen-yield-identifier-non-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-identifier-non-strict.js",
      ),
    );
    it(
      "async-gen-yield-identifier-spread-non-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-identifier-spread-non-strict.js",
      ),
    );
    it(
      "async-gen-yield-identifier-spread-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-identifier-spread-strict.js",
      ),
    );
    it(
      "async-gen-yield-identifier-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-identifier-strict.js",
      ),
    );
    it(
      "async-gen-yield-promise-reject-next-catch.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-promise-reject-next-catch.js",
      ),
    );
    it(
      "async-gen-yield-promise-reject-next-for-await-of-async-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-promise-reject-next-for-await-of-async-iterator.js",
      ),
    );
    it(
      "async-gen-yield-promise-reject-next-for-await-of-sync-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-promise-reject-next-for-await-of-sync-iterator.js",
      ),
    );
    it(
      "async-gen-yield-promise-reject-next-yield-star-async-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-promise-reject-next-yield-star-async-iterator.js",
      ),
    );
    it(
      "async-gen-yield-promise-reject-next-yield-star-sync-iterator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-promise-reject-next-yield-star-sync-iterator.js",
      ),
    );
    it(
      "async-gen-yield-promise-reject-next.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-promise-reject-next.js",
      ),
    );
    it(
      "async-gen-yield-spread-arr-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-spread-arr-multiple.js",
      ),
    );
    it(
      "async-gen-yield-spread-arr-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-spread-arr-single.js",
      ),
    );
    it(
      "async-gen-yield-spread-obj.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-spread-obj.js",
      ),
    );
    it(
      "async-gen-yield-star-async-next.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-async-next.js",
      ),
    );
    it(
      "async-gen-yield-star-async-return.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-async-return.js",
      ),
    );
    it(
      "async-gen-yield-star-async-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-async-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-expr-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-expr-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-boolean-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-number-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-object-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-string-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-not-callable-symbol-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-null-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-null-sync-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-returns-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-boolean-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-returns-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-null-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-returns-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-number-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-returns-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-string-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-returns-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-symbol-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-returns-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-returns-undefined-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-async-undefined-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-async-undefined-sync-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-boolean-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-number-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-object-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-string-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-not-callable-symbol-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-returns-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-boolean-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-returns-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-null-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-returns-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-number-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-returns-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-string-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-returns-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-symbol-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-getiter-sync-returns-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-getiter-sync-returns-undefined-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-call-done-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-call-done-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-next-call-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-call-returns-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-next-call-value-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-call-value-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-next-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-next-non-object-ignores-then.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-non-object-ignores-then.js",
      ),
    );
    it(
      "async-gen-yield-star-next-not-callable-boolean-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-boolean-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-not-callable-null-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-null-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-not-callable-number-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-number-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-not-callable-object-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-object-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-not-callable-string-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-string-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-not-callable-symbol-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-symbol-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-not-callable-undefined-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-not-callable-undefined-throw.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-get-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-get-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-non-callable-boolean-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-boolean-fulfillpromise.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-non-callable-null-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-null-fulfillpromise.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-non-callable-number-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-number-fulfillpromise.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-non-callable-object-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-object-fulfillpromise.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-non-callable-string-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-string-fulfillpromise.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-non-callable-symbol-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-symbol-fulfillpromise.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-non-callable-undefined-fulfillpromise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-non-callable-undefined-fulfillpromise.js",
      ),
    );
    it(
      "async-gen-yield-star-next-then-returns-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-next-then-returns-abrupt.js",
      ),
    );
    it(
      "async-gen-yield-star-sync-next.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-sync-next.js",
      ),
    );
    it(
      "async-gen-yield-star-sync-return.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-sync-return.js",
      ),
    );
    it(
      "async-gen-yield-star-sync-throw.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-gen-yield-star-sync-throw.js",
      ),
    );
    it(
      "async-meth-array-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "async-meth-dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-abrupt.js",
      ),
    );
    it(
      "async-meth-dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "async-meth-dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "async-meth-dflt-params-duplicates.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-duplicates.js",
      ),
    );
    it(
      "async-meth-dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-ref-later.js",
      ),
    );
    it(
      "async-meth-dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-ref-prior.js",
      ),
    );
    it(
      "async-meth-dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-ref-self.js",
      ),
    );
    it(
      "async-meth-dflt-params-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-rest.js",
      ),
    );
    it(
      "async-meth-dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-dflt-params-trailing-comma.js",
      ),
    );
    it(
      "async-meth-escaped-async.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-escaped-async.js",
      ),
    );
    it(
      "async-meth-eval-var-scope-syntax-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-eval-var-scope-syntax-err.js",
      ),
    );
    it(
      "async-meth-object-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "async-meth-params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-params-trailing-comma-multiple.js",
      ),
    );
    it(
      "async-meth-params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-params-trailing-comma-single.js",
      ),
    );
    it(
      "async-meth-rest-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-rest-param-strict-body.js",
      ),
    );
    it(
      "async-meth-rest-params-trailing-comma-early-error.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-meth-rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "async-returns-async-arrow-returns-arguments-from-parent-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-returns-async-arrow-returns-arguments-from-parent-function.js",
      ),
    );
    it(
      "async-returns-async-arrow-returns-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-returns-async-arrow-returns-newtarget.js",
      ),
    );
    it(
      "async-returns-async-arrow.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-returns-async-arrow.js",
      ),
    );
    it(
      "async-returns-async-function-returns-arguments-from-own-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-returns-async-function-returns-arguments-from-own-function.js",
      ),
    );
    it(
      "async-returns-async-function-returns-newtarget.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-returns-async-function-returns-newtarget.js",
      ),
    );
    it(
      "async-returns-async-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/async-returns-async-function.js",
      ),
    );
    it(
      "async-super-call-body.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/async-super-call-body.js"),
    );
    it(
      "async-super-call-param.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/async-super-call-param.js"),
    );
    it(
      "computed-property-name-yield-expression.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/computed-property-name-yield-expression.js",
      ),
    );
    it(
      "early-errors-object-async-method-duplicate-parameters.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-async-method-duplicate-parameters.js",
      ),
    );
    it(
      "early-errors-object-method-NSPL-with-USD.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-NSPL-with-USD.js",
      ),
    );
    it(
      "early-errors-object-method-arguments-in-formal-parameters.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-arguments-in-formal-parameters.js",
      ),
    );
    it(
      "early-errors-object-method-async-lineterminator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-async-lineterminator.js",
      ),
    );
    it(
      "early-errors-object-method-await-in-formals-default.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-await-in-formals-default.js",
      ),
    );
    it(
      "early-errors-object-method-await-in-formals.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-await-in-formals.js",
      ),
    );
    it(
      "early-errors-object-method-body-contains-super-call.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-body-contains-super-call.js",
      ),
    );
    it(
      "early-errors-object-method-duplicate-parameters.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-duplicate-parameters.js",
      ),
    );
    it(
      "early-errors-object-method-eval-in-formal-parameters.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-eval-in-formal-parameters.js",
      ),
    );
    it(
      "early-errors-object-method-formals-body-duplicate.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-formals-body-duplicate.js",
      ),
    );
    it(
      "early-errors-object-method-formals-contains-super-call.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/early-errors-object-method-formals-contains-super-call.js",
      ),
    );
    it(
      "escaped-get-e.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-get-e.js"),
    );
    it(
      "escaped-get-g.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-get-g.js"),
    );
    it(
      "escaped-get-t.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-get-t.js"),
    );
    it(
      "escaped-get.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-get.js"),
    );
    it(
      "escaped-set-e.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-set-e.js"),
    );
    it(
      "escaped-set-s.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-set-s.js"),
    );
    it(
      "escaped-set-t.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-set-t.js"),
    );
    it(
      "escaped-set.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/escaped-set.js"),
    );
    it(
      "fn-name-fn.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/fn-name-fn.js"),
    );
    it(
      "fn-name-gen.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/fn-name-gen.js"),
    );
    describe("forbidden-ext", () => {
      describe("b1", () => {
        it(
          "async-gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/async-gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "async-gen-meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/async-gen-meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
        it(
          "async-meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/async-meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "async-meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/async-meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
        it(
          "gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/gen-meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "gen-meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/gen-meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
        it(
          "meth-forbidden-ext-direct-access-prop-arguments.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/meth-forbidden-ext-direct-access-prop-arguments.js",
          ),
        );
        it(
          "meth-forbidden-ext-direct-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b1/meth-forbidden-ext-direct-access-prop-caller.js",
          ),
        );
      });
      describe("b2", () => {
        it(
          "async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/async-gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "async-gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/async-gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
        it(
          "async-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/async-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "async-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/async-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "async-meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/async-meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
        it(
          "gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/gen-meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/gen-meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/gen-meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
        it(
          "meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/meth-forbidden-ext-indirect-access-own-prop-caller-get.js",
          ),
        );
        it(
          "meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/meth-forbidden-ext-indirect-access-own-prop-caller-value.js",
          ),
        );
        it(
          "meth-forbidden-ext-indirect-access-prop-caller.js",
          { tags: ["known-passing"] },
          createTestHandler(
            "language/expressions/object/method-definition/forbidden-ext/b2/meth-forbidden-ext-indirect-access-prop-caller.js",
          ),
        );
      });
    });
    it(
      "gen-meth-array-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "gen-meth-dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-abrupt.js",
      ),
    );
    it(
      "gen-meth-dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "gen-meth-dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "gen-meth-dflt-params-duplicates.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-duplicates.js",
      ),
    );
    it(
      "gen-meth-dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-ref-later.js",
      ),
    );
    it(
      "gen-meth-dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-ref-prior.js",
      ),
    );
    it(
      "gen-meth-dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-ref-self.js",
      ),
    );
    it(
      "gen-meth-dflt-params-rest.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-rest.js",
      ),
    );
    it(
      "gen-meth-dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-dflt-params-trailing-comma.js",
      ),
    );
    it(
      "gen-meth-eval-var-scope-syntax-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-eval-var-scope-syntax-err.js",
      ),
    );
    it(
      "gen-meth-object-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "gen-meth-params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-params-trailing-comma-multiple.js",
      ),
    );
    it(
      "gen-meth-params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-params-trailing-comma-single.js",
      ),
    );
    it(
      "gen-meth-rest-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-rest-param-strict-body.js",
      ),
    );
    it(
      "gen-meth-rest-params-trailing-comma-early-error.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-meth-rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "gen-yield-as-binding-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-as-binding-identifier-escaped.js",
      ),
    );
    it(
      "gen-yield-as-binding-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-as-binding-identifier.js",
      ),
    );
    it(
      "gen-yield-as-identifier-reference-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-as-identifier-reference-escaped.js",
      ),
    );
    it(
      "gen-yield-as-identifier-reference.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-as-identifier-reference.js",
      ),
    );
    it(
      "gen-yield-as-label-identifier-escaped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-as-label-identifier-escaped.js",
      ),
    );
    it(
      "gen-yield-as-label-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-as-label-identifier.js",
      ),
    );
    it(
      "gen-yield-identifier-non-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-identifier-non-strict.js",
      ),
    );
    it(
      "gen-yield-identifier-spread-non-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-identifier-spread-non-strict.js",
      ),
    );
    it(
      "gen-yield-identifier-spread-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-identifier-spread-strict.js",
      ),
    );
    it(
      "gen-yield-identifier-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-identifier-strict.js",
      ),
    );
    it(
      "gen-yield-spread-arr-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-spread-arr-multiple.js",
      ),
    );
    it(
      "gen-yield-spread-arr-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/gen-yield-spread-arr-single.js",
      ),
    );
    it(
      "gen-yield-spread-obj.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/gen-yield-spread-obj.js"),
    );
    it(
      "generator-invoke-ctor.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-invoke-ctor.js"),
    );
    it(
      "generator-invoke-fn-no-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-invoke-fn-no-strict.js",
      ),
    );
    it(
      "generator-invoke-fn-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-invoke-fn-strict.js",
      ),
    );
    it(
      "generator-length-dflt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-length-dflt.js"),
    );
    it(
      "generator-length.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-length.js"),
    );
    it(
      "generator-name-prop-string.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-name-prop-string.js",
      ),
    );
    it(
      "generator-name-prop-symbol.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-name-prop-symbol.js",
      ),
    );
    it(
      "generator-no-yield.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-no-yield.js"),
    );
    it(
      "generator-param-id-yield.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-param-id-yield.js",
      ),
    );
    it(
      "generator-param-init-yield.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-param-init-yield.js",
      ),
    );
    it(
      "generator-param-redecl-const.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-param-redecl-const.js",
      ),
    );
    it(
      "generator-param-redecl-let.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-param-redecl-let.js",
      ),
    );
    it(
      "generator-params.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-params.js"),
    );
    it(
      "generator-prop-name-eval-error.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-prop-name-eval-error.js",
      ),
    );
    it(
      "generator-prop-name-yield-expr.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-prop-name-yield-expr.js",
      ),
    );
    it(
      "generator-prop-name-yield-id.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-prop-name-yield-id.js",
      ),
    );
    it(
      "generator-property-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-property-desc.js"),
    );
    it(
      "generator-prototype-prop.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-prototype-prop.js",
      ),
    );
    it(
      "generator-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-prototype.js"),
    );
    it(
      "generator-return.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/generator-return.js"),
    );
    it(
      "generator-super-call-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-super-call-body.js",
      ),
    );
    it(
      "generator-super-call-param.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-super-call-param.js",
      ),
    );
    it(
      "generator-super-prop-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-super-prop-body.js",
      ),
    );
    it(
      "generator-super-prop-param.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-super-prop-param.js",
      ),
    );
    it(
      "generator-use-strict-with-non-simple-param.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/generator-use-strict-with-non-simple-param.js",
      ),
    );
    it(
      "meth-array-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-array-destructuring-param-strict-body.js",
      ),
    );
    it(
      "meth-dflt-params-abrupt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/meth-dflt-params-abrupt.js"),
    );
    it(
      "meth-dflt-params-arg-val-not-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-dflt-params-arg-val-not-undefined.js",
      ),
    );
    it(
      "meth-dflt-params-arg-val-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-dflt-params-arg-val-undefined.js",
      ),
    );
    it(
      "meth-dflt-params-duplicates.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-dflt-params-duplicates.js",
      ),
    );
    it(
      "meth-dflt-params-ref-later.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-dflt-params-ref-later.js",
      ),
    );
    it(
      "meth-dflt-params-ref-prior.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-dflt-params-ref-prior.js",
      ),
    );
    it(
      "meth-dflt-params-ref-self.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-dflt-params-ref-self.js",
      ),
    );
    it(
      "meth-dflt-params-rest.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/meth-dflt-params-rest.js"),
    );
    it(
      "meth-dflt-params-trailing-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-dflt-params-trailing-comma.js",
      ),
    );
    it(
      "meth-eval-var-scope-syntax-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-eval-var-scope-syntax-err.js",
      ),
    );
    it(
      "meth-object-destructuring-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-object-destructuring-param-strict-body.js",
      ),
    );
    it(
      "meth-params-trailing-comma-multiple.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-params-trailing-comma-multiple.js",
      ),
    );
    it(
      "meth-params-trailing-comma-single.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-params-trailing-comma-single.js",
      ),
    );
    it(
      "meth-rest-param-strict-body.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-rest-param-strict-body.js",
      ),
    );
    it(
      "meth-rest-params-trailing-comma-early-error.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/meth-rest-params-trailing-comma-early-error.js",
      ),
    );
    it(
      "name-invoke-ctor.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-invoke-ctor.js"),
    );
    it(
      "name-invoke-fn-no-strict.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/name-invoke-fn-no-strict.js",
      ),
    );
    it(
      "name-invoke-fn-strict.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-invoke-fn-strict.js"),
    );
    it(
      "name-length-dflt.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-length-dflt.js"),
    );
    it(
      "name-length.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-length.js"),
    );
    it(
      "name-name-prop-string.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-name-prop-string.js"),
    );
    it(
      "name-name-prop-symbol.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-name-prop-symbol.js"),
    );
    it(
      "name-param-id-yield.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-param-id-yield.js"),
    );
    it(
      "name-param-init-yield.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-param-init-yield.js"),
    );
    it(
      "name-param-redecl.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-param-redecl.js"),
    );
    it(
      "name-params.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-params.js"),
    );
    it(
      "name-prop-name-eval-error.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/name-prop-name-eval-error.js",
      ),
    );
    it(
      "name-prop-name-yield-expr.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/name-prop-name-yield-expr.js",
      ),
    );
    it(
      "name-prop-name-yield-id.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-prop-name-yield-id.js"),
    );
    it(
      "name-property-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-property-desc.js"),
    );
    it(
      "name-prototype-prop.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-prototype-prop.js"),
    );
    it(
      "name-prototype.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-prototype.js"),
    );
    it(
      "name-super-call-body.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-super-call-body.js"),
    );
    it(
      "name-super-call-param.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-super-call-param.js"),
    );
    it(
      "name-super-prop-body.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-super-prop-body.js"),
    );
    it(
      "name-super-prop-param.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/name-super-prop-param.js"),
    );
    it(
      "object-method-returns-promise.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/object-method-returns-promise.js",
      ),
    );
    it(
      "params-dflt-gen-meth-args-unmapped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/params-dflt-gen-meth-args-unmapped.js",
      ),
    );
    it(
      "params-dflt-gen-meth-ref-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/params-dflt-gen-meth-ref-arguments.js",
      ),
    );
    it(
      "params-dflt-meth-args-unmapped.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/params-dflt-meth-args-unmapped.js",
      ),
    );
    it(
      "params-dflt-meth-ref-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/params-dflt-meth-ref-arguments.js",
      ),
    );
    it(
      "private-name-early-error-async-fn-inside-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-async-fn-inside-class.js",
      ),
    );
    it(
      "private-name-early-error-async-fn.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-async-fn.js",
      ),
    );
    it(
      "private-name-early-error-async-gen-inside-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-async-gen-inside-class.js",
      ),
    );
    it(
      "private-name-early-error-async-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-async-gen.js",
      ),
    );
    it(
      "private-name-early-error-gen-inside-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-gen-inside-class.js",
      ),
    );
    it(
      "private-name-early-error-gen.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-gen.js",
      ),
    );
    it(
      "private-name-early-error-get-method-inside-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-get-method-inside-class.js",
      ),
    );
    it(
      "private-name-early-error-get-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-get-method.js",
      ),
    );
    it(
      "private-name-early-error-method-inside-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-method-inside-class.js",
      ),
    );
    it(
      "private-name-early-error-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-method.js",
      ),
    );
    it(
      "private-name-early-error-set-method-inside-class.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-set-method-inside-class.js",
      ),
    );
    it(
      "private-name-early-error-set-method.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/private-name-early-error-set-method.js",
      ),
    );
    it(
      "setter-use-strict-with-non-simple-param.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/setter-use-strict-with-non-simple-param.js",
      ),
    );
    it(
      "static-init-await-binding-accessor.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/static-init-await-binding-accessor.js",
      ),
    );
    it(
      "static-init-await-binding-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/static-init-await-binding-generator.js",
      ),
    );
    it(
      "static-init-await-binding-normal.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/static-init-await-binding-normal.js",
      ),
    );
    it(
      "static-init-await-reference-accessor.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/static-init-await-reference-accessor.js",
      ),
    );
    it(
      "static-init-await-reference-generator.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/static-init-await-reference-generator.js",
      ),
    );
    it(
      "static-init-await-reference-normal.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/static-init-await-reference-normal.js",
      ),
    );
    it(
      "use-strict-with-non-simple-param.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/use-strict-with-non-simple-param.js",
      ),
    );
    it(
      "yield-as-expression-with-rhs.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-as-expression-with-rhs.js",
      ),
    );
    it(
      "yield-as-expression-without-rhs.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-as-expression-without-rhs.js",
      ),
    );
    it(
      "yield-as-function-expression-binding-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-as-function-expression-binding-identifier.js",
      ),
    );
    it(
      "yield-as-generator-method-binding-identifier.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-as-generator-method-binding-identifier.js",
      ),
    );
    it(
      "yield-as-identifier-in-nested-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-as-identifier-in-nested-function.js",
      ),
    );
    it(
      "yield-as-literal-property-name.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-as-literal-property-name.js",
      ),
    );
    it(
      "yield-as-logical-or-expression.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-as-logical-or-expression.js",
      ),
    );
    it(
      "yield-as-parameter.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/yield-as-parameter.js"),
    );
    it(
      "yield-as-property-name.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/yield-as-property-name.js"),
    );
    it(
      "yield-as-statement.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/yield-as-statement.js"),
    );
    it(
      "yield-as-yield-operand.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/yield-as-yield-operand.js"),
    );
    it(
      "yield-newline.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/yield-newline.js"),
    );
    it(
      "yield-return.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/yield-return.js"),
    );
    it(
      "yield-star-after-newline.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-star-after-newline.js",
      ),
    );
    it(
      "yield-star-before-newline.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/expressions/object/method-definition/yield-star-before-newline.js",
      ),
    );
    it(
      "yield-weak-binding.js",
      { tags: ["known-passing"] },
      createTestHandler("language/expressions/object/method-definition/yield-weak-binding.js"),
    );
  });
  it(
    "method.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/method.js"),
  );
  it(
    "not-defined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/not-defined.js"),
  );
  it(
    "object-spread-proxy-get-not-called-on-dontenum-keys.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/object-spread-proxy-get-not-called-on-dontenum-keys.js",
    ),
  );
  it(
    "object-spread-proxy-no-excluded-keys.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/object-spread-proxy-no-excluded-keys.js"),
  );
  it(
    "object-spread-proxy-ownkeys-returned-keys-order.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/object/object-spread-proxy-ownkeys-returned-keys-order.js",
    ),
  );
  it(
    "prop-def-id-eval-error-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-def-id-eval-error-2.js"),
  );
  it(
    "prop-def-id-eval-error.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-def-id-eval-error.js"),
  );
  it(
    "prop-def-id-get-error.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-def-id-get-error.js"),
  );
  it(
    "prop-def-id-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-def-id-valid.js"),
  );
  it(
    "prop-def-invalid-async-prefix.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-def-invalid-async-prefix.js"),
  );
  it(
    "prop-def-invalid-star-prefix.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-def-invalid-star-prefix.js"),
  );
  it(
    "prop-dup-data-data.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-data-data.js"),
  );
  it(
    "prop-dup-data-set.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-data-set.js"),
  );
  it(
    "prop-dup-get-data.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-get-data.js"),
  );
  it(
    "prop-dup-get-get.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-get-get.js"),
  );
  it(
    "prop-dup-get-set-get.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-get-set-get.js"),
  );
  it(
    "prop-dup-set-data.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-set-data.js"),
  );
  it(
    "prop-dup-set-get-set.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-set-get-set.js"),
  );
  it(
    "prop-dup-set-set.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/prop-dup-set-set.js"),
  );
  it(
    "properties-names-eval-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/properties-names-eval-arguments.js"),
  );
  it(
    "property-name-yield.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/property-name-yield.js"),
  );
  it(
    "scope-gen-meth-body-lex-distinct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-gen-meth-body-lex-distinct.js"),
  );
  it(
    "scope-gen-meth-param-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-gen-meth-param-elem-var-close.js"),
  );
  it(
    "scope-gen-meth-param-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-gen-meth-param-elem-var-open.js"),
  );
  it(
    "scope-gen-meth-param-rest-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-gen-meth-param-rest-elem-var-close.js"),
  );
  it(
    "scope-gen-meth-param-rest-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-gen-meth-param-rest-elem-var-open.js"),
  );
  it(
    "scope-gen-meth-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-gen-meth-paramsbody-var-close.js"),
  );
  it(
    "scope-gen-meth-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-gen-meth-paramsbody-var-open.js"),
  );
  it(
    "scope-getter-body-lex-distinc.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-getter-body-lex-distinc.js"),
  );
  it(
    "scope-meth-body-lex-distinct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-meth-body-lex-distinct.js"),
  );
  it(
    "scope-meth-param-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-meth-param-elem-var-close.js"),
  );
  it(
    "scope-meth-param-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-meth-param-elem-var-open.js"),
  );
  it(
    "scope-meth-param-rest-elem-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-meth-param-rest-elem-var-close.js"),
  );
  it(
    "scope-meth-param-rest-elem-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-meth-param-rest-elem-var-open.js"),
  );
  it(
    "scope-meth-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-meth-paramsbody-var-close.js"),
  );
  it(
    "scope-meth-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-meth-paramsbody-var-open.js"),
  );
  it(
    "scope-setter-body-lex-distinc.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-setter-body-lex-distinc.js"),
  );
  it(
    "scope-setter-paramsbody-var-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-setter-paramsbody-var-close.js"),
  );
  it(
    "scope-setter-paramsbody-var-open.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/scope-setter-paramsbody-var-open.js"),
  );
  it(
    "setter-body-strict-inside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-body-strict-inside.js"),
  );
  it(
    "setter-body-strict-outside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-body-strict-outside.js"),
  );
  it(
    "setter-length-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-length-dflt.js"),
  );
  it(
    "setter-param-arguments-strict-inside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-param-arguments-strict-inside.js"),
  );
  it(
    "setter-param-arguments-strict-outside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-param-arguments-strict-outside.js"),
  );
  it(
    "setter-param-eval-strict-inside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-param-eval-strict-inside.js"),
  );
  it(
    "setter-param-eval-strict-outside.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-param-eval-strict-outside.js"),
  );
  it(
    "setter-prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-prop-desc.js"),
  );
  it(
    "setter-super-prop.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/setter-super-prop.js"),
  );
  it(
    "yield-non-strict-access.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/yield-non-strict-access.js"),
  );
  it(
    "yield-non-strict-syntax.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/object/yield-non-strict-syntax.js"),
  );
});
