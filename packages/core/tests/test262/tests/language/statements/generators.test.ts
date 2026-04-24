import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("generators", () => {
it("arguments-with-arguments-fn.js", createTestHandler("language/statements/generators/arguments-with-arguments-fn.js"));
it("arguments-with-arguments-lex.js", createTestHandler("language/statements/generators/arguments-with-arguments-lex.js"));
it("array-destructuring-param-strict-body.js", createTestHandler("language/statements/generators/array-destructuring-param-strict-body.js"));
it("cptn-decl.js", createTestHandler("language/statements/generators/cptn-decl.js"));
it("declaration.js", createTestHandler("language/statements/generators/declaration.js"));
it("default-proto.js", createTestHandler("language/statements/generators/default-proto.js"));
it("dflt-params-abrupt.js", createTestHandler("language/statements/generators/dflt-params-abrupt.js"));
it("dflt-params-arg-val-not-undefined.js", createTestHandler("language/statements/generators/dflt-params-arg-val-not-undefined.js"));
it("dflt-params-arg-val-undefined.js", createTestHandler("language/statements/generators/dflt-params-arg-val-undefined.js"));
it("dflt-params-duplicates.js", createTestHandler("language/statements/generators/dflt-params-duplicates.js"));
it("dflt-params-ref-later.js", createTestHandler("language/statements/generators/dflt-params-ref-later.js"));
it("dflt-params-ref-prior.js", createTestHandler("language/statements/generators/dflt-params-ref-prior.js"));
it("dflt-params-ref-self.js", createTestHandler("language/statements/generators/dflt-params-ref-self.js"));
it("dflt-params-rest.js", createTestHandler("language/statements/generators/dflt-params-rest.js"));
it("dflt-params-trailing-comma.js", createTestHandler("language/statements/generators/dflt-params-trailing-comma.js"));
describe("dstr", () => {
it("ary-init-iter-close.js", createTestHandler("language/statements/generators/dstr/ary-init-iter-close.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err-array-prototype.js", createTestHandler("language/statements/generators/dstr/ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("ary-init-iter-get-err.js", createTestHandler("language/statements/generators/dstr/ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("ary-init-iter-no-close.js", createTestHandler("language/statements/generators/dstr/ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("ary-name-iter-val.js", createTestHandler("language/statements/generators/dstr/ary-name-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-ary-val-null.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-hole.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-throws.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-undef.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-done.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-id-iter-val.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id-init.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-id.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-null.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-exhausted.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision-step-err.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-elision.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-empty.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elem.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-elision.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-empty.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-ary-rest.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-direct.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-elision.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-exhausted.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-id.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-ary.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-id.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-init-obj.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-ary.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-id.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-not-final-obj.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-id.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/statements/generators/dstr/ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-close.js", createTestHandler("language/statements/generators/dstr/dflt-ary-init-iter-close.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err-array-prototype.js", createTestHandler("language/statements/generators/dstr/dflt-ary-init-iter-get-err-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-get-err.js", createTestHandler("language/statements/generators/dstr/dflt-ary-init-iter-get-err.js"));
});
describe("dstr", () => {
it("dflt-ary-init-iter-no-close.js", createTestHandler("language/statements/generators/dstr/dflt-ary-init-iter-no-close.js"));
});
describe("dstr", () => {
it("dflt-ary-name-iter-val.js", createTestHandler("language/statements/generators/dstr/dflt-ary-name-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-init.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elem-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elem-iter.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elem-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-init.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elision-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-elision-iter.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-elision-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-init.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-empty-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-empty-iter.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-empty-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-init.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-rest-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-rest-iter.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-rest-iter.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-ary-val-null.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-ary-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-exhausted.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-arrow.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-class.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-cover.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-fn.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-fn-name-gen.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-hole.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-hole.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-skipped.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-throws.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-undef.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-init-unresolvable.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-complete.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-complete.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-done.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-done.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-step-err.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-array-prototype.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-val-array-prototype.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val-err.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-id-iter-val.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-id-iter-val.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id-init.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-id.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id-init.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-prop-id.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-null.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-val-null.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elem-obj-val-undef.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elem-obj-val-undef.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-exhausted.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elision-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision-step-err.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elision-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-elision.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-empty.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elem.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-elem.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-elision.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-empty.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-empty.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-ary-rest.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-ary-rest.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-direct.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-direct.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision-next-err.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-elision-next-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-elision.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-elision.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-exhausted.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-exhausted.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-step-err.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-iter-step-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id-iter-val-err.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id-iter-val-err.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-id.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-ary.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-init-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-id.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-init-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-init-obj.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-init-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-ary.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-not-final-ary.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-id.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-not-final-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-not-final-obj.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-not-final-obj.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-id.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-obj-id.js"));
});
describe("dstr", () => {
it("dflt-ary-ptrn-rest-obj-prop-id.js", createTestHandler("language/statements/generators/dstr/dflt-ary-ptrn-rest-obj-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-init-null.js", createTestHandler("language/statements/generators/dstr/dflt-obj-init-null.js"));
});
describe("dstr", () => {
it("dflt-obj-init-undefined.js", createTestHandler("language/statements/generators/dstr/dflt-obj-init-undefined.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-empty.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-get-value-err.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-skipped.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-throws.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-init-unresolvable.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-id-trailing-comma.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-list-err.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-init.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary-value-null.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-ary.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-eval-err.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-throws.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-init.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-id.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-init.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-null.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-prop-obj.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-getter.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("dflt-obj-ptrn-rest-val-obj.js", createTestHandler("language/statements/generators/dstr/dflt-obj-ptrn-rest-val-obj.js"));
});
describe("dstr", () => {
it("obj-init-null.js", createTestHandler("language/statements/generators/dstr/obj-init-null.js"));
});
describe("dstr", () => {
it("obj-init-undefined.js", createTestHandler("language/statements/generators/dstr/obj-init-undefined.js"));
});
describe("dstr", () => {
it("obj-ptrn-empty.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-empty.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-get-value-err.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-arrow.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-arrow.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-class.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-class.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-cover.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-cover.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-fn.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-fn.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-fn-name-gen.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-fn-name-gen.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-skipped.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-throws.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-init-unresolvable.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-id-trailing-comma.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-list-err.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-list-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-init.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-trailing-comma.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary-value-null.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-ary.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-ary.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-eval-err.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-eval-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-get-value-err.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-get-value-err.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-skipped.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-init-skipped.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-throws.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-init-throws.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init-unresolvable.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-init-unresolvable.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-init.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id-trailing-comma.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id-trailing-comma.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-id.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-id.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-init.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj-init.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-null.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj-value-null.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj-value-undef.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj-value-undef.js"));
});
describe("dstr", () => {
it("obj-ptrn-prop-obj.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-prop-obj.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-getter.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-rest-getter.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-skip-non-enumerable.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-rest-skip-non-enumerable.js"));
});
describe("dstr", () => {
it("obj-ptrn-rest-val-obj.js", createTestHandler("language/statements/generators/dstr/obj-ptrn-rest-val-obj.js"));
});
it("eval-var-scope-syntax-err.js", createTestHandler("language/statements/generators/eval-var-scope-syntax-err.js"));
describe("forbidden-ext", () => {
describe("b1", () => {
it("gen-func-decl-forbidden-ext-direct-access-prop-arguments.js", createTestHandler("language/statements/generators/forbidden-ext/b1/gen-func-decl-forbidden-ext-direct-access-prop-arguments.js"));
});
});
describe("forbidden-ext", () => {
describe("b1", () => {
it("gen-func-decl-forbidden-ext-direct-access-prop-caller.js", createTestHandler("language/statements/generators/forbidden-ext/b1/gen-func-decl-forbidden-ext-direct-access-prop-caller.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js", createTestHandler("language/statements/generators/forbidden-ext/b2/gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-get.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js", createTestHandler("language/statements/generators/forbidden-ext/b2/gen-func-decl-forbidden-ext-indirect-access-own-prop-caller-value.js"));
});
});
describe("forbidden-ext", () => {
describe("b2", () => {
it("gen-func-decl-forbidden-ext-indirect-access-prop-caller.js", createTestHandler("language/statements/generators/forbidden-ext/b2/gen-func-decl-forbidden-ext-indirect-access-prop-caller.js"));
});
});
it("generator-created-after-decl-inst.js", createTestHandler("language/statements/generators/generator-created-after-decl-inst.js"));
it("has-instance.js", createTestHandler("language/statements/generators/has-instance.js"));
it("invoke-as-constructor.js", createTestHandler("language/statements/generators/invoke-as-constructor.js"));
it("length-dflt.js", createTestHandler("language/statements/generators/length-dflt.js"));
it("length-property-descriptor.js", createTestHandler("language/statements/generators/length-property-descriptor.js"));
it("name.js", createTestHandler("language/statements/generators/name.js"));
it("no-yield.js", createTestHandler("language/statements/generators/no-yield.js"));
it("object-destructuring-param-strict-body.js", createTestHandler("language/statements/generators/object-destructuring-param-strict-body.js"));
it("param-dflt-yield.js", createTestHandler("language/statements/generators/param-dflt-yield.js"));
it("params-dflt-args-unmapped.js", createTestHandler("language/statements/generators/params-dflt-args-unmapped.js"));
it("params-dflt-ref-arguments.js", createTestHandler("language/statements/generators/params-dflt-ref-arguments.js"));
it("params-trailing-comma-multiple.js", createTestHandler("language/statements/generators/params-trailing-comma-multiple.js"));
it("params-trailing-comma-single.js", createTestHandler("language/statements/generators/params-trailing-comma-single.js"));
it("prototype-own-properties.js", createTestHandler("language/statements/generators/prototype-own-properties.js"));
it("prototype-property-descriptor.js", createTestHandler("language/statements/generators/prototype-property-descriptor.js"));
it("prototype-relation-to-function.js", createTestHandler("language/statements/generators/prototype-relation-to-function.js"));
it("prototype-typeof.js", createTestHandler("language/statements/generators/prototype-typeof.js"));
it("prototype-uniqueness.js", createTestHandler("language/statements/generators/prototype-uniqueness.js"));
it("prototype-value.js", createTestHandler("language/statements/generators/prototype-value.js"));
it("rest-param-strict-body.js", createTestHandler("language/statements/generators/rest-param-strict-body.js"));
it("rest-params-trailing-comma-early-error.js", createTestHandler("language/statements/generators/rest-params-trailing-comma-early-error.js"));
it("restricted-properties.js", createTestHandler("language/statements/generators/restricted-properties.js"));
it("return.js", createTestHandler("language/statements/generators/return.js"));
it("scope-body-lex-distinct.js", createTestHandler("language/statements/generators/scope-body-lex-distinct.js"));
it("scope-param-elem-var-close.js", createTestHandler("language/statements/generators/scope-param-elem-var-close.js"));
it("scope-param-elem-var-open.js", createTestHandler("language/statements/generators/scope-param-elem-var-open.js"));
it("scope-param-rest-elem-var-close.js", createTestHandler("language/statements/generators/scope-param-rest-elem-var-close.js"));
it("scope-param-rest-elem-var-open.js", createTestHandler("language/statements/generators/scope-param-rest-elem-var-open.js"));
it("scope-paramsbody-var-close.js", createTestHandler("language/statements/generators/scope-paramsbody-var-close.js"));
it("scope-paramsbody-var-open.js", createTestHandler("language/statements/generators/scope-paramsbody-var-open.js"));
it("unscopables-with-in-nested-fn.js", createTestHandler("language/statements/generators/unscopables-with-in-nested-fn.js"));
it("unscopables-with.js", createTestHandler("language/statements/generators/unscopables-with.js"));
it("use-strict-with-non-simple-param.js", createTestHandler("language/statements/generators/use-strict-with-non-simple-param.js"));
it("yield-as-binding-identifier-escaped.js", createTestHandler("language/statements/generators/yield-as-binding-identifier-escaped.js"));
it("yield-as-binding-identifier.js", createTestHandler("language/statements/generators/yield-as-binding-identifier.js"));
it("yield-as-function-expression-binding-identifier.js", createTestHandler("language/statements/generators/yield-as-function-expression-binding-identifier.js"));
it("yield-as-generator-declaration-binding-identifier.js", createTestHandler("language/statements/generators/yield-as-generator-declaration-binding-identifier.js"));
it("yield-as-identifier-in-nested-function.js", createTestHandler("language/statements/generators/yield-as-identifier-in-nested-function.js"));
it("yield-as-identifier-reference-escaped.js", createTestHandler("language/statements/generators/yield-as-identifier-reference-escaped.js"));
it("yield-as-identifier-reference.js", createTestHandler("language/statements/generators/yield-as-identifier-reference.js"));
it("yield-as-label-identifier-escaped.js", createTestHandler("language/statements/generators/yield-as-label-identifier-escaped.js"));
it("yield-as-label-identifier.js", createTestHandler("language/statements/generators/yield-as-label-identifier.js"));
it("yield-as-literal-property-name.js", createTestHandler("language/statements/generators/yield-as-literal-property-name.js"));
it("yield-as-logical-or-expression.js", createTestHandler("language/statements/generators/yield-as-logical-or-expression.js"));
it("yield-as-parameter.js", createTestHandler("language/statements/generators/yield-as-parameter.js"));
it("yield-as-property-name.js", createTestHandler("language/statements/generators/yield-as-property-name.js"));
it("yield-as-statement.js", createTestHandler("language/statements/generators/yield-as-statement.js"));
it("yield-as-yield-operand.js", createTestHandler("language/statements/generators/yield-as-yield-operand.js"));
it("yield-identifier-non-strict.js", createTestHandler("language/statements/generators/yield-identifier-non-strict.js"));
it("yield-identifier-spread-non-strict.js", createTestHandler("language/statements/generators/yield-identifier-spread-non-strict.js"));
it("yield-identifier-spread-strict.js", createTestHandler("language/statements/generators/yield-identifier-spread-strict.js"));
it("yield-identifier-strict.js", createTestHandler("language/statements/generators/yield-identifier-strict.js"));
it("yield-newline.js", createTestHandler("language/statements/generators/yield-newline.js"));
it("yield-spread-arr-multiple.js", createTestHandler("language/statements/generators/yield-spread-arr-multiple.js"));
it("yield-spread-arr-single.js", createTestHandler("language/statements/generators/yield-spread-arr-single.js"));
it("yield-spread-obj.js", createTestHandler("language/statements/generators/yield-spread-obj.js"));
it("yield-star-after-newline.js", createTestHandler("language/statements/generators/yield-star-after-newline.js"));
it("yield-star-before-newline.js", createTestHandler("language/statements/generators/yield-star-before-newline.js"));
it("yield-weak-binding.js", createTestHandler("language/statements/generators/yield-weak-binding.js"));
});
