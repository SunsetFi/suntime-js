import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("yield", () => {
  it(
    "arguments-object-attributes.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/arguments-object-attributes.js"),
  );
  it(
    "captured-free-vars.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/captured-free-vars.js"),
  );
  it(
    "formal-parameters-after-reassignment-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/yield/formal-parameters-after-reassignment-non-strict.js",
    ),
  );
  it(
    "formal-parameters-after-reassignment-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/formal-parameters-after-reassignment-strict.js"),
  );
  it(
    "formal-parameters.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/formal-parameters.js"),
  );
  it(
    "from-catch.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/from-catch.js"),
  );
  it(
    "from-try.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/from-try.js"),
  );
  it(
    "from-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/from-with.js"),
  );
  it(
    "in-iteration-stmt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/in-iteration-stmt.js"),
  );
  it(
    "in-rltn-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/in-rltn-expr.js"),
  );
  it(
    "invalid-left-hand-side.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/invalid-left-hand-side.js"),
  );
  it(
    "iter-value-specified.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/iter-value-specified.js"),
  );
  it(
    "iter-value-unspecified.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/iter-value-unspecified.js"),
  );
  it(
    "rhs-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/rhs-iter.js"),
  );
  it(
    "rhs-omitted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/rhs-omitted.js"),
  );
  it(
    "rhs-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/rhs-primitive.js"),
  );
  it(
    "rhs-regexp.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/yield/rhs-regexp.js"),
  );
  it(
    "rhs-template-middle.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/rhs-template-middle.js"),
  );
  it(
    "rhs-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/rhs-unresolvable.js"),
  );
  it(
    "rhs-yield.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/rhs-yield.js"),
  );
  it(
    "star-array.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-array.js"),
  );
  it(
    "star-in-iteration-stmt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-in-iteration-stmt.js"),
  );
  it(
    "star-in-rltn-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-in-rltn-expr.js"),
  );
  it(
    "star-iterable.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/yield/star-iterable.js"),
  );
  it(
    "star-return-is-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-return-is-null.js"),
  );
  it(
    "star-rhs-iter-get-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-get-call-err.js"),
  );
  it(
    "star-rhs-iter-get-call-non-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-get-call-non-obj.js"),
  );
  it(
    "star-rhs-iter-get-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-get-get-err.js"),
  );
  it(
    "star-rhs-iter-nrml-next-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-next-call-err.js"),
  );
  it(
    "star-rhs-iter-nrml-next-call-non-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-next-call-non-obj.js"),
  );
  it(
    "star-rhs-iter-nrml-next-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-next-get-err.js"),
  );
  it(
    "star-rhs-iter-nrml-next-invoke.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-next-invoke.js"),
  );
  it(
    "star-rhs-iter-nrml-res-done-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-res-done-err.js"),
  );
  it(
    "star-rhs-iter-nrml-res-done-no-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-res-done-no-value.js"),
  );
  it(
    "star-rhs-iter-nrml-res-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-res-value-err.js"),
  );
  it(
    "star-rhs-iter-nrml-res-value-final.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-nrml-res-value-final.js"),
  );
  it(
    "star-rhs-iter-rtrn-no-rtrn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-no-rtrn.js"),
  );
  it(
    "star-rhs-iter-rtrn-res-done-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-res-done-err.js"),
  );
  it(
    "star-rhs-iter-rtrn-res-done-no-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-res-done-no-value.js"),
  );
  it(
    "star-rhs-iter-rtrn-res-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-res-value-err.js"),
  );
  it(
    "star-rhs-iter-rtrn-res-value-final.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-res-value-final.js"),
  );
  it(
    "star-rhs-iter-rtrn-rtrn-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-rtrn-call-err.js"),
  );
  it(
    "star-rhs-iter-rtrn-rtrn-call-non-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-rtrn-call-non-obj.js"),
  );
  it(
    "star-rhs-iter-rtrn-rtrn-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-rtrn-get-err.js"),
  );
  it(
    "star-rhs-iter-rtrn-rtrn-invoke.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-rtrn-rtrn-invoke.js"),
  );
  it(
    "star-rhs-iter-thrw-res-done-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-res-done-err.js"),
  );
  it(
    "star-rhs-iter-thrw-res-done-no-value.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-res-done-no-value.js"),
  );
  it(
    "star-rhs-iter-thrw-res-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-res-value-err.js"),
  );
  it(
    "star-rhs-iter-thrw-res-value-final.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-res-value-final.js"),
  );
  it(
    "star-rhs-iter-thrw-thrw-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-thrw-call-err.js"),
  );
  it(
    "star-rhs-iter-thrw-thrw-call-non-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-thrw-call-non-obj.js"),
  );
  it(
    "star-rhs-iter-thrw-thrw-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-thrw-get-err.js"),
  );
  it(
    "star-rhs-iter-thrw-thrw-invoke.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-thrw-invoke.js"),
  );
  it(
    "star-rhs-iter-thrw-violation-no-rtrn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-violation-no-rtrn.js"),
  );
  it(
    "star-rhs-iter-thrw-violation-rtrn-call-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-violation-rtrn-call-err.js"),
  );
  it(
    "star-rhs-iter-thrw-violation-rtrn-call-non-obj.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/expressions/yield/star-rhs-iter-thrw-violation-rtrn-call-non-obj.js",
    ),
  );
  it(
    "star-rhs-iter-thrw-violation-rtrn-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-violation-rtrn-get-err.js"),
  );
  it(
    "star-rhs-iter-thrw-violation-rtrn-invoke.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-iter-thrw-violation-rtrn-invoke.js"),
  );
  it(
    "star-rhs-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-rhs-unresolvable.js"),
  );
  it(
    "star-string.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-string.js"),
  );
  it(
    "star-throw-is-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/star-throw-is-null.js"),
  );
  it(
    "then-return.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/then-return.js"),
  );
  it(
    "within-for.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/yield/within-for.js"),
  );
});
