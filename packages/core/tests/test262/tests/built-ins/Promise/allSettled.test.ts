import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "call-resolve-element-after-return.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/call-resolve-element-after-return.js"),
);

it(
  "call-resolve-element-items.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/call-resolve-element-items.js"),
);

it(
  "call-resolve-element.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/call-resolve-element.js"),
);

it(
  "capability-executor-called-twice.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/capability-executor-called-twice.js"),
);

it(
  "capability-executor-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/capability-executor-not-callable.js"),
);

it(
  "capability-resolve-throws-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/capability-resolve-throws-no-close.js"),
);

it(
  "capability-resolve-throws-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/capability-resolve-throws-reject.js"),
);

it(
  "ctx-ctor-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/ctx-ctor-throws.js"),
);

it(
  "ctx-ctor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/ctx-ctor.js"),
);

it(
  "ctx-non-ctor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/ctx-non-ctor.js"),
);

it(
  "ctx-non-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/ctx-non-object.js"),
);

it(
  "does-not-invoke-array-setters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/does-not-invoke-array-setters.js"),
);

it(
  "invoke-resolve-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve-error-close.js"),
);

it(
  "invoke-resolve-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve-error-reject.js"),
);

it(
  "invoke-resolve-get-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve-get-error-reject.js"),
);

it(
  "invoke-resolve-get-error.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve-get-error.js"),
);

it(
  "invoke-resolve-get-once-multiple-calls.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve-get-once-multiple-calls.js"),
);

it(
  "invoke-resolve-get-once-no-calls.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve-get-once-no-calls.js"),
);

it(
  "invoke-resolve-on-promises-every-iteration-of-custom.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Promise/allSettled/invoke-resolve-on-promises-every-iteration-of-custom.js",
  ),
);

it(
  "invoke-resolve-on-promises-every-iteration-of-promise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Promise/allSettled/invoke-resolve-on-promises-every-iteration-of-promise.js",
  ),
);

it(
  "invoke-resolve-on-values-every-iteration-of-promise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Promise/allSettled/invoke-resolve-on-values-every-iteration-of-promise.js",
  ),
);

it(
  "invoke-resolve-return.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve-return.js"),
);

it(
  "invoke-resolve.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-resolve.js"),
);

it(
  "invoke-then-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-then-error-close.js"),
);

it(
  "invoke-then-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-then-error-reject.js"),
);

it(
  "invoke-then-get-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-then-get-error-close.js"),
);

it(
  "invoke-then-get-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-then-get-error-reject.js"),
);

it(
  "invoke-then.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/invoke-then.js"),
);

it(
  "is-function.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/is-function.js"),
);

it(
  "iter-arg-is-false-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-false-reject.js"),
);

it(
  "iter-arg-is-null-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-null-reject.js"),
);

it(
  "iter-arg-is-number-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-number-reject.js"),
);

it(
  "iter-arg-is-poisoned.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-poisoned.js"),
);

it(
  "iter-arg-is-string-resolve.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-string-resolve.js"),
);

it(
  "iter-arg-is-symbol-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-symbol-reject.js"),
);

it(
  "iter-arg-is-true-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-true-reject.js"),
);

it(
  "iter-arg-is-undefined-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-arg-is-undefined-reject.js"),
);

it(
  "iter-assigned-false-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-assigned-false-reject.js"),
);

it(
  "iter-assigned-null-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-assigned-null-reject.js"),
);

it(
  "iter-assigned-number-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-assigned-number-reject.js"),
);

it(
  "iter-assigned-string-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-assigned-string-reject.js"),
);

it(
  "iter-assigned-symbol-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-assigned-symbol-reject.js"),
);

it(
  "iter-assigned-true-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-assigned-true-reject.js"),
);

it(
  "iter-assigned-undefined-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-assigned-undefined-reject.js"),
);

it(
  "iter-next-err-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-next-err-reject.js"),
);

it(
  "iter-next-val-err-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-next-val-err-no-close.js"),
);

it(
  "iter-next-val-err-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-next-val-err-reject.js"),
);

it(
  "iter-returns-false-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-returns-false-reject.js"),
);

it(
  "iter-returns-null-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-returns-null-reject.js"),
);

it(
  "iter-returns-number-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-returns-number-reject.js"),
);

it(
  "iter-returns-string-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-returns-string-reject.js"),
);

it(
  "iter-returns-symbol-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-returns-symbol-reject.js"),
);

it(
  "iter-returns-true-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-returns-true-reject.js"),
);

it(
  "iter-returns-undefined-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-returns-undefined-reject.js"),
);

it(
  "iter-step-err-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-step-err-no-close.js"),
);

it(
  "iter-step-err-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/iter-step-err-reject.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/length.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/name.js"),
);

it(
  "new-reject-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/new-reject-function.js"),
);

it(
  "new-resolve-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/new-resolve-function.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/prop-desc.js"),
);

it(
  "reject-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-deferred.js"),
);

it(
  "reject-element-function-extensible.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-element-function-extensible.js"),
);

it(
  "reject-element-function-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-element-function-length.js"),
);

it(
  "reject-element-function-multiple-calls.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-element-function-multiple-calls.js"),
);

it(
  "reject-element-function-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-element-function-name.js"),
);

it(
  "reject-element-function-nonconstructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-element-function-nonconstructor.js"),
);

it(
  "reject-element-function-property-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-element-function-property-order.js"),
);

it(
  "reject-element-function-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-element-function-prototype.js"),
);

it(
  "reject-ignored-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-ignored-deferred.js"),
);

it(
  "reject-ignored-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-ignored-immed.js"),
);

it(
  "reject-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/reject-immed.js"),
);

it(
  "resolve-before-loop-exit-from-same.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-before-loop-exit-from-same.js"),
);

it(
  "resolve-before-loop-exit.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-before-loop-exit.js"),
);

it(
  "resolve-element-function-extensible.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-element-function-extensible.js"),
);

it(
  "resolve-element-function-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-element-function-length.js"),
);

it(
  "resolve-element-function-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-element-function-name.js"),
);

it(
  "resolve-element-function-nonconstructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-element-function-nonconstructor.js"),
);

it(
  "resolve-element-function-property-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-element-function-property-order.js"),
);

it(
  "resolve-element-function-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-element-function-prototype.js"),
);

it(
  "resolve-from-same-thenable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-from-same-thenable.js"),
);

it(
  "resolve-ignores-late-rejection-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-ignores-late-rejection-deferred.js"),
);

it(
  "resolve-ignores-late-rejection.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-ignores-late-rejection.js"),
);

it(
  "resolve-non-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-non-callable.js"),
);

it(
  "resolve-non-thenable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-non-thenable.js"),
);

it(
  "resolve-not-callable-reject-with-typeerror.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-not-callable-reject-with-typeerror.js"),
);

it(
  "resolve-poisoned-then.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-poisoned-then.js"),
);

it(
  "resolve-thenable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolve-thenable.js"),
);

it(
  "resolve-throws-iterator-return-is-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Promise/allSettled/resolve-throws-iterator-return-is-not-callable.js",
  ),
);

it(
  "resolve-throws-iterator-return-null-or-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Promise/allSettled/resolve-throws-iterator-return-null-or-undefined.js",
  ),
);

it(
  "resolved-all-fulfilled.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-all-fulfilled.js"),
);

it(
  "resolved-all-mixed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-all-mixed.js"),
);

it(
  "resolved-all-rejected.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-all-rejected.js"),
);

it(
  "resolved-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-immed.js"),
);

it(
  "resolved-sequence-extra-ticks.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-sequence-extra-ticks.js"),
);

it(
  "resolved-sequence-mixed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-sequence-mixed.js"),
);

it(
  "resolved-sequence-with-rejections.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-sequence-with-rejections.js"),
);

it(
  "resolved-sequence.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-sequence.js"),
);

it(
  "resolved-then-catch-finally.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/resolved-then-catch-finally.js"),
);

it(
  "resolves-empty-array.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolves-empty-array.js"),
);

it(
  "resolves-to-array.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/resolves-to-array.js"),
);

it(
  "returns-promise.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/allSettled/returns-promise.js"),
);

it(
  "species-get-error.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/allSettled/species-get-error.js"),
);
