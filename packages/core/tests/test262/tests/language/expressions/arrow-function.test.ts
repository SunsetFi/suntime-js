import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("arrow-function", () => {
it("ArrowFunction_restricted-properties.js", createTestHandler("language/expressions/arrow-function/ArrowFunction_restricted-properties.js"));
it("array-destructuring-param-strict-body.js", createTestHandler("language/expressions/arrow-function/array-destructuring-param-strict-body.js"));
describe("arrow", () => {
it("binding-tests-1.js", createTestHandler("language/expressions/arrow-function/arrow/binding-tests-1.js"));
});
describe("arrow", () => {
it("binding-tests-2.js", createTestHandler("language/expressions/arrow-function/arrow/binding-tests-2.js"));
});
describe("arrow", () => {
it("binding-tests-3.js", createTestHandler("language/expressions/arrow-function/arrow/binding-tests-3.js"));
});
describe("arrow", () => {
it("capturing-closure-variables-1.js", createTestHandler("language/expressions/arrow-function/arrow/capturing-closure-variables-1.js"));
});
describe("arrow", () => {
it("capturing-closure-variables-2.js", createTestHandler("language/expressions/arrow-function/arrow/capturing-closure-variables-2.js"));
});
describe("arrow", () => {
it("concisebody-lookahead-assignmentexpression-1.js", createTestHandler("language/expressions/arrow-function/arrow/concisebody-lookahead-assignmentexpression-1.js"));
});
describe("arrow", () => {
it("concisebody-lookahead-assignmentexpression-2.js", createTestHandler("language/expressions/arrow-function/arrow/concisebody-lookahead-assignmentexpression-2.js"));
});
it("cannot-override-this-with-thisArg.js", createTestHandler("language/expressions/arrow-function/cannot-override-this-with-thisArg.js"));
it("dflt-params-abrupt.js", createTestHandler("language/expressions/arrow-function/dflt-params-abrupt.js"));
it("dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/arrow-function/dflt-params-arg-val-not-undefined.js"));
it("dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/arrow-function/dflt-params-arg-val-undefined.js"));
it("dflt-params-duplicates.js", createTestHandler("language/expressions/arrow-function/dflt-params-duplicates.js"));
it("dflt-params-ref-later.js", createTestHandler("language/expressions/arrow-function/dflt-params-ref-later.js"));
it("dflt-params-ref-prior.js", createTestHandler("language/expressions/arrow-function/dflt-params-ref-prior.js"));
it("dflt-params-ref-self.js", createTestHandler("language/expressions/arrow-function/dflt-params-ref-self.js"));
it("dflt-params-rest.js", createTestHandler("language/expressions/arrow-function/dflt-params-rest.js"));
it("dflt-params-trailing-comma.js", createTestHandler("language/expressions/arrow-function/dflt-params-trailing-comma.js"));
describe("dstr", () => {
it("ary-init-iter-close.js", createTestHandler("language/expressions/arrow-function/dstr/ary-init-iter-close.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/arrow-function/dstr/ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err.js", createTestHandler("language/expressions/arrow-function/dstr/ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("ary-init-iter-no-close.js", createTestHandler("language/expressions/arrow-function/dstr/ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("ary-name-iter-val.js", createTestHandler("language/expressions/arrow-function/dstr/ary-name-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-empty.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/arrow-function/dstr/ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-close.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-no-close.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("dflt-ary-name-iter-val.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-empty.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-init-null.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-init-null.js"));
});
describe("dstr", () => {
it("dflt-obj-init-undefined.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-init-undefined.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-empty.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-list-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/arrow-function/dstr/dflt-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("obj-init-null.js", createTestHandler("language/expressions/arrow-function/dstr/obj-init-null.js"));
});
describe("dstr", () => {
it("obj-init-undefined.js", createTestHandler("language/expressions/arrow-function/dstr/obj-init-undefined.js"));
});
describe("dstr", () => {
it("obj-ptrn-empty.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-list-err.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-getter.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/arrow-function/dstr/obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-break-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-break-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-case-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-case-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-catch-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-catch-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-class-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-class-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-const-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-const-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-continue-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-continue-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-debugger-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-debugger-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-default-escaped-ext.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-default-escaped-ext.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-default-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-default-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-default.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-default.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-delete-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-delete-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-do-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-do-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-else-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-else-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-enum-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-enum-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-export-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-export-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-extends-escaped-ext.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-extends-escaped-ext.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-extends-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-extends-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-extends.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-extends.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-finally-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-finally-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-for-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-for-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-function-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-function-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-if-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-if-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-implements-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-implements-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-import-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-import-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-in-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-in-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-instanceof-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-instanceof-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-interface-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-interface-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-let-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-let-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-new-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-new-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-package-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-package-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-private-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-private-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-protected-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-protected-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-public-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-public-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-return-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-return-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-static-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-static-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-super-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-super-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-switch-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-switch-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-this-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-this-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-throw-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-throw-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-try-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-try-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-typeof-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-typeof-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-var-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-var-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-void-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-void-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-while-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-while-escaped.js"));
});
describe("dstr", () => {
it("syntax-error-ident-ref-with-escaped.js", createTestHandler("language/expressions/arrow-function/dstr/syntax-error-ident-ref-with-escaped.js"));
});
it("empty-function-body-returns-undefined.js", createTestHandler("language/expressions/arrow-function/empty-function-body-returns-undefined.js"));
it("eval-var-scope-syntax-err.js", createTestHandler("language/expressions/arrow-function/eval-var-scope-syntax-err.js"));
it("expression-body-implicit-return.js", createTestHandler("language/expressions/arrow-function/expression-body-implicit-return.js"));
it("extensibility.js", createTestHandler("language/expressions/arrow-function/extensibility.js"));
describe("forbidden-ext", () => {
describe("b1", () => {
it("arrow-function-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/arrow-function/forbidden-ext/b1/arrow-function-forbidden-ext-direct-access-prop-arguments.js"));
});
});
describe("forbidden-ext", () => {
describe("b1", () => {
it("arrow-function-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/arrow-function/forbidden-ext/b1/arrow-function-forbidden-ext-direct-access-prop-caller.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("arrow-function-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/arrow-function/forbidden-ext/b2/arrow-function-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("arrow-function-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/arrow-function/forbidden-ext/b2/arrow-function-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("arrow-function-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/arrow-function/forbidden-ext/b2/arrow-function-forbidden-ext-indirect-access-prop-caller.js"));
});
});
it("length-dflt.js", createTestHandler("language/expressions/arrow-function/length-dflt.js"));
it("lexical-arguments.js", createTestHandler("language/expressions/arrow-function/lexical-arguments.js"));
it("lexical-bindings-overriden-by-formal-parameters-non-strict.js", createTestHandler("language/expressions/arrow-function/lexical-bindings-overriden-by-formal-parameters-non-strict.js"));
it("lexical-new.target-closure-returned.js", createTestHandler("language/expressions/arrow-function/lexical-new.target-closure-returned.js"));
it("lexical-new.target.js", createTestHandler("language/expressions/arrow-function/lexical-new.target.js"));
it("lexical-super-call-from-within-constructor.js", createTestHandler("language/expressions/arrow-function/lexical-super-call-from-within-constructor.js"));
it("lexical-super-property-from-within-constructor.js", createTestHandler("language/expressions/arrow-function/lexical-super-property-from-within-constructor.js"));
it("lexical-super-property.js", createTestHandler("language/expressions/arrow-function/lexical-super-property.js"));
it("lexical-supercall-from-immediately-invoked-arrow.js", createTestHandler("language/expressions/arrow-function/lexical-supercall-from-immediately-invoked-arrow.js"));
it("lexical-this.js", createTestHandler("language/expressions/arrow-function/lexical-this.js"));
it("low-precedence-expression-body-no-parens.js", createTestHandler("language/expressions/arrow-function/low-precedence-expression-body-no-parens.js"));
it("name.js", createTestHandler("language/expressions/arrow-function/name.js"));
it("non-strict.js", createTestHandler("language/expressions/arrow-function/non-strict.js"));
it("object-destructuring-param-strict-body.js", createTestHandler("language/expressions/arrow-function/object-destructuring-param-strict-body.js"));
it("object-literal-return-requires-body-parens.js", createTestHandler("language/expressions/arrow-function/object-literal-return-requires-body-parens.js"));
it("param-dflt-yield-expr.js", createTestHandler("language/expressions/arrow-function/param-dflt-yield-expr.js"));
it("param-dflt-yield-id-non-strict.js", createTestHandler("language/expressions/arrow-function/param-dflt-yield-id-non-strict.js"));
it("param-dflt-yield-id-strict.js", createTestHandler("language/expressions/arrow-function/param-dflt-yield-id-strict.js"));
it("params-duplicate.js", createTestHandler("language/expressions/arrow-function/params-duplicate.js"));
it("params-trailing-comma-multiple.js", createTestHandler("language/expressions/arrow-function/params-trailing-comma-multiple.js"));
it("params-trailing-comma-single.js", createTestHandler("language/expressions/arrow-function/params-trailing-comma-single.js"));
it("prototype-rules.js", createTestHandler("language/expressions/arrow-function/prototype-rules.js"));
it("rest-param-strict-body.js", createTestHandler("language/expressions/arrow-function/rest-param-strict-body.js"));
it("rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/arrow-function/rest-params-trailing-comma-early-error.js"));
it("scope-body-lex-distinct.js", createTestHandler("language/expressions/arrow-function/scope-body-lex-distinct.js"));
it("scope-param-elem-var-close.js", createTestHandler("language/expressions/arrow-function/scope-param-elem-var-close.js"));
it("scope-param-elem-var-open.js", createTestHandler("language/expressions/arrow-function/scope-param-elem-var-open.js"));
it("scope-param-rest-elem-var-close.js", createTestHandler("language/expressions/arrow-function/scope-param-rest-elem-var-close.js"));
it("scope-param-rest-elem-var-open.js", createTestHandler("language/expressions/arrow-function/scope-param-rest-elem-var-open.js"));
it("scope-paramsbody-var-close.js", createTestHandler("language/expressions/arrow-function/scope-paramsbody-var-close.js"));
it("scope-paramsbody-var-open.js", createTestHandler("language/expressions/arrow-function/scope-paramsbody-var-open.js"));
it("statement-body-requires-braces-must-return-explicitly-missing.js", createTestHandler("language/expressions/arrow-function/statement-body-requires-braces-must-return-explicitly-missing.js"));
it("statement-body-requires-braces-must-return-explicitly.js", createTestHandler("language/expressions/arrow-function/statement-body-requires-braces-must-return-explicitly.js"));
it("static-init-await-binding.js", createTestHandler("language/expressions/arrow-function/static-init-await-binding.js"));
it("static-init-await-reference.js", createTestHandler("language/expressions/arrow-function/static-init-await-reference.js"));
it("strict.js", createTestHandler("language/expressions/arrow-function/strict.js"));
describe("syntax", () => {
it("arrowparameters-bindingidentifier-arguments.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-arguments.js"));
});
describe("syntax", () => {
it("arrowparameters-bindingidentifier-concisebody-assignmentexpression.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-concisebody-assignmentexpression.js"));
});
describe("syntax", () => {
it("arrowparameters-bindingidentifier-concisebody-functionbody.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-concisebody-functionbody.js"));
});
describe("syntax", () => {
it("arrowparameters-bindingidentifier-eval.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-eval.js"));
});
describe("syntax", () => {
it("arrowparameters-bindingidentifier-lineterminator-concisebody-assignmentexpression.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-lineterminator-concisebody-assignmentexpression.js"));
});
describe("syntax", () => {
it("arrowparameters-bindingidentifier-lineterminator-concisebody-functionbody.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-lineterminator-concisebody-functionbody.js"));
});
describe("syntax", () => {
it("arrowparameters-bindingidentifier-yield.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-bindingidentifier-yield.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-concisebody-assignmentexpression.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-concisebody-assignmentexpression.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-concisebody-functionbody.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-concisebody-functionbody.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-formalparameters-arguments.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-formalparameters-arguments.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-formalparameters-eval.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-formalparameters-eval.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-formalparameters-yield.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-formalparameters-yield.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-includes-rest-concisebody-functionbody.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-includes-rest-concisebody-functionbody.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-initialize-1.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-initialize-1.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-initialize-2.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-initialize-2.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-lineterminator-concisebody-assignmentexpression.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-lineterminator-concisebody-assignmentexpression.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-lineterminator-concisebody-functionbody.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-lineterminator-concisebody-functionbody.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-rest-concisebody-functionbody.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-rest-concisebody-functionbody.js"));
});
describe("syntax", () => {
it("arrowparameters-cover-rest-lineterminator-concisebody-functionbody.js", createTestHandler("language/expressions/arrow-function/syntax/arrowparameters-cover-rest-lineterminator-concisebody-functionbody.js"));
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-bindingidentifier-identifier-futurereservedword.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-identifier-futurereservedword.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-bindingidentifier-identifier-strict-futurereservedword.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-identifier-strict-futurereservedword.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-bindingidentifier-identifier.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-identifier.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-bindingidentifier-no-arguments.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-no-arguments.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-bindingidentifier-no-eval.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-no-eval.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-bindingidentifier-no-yield.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-no-yield.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-bindingidentifier-rest.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-bindingidentifier-rest.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-arguments.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-arguments.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-array-1.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array-1.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-array-2.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array-2.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-array-3.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array-3.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-object-1.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-1.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-object-2.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-2.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-object-3.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-3.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-object-4.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-4.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-object-5.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-5.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-binding-object-6.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-6.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates-rest.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-rest.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-duplicates.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-eval.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-eval.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("arrowparameters-cover-no-yield.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-yield.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("asi-restriction-invalid-parenless-parameters-expression-body.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/asi-restriction-invalid-parenless-parameters-expression-body.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("asi-restriction-invalid-parenless-parameters.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/asi-restriction-invalid-parenless-parameters.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("asi-restriction-invalid.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/asi-restriction-invalid.js"));
});
});
describe("syntax", () => {
describe("early-errors", () => {
it("use-strict-with-non-simple-param.js", createTestHandler("language/expressions/arrow-function/syntax/early-errors/use-strict-with-non-simple-param.js"));
});
});
describe("syntax", () => {
it("variations.js", createTestHandler("language/expressions/arrow-function/syntax/variations.js"));
});
it("throw-new.js", createTestHandler("language/expressions/arrow-function/throw-new.js"));
it("unscopables-with-in-nested-fn.js", createTestHandler("language/expressions/arrow-function/unscopables-with-in-nested-fn.js"));
it("unscopables-with.js", createTestHandler("language/expressions/arrow-function/unscopables-with.js"));
});
