import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("from", () => {
  it(
    "callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/callable.js"),
  );
  it(
    "get-next-method-only-once.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/get-next-method-only-once.js"),
  );
  it(
    "get-next-method-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/get-next-method-throws.js"),
  );
  it(
    "get-return-method-when-call-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/get-return-method-when-call-return.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/is-function.js"),
  );
  it(
    "iterable-primitives.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/iterable-primitives.js"),
  );
  it(
    "iterable-to-iterator-fallback.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/iterable-to-iterator-fallback.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Iterator/from/name.js"));
  it(
    "non-constructible.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Iterator/from/non-constructible.js"),
  );
  it(
    "primitives.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/primitives.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/proto.js"),
  );
  it(
    "result-proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/result-proto.js"),
  );
  it(
    "return-method-calls-base-return-method.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/return-method-calls-base-return-method.js"),
  );
  it(
    "return-method-returns-iterator-result.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/return-method-returns-iterator-result.js"),
  );
  it(
    "return-method-throws-for-invalid-this.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/return-method-throws-for-invalid-this.js"),
  );
  it(
    "supports-iterable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/supports-iterable.js"),
  );
  it(
    "supports-iterator.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Iterator/from/supports-iterator.js"),
  );
});
