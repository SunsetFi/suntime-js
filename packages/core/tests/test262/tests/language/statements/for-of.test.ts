import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("for-of", () => {
it("Array.prototype.Symbol.iterator.js", createTestHandler("language/statements/for-of/Array.prototype.Symbol.iterator.js"));
it("Array.prototype.entries.js", createTestHandler("language/statements/for-of/Array.prototype.entries.js"));
it("Array.prototype.keys.js", createTestHandler("language/statements/for-of/Array.prototype.keys.js"));
it("arguments-mapped-aliasing.js", createTestHandler("language/statements/for-of/arguments-mapped-aliasing.js"));
it("arguments-mapped-mutation.js", createTestHandler("language/statements/for-of/arguments-mapped-mutation.js"));
it("arguments-mapped.js", createTestHandler("language/statements/for-of/arguments-mapped.js"));
it("arguments-unmapped-aliasing.js", createTestHandler("language/statements/for-of/arguments-unmapped-aliasing.js"));
it("arguments-unmapped-mutation.js", createTestHandler("language/statements/for-of/arguments-unmapped-mutation.js"));
it("arguments-unmapped.js", createTestHandler("language/statements/for-of/arguments-unmapped.js"));
it("array-contract-expand.js", createTestHandler("language/statements/for-of/array-contract-expand.js"));
it("array-contract.js", createTestHandler("language/statements/for-of/array-contract.js"));
it("array-expand-contract.js", createTestHandler("language/statements/for-of/array-expand-contract.js"));
it("array-expand.js", createTestHandler("language/statements/for-of/array-expand.js"));
it("array-key-get-error.js", createTestHandler("language/statements/for-of/array-key-get-error.js"));
it("array.js", createTestHandler("language/statements/for-of/array.js"));
it("body-dstr-assign-error.js", createTestHandler("language/statements/for-of/body-dstr-assign-error.js"));
it("body-dstr-assign.js", createTestHandler("language/statements/for-of/body-dstr-assign.js"));
it("body-put-error.js", createTestHandler("language/statements/for-of/body-put-error.js"));
it("break-from-catch.js", createTestHandler("language/statements/for-of/break-from-catch.js"));
it("break-from-finally.js", createTestHandler("language/statements/for-of/break-from-finally.js"));
it("break-from-try.js", createTestHandler("language/statements/for-of/break-from-try.js"));
it("break-label-from-catch.js", createTestHandler("language/statements/for-of/break-label-from-catch.js"));
it("break-label-from-finally.js", createTestHandler("language/statements/for-of/break-label-from-finally.js"));
it("break-label-from-try.js", createTestHandler("language/statements/for-of/break-label-from-try.js"));
it("break-label.js", createTestHandler("language/statements/for-of/break-label.js"));
it("break.js", createTestHandler("language/statements/for-of/break.js"));
it("continue-from-catch.js", createTestHandler("language/statements/for-of/continue-from-catch.js"));
it("continue-from-finally.js", createTestHandler("language/statements/for-of/continue-from-finally.js"));
it("continue-from-try.js", createTestHandler("language/statements/for-of/continue-from-try.js"));
it("continue-label-from-catch.js", createTestHandler("language/statements/for-of/continue-label-from-catch.js"));
it("continue-label-from-finally.js", createTestHandler("language/statements/for-of/continue-label-from-finally.js"));
it("continue-label-from-try.js", createTestHandler("language/statements/for-of/continue-label-from-try.js"));
it("continue-label.js", createTestHandler("language/statements/for-of/continue-label.js"));
it("continue.js", createTestHandler("language/statements/for-of/continue.js"));
it("cptn-decl-abrupt-empty.js", createTestHandler("language/statements/for-of/cptn-decl-abrupt-empty.js"));
it("cptn-decl-itr.js", createTestHandler("language/statements/for-of/cptn-decl-itr.js"));
it("cptn-decl-no-itr.js", createTestHandler("language/statements/for-of/cptn-decl-no-itr.js"));
it("cptn-expr-abrupt-empty.js", createTestHandler("language/statements/for-of/cptn-expr-abrupt-empty.js"));
it("cptn-expr-itr.js", createTestHandler("language/statements/for-of/cptn-expr-itr.js"));
it("cptn-expr-no-itr.js", createTestHandler("language/statements/for-of/cptn-expr-no-itr.js"));
it("decl-async-fun.js", createTestHandler("language/statements/for-of/decl-async-fun.js"));
it("decl-async-gen.js", createTestHandler("language/statements/for-of/decl-async-gen.js"));
it("decl-cls.js", createTestHandler("language/statements/for-of/decl-cls.js"));
it("decl-const.js", createTestHandler("language/statements/for-of/decl-const.js"));
it("decl-fun.js", createTestHandler("language/statements/for-of/decl-fun.js"));
it("decl-gen.js", createTestHandler("language/statements/for-of/decl-gen.js"));
it("decl-let.js", createTestHandler("language/statements/for-of/decl-let.js"));
describe("dstr", () => {
it("array-elem-init-assignment.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-assignment.js"));
});
describe("dstr", () => {
it("array-elem-init-evaluation.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-evaluation.js"));
});
describe("dstr", () => {
it("array-elem-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("array-elem-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-class.js"));
});
describe("dstr", () => {
it("array-elem-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("array-elem-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("array-elem-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("array-elem-init-in.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-in.js"));
});
describe("dstr", () => {
it("array-elem-init-let.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-let.js"));
});
describe("dstr", () => {
it("array-elem-init-order.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-order.js"));
});
describe("dstr", () => {
it("array-elem-init-simple-no-strict.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-simple-no-strict.js"));
});
describe("dstr", () => {
it("array-elem-init-yield-expr.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-yield-expr.js"));
});
describe("dstr", () => {
it("array-elem-init-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("array-elem-init-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/array-elem-init-yield-ident-valid.js"));
});
describe("dstr", () => {
it("array-elem-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-get-err.js"));
});
describe("dstr", () => {
it("array-elem-iter-nrml-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close-err.js"));
});
describe("dstr", () => {
it("array-elem-iter-nrml-close-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close-null.js"));
});
describe("dstr", () => {
it("array-elem-iter-nrml-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close-skip.js"));
});
describe("dstr", () => {
it("array-elem-iter-nrml-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close.js"));
});
describe("dstr", () => {
it("array-elem-iter-rtrn-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-rtrn-close-err.js"));
});
describe("dstr", () => {
it("array-elem-iter-rtrn-close-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-rtrn-close-null.js"));
});
describe("dstr", () => {
it("array-elem-iter-rtrn-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-rtrn-close.js"));
});
describe("dstr", () => {
it("array-elem-iter-thrw-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-thrw-close-err.js"));
});
describe("dstr", () => {
it("array-elem-iter-thrw-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-thrw-close-skip.js"));
});
describe("dstr", () => {
it("array-elem-iter-thrw-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-iter-thrw-close.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-invalid.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-invalid.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-null.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-undefined-hole.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-undefined-hole.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-undefined-own.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-undefined-own.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-undefined.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-undefined.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-yield-expr.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-yield-expr.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("array-elem-nested-array-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-yield-ident-valid.js"));
});
describe("dstr", () => {
it("array-elem-nested-array.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-array.js"));
});
describe("dstr", () => {
it("array-elem-nested-memberexpr-optchain-prop-ref-init.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-memberexpr-optchain-prop-ref-init.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-invalid.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-invalid.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-null.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-undefined-hole.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-undefined-hole.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-undefined-own.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-undefined-own.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-undefined.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-undefined.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-yield-expr.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-yield-expr.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-yield-ident-valid.js"));
});
describe("dstr", () => {
it("array-elem-nested-obj.js", createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj.js"));
});
describe("dstr", () => {
it("array-elem-put-const.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-const.js"));
});
describe("dstr", () => {
it("array-elem-put-let.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-let.js"));
});
describe("dstr", () => {
it("array-elem-put-obj-literal-optchain-prop-ref-init.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-obj-literal-optchain-prop-ref-init.js"));
});
describe("dstr", () => {
it("array-elem-put-obj-literal-prop-ref-init-active.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-obj-literal-prop-ref-init-active.js"));
});
describe("dstr", () => {
it("array-elem-put-obj-literal-prop-ref-init.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-obj-literal-prop-ref-init.js"));
});
describe("dstr", () => {
it("array-elem-put-obj-literal-prop-ref.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-obj-literal-prop-ref.js"));
});
describe("dstr", () => {
it("array-elem-put-prop-ref-no-get.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-prop-ref-no-get.js"));
});
describe("dstr", () => {
it("array-elem-put-prop-ref-user-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-prop-ref-user-err.js"));
});
describe("dstr", () => {
it("array-elem-put-prop-ref.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-prop-ref.js"));
});
describe("dstr", () => {
it("array-elem-put-unresolvable-no-strict.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-unresolvable-no-strict.js"));
});
describe("dstr", () => {
it("array-elem-put-unresolvable-strict.js", createTestHandler("language/statements/for-of/dstr/array-elem-put-unresolvable-strict.js"));
});
describe("dstr", () => {
it("array-elem-target-identifier.js", createTestHandler("language/statements/for-of/dstr/array-elem-target-identifier.js"));
});
describe("dstr", () => {
it("array-elem-target-simple-no-strict.js", createTestHandler("language/statements/for-of/dstr/array-elem-target-simple-no-strict.js"));
});
describe("dstr", () => {
it("array-elem-target-simple-strict.js", createTestHandler("language/statements/for-of/dstr/array-elem-target-simple-strict.js"));
});
describe("dstr", () => {
it("array-elem-target-yield-expr.js", createTestHandler("language/statements/for-of/dstr/array-elem-target-yield-expr.js"));
});
describe("dstr", () => {
it("array-elem-target-yield-invalid.js", createTestHandler("language/statements/for-of/dstr/array-elem-target-yield-invalid.js"));
});
describe("dstr", () => {
it("array-elem-target-yield-valid.js", createTestHandler("language/statements/for-of/dstr/array-elem-target-yield-valid.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-elision-iter-abpt.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-abpt.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-elision-iter-nrml-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close-err.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-elision-iter-nrml-close-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close-null.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-elision-iter-nrml-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close-skip.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-elision-iter-nrml-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-get-err.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-nrml-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close-err.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-nrml-close-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close-null.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-nrml-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close-skip.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-nrml-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-rtrn-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-rtrn-close-err.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-rtrn-close-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-rtrn-close-null.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-rtrn-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-rtrn-close.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-thrw-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-thrw-close-err.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-thrw-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-thrw-close-skip.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-list-thrw-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-thrw-close.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-rest-nrml-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-nrml-close-skip.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-rest-rtrn-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-rtrn-close-err.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-rest-rtrn-close-null.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-rtrn-close-null.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-rest-rtrn-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-rtrn-close.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-rest-thrw-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-thrw-close-err.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-rest-thrw-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-thrw-close-skip.js"));
});
describe("dstr", () => {
it("array-elem-trlg-iter-rest-thrw-close.js", createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-thrw-close.js"));
});
describe("dstr", () => {
it("array-elision-iter-abpt.js", createTestHandler("language/statements/for-of/dstr/array-elision-iter-abpt.js"));
});
describe("dstr", () => {
it("array-elision-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/array-elision-iter-get-err.js"));
});
describe("dstr", () => {
it("array-elision-iter-nrml-close-err.js", createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close-err.js"));
});
describe("dstr", () => {
it("array-elision-iter-nrml-close-null.js", createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close-null.js"));
});
describe("dstr", () => {
it("array-elision-iter-nrml-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close-skip.js"));
});
describe("dstr", () => {
it("array-elision-iter-nrml-close.js", createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close.js"));
});
describe("dstr", () => {
it("array-elision-val-array.js", createTestHandler("language/statements/for-of/dstr/array-elision-val-array.js"));
});
describe("dstr", () => {
it("array-elision-val-bool.js", createTestHandler("language/statements/for-of/dstr/array-elision-val-bool.js"));
});
describe("dstr", () => {
it("array-elision-val-null.js", createTestHandler("language/statements/for-of/dstr/array-elision-val-null.js"));
});
describe("dstr", () => {
it("array-elision-val-num.js", createTestHandler("language/statements/for-of/dstr/array-elision-val-num.js"));
});
describe("dstr", () => {
it("array-elision-val-string.js", createTestHandler("language/statements/for-of/dstr/array-elision-val-string.js"));
});
describe("dstr", () => {
it("array-elision-val-symbol.js", createTestHandler("language/statements/for-of/dstr/array-elision-val-symbol.js"));
});
describe("dstr", () => {
it("array-elision-val-undef.js", createTestHandler("language/statements/for-of/dstr/array-elision-val-undef.js"));
});
describe("dstr", () => {
it("array-empty-iter-close-err.js", createTestHandler("language/statements/for-of/dstr/array-empty-iter-close-err.js"));
});
describe("dstr", () => {
it("array-empty-iter-close-null.js", createTestHandler("language/statements/for-of/dstr/array-empty-iter-close-null.js"));
});
describe("dstr", () => {
it("array-empty-iter-close.js", createTestHandler("language/statements/for-of/dstr/array-empty-iter-close.js"));
});
describe("dstr", () => {
it("array-empty-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/array-empty-iter-get-err.js"));
});
describe("dstr", () => {
it("array-empty-val-array.js", createTestHandler("language/statements/for-of/dstr/array-empty-val-array.js"));
});
describe("dstr", () => {
it("array-empty-val-bool.js", createTestHandler("language/statements/for-of/dstr/array-empty-val-bool.js"));
});
describe("dstr", () => {
it("array-empty-val-null.js", createTestHandler("language/statements/for-of/dstr/array-empty-val-null.js"));
});
describe("dstr", () => {
it("array-empty-val-num.js", createTestHandler("language/statements/for-of/dstr/array-empty-val-num.js"));
});
describe("dstr", () => {
it("array-empty-val-string.js", createTestHandler("language/statements/for-of/dstr/array-empty-val-string.js"));
});
describe("dstr", () => {
it("array-empty-val-symbol.js", createTestHandler("language/statements/for-of/dstr/array-empty-val-symbol.js"));
});
describe("dstr", () => {
it("array-empty-val-undef.js", createTestHandler("language/statements/for-of/dstr/array-empty-val-undef.js"));
});
describe("dstr", () => {
it("array-iteration.js", createTestHandler("language/statements/for-of/dstr/array-iteration.js"));
});
describe("dstr", () => {
it("array-rest-after-element.js", createTestHandler("language/statements/for-of/dstr/array-rest-after-element.js"));
});
describe("dstr", () => {
it("array-rest-after-elision.js", createTestHandler("language/statements/for-of/dstr/array-rest-after-elision.js"));
});
describe("dstr", () => {
it("array-rest-before-element.js", createTestHandler("language/statements/for-of/dstr/array-rest-before-element.js"));
});
describe("dstr", () => {
it("array-rest-before-elision.js", createTestHandler("language/statements/for-of/dstr/array-rest-before-elision.js"));
});
describe("dstr", () => {
it("array-rest-before-rest.js", createTestHandler("language/statements/for-of/dstr/array-rest-before-rest.js"));
});
describe("dstr", () => {
it("array-rest-elision-invalid.js", createTestHandler("language/statements/for-of/dstr/array-rest-elision-invalid.js"));
});
describe("dstr", () => {
it("array-rest-elision-iter-abpt.js", createTestHandler("language/statements/for-of/dstr/array-rest-elision-iter-abpt.js"));
});
describe("dstr", () => {
it("array-rest-elision.js", createTestHandler("language/statements/for-of/dstr/array-rest-elision.js"));
});
describe("dstr", () => {
it("array-rest-init.js", createTestHandler("language/statements/for-of/dstr/array-rest-init.js"));
});
describe("dstr", () => {
it("array-rest-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-get-err.js"));
});
describe("dstr", () => {
it("array-rest-iter-nrml-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-nrml-close-skip.js"));
});
describe("dstr", () => {
it("array-rest-iter-rtrn-close-err.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-rtrn-close-err.js"));
});
describe("dstr", () => {
it("array-rest-iter-rtrn-close-null.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-rtrn-close-null.js"));
});
describe("dstr", () => {
it("array-rest-iter-rtrn-close.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-rtrn-close.js"));
});
describe("dstr", () => {
it("array-rest-iter-thrw-close-err.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-thrw-close-err.js"));
});
describe("dstr", () => {
it("array-rest-iter-thrw-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-thrw-close-skip.js"));
});
describe("dstr", () => {
it("array-rest-iter-thrw-close.js", createTestHandler("language/statements/for-of/dstr/array-rest-iter-thrw-close.js"));
});
describe("dstr", () => {
it("array-rest-iteration.js", createTestHandler("language/statements/for-of/dstr/array-rest-iteration.js"));
});
describe("dstr", () => {
it("array-rest-lref-err.js", createTestHandler("language/statements/for-of/dstr/array-rest-lref-err.js"));
});
describe("dstr", () => {
it("array-rest-lref.js", createTestHandler("language/statements/for-of/dstr/array-rest-lref.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-invalid.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-invalid.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-iter-thrw-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-iter-thrw-close-skip.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-null.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-null.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-undefined-hole.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-undefined-hole.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-undefined-own.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-undefined-own.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-undefined.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-undefined.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-yield-expr.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-yield-expr.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("array-rest-nested-array-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-yield-ident-valid.js"));
});
describe("dstr", () => {
it("array-rest-nested-array.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-array.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-invalid.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-invalid.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-null.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-null.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-undefined-hole.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-undefined-hole.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-undefined-own.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-undefined-own.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-undefined.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-undefined.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-yield-expr.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-yield-expr.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-yield-ident-valid.js"));
});
describe("dstr", () => {
it("array-rest-nested-obj.js", createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj.js"));
});
describe("dstr", () => {
it("array-rest-put-const.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-const.js"));
});
describe("dstr", () => {
it("array-rest-put-let.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-let.js"));
});
describe("dstr", () => {
it("array-rest-put-prop-ref-no-get.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-prop-ref-no-get.js"));
});
describe("dstr", () => {
it("array-rest-put-prop-ref-user-err-iter-close-skip.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-prop-ref-user-err-iter-close-skip.js"));
});
describe("dstr", () => {
it("array-rest-put-prop-ref-user-err.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-prop-ref-user-err.js"));
});
describe("dstr", () => {
it("array-rest-put-prop-ref.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-prop-ref.js"));
});
describe("dstr", () => {
it("array-rest-put-unresolvable-no-strict.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-unresolvable-no-strict.js"));
});
describe("dstr", () => {
it("array-rest-put-unresolvable-strict.js", createTestHandler("language/statements/for-of/dstr/array-rest-put-unresolvable-strict.js"));
});
describe("dstr", () => {
it("array-rest-yield-expr.js", createTestHandler("language/statements/for-of/dstr/array-rest-yield-expr.js"));
});
describe("dstr", () => {
it("array-rest-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/array-rest-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("array-rest-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/array-rest-yield-ident-valid.js"));
});
describe("dstr", () => {
it("const-ary-init-iter-close.js", createTestHandler("language/statements/for-of/dstr/const-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("const-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/statements/for-of/dstr/const-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("const-ary-init-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("const-ary-init-iter-no-close.js", createTestHandler("language/statements/for-of/dstr/const-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("const-ary-name-iter-val.js", createTestHandler("language/statements/for-of/dstr/const-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-obj-id.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elision-exhausted.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elision-iter-close.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision-iter-close.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elision-step-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-elision.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-empty.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-init-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-init-err.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-ary-elem.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-ary-elision.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-ary-empty.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-ary-rest.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id-direct.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id-elision.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id-iter-close.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-iter-close.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-id.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-init-ary.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-init-id.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-init-obj.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-not-final-id.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-obj-id.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("const-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("const-obj-init-null.js", createTestHandler("language/statements/for-of/dstr/const-obj-init-null.js"));
});
describe("dstr", () => {
it("const-obj-init-undefined.js", createTestHandler("language/statements/for-of/dstr/const-obj-init-undefined.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-empty.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-get-value-err.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-id-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-init-err.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-init-err.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-list-err.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-ary-init.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-ary.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-eval-err.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-id-init.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-id.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-obj-init.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-prop-obj.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-rest-getter.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("const-obj-ptrn-rest-val-obj.js", createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("let-ary-init-iter-close.js", createTestHandler("language/statements/for-of/dstr/let-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("let-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/statements/for-of/dstr/let-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("let-ary-init-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("let-ary-init-iter-no-close.js", createTestHandler("language/statements/for-of/dstr/let-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("let-ary-name-iter-val.js", createTestHandler("language/statements/for-of/dstr/let-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-obj-id.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elision-exhausted.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elision-iter-close.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision-iter-close.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elision-step-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-elision.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-empty.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-init-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-init-err.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-ary-elem.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-ary-elision.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-ary-empty.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-ary-rest.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id-direct.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id-elision.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id-iter-close.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-iter-close.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-id.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-init-ary.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-init-id.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-init-obj.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-not-final-id.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-obj-id.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("let-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("let-obj-init-null.js", createTestHandler("language/statements/for-of/dstr/let-obj-init-null.js"));
});
describe("dstr", () => {
it("let-obj-init-undefined.js", createTestHandler("language/statements/for-of/dstr/let-obj-init-undefined.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-empty.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-get-value-err.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-id-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-init-err.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-init-err.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-list-err.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-ary-init.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-ary.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-eval-err.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-id-init.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-id.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-obj-init.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-prop-obj.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-rest-getter.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("let-obj-ptrn-rest-val-obj.js", createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("obj-empty-bool.js", createTestHandler("language/statements/for-of/dstr/obj-empty-bool.js"));
});
describe("dstr", () => {
it("obj-empty-null.js", createTestHandler("language/statements/for-of/dstr/obj-empty-null.js"));
});
describe("dstr", () => {
it("obj-empty-num.js", createTestHandler("language/statements/for-of/dstr/obj-empty-num.js"));
});
describe("dstr", () => {
it("obj-empty-obj.js", createTestHandler("language/statements/for-of/dstr/obj-empty-obj.js"));
});
describe("dstr", () => {
it("obj-empty-string.js", createTestHandler("language/statements/for-of/dstr/obj-empty-string.js"));
});
describe("dstr", () => {
it("obj-empty-symbol.js", createTestHandler("language/statements/for-of/dstr/obj-empty-symbol.js"));
});
describe("dstr", () => {
it("obj-empty-undef.js", createTestHandler("language/statements/for-of/dstr/obj-empty-undef.js"));
});
describe("dstr", () => {
it("obj-id-identifier-resolution-first.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-first.js"));
});
describe("dstr", () => {
it("obj-id-identifier-resolution-last.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-last.js"));
});
describe("dstr", () => {
it("obj-id-identifier-resolution-lone.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-lone.js"));
});
describe("dstr", () => {
it("obj-id-identifier-resolution-middle.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-middle.js"));
});
describe("dstr", () => {
it("obj-id-identifier-resolution-trlng.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-trlng.js"));
});
describe("dstr", () => {
it("obj-id-identifier-yield-expr.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-yield-expr.js"));
});
describe("dstr", () => {
it("obj-id-identifier-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("obj-id-identifier-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/obj-id-identifier-yield-ident-valid.js"));
});
describe("dstr", () => {
it("obj-id-init-assignment-missing.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-missing.js"));
});
describe("dstr", () => {
it("obj-id-init-assignment-null.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-null.js"));
});
describe("dstr", () => {
it("obj-id-init-assignment-truthy.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-truthy.js"));
});
describe("dstr", () => {
it("obj-id-init-assignment-undef.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-undef.js"));
});
describe("dstr", () => {
it("obj-id-init-evaluation.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-evaluation.js"));
});
describe("dstr", () => {
it("obj-id-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-id-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-id-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-id-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-id-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-id-init-in.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-in.js"));
});
describe("dstr", () => {
it("obj-id-init-let.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-let.js"));
});
describe("dstr", () => {
it("obj-id-init-order.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-order.js"));
});
describe("dstr", () => {
it("obj-id-init-simple-no-strict.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-simple-no-strict.js"));
});
describe("dstr", () => {
it("obj-id-init-simple-strict.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-simple-strict.js"));
});
describe("dstr", () => {
it("obj-id-init-yield-expr.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-yield-expr.js"));
});
describe("dstr", () => {
it("obj-id-init-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("obj-id-init-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/obj-id-init-yield-ident-valid.js"));
});
describe("dstr", () => {
it("obj-id-put-const.js", createTestHandler("language/statements/for-of/dstr/obj-id-put-const.js"));
});
describe("dstr", () => {
it("obj-id-put-let.js", createTestHandler("language/statements/for-of/dstr/obj-id-put-let.js"));
});
describe("dstr", () => {
it("obj-id-put-unresolvable-no-strict.js", createTestHandler("language/statements/for-of/dstr/obj-id-put-unresolvable-no-strict.js"));
});
describe("dstr", () => {
it("obj-id-put-unresolvable-strict.js", createTestHandler("language/statements/for-of/dstr/obj-id-put-unresolvable-strict.js"));
});
describe("dstr", () => {
it("obj-id-simple-no-strict.js", createTestHandler("language/statements/for-of/dstr/obj-id-simple-no-strict.js"));
});
describe("dstr", () => {
it("obj-id-simple-strict.js", createTestHandler("language/statements/for-of/dstr/obj-id-simple-strict.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-assignment-missing.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-missing.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-assignment-null.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-null.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-assignment-truthy.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-truthy.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-assignment-undef.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-undef.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-evaluation.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-evaluation.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-in.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-in.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-let.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-let.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-yield-expr.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-yield-expr.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("obj-prop-elem-init-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-yield-ident-valid.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-memberexpr-optchain-prop-ref-init.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-memberexpr-optchain-prop-ref-init.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-obj-literal-optchain-prop-ref-init.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-optchain-prop-ref-init.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-obj-literal-prop-ref-init-active.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-prop-ref-init-active.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-obj-literal-prop-ref-init.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-prop-ref-init.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-obj-literal-prop-ref.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-prop-ref.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-yield-expr.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-yield-expr.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("obj-prop-elem-target-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-yield-ident-valid.js"));
});
describe("dstr", () => {
it("obj-prop-identifier-resolution-first.js", createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-first.js"));
});
describe("dstr", () => {
it("obj-prop-identifier-resolution-last.js", createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-last.js"));
});
describe("dstr", () => {
it("obj-prop-identifier-resolution-lone.js", createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-lone.js"));
});
describe("dstr", () => {
it("obj-prop-identifier-resolution-middle.js", createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-middle.js"));
});
describe("dstr", () => {
it("obj-prop-identifier-resolution-trlng.js", createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-trlng.js"));
});
describe("dstr", () => {
it("obj-prop-name-evaluation-error.js", createTestHandler("language/statements/for-of/dstr/obj-prop-name-evaluation-error.js"));
});
describe("dstr", () => {
it("obj-prop-name-evaluation.js", createTestHandler("language/statements/for-of/dstr/obj-prop-name-evaluation.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-invalid.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array-null.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-null.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array-undefined-own.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-undefined-own.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array-undefined.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-undefined.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array-yield-expr.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-yield-expr.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-yield-ident-valid.js"));
});
describe("dstr", () => {
it("obj-prop-nested-array.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-invalid.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj-null.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-null.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj-undefined-own.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-undefined-own.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj-undefined.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-undefined.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj-yield-expr.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-yield-expr.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj-yield-ident-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-yield-ident-invalid.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj-yield-ident-valid.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-yield-ident-valid.js"));
});
describe("dstr", () => {
it("obj-prop-nested-obj.js", createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj.js"));
});
describe("dstr", () => {
it("obj-prop-put-const.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-const.js"));
});
describe("dstr", () => {
it("obj-prop-put-let.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-let.js"));
});
describe("dstr", () => {
it("obj-prop-put-order.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-order.js"));
});
describe("dstr", () => {
it("obj-prop-put-prop-ref-no-get.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-prop-ref-no-get.js"));
});
describe("dstr", () => {
it("obj-prop-put-prop-ref-user-err.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-prop-ref-user-err.js"));
});
describe("dstr", () => {
it("obj-prop-put-prop-ref.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-prop-ref.js"));
});
describe("dstr", () => {
it("obj-prop-put-unresolvable-no-strict.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-unresolvable-no-strict.js"));
});
describe("dstr", () => {
it("obj-prop-put-unresolvable-strict.js", createTestHandler("language/statements/for-of/dstr/obj-prop-put-unresolvable-strict.js"));
});
describe("dstr", () => {
it("obj-rest-computed-property-no-strict.js", createTestHandler("language/statements/for-of/dstr/obj-rest-computed-property-no-strict.js"));
});
describe("dstr", () => {
it("obj-rest-computed-property.js", createTestHandler("language/statements/for-of/dstr/obj-rest-computed-property.js"));
});
describe("dstr", () => {
it("obj-rest-descriptors.js", createTestHandler("language/statements/for-of/dstr/obj-rest-descriptors.js"));
});
describe("dstr", () => {
it("obj-rest-empty-obj.js", createTestHandler("language/statements/for-of/dstr/obj-rest-empty-obj.js"));
});
describe("dstr", () => {
it("obj-rest-getter-abrupt-get-error.js", createTestHandler("language/statements/for-of/dstr/obj-rest-getter-abrupt-get-error.js"));
});
describe("dstr", () => {
it("obj-rest-getter.js", createTestHandler("language/statements/for-of/dstr/obj-rest-getter.js"));
});
describe("dstr", () => {
it("obj-rest-non-string-computed-property-1.js", createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-1.js"));
});
describe("dstr", () => {
it("obj-rest-non-string-computed-property-1dot.js", createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-1dot.js"));
});
describe("dstr", () => {
it("obj-rest-non-string-computed-property-1dot0.js", createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-1dot0.js"));
});
describe("dstr", () => {
it("obj-rest-non-string-computed-property-1e0.js", createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-1e0.js"));
});
describe("dstr", () => {
it("obj-rest-non-string-computed-property-array-1.js", createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-array-1.js"));
});
describe("dstr", () => {
it("obj-rest-non-string-computed-property-array-1e0.js", createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-array-1e0.js"));
});
describe("dstr", () => {
it("obj-rest-non-string-computed-property-string-1.js", createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-string-1.js"));
});
describe("dstr", () => {
it("obj-rest-not-last-element-invalid.js", createTestHandler("language/statements/for-of/dstr/obj-rest-not-last-element-invalid.js"));
});
describe("dstr", () => {
it("obj-rest-number.js", createTestHandler("language/statements/for-of/dstr/obj-rest-number.js"));
});
describe("dstr", () => {
it("obj-rest-order.js", createTestHandler("language/statements/for-of/dstr/obj-rest-order.js"));
});
describe("dstr", () => {
it("obj-rest-put-const.js", createTestHandler("language/statements/for-of/dstr/obj-rest-put-const.js"));
});
describe("dstr", () => {
it("obj-rest-same-name.js", createTestHandler("language/statements/for-of/dstr/obj-rest-same-name.js"));
});
describe("dstr", () => {
it("obj-rest-skip-non-enumerable.js", createTestHandler("language/statements/for-of/dstr/obj-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("obj-rest-str-val.js", createTestHandler("language/statements/for-of/dstr/obj-rest-str-val.js"));
});
describe("dstr", () => {
it("obj-rest-symbol-val.js", createTestHandler("language/statements/for-of/dstr/obj-rest-symbol-val.js"));
});
describe("dstr", () => {
it("obj-rest-to-property-with-setter.js", createTestHandler("language/statements/for-of/dstr/obj-rest-to-property-with-setter.js"));
});
describe("dstr", () => {
it("obj-rest-to-property.js", createTestHandler("language/statements/for-of/dstr/obj-rest-to-property.js"));
});
describe("dstr", () => {
it("obj-rest-val-null.js", createTestHandler("language/statements/for-of/dstr/obj-rest-val-null.js"));
});
describe("dstr", () => {
it("obj-rest-val-undefined.js", createTestHandler("language/statements/for-of/dstr/obj-rest-val-undefined.js"));
});
describe("dstr", () => {
it("obj-rest-valid-object.js", createTestHandler("language/statements/for-of/dstr/obj-rest-valid-object.js"));
});
describe("dstr", () => {
it("var-ary-init-iter-close.js", createTestHandler("language/statements/for-of/dstr/var-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("var-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/statements/for-of/dstr/var-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("var-ary-init-iter-get-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("var-ary-init-iter-no-close.js", createTestHandler("language/statements/for-of/dstr/var-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("var-ary-name-iter-val.js", createTestHandler("language/statements/for-of/dstr/var-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-obj-id.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elision-exhausted.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elision-iter-close.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision-iter-close.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elision-step-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-elision.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-empty.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-init-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-init-err.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-ary-elem.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-ary-elision.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-ary-empty.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-ary-rest.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id-direct.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id-elision.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id-iter-close.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-iter-close.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-id.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-init-ary.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-init-id.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-init-obj.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-not-final-id.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-obj-id.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("var-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("var-obj-init-null.js", createTestHandler("language/statements/for-of/dstr/var-obj-init-null.js"));
});
describe("dstr", () => {
it("var-obj-init-undefined.js", createTestHandler("language/statements/for-of/dstr/var-obj-init-undefined.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-empty.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-get-value-err.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-id-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-init-err.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-init-err.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-list-err.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-ary-init.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-ary.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-eval-err.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-id-init.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-id.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-obj-init.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-prop-obj.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-rest-getter.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("var-obj-ptrn-rest-val-obj.js", createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-rest-val-obj.js"));
});
it("escaped-of.js", createTestHandler("language/statements/for-of/escaped-of.js"));
it("float32array-mutate.js", createTestHandler("language/statements/for-of/float32array-mutate.js"));
it("float32array.js", createTestHandler("language/statements/for-of/float32array.js"));
it("float64array-mutate.js", createTestHandler("language/statements/for-of/float64array-mutate.js"));
it("float64array.js", createTestHandler("language/statements/for-of/float64array.js"));
it("generator-close-via-break.js", createTestHandler("language/statements/for-of/generator-close-via-break.js"));
it("generator-close-via-continue.js", createTestHandler("language/statements/for-of/generator-close-via-continue.js"));
it("generator-close-via-return.js", createTestHandler("language/statements/for-of/generator-close-via-return.js"));
it("generator-close-via-throw.js", createTestHandler("language/statements/for-of/generator-close-via-throw.js"));
it("generator-next-error.js", createTestHandler("language/statements/for-of/generator-next-error.js"));
it("generator.js", createTestHandler("language/statements/for-of/generator.js"));
it("generic-iterable.js", createTestHandler("language/statements/for-of/generic-iterable.js"));
it("head-await-using-bound-names-fordecl-tdz.js", createTestHandler("language/statements/for-of/head-await-using-bound-names-fordecl-tdz.js"));
it("head-await-using-bound-names-in-stmt.js", createTestHandler("language/statements/for-of/head-await-using-bound-names-in-stmt.js"));
it("head-await-using-bound-names-let.js", createTestHandler("language/statements/for-of/head-await-using-bound-names-let.js"));
it("head-await-using-fresh-binding-per-iteration.js", createTestHandler("language/statements/for-of/head-await-using-fresh-binding-per-iteration.js"));
it("head-await-using-init.js", createTestHandler("language/statements/for-of/head-await-using-init.js"));
it("head-const-bound-names-dup.js", createTestHandler("language/statements/for-of/head-const-bound-names-dup.js"));
it("head-const-bound-names-fordecl-tdz.js", createTestHandler("language/statements/for-of/head-const-bound-names-fordecl-tdz.js"));
it("head-const-bound-names-in-stmt.js", createTestHandler("language/statements/for-of/head-const-bound-names-in-stmt.js"));
it("head-const-bound-names-let.js", createTestHandler("language/statements/for-of/head-const-bound-names-let.js"));
it("head-const-fresh-binding-per-iteration.js", createTestHandler("language/statements/for-of/head-const-fresh-binding-per-iteration.js"));
it("head-const-init.js", createTestHandler("language/statements/for-of/head-const-init.js"));
it("head-decl-no-expr.js", createTestHandler("language/statements/for-of/head-decl-no-expr.js"));
it("head-expr-no-expr.js", createTestHandler("language/statements/for-of/head-expr-no-expr.js"));
it("head-expr-obj-iterator-method.js", createTestHandler("language/statements/for-of/head-expr-obj-iterator-method.js"));
it("head-expr-primitive-iterator-method.js", createTestHandler("language/statements/for-of/head-expr-primitive-iterator-method.js"));
it("head-expr-to-obj.js", createTestHandler("language/statements/for-of/head-expr-to-obj.js"));
it("head-let-bound-names-dup.js", createTestHandler("language/statements/for-of/head-let-bound-names-dup.js"));
it("head-let-bound-names-fordecl-tdz.js", createTestHandler("language/statements/for-of/head-let-bound-names-fordecl-tdz.js"));
it("head-let-bound-names-in-stmt.js", createTestHandler("language/statements/for-of/head-let-bound-names-in-stmt.js"));
it("head-let-bound-names-let.js", createTestHandler("language/statements/for-of/head-let-bound-names-let.js"));
it("head-let-destructuring.js", createTestHandler("language/statements/for-of/head-let-destructuring.js"));
it("head-let-fresh-binding-per-iteration.js", createTestHandler("language/statements/for-of/head-let-fresh-binding-per-iteration.js"));
it("head-let-init.js", createTestHandler("language/statements/for-of/head-let-init.js"));
it("head-lhs-async-dot.js", createTestHandler("language/statements/for-of/head-lhs-async-dot.js"));
it("head-lhs-async-escaped.js", createTestHandler("language/statements/for-of/head-lhs-async-escaped.js"));
it("head-lhs-async-invalid.js", createTestHandler("language/statements/for-of/head-lhs-async-invalid.js"));
it("head-lhs-async-parens.js", createTestHandler("language/statements/for-of/head-lhs-async-parens.js"));
it("head-lhs-cover-non-asnmt-trgt.js", createTestHandler("language/statements/for-of/head-lhs-cover-non-asnmt-trgt.js"));
it("head-lhs-cover.js", createTestHandler("language/statements/for-of/head-lhs-cover.js"));
it("head-lhs-invalid-asnmt-ptrn-ary.js", createTestHandler("language/statements/for-of/head-lhs-invalid-asnmt-ptrn-ary.js"));
it("head-lhs-invalid-asnmt-ptrn-obj.js", createTestHandler("language/statements/for-of/head-lhs-invalid-asnmt-ptrn-obj.js"));
it("head-lhs-let.js", createTestHandler("language/statements/for-of/head-lhs-let.js"));
it("head-lhs-member.js", createTestHandler("language/statements/for-of/head-lhs-member.js"));
it("head-lhs-non-asnmt-trgt.js", createTestHandler("language/statements/for-of/head-lhs-non-asnmt-trgt.js"));
it("head-using-bound-names-fordecl-tdz.js", createTestHandler("language/statements/for-of/head-using-bound-names-fordecl-tdz.js"));
it("head-using-bound-names-in-stmt.js", createTestHandler("language/statements/for-of/head-using-bound-names-in-stmt.js"));
it("head-using-bound-names-let.js", createTestHandler("language/statements/for-of/head-using-bound-names-let.js"));
it("head-using-fresh-binding-per-iteration.js", createTestHandler("language/statements/for-of/head-using-fresh-binding-per-iteration.js"));
it("head-using-init.js", createTestHandler("language/statements/for-of/head-using-init.js"));
it("head-var-bound-names-dup.js", createTestHandler("language/statements/for-of/head-var-bound-names-dup.js"));
it("head-var-bound-names-in-stmt.js", createTestHandler("language/statements/for-of/head-var-bound-names-in-stmt.js"));
it("head-var-bound-names-let.js", createTestHandler("language/statements/for-of/head-var-bound-names-let.js"));
it("head-var-init.js", createTestHandler("language/statements/for-of/head-var-init.js"));
it("head-var-no-expr.js", createTestHandler("language/statements/for-of/head-var-no-expr.js"));
it("int16array-mutate.js", createTestHandler("language/statements/for-of/int16array-mutate.js"));
it("int16array.js", createTestHandler("language/statements/for-of/int16array.js"));
it("int32array-mutate.js", createTestHandler("language/statements/for-of/int32array-mutate.js"));
it("int32array.js", createTestHandler("language/statements/for-of/int32array.js"));
it("int8array-mutate.js", createTestHandler("language/statements/for-of/int8array-mutate.js"));
it("int8array.js", createTestHandler("language/statements/for-of/int8array.js"));
it("iterator-as-proxy.js", createTestHandler("language/statements/for-of/iterator-as-proxy.js"));
it("iterator-close-non-object.js", createTestHandler("language/statements/for-of/iterator-close-non-object.js"));
it("iterator-close-non-throw-get-method-abrupt.js", createTestHandler("language/statements/for-of/iterator-close-non-throw-get-method-abrupt.js"));
it("iterator-close-non-throw-get-method-is-null.js", createTestHandler("language/statements/for-of/iterator-close-non-throw-get-method-is-null.js"));
it("iterator-close-non-throw-get-method-non-callable.js", createTestHandler("language/statements/for-of/iterator-close-non-throw-get-method-non-callable.js"));
it("iterator-close-throw-get-method-abrupt.js", createTestHandler("language/statements/for-of/iterator-close-throw-get-method-abrupt.js"));
it("iterator-close-throw-get-method-non-callable.js", createTestHandler("language/statements/for-of/iterator-close-throw-get-method-non-callable.js"));
it("iterator-close-via-break.js", createTestHandler("language/statements/for-of/iterator-close-via-break.js"));
it("iterator-close-via-continue.js", createTestHandler("language/statements/for-of/iterator-close-via-continue.js"));
it("iterator-close-via-return.js", createTestHandler("language/statements/for-of/iterator-close-via-return.js"));
it("iterator-close-via-throw.js", createTestHandler("language/statements/for-of/iterator-close-via-throw.js"));
it("iterator-next-error.js", createTestHandler("language/statements/for-of/iterator-next-error.js"));
it("iterator-next-reference.js", createTestHandler("language/statements/for-of/iterator-next-reference.js"));
it("iterator-next-result-done-attr.js", createTestHandler("language/statements/for-of/iterator-next-result-done-attr.js"));
it("iterator-next-result-type.js", createTestHandler("language/statements/for-of/iterator-next-result-type.js"));
it("iterator-next-result-value-attr-error.js", createTestHandler("language/statements/for-of/iterator-next-result-value-attr-error.js"));
it("iterator-next-result-value-attr.js", createTestHandler("language/statements/for-of/iterator-next-result-value-attr.js"));
it("labelled-fn-stmt-const.js", createTestHandler("language/statements/for-of/labelled-fn-stmt-const.js"));
it("labelled-fn-stmt-let.js", createTestHandler("language/statements/for-of/labelled-fn-stmt-let.js"));
it("labelled-fn-stmt-lhs.js", createTestHandler("language/statements/for-of/labelled-fn-stmt-lhs.js"));
it("labelled-fn-stmt-var.js", createTestHandler("language/statements/for-of/labelled-fn-stmt-var.js"));
it("let-array-with-newline.js", createTestHandler("language/statements/for-of/let-array-with-newline.js"));
it("let-block-with-newline.js", createTestHandler("language/statements/for-of/let-block-with-newline.js"));
it("let-identifier-with-newline.js", createTestHandler("language/statements/for-of/let-identifier-with-newline.js"));
it("map-contract-expand.js", createTestHandler("language/statements/for-of/map-contract-expand.js"));
it("map-contract.js", createTestHandler("language/statements/for-of/map-contract.js"));
it("map-expand-contract.js", createTestHandler("language/statements/for-of/map-expand-contract.js"));
it("map-expand.js", createTestHandler("language/statements/for-of/map-expand.js"));
it("map.js", createTestHandler("language/statements/for-of/map.js"));
it("nested.js", createTestHandler("language/statements/for-of/nested.js"));
it("return-from-catch.js", createTestHandler("language/statements/for-of/return-from-catch.js"));
it("return-from-finally.js", createTestHandler("language/statements/for-of/return-from-finally.js"));
it("return-from-try.js", createTestHandler("language/statements/for-of/return-from-try.js"));
it("return.js", createTestHandler("language/statements/for-of/return.js"));
it("scope-body-lex-boundary.js", createTestHandler("language/statements/for-of/scope-body-lex-boundary.js"));
it("scope-body-lex-close.js", createTestHandler("language/statements/for-of/scope-body-lex-close.js"));
it("scope-body-lex-open.js", createTestHandler("language/statements/for-of/scope-body-lex-open.js"));
it("scope-body-var-none.js", createTestHandler("language/statements/for-of/scope-body-var-none.js"));
it("scope-head-lex-close.js", createTestHandler("language/statements/for-of/scope-head-lex-close.js"));
it("scope-head-lex-open.js", createTestHandler("language/statements/for-of/scope-head-lex-open.js"));
it("scope-head-var-none.js", createTestHandler("language/statements/for-of/scope-head-var-none.js"));
it("set-contract-expand.js", createTestHandler("language/statements/for-of/set-contract-expand.js"));
it("set-contract.js", createTestHandler("language/statements/for-of/set-contract.js"));
it("set-expand-contract.js", createTestHandler("language/statements/for-of/set-expand-contract.js"));
it("set-expand.js", createTestHandler("language/statements/for-of/set-expand.js"));
it("set.js", createTestHandler("language/statements/for-of/set.js"));
it("string-astral-truncated.js", createTestHandler("language/statements/for-of/string-astral-truncated.js"));
it("string-astral.js", createTestHandler("language/statements/for-of/string-astral.js"));
it("string-bmp.js", createTestHandler("language/statements/for-of/string-bmp.js"));
it("throw-from-catch.js", createTestHandler("language/statements/for-of/throw-from-catch.js"));
it("throw-from-finally.js", createTestHandler("language/statements/for-of/throw-from-finally.js"));
it("throw.js", createTestHandler("language/statements/for-of/throw.js"));
it("typedarray-backed-by-resizable-buffer-grow-before-end.js", createTestHandler("language/statements/for-of/typedarray-backed-by-resizable-buffer-grow-before-end.js"));
it("typedarray-backed-by-resizable-buffer-grow-mid-iteration.js", createTestHandler("language/statements/for-of/typedarray-backed-by-resizable-buffer-grow-mid-iteration.js"));
it("typedarray-backed-by-resizable-buffer-shrink-mid-iteration.js", createTestHandler("language/statements/for-of/typedarray-backed-by-resizable-buffer-shrink-mid-iteration.js"));
it("typedarray-backed-by-resizable-buffer-shrink-to-zero-mid-iteration.js", createTestHandler("language/statements/for-of/typedarray-backed-by-resizable-buffer-shrink-to-zero-mid-iteration.js"));
it("typedarray-backed-by-resizable-buffer.js", createTestHandler("language/statements/for-of/typedarray-backed-by-resizable-buffer.js"));
it("uint16array-mutate.js", createTestHandler("language/statements/for-of/uint16array-mutate.js"));
it("uint16array.js", createTestHandler("language/statements/for-of/uint16array.js"));
it("uint32array-mutate.js", createTestHandler("language/statements/for-of/uint32array-mutate.js"));
it("uint32array.js", createTestHandler("language/statements/for-of/uint32array.js"));
it("uint8array-mutate.js", createTestHandler("language/statements/for-of/uint8array-mutate.js"));
it("uint8array.js", createTestHandler("language/statements/for-of/uint8array.js"));
it("uint8clampedarray-mutate.js", createTestHandler("language/statements/for-of/uint8clampedarray-mutate.js"));
it("uint8clampedarray.js", createTestHandler("language/statements/for-of/uint8clampedarray.js"));
it("yield-from-catch.js", createTestHandler("language/statements/for-of/yield-from-catch.js"));
it("yield-from-finally.js", createTestHandler("language/statements/for-of/yield-from-finally.js"));
it("yield-from-try.js", createTestHandler("language/statements/for-of/yield-from-try.js"));
it("yield-star-from-catch.js", createTestHandler("language/statements/for-of/yield-star-from-catch.js"));
it("yield-star-from-finally.js", createTestHandler("language/statements/for-of/yield-star-from-finally.js"));
it("yield-star-from-try.js", createTestHandler("language/statements/for-of/yield-star-from-try.js"));
it("yield-star.js", createTestHandler("language/statements/for-of/yield-star.js"));
it("yield.js", createTestHandler("language/statements/for-of/yield.js"));
});
