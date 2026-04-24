import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("function", () => {
it("S10.1.1_A1_T2.js", createTestHandler("language/expressions/function/S10.1.1_A1_T2.js"));
it("arguments-with-arguments-fn.js", createTestHandler("language/expressions/function/arguments-with-arguments-fn.js"));
it("arguments-with-arguments-lex.js", createTestHandler("language/expressions/function/arguments-with-arguments-lex.js"));
it("array-destructuring-param-strict-body.js", createTestHandler("language/expressions/function/array-destructuring-param-strict-body.js"));
it("dflt-params-abrupt.js", createTestHandler("language/expressions/function/dflt-params-abrupt.js"));
it("dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/function/dflt-params-arg-val-not-undefined.js"));
it("dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/function/dflt-params-arg-val-undefined.js"));
it("dflt-params-duplicates.js", createTestHandler("language/expressions/function/dflt-params-duplicates.js"));
it("dflt-params-ref-later.js", createTestHandler("language/expressions/function/dflt-params-ref-later.js"));
it("dflt-params-ref-prior.js", createTestHandler("language/expressions/function/dflt-params-ref-prior.js"));
it("dflt-params-ref-self.js", createTestHandler("language/expressions/function/dflt-params-ref-self.js"));
it("dflt-params-rest.js", createTestHandler("language/expressions/function/dflt-params-rest.js"));
it("dflt-params-trailing-comma.js", createTestHandler("language/expressions/function/dflt-params-trailing-comma.js"));
describe("dstr", () => {
it("ary-init-iter-close.js", createTestHandler("language/expressions/function/dstr/ary-init-iter-close.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/function/dstr/ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err.js", createTestHandler("language/expressions/function/dstr/ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("ary-init-iter-no-close.js", createTestHandler("language/expressions/function/dstr/ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("ary-name-iter-val.js", createTestHandler("language/expressions/function/dstr/ary-name-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-empty.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/function/dstr/ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-close.js", createTestHandler("language/expressions/function/dstr/dflt-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/function/dstr/dflt-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err.js", createTestHandler("language/expressions/function/dstr/dflt-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-no-close.js", createTestHandler("language/expressions/function/dstr/dflt-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("dflt-ary-name-iter-val.js", createTestHandler("language/expressions/function/dstr/dflt-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-empty.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/function/dstr/dflt-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-init-null.js", createTestHandler("language/expressions/function/dstr/dflt-obj-init-null.js"));
});
describe("dstr", () => {
it("dflt-obj-init-undefined.js", createTestHandler("language/expressions/function/dstr/dflt-obj-init-undefined.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-empty.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-list-err.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/function/dstr/dflt-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("obj-init-null.js", createTestHandler("language/expressions/function/dstr/obj-init-null.js"));
});
describe("dstr", () => {
it("obj-init-undefined.js", createTestHandler("language/expressions/function/dstr/obj-init-undefined.js"));
});
describe("dstr", () => {
it("obj-ptrn-empty.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-list-err.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-getter.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/function/dstr/obj-ptrn-rest-val-obj.js"));
});
it("early-body-super-call.js", createTestHandler("language/expressions/function/early-body-super-call.js"));
it("early-body-super-prop.js", createTestHandler("language/expressions/function/early-body-super-prop.js"));
describe("early-errors", () => {
it("invalid-names-call-expression-bad-reference.js", createTestHandler("language/expressions/function/early-errors/invalid-names-call-expression-bad-reference.js"));
});
describe("early-errors", () => {
it("invalid-names-call-expression-this.js", createTestHandler("language/expressions/function/early-errors/invalid-names-call-expression-this.js"));
});
describe("early-errors", () => {
it("invalid-names-member-expression-bad-reference.js", createTestHandler("language/expressions/function/early-errors/invalid-names-member-expression-bad-reference.js"));
});
describe("early-errors", () => {
it("invalid-names-member-expression-this.js", createTestHandler("language/expressions/function/early-errors/invalid-names-member-expression-this.js"));
});
it("early-params-super-call.js", createTestHandler("language/expressions/function/early-params-super-call.js"));
it("early-params-super-prop.js", createTestHandler("language/expressions/function/early-params-super-prop.js"));
it("eval-var-scope-syntax-err.js", createTestHandler("language/expressions/function/eval-var-scope-syntax-err.js"));
describe("forbidden-ext", () => {
describe("b1", () => {
it("func-expr-strict-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/function/forbidden-ext/b1/func-expr-strict-forbidden-ext-direct-access-prop-arguments.js"));
});
});
describe("forbidden-ext", () => {
describe("b1", () => {
it("func-expr-strict-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/function/forbidden-ext/b1/func-expr-strict-forbidden-ext-direct-access-prop-caller.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/function/forbidden-ext/b2/func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/function/forbidden-ext/b2/func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("func-expr-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/function/forbidden-ext/b2/func-expr-forbidden-ext-indirect-access-prop-caller.js"));
});
});
it("length-dflt.js", createTestHandler("language/expressions/function/length-dflt.js"));
it("name-arguments-non-strict.js", createTestHandler("language/expressions/function/name-arguments-non-strict.js"));
it("name-arguments-strict-body.js", createTestHandler("language/expressions/function/name-arguments-strict-body.js"));
it("name-arguments-strict.js", createTestHandler("language/expressions/function/name-arguments-strict.js"));
it("name-eval-non-strict.js", createTestHandler("language/expressions/function/name-eval-non-strict.js"));
it("name-eval-strict-body.js", createTestHandler("language/expressions/function/name-eval-strict-body.js"));
it("name-eval-strict.js", createTestHandler("language/expressions/function/name-eval-strict.js"));
it("name-eval-stricteval.js", createTestHandler("language/expressions/function/name-eval-stricteval.js"));
it("name.js", createTestHandler("language/expressions/function/name.js"));
it("named-no-strict-reassign-fn-name-in-body-in-arrow.js", createTestHandler("language/expressions/function/named-no-strict-reassign-fn-name-in-body-in-arrow.js"));
it("named-no-strict-reassign-fn-name-in-body-in-eval.js", createTestHandler("language/expressions/function/named-no-strict-reassign-fn-name-in-body-in-eval.js"));
it("named-no-strict-reassign-fn-name-in-body.js", createTestHandler("language/expressions/function/named-no-strict-reassign-fn-name-in-body.js"));
it("named-strict-error-reassign-fn-name-in-body-in-arrow.js", createTestHandler("language/expressions/function/named-strict-error-reassign-fn-name-in-body-in-arrow.js"));
it("named-strict-error-reassign-fn-name-in-body-in-eval.js", createTestHandler("language/expressions/function/named-strict-error-reassign-fn-name-in-body-in-eval.js"));
it("named-strict-error-reassign-fn-name-in-body.js", createTestHandler("language/expressions/function/named-strict-error-reassign-fn-name-in-body.js"));
it("object-destructuring-param-strict-body.js", createTestHandler("language/expressions/function/object-destructuring-param-strict-body.js"));
it("param-arguments-non-strict.js", createTestHandler("language/expressions/function/param-arguments-non-strict.js"));
it("param-dflt-yield-non-strict.js", createTestHandler("language/expressions/function/param-dflt-yield-non-strict.js"));
it("param-dflt-yield-strict.js", createTestHandler("language/expressions/function/param-dflt-yield-strict.js"));
it("param-duplicated-non-strict.js", createTestHandler("language/expressions/function/param-duplicated-non-strict.js"));
it("param-duplicated-strict-1.js", createTestHandler("language/expressions/function/param-duplicated-strict-1.js"));
it("param-duplicated-strict-2.js", createTestHandler("language/expressions/function/param-duplicated-strict-2.js"));
it("param-duplicated-strict-3.js", createTestHandler("language/expressions/function/param-duplicated-strict-3.js"));
it("param-duplicated-strict-body-1.js", createTestHandler("language/expressions/function/param-duplicated-strict-body-1.js"));
it("param-duplicated-strict-body-2.js", createTestHandler("language/expressions/function/param-duplicated-strict-body-2.js"));
it("param-duplicated-strict-body-3.js", createTestHandler("language/expressions/function/param-duplicated-strict-body-3.js"));
it("param-eval-non-strict-is-correct-value.js", createTestHandler("language/expressions/function/param-eval-non-strict-is-correct-value.js"));
it("param-eval-non-strict.js", createTestHandler("language/expressions/function/param-eval-non-strict.js"));
it("param-eval-strict-body.js", createTestHandler("language/expressions/function/param-eval-strict-body.js"));
it("param-eval-stricteval.js", createTestHandler("language/expressions/function/param-eval-stricteval.js"));
it("params-dflt-args-unmapped.js", createTestHandler("language/expressions/function/params-dflt-args-unmapped.js"));
it("params-dflt-ref-arguments.js", createTestHandler("language/expressions/function/params-dflt-ref-arguments.js"));
it("params-trailing-comma-multiple.js", createTestHandler("language/expressions/function/params-trailing-comma-multiple.js"));
it("params-trailing-comma-single.js", createTestHandler("language/expressions/function/params-trailing-comma-single.js"));
it("rest-param-strict-body.js", createTestHandler("language/expressions/function/rest-param-strict-body.js"));
it("rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/function/rest-params-trailing-comma-early-error.js"));
it("scope-body-lex-distinct.js", createTestHandler("language/expressions/function/scope-body-lex-distinct.js"));
it("scope-name-var-close.js", createTestHandler("language/expressions/function/scope-name-var-close.js"));
it("scope-name-var-open-non-strict.js", createTestHandler("language/expressions/function/scope-name-var-open-non-strict.js"));
it("scope-name-var-open-strict.js", createTestHandler("language/expressions/function/scope-name-var-open-strict.js"));
it("scope-param-elem-var-close.js", createTestHandler("language/expressions/function/scope-param-elem-var-close.js"));
it("scope-param-elem-var-open.js", createTestHandler("language/expressions/function/scope-param-elem-var-open.js"));
it("scope-param-rest-elem-var-close.js", createTestHandler("language/expressions/function/scope-param-rest-elem-var-close.js"));
it("scope-param-rest-elem-var-open.js", createTestHandler("language/expressions/function/scope-param-rest-elem-var-open.js"));
it("scope-paramsbody-var-close.js", createTestHandler("language/expressions/function/scope-paramsbody-var-close.js"));
it("scope-paramsbody-var-open.js", createTestHandler("language/expressions/function/scope-paramsbody-var-open.js"));
it("static-init-await-binding.js", createTestHandler("language/expressions/function/static-init-await-binding.js"));
it("static-init-await-reference.js", createTestHandler("language/expressions/function/static-init-await-reference.js"));
it("unscopables-with-in-nested-fn.js", createTestHandler("language/expressions/function/unscopables-with-in-nested-fn.js"));
it("unscopables-with.js", createTestHandler("language/expressions/function/unscopables-with.js"));
it("use-strict-with-non-simple-param.js", createTestHandler("language/expressions/function/use-strict-with-non-simple-param.js"));
});
