import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Symbol.dispose", () => {
  it.skip("invokes-return.js", () => {
    /* Ignored Test */
  });
  it.skip("is-function.js", () => {
    /* Ignored Test */
  });
  it.skip("length.js", () => {
    /* Ignored Test */
  });
  it.skip("name.js", () => {
    /* Ignored Test */
  });
  it.skip("prop-desc.js", () => {
    /* Ignored Test */
  });
  it.skip("return-val.js", () => {
    /* Ignored Test */
  });
});

describe("Symbol.iterator", () => {
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/Symbol.iterator/is-function.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/Symbol.iterator/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/Symbol.iterator/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/Symbol.iterator/prop-desc.js"),
  );
  it(
    "return-val.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/Symbol.iterator/return-val.js"),
  );
});

describe("Symbol.toStringTag", () => {
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/Symbol.toStringTag/prop-desc.js"),
  );
  it(
    "weird-setter.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/Symbol.toStringTag/weird-setter.js"),
  );
});

describe("constructor", () => {
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/constructor/prop-desc.js"),
  );
  it(
    "weird-setter.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/constructor/weird-setter.js"),
  );
});

describe("drop", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/drop/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/callable.js"),
  );
  it(
    "exhaustion-does-not-call-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/exhaustion-does-not-call-return.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/is-function.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/length.js"),
  );
  it(
    "limit-equals-total.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/limit-equals-total.js"),
  );
  it(
    "limit-greater-than-total.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/limit-greater-than-total.js"),
  );
  it(
    "limit-less-than-total.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/limit-less-than-total.js"),
  );
  it(
    "limit-rangeerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/limit-rangeerror.js"),
  );
  it(
    "limit-tonumber-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/limit-tonumber-throws.js"),
  );
  it(
    "limit-tonumber.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/limit-tonumber.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/drop/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/next-method-throws.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/proto.js"),
  );
  it(
    "result-is-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/result-is-iterator.js"),
  );
  it(
    "return-is-forwarded.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/return-is-forwarded.js"),
  );
  it(
    "return-is-not-forwarded-after-exhaustion.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/drop/return-is-not-forwarded-after-exhaustion.js",
    ),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/this-plain-iterator.js"),
  );
  it(
    "throws-typeerror-when-generator-is-running.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/drop/throws-typeerror-when-generator-is-running.js",
    ),
  );
  it(
    "underlying-iterator-advanced-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/drop/underlying-iterator-advanced-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/drop/underlying-iterator-closed-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/drop/underlying-iterator-closed.js"),
  );
});

describe("every", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/every/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/callable.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/is-function.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/iterator-already-exhausted.js"),
  );
  it(
    "iterator-has-no-return.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/iterator-has-no-return.js"),
  );
  it(
    "iterator-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/iterator-return-method-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/every/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/next-method-throws.js"),
  );
  it(
    "non-callable-predicate.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/non-callable-predicate.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/non-constructible.js"),
  );
  it(
    "predicate-args.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/predicate-args.js"),
  );
  it(
    "predicate-returns-falsey.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/predicate-returns-falsey.js"),
  );
  it(
    "predicate-returns-non-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/predicate-returns-non-boolean.js"),
  );
  it(
    "predicate-returns-truthy-then-falsey.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/predicate-returns-truthy-then-falsey.js"),
  );
  it(
    "predicate-returns-truthy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/predicate-returns-truthy.js"),
  );
  it(
    "predicate-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/predicate-this.js"),
  );
  it(
    "predicate-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/every/predicate-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "predicate-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/every/predicate-throws.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/proto.js"),
  );
  it(
    "result-is-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/result-is-boolean.js"),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/every/this-plain-iterator.js"),
  );
});

describe("filter", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/filter/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/callable.js"),
  );
  it(
    "exhaustion-does-not-call-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/exhaustion-does-not-call-return.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/is-function.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/iterator-already-exhausted.js"),
  );
  it(
    "iterator-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/iterator-return-method-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/filter/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/next-method-throws.js"),
  );
  it(
    "non-callable-predicate.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/non-callable-predicate.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/non-constructible.js"),
  );
  it(
    "predicate-args.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/predicate-args.js"),
  );
  it(
    "predicate-filters.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/predicate-filters.js"),
  );
  it(
    "predicate-returns-non-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/predicate-returns-non-boolean.js"),
  );
  it(
    "predicate-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/predicate-this.js"),
  );
  it(
    "predicate-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/filter/predicate-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "predicate-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/predicate-throws.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/proto.js"),
  );
  it(
    "result-is-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/result-is-iterator.js"),
  );
  it(
    "return-is-forwarded.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/return-is-forwarded.js"),
  );
  it(
    "return-is-not-forwarded-after-exhaustion.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/filter/return-is-not-forwarded-after-exhaustion.js",
    ),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/this-plain-iterator.js"),
  );
  it(
    "throws-typeerror-when-generator-is-running.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/filter/throws-typeerror-when-generator-is-running.js",
    ),
  );
  it(
    "underlying-iterator-advanced-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/filter/underlying-iterator-advanced-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/filter/underlying-iterator-closed-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/filter/underlying-iterator-closed.js"),
  );
});

describe("find", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/find/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/callable.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/is-function.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/iterator-already-exhausted.js"),
  );
  it(
    "iterator-has-no-return.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/iterator-has-no-return.js"),
  );
  it(
    "iterator-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/iterator-return-method-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/find/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/next-method-throws.js"),
  );
  it(
    "non-callable-predicate.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/non-callable-predicate.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/non-constructible.js"),
  );
  it(
    "predicate-args.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/predicate-args.js"),
  );
  it(
    "predicate-returns-falsey-then-truthy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/predicate-returns-falsey-then-truthy.js"),
  );
  it(
    "predicate-returns-falsey.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/predicate-returns-falsey.js"),
  );
  it(
    "predicate-returns-non-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/predicate-returns-non-boolean.js"),
  );
  it(
    "predicate-returns-truthy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/predicate-returns-truthy.js"),
  );
  it(
    "predicate-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/predicate-this.js"),
  );
  it(
    "predicate-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/find/predicate-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "predicate-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/find/predicate-throws.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/proto.js"),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/find/this-plain-iterator.js"),
  );
});

describe("flatMap", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/callable.js"),
  );
  it(
    "exhaustion-does-not-call-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/exhaustion-does-not-call-return.js"),
  );
  it(
    "flattens-iterable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/flattens-iterable.js"),
  );
  it(
    "flattens-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/flattens-iterator.js"),
  );
  it(
    "flattens-only-depth-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/flattens-only-depth-1.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/is-function.js"),
  );
  it(
    "iterable-primitives-are-not-flattened.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/iterable-primitives-are-not-flattened.js",
    ),
  );
  it(
    "iterable-to-iterator-fallback.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/iterable-to-iterator-fallback.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/iterator-already-exhausted.js"),
  );
  it(
    "iterator-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/iterator-return-method-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/length.js"),
  );
  it(
    "mapper-args.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/mapper-args.js"),
  );
  it(
    "mapper-returns-closed-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/mapper-returns-closed-iterator.js"),
  );
  it(
    "mapper-returns-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/mapper-returns-non-object.js"),
  );
  it(
    "mapper-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/mapper-this.js"),
  );
  it(
    "mapper-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/mapper-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "mapper-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/mapper-throws.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/next-method-throws.js"),
  );
  it(
    "non-callable-mapper.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/non-callable-mapper.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/proto.js"),
  );
  it(
    "result-is-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/result-is-iterator.js"),
  );
  it(
    "return-is-forwarded-to-mapper-result.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/return-is-forwarded-to-mapper-result.js",
    ),
  );
  it(
    "return-is-forwarded-to-underlying-iterator.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/return-is-forwarded-to-underlying-iterator.js",
    ),
  );
  it(
    "return-is-not-forwarded-after-exhaustion.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/return-is-not-forwarded-after-exhaustion.js",
    ),
  );
  it(
    "strings-are-not-flattened.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/strings-are-not-flattened.js"),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/this-plain-iterator.js"),
  );
  it(
    "throws-typeerror-when-generator-is-running.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/throws-typeerror-when-generator-is-running.js",
    ),
  );
  it(
    "underlying-iterator-advanced-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/underlying-iterator-advanced-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/flatMap/underlying-iterator-closed-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/flatMap/underlying-iterator-closed.js"),
  );
});

describe("forEach", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/forEach/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/callable.js"),
  );
  it(
    "fn-args.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/fn-args.js"),
  );
  it(
    "fn-called-for-each-yielded-value.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/fn-called-for-each-yielded-value.js"),
  );
  it(
    "fn-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/fn-this.js"),
  );
  it(
    "fn-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/forEach/fn-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "fn-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/fn-throws.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/get-next-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/is-function.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/iterator-already-exhausted.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/forEach/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/next-method-throws.js"),
  );
  it(
    "non-callable-predicate.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/non-callable-predicate.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/proto.js"),
  );
  it(
    "result-is-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/result-is-undefined.js"),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/forEach/this-plain-iterator.js"),
  );
});

it(
  "initial-value.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Iterator/prototype/initial-value.js"),
);

describe("map", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/callable.js"),
  );
  it(
    "exhaustion-does-not-call-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/exhaustion-does-not-call-return.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/is-function.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/iterator-already-exhausted.js"),
  );
  it(
    "iterator-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/iterator-return-method-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/length.js"),
  );
  it(
    "mapper-args.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/mapper-args.js"),
  );
  it(
    "mapper-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/mapper-this.js"),
  );
  it(
    "mapper-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/mapper-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "mapper-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/mapper-throws.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/map/next-method-throws.js"),
  );
  it(
    "non-callable-mapper.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/non-callable-mapper.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/proto.js"),
  );
  it(
    "result-is-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/result-is-iterator.js"),
  );
  it(
    "return-is-forwarded-to-underlying-iterator.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/return-is-forwarded-to-underlying-iterator.js",
    ),
  );
  it(
    "return-is-not-forwarded-after-exhaustion.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/return-is-not-forwarded-after-exhaustion.js",
    ),
  );
  it(
    "returned-iterator-yields-mapper-return-values.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/returned-iterator-yields-mapper-return-values.js",
    ),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/this-plain-iterator.js"),
  );
  it(
    "throws-typeerror-when-generator-is-running.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/throws-typeerror-when-generator-is-running.js",
    ),
  );
  it(
    "underlying-iterator-advanced-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/map/underlying-iterator-advanced-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/underlying-iterator-closed-in-parallel.js"),
  );
  it(
    "underlying-iterator-closed.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/map/underlying-iterator-closed.js"),
  );
});

describe("reduce", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/reduce/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/callable.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/get-next-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/is-function.js"),
  );
  it(
    "iterator-already-exhausted-initial-value.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/reduce/iterator-already-exhausted-initial-value.js",
    ),
  );
  it(
    "iterator-already-exhausted-no-initial-value.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/reduce/iterator-already-exhausted-no-initial-value.js",
    ),
  );
  it(
    "iterator-yields-once-initial-value.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/iterator-yields-once-initial-value.js"),
  );
  it(
    "iterator-yields-once-no-initial-value.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/reduce/iterator-yields-once-no-initial-value.js",
    ),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/reduce/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/next-method-throws.js"),
  );
  it(
    "non-callable-reducer.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/non-callable-reducer.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/proto.js"),
  );
  it(
    "reducer-args-initial-value.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/reducer-args-initial-value.js"),
  );
  it(
    "reducer-args-no-initial-value.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/reducer-args-no-initial-value.js"),
  );
  it(
    "reducer-memo-can-be-any-type.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/reducer-memo-can-be-any-type.js"),
  );
  it(
    "reducer-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/reducer-this.js"),
  );
  it(
    "reducer-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/reduce/reducer-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "reducer-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/reducer-throws.js"),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/reduce/this-plain-iterator.js"),
  );
});

describe("some", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/some/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/callable.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/is-function.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/iterator-already-exhausted.js"),
  );
  it(
    "iterator-has-no-return.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/iterator-has-no-return.js"),
  );
  it(
    "iterator-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/iterator-return-method-throws.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/some/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/next-method-throws.js"),
  );
  it(
    "non-callable-predicate.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/non-callable-predicate.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/non-constructible.js"),
  );
  it(
    "predicate-args.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/predicate-args.js"),
  );
  it(
    "predicate-returns-falsey-then-truthy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/predicate-returns-falsey-then-truthy.js"),
  );
  it(
    "predicate-returns-falsey.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/predicate-returns-falsey.js"),
  );
  it(
    "predicate-returns-non-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/predicate-returns-non-boolean.js"),
  );
  it(
    "predicate-returns-truthy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/predicate-returns-truthy.js"),
  );
  it(
    "predicate-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/predicate-this.js"),
  );
  it(
    "predicate-throws-then-closing-iterator-also-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/some/predicate-throws-then-closing-iterator-also-throws.js",
    ),
  );
  it(
    "predicate-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/some/predicate-throws.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/proto.js"),
  );
  it(
    "result-is-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/result-is-boolean.js"),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/some/this-plain-iterator.js"),
  );
});

describe("take", () => {
  it(
    "argument-effect-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/argument-effect-order.js"),
  );
  it(
    "argument-validation-failure-closes-underlying.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/take/argument-validation-failure-closes-underlying.js",
    ),
  );
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/callable.js"),
  );
  it(
    "exhaustion-calls-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/exhaustion-calls-return.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/get-next-method-throws.js"),
  );
  it(
    "get-return-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/get-return-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/is-function.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/length.js"),
  );
  it(
    "limit-greater-than-or-equal-to-total.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/limit-greater-than-or-equal-to-total.js"),
  );
  it(
    "limit-less-than-total.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/limit-less-than-total.js"),
  );
  it(
    "limit-rangeerror.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/limit-rangeerror.js"),
  );
  it(
    "limit-tonumber-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/limit-tonumber-throws.js"),
  );
  it(
    "limit-tonumber.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/limit-tonumber.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/take/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/next-method-throws.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/proto.js"),
  );
  it(
    "result-is-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/result-is-iterator.js"),
  );
  it(
    "return-is-forwarded.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/take/return-is-forwarded.js"),
  );
  it(
    "return-is-not-forwarded-after-exhaustion.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/take/return-is-not-forwarded-after-exhaustion.js",
    ),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/this-plain-iterator.js"),
  );
  it(
    "throws-typeerror-when-generator-is-running.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/take/throws-typeerror-when-generator-is-running.js",
    ),
  );
  it(
    "underlying-iterator-advanced-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/take/underlying-iterator-advanced-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed-in-parallel.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/take/underlying-iterator-closed-in-parallel.js",
    ),
  );
  it(
    "underlying-iterator-closed.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/take/underlying-iterator-closed.js"),
  );
});

describe("toArray", () => {
  it(
    "callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/callable.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/get-next-method-throws.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/is-function.js"),
  );
  it(
    "iterator-already-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/iterator-already-exhausted.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/name.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/prototype/toArray/next-method-returns-throwing-value-done.js",
    ),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/next-method-throws.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/proto.js"),
  );
  it(
    "this-non-callable-next.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/this-non-callable-next.js"),
  );
  it(
    "this-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/this-non-object.js"),
  );
  it(
    "this-plain-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/prototype/toArray/this-plain-iterator.js"),
  );
});
