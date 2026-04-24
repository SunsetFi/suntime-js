import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("generators", () => {
it("arguments-with-arguments-fn.js", createTestHandler("language/expressions/generators/arguments-with-arguments-fn.js"));
it("arguments-with-arguments-lex.js", createTestHandler("language/expressions/generators/arguments-with-arguments-lex.js"));
it("array-destructuring-param-strict-body.js", createTestHandler("language/expressions/generators/array-destructuring-param-strict-body.js"));
it("default-proto.js", createTestHandler("language/expressions/generators/default-proto.js"));
it("dflt-params-abrupt.js", createTestHandler("language/expressions/generators/dflt-params-abrupt.js"));
it("dflt-params-arg-val-not-undefined.js", createTestHandler("language/expressions/generators/dflt-params-arg-val-not-undefined.js"));
it("dflt-params-arg-val-undefined.js", createTestHandler("language/expressions/generators/dflt-params-arg-val-undefined.js"));
it("dflt-params-duplicates.js", createTestHandler("language/expressions/generators/dflt-params-duplicates.js"));
it("dflt-params-ref-later.js", createTestHandler("language/expressions/generators/dflt-params-ref-later.js"));
it("dflt-params-ref-prior.js", createTestHandler("language/expressions/generators/dflt-params-ref-prior.js"));
it("dflt-params-ref-self.js", createTestHandler("language/expressions/generators/dflt-params-ref-self.js"));
it("dflt-params-rest.js", createTestHandler("language/expressions/generators/dflt-params-rest.js"));
it("dflt-params-trailing-comma.js", createTestHandler("language/expressions/generators/dflt-params-trailing-comma.js"));
describe("dstr", () => {
it("ary-init-iter-close.js", createTestHandler("language/expressions/generators/dstr/ary-init-iter-close.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/generators/dstr/ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err.js", createTestHandler("language/expressions/generators/dstr/ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("ary-init-iter-no-close.js", createTestHandler("language/expressions/generators/dstr/ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("ary-name-iter-val.js", createTestHandler("language/expressions/generators/dstr/ary-name-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-empty.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/generators/dstr/ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-close.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-no-close.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("dflt-ary-name-iter-val.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-exhausted.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-step-err.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-empty.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elem.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elision.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-empty.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-rest.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-direct.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-ary.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-id.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-obj.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-id.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-id.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/expressions/generators/dstr/dflt-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-init-null.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-init-null.js"));
});
describe("dstr", () => {
it("dflt-obj-init-undefined.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-init-undefined.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-empty.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-list-err.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-getter.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/generators/dstr/dflt-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("obj-init-null.js", createTestHandler("language/expressions/generators/dstr/obj-init-null.js"));
});
describe("dstr", () => {
it("obj-init-undefined.js", createTestHandler("language/expressions/generators/dstr/obj-init-undefined.js"));
});
describe("dstr", () => {
it("obj-ptrn-empty.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-get-value-err.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-skipped.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-throws.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-unresolvable.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-trailing-comma.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-list-err.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-init.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-value-null.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-eval-err.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-throws.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-init.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-null.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-getter.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-val-obj.js", createTestHandler("language/expressions/generators/dstr/obj-ptrn-rest-val-obj.js"));
});
it("eval-body-proto-realm.js", createTestHandler("language/expressions/generators/eval-body-proto-realm.js"));
it("eval-var-scope-syntax-err.js", createTestHandler("language/expressions/generators/eval-var-scope-syntax-err.js"));
describe("forbidden-ext", () => {
describe("b1", () => {
it("gen-func-expr-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/expressions/generators/forbidden-ext/b1/gen-func-expr-forbidden-ext-direct-access-prop-arguments.js"));
});
});
describe("forbidden-ext", () => {
describe("b1", () => {
it("gen-func-expr-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/expressions/generators/forbidden-ext/b1/gen-func-expr-forbidden-ext-direct-access-prop-caller.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/expressions/generators/forbidden-ext/b2/gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/expressions/generators/forbidden-ext/b2/gen-func-expr-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-func-expr-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/expressions/generators/forbidden-ext/b2/gen-func-expr-forbidden-ext-indirect-access-prop-caller.js"));
});
});
it("generator-created-after-decl-inst.js", createTestHandler("language/expressions/generators/generator-created-after-decl-inst.js"));
it("has-instance.js", createTestHandler("language/expressions/generators/has-instance.js"));
it("implicit-name.js", createTestHandler("language/expressions/generators/implicit-name.js"));
it("invoke-as-constructor.js", createTestHandler("language/expressions/generators/invoke-as-constructor.js"));
it("length-dflt.js", createTestHandler("language/expressions/generators/length-dflt.js"));
it("length-property-descriptor.js", createTestHandler("language/expressions/generators/length-property-descriptor.js"));
it("name.js", createTestHandler("language/expressions/generators/name.js"));
it("named-no-strict-reassign-fn-name-in-body-in-arrow.js", createTestHandler("language/expressions/generators/named-no-strict-reassign-fn-name-in-body-in-arrow.js"));
it("named-no-strict-reassign-fn-name-in-body-in-eval.js", createTestHandler("language/expressions/generators/named-no-strict-reassign-fn-name-in-body-in-eval.js"));
it("named-no-strict-reassign-fn-name-in-body.js", createTestHandler("language/expressions/generators/named-no-strict-reassign-fn-name-in-body.js"));
it("named-strict-error-reassign-fn-name-in-body-in-arrow.js", createTestHandler("language/expressions/generators/named-strict-error-reassign-fn-name-in-body-in-arrow.js"));
it("named-strict-error-reassign-fn-name-in-body-in-eval.js", createTestHandler("language/expressions/generators/named-strict-error-reassign-fn-name-in-body-in-eval.js"));
it("named-strict-error-reassign-fn-name-in-body.js", createTestHandler("language/expressions/generators/named-strict-error-reassign-fn-name-in-body.js"));
it("named-yield-as-binding-identifier-escaped.js", createTestHandler("language/expressions/generators/named-yield-as-binding-identifier-escaped.js"));
it("named-yield-as-binding-identifier.js", createTestHandler("language/expressions/generators/named-yield-as-binding-identifier.js"));
it("named-yield-as-identifier-reference-escaped.js", createTestHandler("language/expressions/generators/named-yield-as-identifier-reference-escaped.js"));
it("named-yield-as-identifier-reference.js", createTestHandler("language/expressions/generators/named-yield-as-identifier-reference.js"));
it("named-yield-as-label-identifier-escaped.js", createTestHandler("language/expressions/generators/named-yield-as-label-identifier-escaped.js"));
it("named-yield-as-label-identifier.js", createTestHandler("language/expressions/generators/named-yield-as-label-identifier.js"));
it("named-yield-identifier-non-strict.js", createTestHandler("language/expressions/generators/named-yield-identifier-non-strict.js"));
it("named-yield-identifier-spread-non-strict.js", createTestHandler("language/expressions/generators/named-yield-identifier-spread-non-strict.js"));
it("named-yield-identifier-spread-strict.js", createTestHandler("language/expressions/generators/named-yield-identifier-spread-strict.js"));
it("named-yield-identifier-strict.js", createTestHandler("language/expressions/generators/named-yield-identifier-strict.js"));
it("named-yield-spread-arr-multiple.js", createTestHandler("language/expressions/generators/named-yield-spread-arr-multiple.js"));
it("named-yield-spread-arr-single.js", createTestHandler("language/expressions/generators/named-yield-spread-arr-single.js"));
it("named-yield-spread-obj.js", createTestHandler("language/expressions/generators/named-yield-spread-obj.js"));
it("no-name.js", createTestHandler("language/expressions/generators/no-name.js"));
it("no-yield.js", createTestHandler("language/expressions/generators/no-yield.js"));
it("object-destructuring-param-strict-body.js", createTestHandler("language/expressions/generators/object-destructuring-param-strict-body.js"));
it("param-dflt-yield.js", createTestHandler("language/expressions/generators/param-dflt-yield.js"));
it("params-dflt-args-unmapped.js", createTestHandler("language/expressions/generators/params-dflt-args-unmapped.js"));
it("params-dflt-ref-arguments.js", createTestHandler("language/expressions/generators/params-dflt-ref-arguments.js"));
it("params-trailing-comma-multiple.js", createTestHandler("language/expressions/generators/params-trailing-comma-multiple.js"));
it("params-trailing-comma-single.js", createTestHandler("language/expressions/generators/params-trailing-comma-single.js"));
it("prototype-own-properties.js", createTestHandler("language/expressions/generators/prototype-own-properties.js"));
it("prototype-property-descriptor.js", createTestHandler("language/expressions/generators/prototype-property-descriptor.js"));
it("prototype-relation-to-function.js", createTestHandler("language/expressions/generators/prototype-relation-to-function.js"));
it("prototype-typeof.js", createTestHandler("language/expressions/generators/prototype-typeof.js"));
it("prototype-uniqueness.js", createTestHandler("language/expressions/generators/prototype-uniqueness.js"));
it("prototype-value.js", createTestHandler("language/expressions/generators/prototype-value.js"));
it("rest-param-strict-body.js", createTestHandler("language/expressions/generators/rest-param-strict-body.js"));
it("rest-params-trailing-comma-early-error.js", createTestHandler("language/expressions/generators/rest-params-trailing-comma-early-error.js"));
it("return.js", createTestHandler("language/expressions/generators/return.js"));
it("scope-body-lex-distinct.js", createTestHandler("language/expressions/generators/scope-body-lex-distinct.js"));
it("scope-name-var-close.js", createTestHandler("language/expressions/generators/scope-name-var-close.js"));
it("scope-name-var-open-non-strict.js", createTestHandler("language/expressions/generators/scope-name-var-open-non-strict.js"));
it("scope-name-var-open-strict.js", createTestHandler("language/expressions/generators/scope-name-var-open-strict.js"));
it("scope-param-elem-var-close.js", createTestHandler("language/expressions/generators/scope-param-elem-var-close.js"));
it("scope-param-elem-var-open.js", createTestHandler("language/expressions/generators/scope-param-elem-var-open.js"));
it("scope-param-rest-elem-var-close.js", createTestHandler("language/expressions/generators/scope-param-rest-elem-var-close.js"));
it("scope-param-rest-elem-var-open.js", createTestHandler("language/expressions/generators/scope-param-rest-elem-var-open.js"));
it("scope-paramsbody-var-close.js", createTestHandler("language/expressions/generators/scope-paramsbody-var-close.js"));
it("scope-paramsbody-var-open.js", createTestHandler("language/expressions/generators/scope-paramsbody-var-open.js"));
it("static-init-await-binding.js", createTestHandler("language/expressions/generators/static-init-await-binding.js"));
it("static-init-await-reference.js", createTestHandler("language/expressions/generators/static-init-await-reference.js"));
it("unscopables-with-in-nested-fn.js", createTestHandler("language/expressions/generators/unscopables-with-in-nested-fn.js"));
it("unscopables-with.js", createTestHandler("language/expressions/generators/unscopables-with.js"));
it("use-strict-with-non-simple-param.js", createTestHandler("language/expressions/generators/use-strict-with-non-simple-param.js"));
it("yield-as-binding-identifier-escaped.js", createTestHandler("language/expressions/generators/yield-as-binding-identifier-escaped.js"));
it("yield-as-binding-identifier.js", createTestHandler("language/expressions/generators/yield-as-binding-identifier.js"));
it("yield-as-function-expression-binding-identifier.js", createTestHandler("language/expressions/generators/yield-as-function-expression-binding-identifier.js"));
it("yield-as-generator-expression-binding-identifier.js", createTestHandler("language/expressions/generators/yield-as-generator-expression-binding-identifier.js"));
it("yield-as-identifier-in-nested-function.js", createTestHandler("language/expressions/generators/yield-as-identifier-in-nested-function.js"));
it("yield-as-identifier-reference-escaped.js", createTestHandler("language/expressions/generators/yield-as-identifier-reference-escaped.js"));
it("yield-as-identifier-reference.js", createTestHandler("language/expressions/generators/yield-as-identifier-reference.js"));
it("yield-as-label-identifier-escaped.js", createTestHandler("language/expressions/generators/yield-as-label-identifier-escaped.js"));
it("yield-as-label-identifier.js", createTestHandler("language/expressions/generators/yield-as-label-identifier.js"));
it("yield-as-literal-property-name.js", createTestHandler("language/expressions/generators/yield-as-literal-property-name.js"));
it("yield-as-logical-or-expression.js", createTestHandler("language/expressions/generators/yield-as-logical-or-expression.js"));
it("yield-as-parameter.js", createTestHandler("language/expressions/generators/yield-as-parameter.js"));
it("yield-as-property-name.js", createTestHandler("language/expressions/generators/yield-as-property-name.js"));
it("yield-as-statement.js", createTestHandler("language/expressions/generators/yield-as-statement.js"));
it("yield-as-yield-operand.js", createTestHandler("language/expressions/generators/yield-as-yield-operand.js"));
it("yield-identifier-non-strict.js", createTestHandler("language/expressions/generators/yield-identifier-non-strict.js"));
it("yield-identifier-spread-non-strict.js", createTestHandler("language/expressions/generators/yield-identifier-spread-non-strict.js"));
it("yield-identifier-spread-strict.js", createTestHandler("language/expressions/generators/yield-identifier-spread-strict.js"));
it("yield-identifier-strict.js", createTestHandler("language/expressions/generators/yield-identifier-strict.js"));
it("yield-newline.js", createTestHandler("language/expressions/generators/yield-newline.js"));
it("yield-spread-arr-multiple.js", createTestHandler("language/expressions/generators/yield-spread-arr-multiple.js"));
it("yield-spread-arr-single.js", createTestHandler("language/expressions/generators/yield-spread-arr-single.js"));
it("yield-spread-obj.js", createTestHandler("language/expressions/generators/yield-spread-obj.js"));
it("yield-star-after-newline.js", createTestHandler("language/expressions/generators/yield-star-after-newline.js"));
it("yield-star-before-newline.js", createTestHandler("language/expressions/generators/yield-star-before-newline.js"));
it("yield-weak-binding.js", createTestHandler("language/expressions/generators/yield-weak-binding.js"));
});
