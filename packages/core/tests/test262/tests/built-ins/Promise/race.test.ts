import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S25.4.4.3_A1.1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A1.1_T1.js"),
);

it(
  "S25.4.4.3_A2.1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A2.1_T1.js"),
);

it(
  "S25.4.4.3_A2.2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A2.2_T1.js"),
);

it(
  "S25.4.4.3_A2.2_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A2.2_T2.js"),
);

it(
  "S25.4.4.3_A2.2_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A2.2_T3.js"),
);

it(
  "S25.4.4.3_A3.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A3.1_T1.js"),
);

it(
  "S25.4.4.3_A3.1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A3.1_T2.js"),
);

it(
  "S25.4.4.3_A4.1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A4.1_T1.js"),
);

it(
  "S25.4.4.3_A4.1_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A4.1_T2.js"),
);

it(
  "S25.4.4.3_A5.1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A5.1_T1.js"),
);

it(
  "S25.4.4.3_A6.1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A6.1_T1.js"),
);

it(
  "S25.4.4.3_A6.2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A6.2_T1.js"),
);

it(
  "S25.4.4.3_A7.1_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A7.1_T1.js"),
);

it(
  "S25.4.4.3_A7.1_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A7.1_T2.js"),
);

it(
  "S25.4.4.3_A7.1_T3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A7.1_T3.js"),
);

it(
  "S25.4.4.3_A7.2_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A7.2_T1.js"),
);

it(
  "S25.4.4.3_A7.3_T1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A7.3_T1.js"),
);

it(
  "S25.4.4.3_A7.3_T2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/S25.4.4.3_A7.3_T2.js"),
);

it(
  "capability-executor-called-twice.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/capability-executor-called-twice.js"),
);

it(
  "capability-executor-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/capability-executor-not-callable.js"),
);

it(
  "ctx-ctor-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/ctx-ctor-throws.js"),
);

it(
  "ctx-ctor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/ctx-ctor.js"),
);

it(
  "ctx-non-ctor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/race/ctx-non-ctor.js"),
);

it(
  "ctx-non-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/race/ctx-non-object.js"),
);

it(
  "invoke-resolve-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve-error-close.js"),
);

it(
  "invoke-resolve-error-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve-error-reject.js"),
);

it(
  "invoke-resolve-get-error-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve-get-error-reject.js"),
);

it(
  "invoke-resolve-get-error.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve-get-error.js"),
);

it(
  "invoke-resolve-get-once-multiple-calls.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve-get-once-multiple-calls.js"),
);

it(
  "invoke-resolve-get-once-no-calls.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve-get-once-no-calls.js"),
);

it(
  "invoke-resolve-on-promises-every-iteration-of-custom.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Promise/race/invoke-resolve-on-promises-every-iteration-of-custom.js",
  ),
);

it(
  "invoke-resolve-on-promises-every-iteration-of-promise.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Promise/race/invoke-resolve-on-promises-every-iteration-of-promise.js",
  ),
);

it(
  "invoke-resolve-on-values-every-iteration-of-promise.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Promise/race/invoke-resolve-on-values-every-iteration-of-promise.js",
  ),
);

it(
  "invoke-resolve-return.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve-return.js"),
);

it(
  "invoke-resolve.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-resolve.js"),
);

it(
  "invoke-then-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-then-error-close.js"),
);

it(
  "invoke-then-error-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-then-error-reject.js"),
);

it(
  "invoke-then-get-error-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-then-get-error-close.js"),
);

it(
  "invoke-then-get-error-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-then-get-error-reject.js"),
);

it(
  "invoke-then.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/invoke-then.js"),
);

it(
  "iter-arg-is-false-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-arg-is-false-reject.js"),
);

it(
  "iter-arg-is-null-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-arg-is-null-reject.js"),
);

it(
  "iter-arg-is-number-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-arg-is-number-reject.js"),
);

it(
  "iter-arg-is-string-resolve.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-arg-is-string-resolve.js"),
);

it(
  "iter-arg-is-symbol-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-arg-is-symbol-reject.js"),
);

it(
  "iter-arg-is-true-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-arg-is-true-reject.js"),
);

it(
  "iter-arg-is-undefined-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-arg-is-undefined-reject.js"),
);

it(
  "iter-assigned-false-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-assigned-false-reject.js"),
);

it(
  "iter-assigned-null-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-assigned-null-reject.js"),
);

it(
  "iter-assigned-number-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-assigned-number-reject.js"),
);

it(
  "iter-assigned-string-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-assigned-string-reject.js"),
);

it(
  "iter-assigned-symbol-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-assigned-symbol-reject.js"),
);

it(
  "iter-assigned-true-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-assigned-true-reject.js"),
);

it(
  "iter-assigned-undefined-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-assigned-undefined-reject.js"),
);

it(
  "iter-next-val-err-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-next-val-err-no-close.js"),
);

it(
  "iter-next-val-err-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-next-val-err-reject.js"),
);

it(
  "iter-returns-false-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-returns-false-reject.js"),
);

it(
  "iter-returns-null-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-returns-null-reject.js"),
);

it(
  "iter-returns-number-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-returns-number-reject.js"),
);

it(
  "iter-returns-string-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-returns-string-reject.js"),
);

it(
  "iter-returns-symbol-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-returns-symbol-reject.js"),
);

it(
  "iter-returns-true-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-returns-true-reject.js"),
);

it(
  "iter-returns-undefined-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-returns-undefined-reject.js"),
);

it(
  "iter-step-err-no-close.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-step-err-no-close.js"),
);

it(
  "iter-step-err-reject.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/iter-step-err-reject.js"),
);

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Promise/race/length.js"));

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Promise/race/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/prop-desc.js"),
);

it(
  "reject-deferred.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/reject-deferred.js"),
);

it(
  "reject-from-same-thenable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/reject-from-same-thenable.js"),
);

it(
  "reject-ignored-deferred.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/reject-ignored-deferred.js"),
);

it(
  "reject-ignored-immed.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/reject-ignored-immed.js"),
);

it(
  "reject-immed.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/reject-immed.js"),
);

it(
  "resolve-from-same-thenable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-from-same-thenable.js"),
);

it(
  "resolve-ignores-late-rejection-deferred.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-ignores-late-rejection-deferred.js"),
);

it(
  "resolve-ignores-late-rejection.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-ignores-late-rejection.js"),
);

it(
  "resolve-non-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-non-callable.js"),
);

it(
  "resolve-non-obj.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-non-obj.js"),
);

it(
  "resolve-non-thenable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-non-thenable.js"),
);

it(
  "resolve-poisoned-then.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-poisoned-then.js"),
);

it(
  "resolve-prms-cstm-then.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-prms-cstm-then.js"),
);

it(
  "resolve-self.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-self.js"),
);

it(
  "resolve-thenable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-thenable.js"),
);

it(
  "resolve-throws-iterator-return-is-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-throws-iterator-return-is-not-callable.js"),
);

it(
  "resolve-throws-iterator-return-null-or-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolve-throws-iterator-return-null-or-undefined.js"),
);

it(
  "resolved-sequence-extra-ticks.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolved-sequence-extra-ticks.js"),
);

it(
  "resolved-sequence-mixed.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolved-sequence-mixed.js"),
);

it(
  "resolved-sequence-with-rejections.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolved-sequence-with-rejections.js"),
);

it(
  "resolved-sequence.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolved-sequence.js"),
);

it(
  "resolved-then-catch-finally.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/resolved-then-catch-finally.js"),
);

it(
  "same-reject-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/same-reject-function.js"),
);

it(
  "same-resolve-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/same-resolve-function.js"),
);

it(
  "species-get-error.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/race/species-get-error.js"),
);
