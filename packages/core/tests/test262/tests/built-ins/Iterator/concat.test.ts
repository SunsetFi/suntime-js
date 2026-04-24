import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("concat", () => {
  it(
    "arguments-checked-in-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/arguments-checked-in-order.js"),
  );
  it(
    "fresh-iterator-result.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/fresh-iterator-result.js"),
  );
  it(
    "get-iterator-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/get-iterator-method-only-once.js"),
  );
  it(
    "get-iterator-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/get-iterator-method-throws.js"),
  );
  it(
    "get-value-after-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/get-value-after-done.js"),
  );
  it(
    "inner-iterator-created-in-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/inner-iterator-created-in-order.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/is-function.js"),
  );
  it(
    "iterable-primitive-wrapper-objects.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/iterable-primitive-wrapper-objects.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/length.js"),
  );
  it(
    "many-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/many-arguments.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/name.js"),
  );
  it(
    "next-method-called-with-zero-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/next-method-called-with-zero-arguments.js"),
  );
  it(
    "next-method-returns-non-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/next-method-returns-non-object.js"),
  );
  it(
    "next-method-returns-throwing-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/next-method-returns-throwing-done.js"),
  );
  it(
    "next-method-returns-throwing-value-done.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/next-method-returns-throwing-value-done.js"),
  );
  it(
    "next-method-returns-throwing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/next-method-returns-throwing-value.js"),
  );
  it(
    "next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/next-method-throws.js"),
  );
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/concat/non-constructible.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/proto.js"),
  );
  it(
    "result-is-iterator.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/result-is-iterator.js"),
  );
  it(
    "return-is-forwarded.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/return-is-forwarded.js"),
  );
  it(
    "return-is-not-forwarded-after-exhaustion.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/return-is-not-forwarded-after-exhaustion.js"),
  );
  it(
    "return-is-not-forwarded-before-initial-start.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/return-is-not-forwarded-before-initial-start.js"),
  );
  it(
    "return-method-called-with-zero-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/return-method-called-with-zero-arguments.js"),
  );
  it(
    "single-argument.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/single-argument.js"),
  );
  it(
    "throws-typeerror-when-generator-is-running-next.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/concat/throws-typeerror-when-generator-is-running-next.js",
    ),
  );
  it(
    "throws-typeerror-when-generator-is-running-return.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/concat/throws-typeerror-when-generator-is-running-return.js",
    ),
  );
  it(
    "throws-typeerror-when-iterable-not-an-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/throws-typeerror-when-iterable-not-an-object.js"),
  );
  it(
    "throws-typeerror-when-iterator-method-not-callable.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Iterator/concat/throws-typeerror-when-iterator-method-not-callable.js",
    ),
  );
  it(
    "throws-typeerror-when-iterator-not-an-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/throws-typeerror-when-iterator-not-an-object.js"),
  );
  it(
    "zero-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/concat/zero-arguments.js"),
  );
});
