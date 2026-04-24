import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("any", () => {
  it(
    "call-reject-element-after-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/call-reject-element-after-return.js"),
  );
  it(
    "call-reject-element-items.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/call-reject-element-items.js"),
  );
  it(
    "capability-executor-called-twice.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/capability-executor-called-twice.js"),
  );
  it(
    "capability-executor-not-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/capability-executor-not-callable.js"),
  );
  it(
    "capability-reject-throws-no-close.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/capability-reject-throws-no-close.js"),
  );
  it(
    "capability-resolve-throws-no-close.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/capability-resolve-throws-no-close.js"),
  );
  it(
    "capability-resolve-throws-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/capability-resolve-throws-reject.js"),
  );
  it(
    "ctx-ctor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/ctx-ctor-throws.js"),
  );
  it(
    "ctx-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/ctx-ctor.js"),
  );
  it(
    "ctx-non-ctor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/ctx-non-ctor.js"),
  );
  it(
    "ctx-non-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Promise/any/ctx-non-object.js"),
  );
  it(
    "invoke-resolve-error-close.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve-error-close.js"),
  );
  it(
    "invoke-resolve-error-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve-error-reject.js"),
  );
  it(
    "invoke-resolve-get-error-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve-get-error-reject.js"),
  );
  it(
    "invoke-resolve-get-error.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve-get-error.js"),
  );
  it(
    "invoke-resolve-get-once-multiple-calls.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve-get-once-multiple-calls.js"),
  );
  it(
    "invoke-resolve-get-once-no-calls.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve-get-once-no-calls.js"),
  );
  it(
    "invoke-resolve-on-promises-every-iteration-of-custom.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Promise/any/invoke-resolve-on-promises-every-iteration-of-custom.js",
    ),
  );
  it(
    "invoke-resolve-on-promises-every-iteration-of-promise.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Promise/any/invoke-resolve-on-promises-every-iteration-of-promise.js",
    ),
  );
  it(
    "invoke-resolve-on-values-every-iteration-of-custom.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Promise/any/invoke-resolve-on-values-every-iteration-of-custom.js",
    ),
  );
  it(
    "invoke-resolve-on-values-every-iteration-of-promise.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Promise/any/invoke-resolve-on-values-every-iteration-of-promise.js",
    ),
  );
  it(
    "invoke-resolve-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve-return.js"),
  );
  it(
    "invoke-resolve.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-resolve.js"),
  );
  it(
    "invoke-then-error-close.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-then-error-close.js"),
  );
  it(
    "invoke-then-error-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-then-error-reject.js"),
  );
  it(
    "invoke-then-get-error-close.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-then-get-error-close.js"),
  );
  it(
    "invoke-then-get-error-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-then-get-error-reject.js"),
  );
  it(
    "invoke-then-on-promises-every-iteration.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-then-on-promises-every-iteration.js"),
  );
  it(
    "invoke-then.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/invoke-then.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/is-function.js"),
  );
  it(
    "iter-arg-is-empty-iterable-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-empty-iterable-reject.js"),
  );
  it(
    "iter-arg-is-empty-string-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-empty-string-reject.js"),
  );
  it(
    "iter-arg-is-error-object-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-error-object-reject.js"),
  );
  it(
    "iter-arg-is-false-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-false-reject.js"),
  );
  it(
    "iter-arg-is-null-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-null-reject.js"),
  );
  it(
    "iter-arg-is-number-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-number-reject.js"),
  );
  it(
    "iter-arg-is-poisoned.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-poisoned.js"),
  );
  it(
    "iter-arg-is-string-resolve.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-string-resolve.js"),
  );
  it(
    "iter-arg-is-symbol-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-symbol-reject.js"),
  );
  it(
    "iter-arg-is-true-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-true-reject.js"),
  );
  it(
    "iter-arg-is-undefined-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-arg-is-undefined-reject.js"),
  );
  it(
    "iter-assigned-false-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-assigned-false-reject.js"),
  );
  it(
    "iter-assigned-null-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-assigned-null-reject.js"),
  );
  it(
    "iter-assigned-number-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-assigned-number-reject.js"),
  );
  it(
    "iter-assigned-string-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-assigned-string-reject.js"),
  );
  it(
    "iter-assigned-symbol-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-assigned-symbol-reject.js"),
  );
  it(
    "iter-assigned-true-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-assigned-true-reject.js"),
  );
  it(
    "iter-assigned-undefined-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-assigned-undefined-reject.js"),
  );
  it(
    "iter-next-val-err-no-close.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-next-val-err-no-close.js"),
  );
  it(
    "iter-next-val-err-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-next-val-err-reject.js"),
  );
  it(
    "iter-returns-false-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-returns-false-reject.js"),
  );
  it(
    "iter-returns-null-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-returns-null-reject.js"),
  );
  it(
    "iter-returns-number-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-returns-number-reject.js"),
  );
  it(
    "iter-returns-string-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-returns-string-reject.js"),
  );
  it(
    "iter-returns-symbol-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-returns-symbol-reject.js"),
  );
  it(
    "iter-returns-true-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-returns-true-reject.js"),
  );
  it(
    "iter-returns-undefined-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-returns-undefined-reject.js"),
  );
  it(
    "iter-step-err-no-close.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-step-err-no-close.js"),
  );
  it(
    "iter-step-err-reject.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/iter-step-err-reject.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Promise/any/name.js"));
  it(
    "new-reject-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/new-reject-function.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/prop-desc.js"),
  );
  it(
    "reject-all-mixed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-all-mixed.js"),
  );
  it(
    "reject-deferred.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-deferred.js"),
  );
  it(
    "reject-element-function-extensible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-element-function-extensible.js"),
  );
  it(
    "reject-element-function-length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-element-function-length.js"),
  );
  it(
    "reject-element-function-name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-element-function-name.js"),
  );
  it(
    "reject-element-function-nonconstructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-element-function-nonconstructor.js"),
  );
  it(
    "reject-element-function-property-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-element-function-property-order.js"),
  );
  it(
    "reject-element-function-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-element-function-prototype.js"),
  );
  it(
    "reject-from-same-thenable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-from-same-thenable.js"),
  );
  it(
    "reject-ignored-deferred.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Promise/any/reject-ignored-deferred.js"),
  );
  it(
    "reject-ignored-immed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-ignored-immed.js"),
  );
  it(
    "reject-immed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/reject-immed.js"),
  );
  it(
    "resolve-before-loop-exit-from-same.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-before-loop-exit-from-same.js"),
  );
  it(
    "resolve-before-loop-exit.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-before-loop-exit.js"),
  );
  it(
    "resolve-from-reject-catch.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-from-reject-catch.js"),
  );
  it(
    "resolve-from-resolve-reject-catch.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-from-resolve-reject-catch.js"),
  );
  it(
    "resolve-from-same-thenable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-from-same-thenable.js"),
  );
  it(
    "resolve-ignores-late-rejection-deferred.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-ignores-late-rejection-deferred.js"),
  );
  it(
    "resolve-ignores-late-rejection.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-ignores-late-rejection.js"),
  );
  it(
    "resolve-non-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-non-callable.js"),
  );
  it(
    "resolve-non-thenable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-non-thenable.js"),
  );
  it(
    "resolve-not-callable-reject-with-typeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-not-callable-reject-with-typeerror.js"),
  );
  it(
    "resolve-throws-iterator-return-is-not-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-throws-iterator-return-is-not-callable.js"),
  );
  it(
    "resolve-throws-iterator-return-null-or-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolve-throws-iterator-return-null-or-undefined.js"),
  );
  it(
    "resolved-sequence-extra-ticks.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolved-sequence-extra-ticks.js"),
  );
  it(
    "resolved-sequence-mixed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolved-sequence-mixed.js"),
  );
  it(
    "resolved-sequence-with-rejections.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolved-sequence-with-rejections.js"),
  );
  it(
    "resolved-sequence.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/resolved-sequence.js"),
  );
  it(
    "returns-promise.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/returns-promise.js"),
  );
  it(
    "species-get-error.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/any/species-get-error.js"),
  );
});
