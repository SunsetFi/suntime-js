import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("logical-assignment", () => {
  it(
    "left-hand-side-private-reference-accessor-property-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-accessor-property-and.js",
    ),
  );
  it(
    "left-hand-side-private-reference-accessor-property-nullish.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-accessor-property-nullish.js",
    ),
  );
  it(
    "left-hand-side-private-reference-accessor-property-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-accessor-property-or.js",
    ),
  );
  it(
    "left-hand-side-private-reference-accessor-property-short-circuit-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-accessor-property-short-circuit-and.js",
    ),
  );
  it(
    "left-hand-side-private-reference-accessor-property-short-circuit-nullish.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-accessor-property-short-circuit-nullish.js",
    ),
  );
  it(
    "left-hand-side-private-reference-accessor-property-short-circuit-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-accessor-property-short-circuit-or.js",
    ),
  );
  it(
    "left-hand-side-private-reference-data-property-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-data-property-and.js",
    ),
  );
  it(
    "left-hand-side-private-reference-data-property-nullish.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-data-property-nullish.js",
    ),
  );
  it(
    "left-hand-side-private-reference-data-property-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-data-property-or.js",
    ),
  );
  it(
    "left-hand-side-private-reference-data-property-short-circuit-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-data-property-short-circuit-and.js",
    ),
  );
  it(
    "left-hand-side-private-reference-data-property-short-circuit-nullish.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-data-property-short-circuit-nullish.js",
    ),
  );
  it(
    "left-hand-side-private-reference-data-property-short-circuit-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-data-property-short-circuit-or.js",
    ),
  );
  it(
    "left-hand-side-private-reference-method-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-method-and.js",
    ),
  );
  it(
    "left-hand-side-private-reference-method-short-circuit-nullish.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-method-short-circuit-nullish.js",
    ),
  );
  it(
    "left-hand-side-private-reference-method-short-circuit-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-method-short-circuit-or.js",
    ),
  );
  it(
    "left-hand-side-private-reference-readonly-accessor-property-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-readonly-accessor-property-and.js",
    ),
  );
  it(
    "left-hand-side-private-reference-readonly-accessor-property-nullish.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-readonly-accessor-property-nullish.js",
    ),
  );
  it(
    "left-hand-side-private-reference-readonly-accessor-property-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-readonly-accessor-property-or.js",
    ),
  );
  it(
    "left-hand-side-private-reference-readonly-accessor-property-short-circuit-and.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-readonly-accessor-property-short-circuit-and.js",
    ),
  );
  it(
    "left-hand-side-private-reference-readonly-accessor-property-short-circuit-nullish.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-readonly-accessor-property-short-circuit-nullish.js",
    ),
  );
  it(
    "left-hand-side-private-reference-readonly-accessor-property-short-circuit-or.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/left-hand-side-private-reference-readonly-accessor-property-short-circuit-or.js",
    ),
  );
  it(
    "lgcl-and-arguments-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-and-arguments-strict.js"),
  );
  it(
    "lgcl-and-assignment-operator-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-bigint.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-lhs-before-rhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-lhs-before-rhs.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-namedevaluation-arrow-function.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-namedevaluation-arrow-function.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-namedevaluation-class-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-namedevaluation-class-expression.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-namedevaluation-function.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-namedevaluation-function.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-no-set-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-no-set-put.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-no-set.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-no-set.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-non-extensible.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-non-extensible.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-non-simple-lhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-non-simple-lhs.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-non-writeable-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-non-writeable-put.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-non-writeable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-non-writeable.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-unresolved-lhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-unresolved-lhs.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-unresolved-rhs-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-unresolved-rhs-put.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator-unresolved-rhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-and-assignment-operator-unresolved-rhs.js",
    ),
  );
  it(
    "lgcl-and-assignment-operator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-and-assignment-operator.js"),
  );
  it(
    "lgcl-and-eval-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-and-eval-strict.js"),
  );
  it(
    "lgcl-and-non-simple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-and-non-simple.js"),
  );
  it(
    "lgcl-and-whitespace.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-and-whitespace.js"),
  );
  it(
    "lgcl-nullish-arguments-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-nullish-arguments-strict.js"),
  );
  it(
    "lgcl-nullish-assignment-operator-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-bigint.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-lhs-before-rhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-lhs-before-rhs.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-namedevaluation-arrow-function.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-namedevaluation-arrow-function.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-namedevaluation-class-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-namedevaluation-class-expression.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-namedevaluation-function.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-namedevaluation-function.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-no-set-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-no-set-put.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-no-set.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-no-set.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-non-extensible.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-non-extensible.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-non-simple-lhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-non-simple-lhs.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-non-writeable-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-non-writeable-put.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-non-writeable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-non-writeable.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-unresolved-lhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-unresolved-lhs.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-unresolved-rhs-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-unresolved-rhs-put.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator-unresolved-rhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator-unresolved-rhs.js",
    ),
  );
  it(
    "lgcl-nullish-assignment-operator.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-nullish-assignment-operator.js",
    ),
  );
  it(
    "lgcl-nullish-eval-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-nullish-eval-strict.js"),
  );
  it(
    "lgcl-nullish-non-simple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-nullish-non-simple.js"),
  );
  it(
    "lgcl-nullish-whitespace.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-nullish-whitespace.js"),
  );
  it(
    "lgcl-or-arguments-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-or-arguments-strict.js"),
  );
  it(
    "lgcl-or-assignment-operator-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-bigint.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-lhs-before-rhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-lhs-before-rhs.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-namedevaluation-arrow-function.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-namedevaluation-arrow-function.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-namedevaluation-class-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-namedevaluation-class-expression.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-namedevaluation-function.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-namedevaluation-function.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-no-set-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-no-set-put.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-no-set.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-no-set.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-non-extensible.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-non-extensible.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-non-simple-lhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-non-simple-lhs.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-non-writeable-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-non-writeable-put.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-non-writeable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-non-writeable.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-unresolved-lhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-unresolved-lhs.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-unresolved-rhs-put.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-unresolved-rhs-put.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator-unresolved-rhs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/logical-assignment/lgcl-or-assignment-operator-unresolved-rhs.js",
    ),
  );
  it(
    "lgcl-or-assignment-operator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-or-assignment-operator.js"),
  );
  it(
    "lgcl-or-eval-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-or-eval-strict.js"),
  );
  it(
    "lgcl-or-non-simple.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-or-non-simple.js"),
  );
  it(
    "lgcl-or-whitespace.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/logical-assignment/lgcl-or-whitespace.js"),
  );
});
