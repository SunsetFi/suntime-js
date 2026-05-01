import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S25.4.4.1_A1.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A1.1_T1.js"),
);

it(
  "S25.4.4.1_A2.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A2.1_T1.js"),
);

it(
  "S25.4.4.1_A2.2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A2.2_T1.js"),
);

it(
  "S25.4.4.1_A2.3_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A2.3_T1.js"),
);

it(
  "S25.4.4.1_A2.3_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A2.3_T2.js"),
);

it(
  "S25.4.4.1_A2.3_T3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A2.3_T3.js"),
);

it(
  "S25.4.4.1_A3.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A3.1_T1.js"),
);

it(
  "S25.4.4.1_A3.1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A3.1_T2.js"),
);

it(
  "S25.4.4.1_A3.1_T3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A3.1_T3.js"),
);

it(
  "S25.4.4.1_A4.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A4.1_T1.js"),
);

it(
  "S25.4.4.1_A5.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A5.1_T1.js"),
);

it(
  "S25.4.4.1_A7.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A7.1_T1.js"),
);

it(
  "S25.4.4.1_A7.2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A7.2_T1.js"),
);

it(
  "S25.4.4.1_A8.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A8.1_T1.js"),
);

it(
  "S25.4.4.1_A8.2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A8.2_T1.js"),
);

it(
  "S25.4.4.1_A8.2_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/S25.4.4.1_A8.2_T2.js"),
);

it(
  "call-resolve-element-after-return.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/call-resolve-element-after-return.js"),
);

it(
  "call-resolve-element-items.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/call-resolve-element-items.js"),
);

it(
  "call-resolve-element.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/call-resolve-element.js"),
);

it(
  "capability-executor-called-twice.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/capability-executor-called-twice.js"),
);

it(
  "capability-executor-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/capability-executor-not-callable.js"),
);

it(
  "capability-resolve-throws-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/capability-resolve-throws-no-close.js"),
);

it(
  "capability-resolve-throws-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/capability-resolve-throws-reject.js"),
);

it(
  "ctx-ctor-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/ctx-ctor-throws.js"),
);

it(
  "ctx-ctor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/ctx-ctor.js"),
);

it(
  "ctx-non-ctor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/ctx-non-ctor.js"),
);

it(
  "ctx-non-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/ctx-non-object.js"),
);

it(
  "does-not-invoke-array-setters.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/does-not-invoke-array-setters.js"),
);

it(
  "invoke-resolve-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-error-close.js"),
);

it(
  "invoke-resolve-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-error-reject.js"),
);

it(
  "invoke-resolve-get-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-get-error-reject.js"),
);

it(
  "invoke-resolve-get-error.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-get-error.js"),
);

it(
  "invoke-resolve-get-once-multiple-calls.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-get-once-multiple-calls.js"),
);

it(
  "invoke-resolve-get-once-no-calls.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-get-once-no-calls.js"),
);

it(
  "invoke-resolve-on-promises-every-iteration-of-custom.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Promise/all/invoke-resolve-on-promises-every-iteration-of-custom.js",
  ),
);

it(
  "invoke-resolve-on-promises-every-iteration-of-promise.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Promise/all/invoke-resolve-on-promises-every-iteration-of-promise.js",
  ),
);

it(
  "invoke-resolve-on-values-every-iteration-of-promise.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-on-values-every-iteration-of-promise.js"),
);

it(
  "invoke-resolve-return.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve-return.js"),
);

it(
  "invoke-resolve.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-resolve.js"),
);

it(
  "invoke-then-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/invoke-then-error-close.js"),
);

it(
  "invoke-then-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-then-error-reject.js"),
);

it(
  "invoke-then-get-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/invoke-then-get-error-close.js"),
);

it(
  "invoke-then-get-error-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/invoke-then-get-error-reject.js"),
);

it(
  "invoke-then.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/invoke-then.js"),
);

it(
  "iter-arg-is-false-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-arg-is-false-reject.js"),
);

it(
  "iter-arg-is-null-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-arg-is-null-reject.js"),
);

it(
  "iter-arg-is-number-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-arg-is-number-reject.js"),
);

it(
  "iter-arg-is-string-resolve.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-arg-is-string-resolve.js"),
);

it(
  "iter-arg-is-symbol-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-arg-is-symbol-reject.js"),
);

it(
  "iter-arg-is-true-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-arg-is-true-reject.js"),
);

it(
  "iter-arg-is-undefined-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-arg-is-undefined-reject.js"),
);

it(
  "iter-assigned-false-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-assigned-false-reject.js"),
);

it(
  "iter-assigned-null-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-assigned-null-reject.js"),
);

it(
  "iter-assigned-number-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-assigned-number-reject.js"),
);

it(
  "iter-assigned-string-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-assigned-string-reject.js"),
);

it(
  "iter-assigned-symbol-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-assigned-symbol-reject.js"),
);

it(
  "iter-assigned-true-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-assigned-true-reject.js"),
);

it(
  "iter-assigned-undefined-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-assigned-undefined-reject.js"),
);

it(
  "iter-next-val-err-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/iter-next-val-err-no-close.js"),
);

it(
  "iter-next-val-err-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-next-val-err-reject.js"),
);

it(
  "iter-returns-false-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-returns-false-reject.js"),
);

it(
  "iter-returns-null-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-returns-null-reject.js"),
);

it(
  "iter-returns-number-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-returns-number-reject.js"),
);

it(
  "iter-returns-string-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-returns-string-reject.js"),
);

it(
  "iter-returns-symbol-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-returns-symbol-reject.js"),
);

it(
  "iter-returns-true-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-returns-true-reject.js"),
);

it(
  "iter-returns-undefined-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-returns-undefined-reject.js"),
);

it(
  "iter-step-err-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/iter-step-err-no-close.js"),
);

it(
  "iter-step-err-reject.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/iter-step-err-reject.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Promise/all/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Promise/all/name.js"));

it(
  "new-resolve-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/new-resolve-function.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/prop-desc.js"),
);

it(
  "reject-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/reject-deferred.js"),
);

it(
  "reject-ignored-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/reject-ignored-deferred.js"),
);

it(
  "reject-ignored-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/reject-ignored-immed.js"),
);

it(
  "reject-immed.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/reject-immed.js"),
);

it(
  "resolve-before-loop-exit-from-same.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-before-loop-exit-from-same.js"),
);

it(
  "resolve-before-loop-exit.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-before-loop-exit.js"),
);

it(
  "resolve-element-function-extensible.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-element-function-extensible.js"),
);

it(
  "resolve-element-function-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-element-function-length.js"),
);

it(
  "resolve-element-function-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-element-function-name.js"),
);

it(
  "resolve-element-function-nonconstructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-element-function-nonconstructor.js"),
);

it(
  "resolve-element-function-property-order.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-element-function-property-order.js"),
);

it(
  "resolve-element-function-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-element-function-prototype.js"),
);

it(
  "resolve-from-same-thenable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-from-same-thenable.js"),
);

it(
  "resolve-ignores-late-rejection-deferred.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/resolve-ignores-late-rejection-deferred.js"),
);

it(
  "resolve-ignores-late-rejection.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/resolve-ignores-late-rejection.js"),
);

it(
  "resolve-non-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/resolve-non-callable.js"),
);

it(
  "resolve-non-thenable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/resolve-non-thenable.js"),
);

it(
  "resolve-not-callable-reject-with-typeerror.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/resolve-not-callable-reject-with-typeerror.js"),
);

it(
  "resolve-poisoned-then.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/resolve-poisoned-then.js"),
);

it(
  "resolve-thenable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/all/resolve-thenable.js"),
);

it(
  "resolve-throws-iterator-return-is-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-throws-iterator-return-is-not-callable.js"),
);

it(
  "resolve-throws-iterator-return-null-or-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/resolve-throws-iterator-return-null-or-undefined.js"),
);

it(
  "same-reject-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/same-reject-function.js"),
);

it(
  "species-get-error.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/all/species-get-error.js"),
);
