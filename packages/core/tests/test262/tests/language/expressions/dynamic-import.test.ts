import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("dynamic-import", () => {
it("always-create-new-promise.js", createTestHandler("language/expressions/dynamic-import/always-create-new-promise.js"));
it("assign-expr-get-value-abrupt-throws.js", createTestHandler("language/expressions/dynamic-import/assign-expr-get-value-abrupt-throws.js"));
describe("assignment-expression", () => {
it("additive-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/additive-expr.js"));
});
describe("assignment-expression", () => {
it("array-literal.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/array-literal.js"));
});
describe("assignment-expression", () => {
it("arrow-function.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/arrow-function.js"));
});
describe("assignment-expression", () => {
it("await-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/await-expr.js"));
});
describe("assignment-expression", () => {
it("await-identifier.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/await-identifier.js"));
});
describe("assignment-expression", () => {
it("call-expr-arguments.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/call-expr-arguments.js"));
});
describe("assignment-expression", () => {
it("call-expr-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/call-expr-expr.js"));
});
describe("assignment-expression", () => {
it("call-expr-identifier.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/call-expr-identifier.js"));
});
describe("assignment-expression", () => {
it("cover-call-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/cover-call-expr.js"));
});
describe("assignment-expression", () => {
it("cover-parenthesized-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/cover-parenthesized-expr.js"));
});
describe("assignment-expression", () => {
it("identifier.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/identifier.js"));
});
describe("assignment-expression", () => {
it("import-meta.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/import-meta.js"));
});
describe("assignment-expression", () => {
it("lhs-assign-operator-assign-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/lhs-assign-operator-assign-expr.js"));
});
describe("assignment-expression", () => {
it("lhs-eq-assign-expr-nostrict.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/lhs-eq-assign-expr-nostrict.js"));
});
describe("assignment-expression", () => {
it("lhs-eq-assign-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/lhs-eq-assign-expr.js"));
});
describe("assignment-expression", () => {
it("logical-and-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/logical-and-expr.js"));
});
describe("assignment-expression", () => {
it("logical-or-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/logical-or-expr.js"));
});
describe("assignment-expression", () => {
it("member-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/member-expr.js"));
});
describe("assignment-expression", () => {
it("new-target.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/new-target.js"));
});
describe("assignment-expression", () => {
it("object-literal.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/object-literal.js"));
});
describe("assignment-expression", () => {
it("tagged-function-call.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/tagged-function-call.js"));
});
describe("assignment-expression", () => {
it("ternary.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/ternary.js"));
});
describe("assignment-expression", () => {
it("this.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/this.js"));
});
describe("assignment-expression", () => {
it("unary-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/unary-expr.js"));
});
describe("assignment-expression", () => {
it("yield-assign-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/yield-assign-expr.js"));
});
describe("assignment-expression", () => {
it("yield-expr.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/yield-expr.js"));
});
describe("assignment-expression", () => {
it("yield-identifier.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/yield-identifier.js"));
});
describe("assignment-expression", () => {
it("yield-star.js", createTestHandler("language/expressions/dynamic-import/assignment-expression/yield-star.js"));
});
it("await-import-evaluation.js", createTestHandler("language/expressions/dynamic-import/await-import-evaluation.js"));
describe("catch", () => {
it("nested-arrow-import-catch-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-arrow-import-catch-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-arrow-import-catch-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-await-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-await-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-async-arrow-function-return-await-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-arrow-function-return-await-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-await-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-async-function-await-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-async-function-await-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-async-function-await-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-async-function-await-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-await-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-async-function-await-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-await-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-async-function-await-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-async-function-await-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-async-function-await-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-await-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-async-function-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-async-function-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-async-function-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-async-function-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-async-function-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-async-function-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-async-function-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-async-function-return-await-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-return-await-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-function-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-function-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-gen-await-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-async-gen-await-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-async-gen-await-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-async-gen-await-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-async-gen-await-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-gen-await-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-async-gen-await-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-gen-await-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-async-gen-await-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-async-gen-await-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-async-gen-await-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-await-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-async-gen-return-await-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-async-gen-return-await-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-block-import-catch-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-block-import-catch-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-block-import-catch-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-block-import-catch-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-block-import-catch-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-block-import-catch-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-block-import-catch-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-block-import-catch-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-block-import-catch-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-block-import-catch-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-block-import-catch-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-import-catch-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-block-labeled-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-block-labeled-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-block-labeled-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-block-labeled-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-block-labeled-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-block-labeled-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-block-labeled-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-block-labeled-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-block-labeled-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-block-labeled-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-block-labeled-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-block-labeled-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-do-while-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-do-while-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-do-while-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-do-while-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-do-while-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-do-while-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-do-while-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-do-while-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-do-while-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-do-while-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-do-while-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-do-while-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-else-import-catch-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-else-import-catch-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-else-import-catch-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-else-import-catch-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-else-import-catch-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-else-import-catch-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-else-import-catch-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-else-import-catch-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-else-import-catch-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-else-import-catch-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-else-import-catch-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-else-import-catch-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-function-import-catch-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-function-import-catch-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-function-import-catch-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-function-import-catch-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-function-import-catch-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-function-import-catch-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-function-import-catch-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-function-import-catch-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-function-import-catch-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-function-import-catch-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-function-import-catch-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-function-import-catch-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-if-import-catch-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-if-import-catch-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-if-import-catch-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-if-import-catch-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-if-import-catch-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-if-import-catch-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-if-import-catch-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-if-import-catch-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-if-import-catch-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-if-import-catch-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-if-import-catch-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-if-import-catch-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-while-import-catch-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("nested-while-import-catch-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("nested-while-import-catch-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-eval-script-code-target.js"));
});
describe("catch", () => {
it("nested-while-import-catch-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-file-does-not-exist.js"));
});
describe("catch", () => {
it("nested-while-import-catch-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-while-import-catch-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-import-source-source-text-module.js"));
});
describe("catch", () => {
it("nested-while-import-catch-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("nested-while-import-catch-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("nested-while-import-catch-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("nested-while-import-catch-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("nested-while-import-catch-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/nested-while-import-catch-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("top-level-import-catch-eval-rqstd-abrupt-typeerror.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-eval-rqstd-abrupt-typeerror.js"));
});
describe("catch", () => {
it("top-level-import-catch-eval-rqstd-abrupt-urierror.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-eval-rqstd-abrupt-urierror.js"));
});
describe("catch", () => {
it("top-level-import-catch-eval-script-code-target.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-eval-script-code-target.js"));
});
describe("catch", () => {
it("top-level-import-catch-file-does-not-exist.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-file-does-not-exist.js"));
});
describe("catch", () => {
it("top-level-import-catch-import-defer-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-import-defer-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("top-level-import-catch-import-source-source-text-module.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-import-source-source-text-module.js"));
});
describe("catch", () => {
it("top-level-import-catch-import-source-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-import-source-specifier-tostring-abrupt-rejects.js"));
});
describe("catch", () => {
it("top-level-import-catch-import-source-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-import-source-specifier-tostring.js"));
});
describe("catch", () => {
it("top-level-import-catch-instn-iee-err-ambiguous-import.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-instn-iee-err-ambiguous-import.js"));
});
describe("catch", () => {
it("top-level-import-catch-instn-iee-err-circular.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-instn-iee-err-circular.js"));
});
describe("catch", () => {
it("top-level-import-catch-specifier-tostring-abrupt-rejects.js", createTestHandler("language/expressions/dynamic-import/catch/top-level-import-catch-specifier-tostring-abrupt-rejects.js"));
});
it("custom-primitive.js", createTestHandler("language/expressions/dynamic-import/custom-primitive.js"));
it("escape-sequence-import.js", createTestHandler("language/expressions/dynamic-import/escape-sequence-import.js"));
it("eval-export-dflt-cls-anon.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-cls-anon.js"));
it("eval-export-dflt-cls-name-meth.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-cls-name-meth.js"));
it("eval-export-dflt-cls-named.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-cls-named.js"));
it("eval-export-dflt-expr-cls-anon.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-cls-anon.js"));
it("eval-export-dflt-expr-cls-name-meth.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-cls-name-meth.js"));
it("eval-export-dflt-expr-cls-named.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-cls-named.js"));
it("eval-export-dflt-expr-fn-anon.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-fn-anon.js"));
it("eval-export-dflt-expr-fn-named.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-fn-named.js"));
it("eval-export-dflt-expr-gen-anon.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-gen-anon.js"));
it("eval-export-dflt-expr-gen-named.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-gen-named.js"));
it("eval-export-dflt-expr-in.js", createTestHandler("language/expressions/dynamic-import/eval-export-dflt-expr-in.js"));
it("eval-rqstd-once.js", createTestHandler("language/expressions/dynamic-import/eval-rqstd-once.js"));
it("eval-self-once-module.js", createTestHandler("language/expressions/dynamic-import/eval-self-once-module.js"));
it("eval-self-once-script.js", createTestHandler("language/expressions/dynamic-import/eval-self-once-script.js"));
it("for-await-resolution-and-error-agen-yield.js", createTestHandler("language/expressions/dynamic-import/for-await-resolution-and-error-agen-yield.js"));
it("for-await-resolution-and-error-agen.js", createTestHandler("language/expressions/dynamic-import/for-await-resolution-and-error-agen.js"));
it("for-await-resolution-and-error.js", createTestHandler("language/expressions/dynamic-import/for-await-resolution-and-error.js"));
describe("import-attributes", () => {
it("2nd-param-await-expr.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-await-expr.js"));
});
describe("import-attributes", () => {
it("2nd-param-await-ident.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-await-ident.js"));
});
describe("import-attributes", () => {
it("2nd-param-evaluation-abrupt-return.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-evaluation-abrupt-return.js"));
});
describe("import-attributes", () => {
it("2nd-param-evaluation-abrupt-throw.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-evaluation-abrupt-throw.js"));
});
describe("import-attributes", () => {
it("2nd-param-evaluation-sequence.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-evaluation-sequence.js"));
});
describe("import-attributes", () => {
it("2nd-param-get-with-error.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-get-with-error.js"));
});
describe("import-attributes", () => {
it("2nd-param-in.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-in.js"));
});
describe("import-attributes", () => {
it("2nd-param-non-object.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-non-object.js"));
});
describe("import-attributes", () => {
it("2nd-param-trailing-comma-fulfill.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-trailing-comma-fulfill.js"));
});
describe("import-attributes", () => {
it("2nd-param-trailing-comma-reject.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-trailing-comma-reject.js"));
});
describe("import-attributes", () => {
it("2nd-param-with-enumeration-abrupt.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-with-enumeration-abrupt.js"));
});
describe("import-attributes", () => {
it("2nd-param-with-enumeration-enumerable.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-with-enumeration-enumerable.js"));
});
describe("import-attributes", () => {
it("2nd-param-with-enumeration.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-with-enumeration.js"));
});
describe("import-attributes", () => {
it("2nd-param-with-non-object.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-with-non-object.js"));
});
describe("import-attributes", () => {
it("2nd-param-with-undefined.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-with-undefined.js"));
});
describe("import-attributes", () => {
it("2nd-param-with-value-abrupt.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-with-value-abrupt.js"));
});
describe("import-attributes", () => {
it("2nd-param-with-value-non-string.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-with-value-non-string.js"));
});
describe("import-attributes", () => {
it("2nd-param-yield-expr.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-yield-expr.js"));
});
describe("import-attributes", () => {
it("2nd-param-yield-ident-invalid.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-yield-ident-invalid.js"));
});
describe("import-attributes", () => {
it("2nd-param-yield-ident-valid.js", createTestHandler("language/expressions/dynamic-import/import-attributes/2nd-param-yield-ident-valid.js"));
});
describe("import-attributes", () => {
it("trailing-comma-fulfill.js", createTestHandler("language/expressions/dynamic-import/import-attributes/trailing-comma-fulfill.js"));
});
describe("import-attributes", () => {
it("trailing-comma-reject.js", createTestHandler("language/expressions/dynamic-import/import-attributes/trailing-comma-reject.js"));
});
describe("import-defer", () => {
describe("import-defer-async-module", () => {
it("main.js", createTestHandler("language/expressions/dynamic-import/import-defer/import-defer-async-module/main.js"));
});
});
describe("import-defer", () => {
describe("import-defer-transitive-async-module", () => {
it("main.js", createTestHandler("language/expressions/dynamic-import/import-defer/import-defer-transitive-async-module/main.js"));
});
});
describe("import-defer", () => {
describe("sync", () => {
it("main.js", createTestHandler("language/expressions/dynamic-import/import-defer/sync/main.js"));
});
});
describe("import-defer", () => {
describe("sync-dependency-of-deferred-async-module", () => {
it("main.js", createTestHandler("language/expressions/dynamic-import/import-defer/sync-dependency-of-deferred-async-module/main.js"));
});
});
it("import-errored-module.js", createTestHandler("language/expressions/dynamic-import/import-errored-module.js"));
it("imported-self-update.js", createTestHandler("language/expressions/dynamic-import/imported-self-update.js"));
it("indirect-resolution.js", createTestHandler("language/expressions/dynamic-import/indirect-resolution.js"));
describe("namespace", () => {
it("await-ns-Symbol-toStringTag.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-Symbol-toStringTag.js"));
});
describe("namespace", () => {
it("await-ns-define-own-property.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-define-own-property.js"));
});
describe("namespace", () => {
it("await-ns-delete-exported-init-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-delete-exported-init-no-strict.js"));
});
describe("namespace", () => {
it("await-ns-delete-exported-init-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-delete-exported-init-strict.js"));
});
describe("namespace", () => {
it("await-ns-delete-non-exported-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-delete-non-exported-no-strict.js"));
});
describe("namespace", () => {
it("await-ns-delete-non-exported-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-delete-non-exported-strict.js"));
});
describe("namespace", () => {
it("await-ns-extensible.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-extensible.js"));
});
describe("namespace", () => {
it("await-ns-get-nested-namespace-dflt-direct.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-nested-namespace-dflt-direct.js"));
});
describe("namespace", () => {
it("await-ns-get-nested-namespace-dflt-indirect.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-nested-namespace-dflt-indirect.js"));
});
describe("namespace", () => {
it("await-ns-get-nested-namespace-props-nrml.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-nested-namespace-props-nrml.js"));
});
describe("namespace", () => {
it("await-ns-get-own-property-str-found-init.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-own-property-str-found-init.js"));
});
describe("namespace", () => {
it("await-ns-get-own-property-str-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-own-property-str-not-found.js"));
});
describe("namespace", () => {
it("await-ns-get-own-property-sym.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-own-property-sym.js"));
});
describe("namespace", () => {
it("await-ns-get-str-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-str-found.js"));
});
describe("namespace", () => {
it("await-ns-get-str-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-str-not-found.js"));
});
describe("namespace", () => {
it("await-ns-get-sym-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-sym-found.js"));
});
describe("namespace", () => {
it("await-ns-get-sym-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-get-sym-not-found.js"));
});
describe("namespace", () => {
it("await-ns-has-property-str-found-init.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-has-property-str-found-init.js"));
});
describe("namespace", () => {
it("await-ns-has-property-str-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-has-property-str-not-found.js"));
});
describe("namespace", () => {
it("await-ns-has-property-sym-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-has-property-sym-found.js"));
});
describe("namespace", () => {
it("await-ns-has-property-sym-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-has-property-sym-not-found.js"));
});
describe("namespace", () => {
it("await-ns-no-iterator.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-no-iterator.js"));
});
describe("namespace", () => {
it("await-ns-own-property-keys-sort.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-own-property-keys-sort.js"));
});
describe("namespace", () => {
it("await-ns-prevent-extensions-object.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-prevent-extensions-object.js"));
});
describe("namespace", () => {
it("await-ns-prevent-extensions-reflect.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-prevent-extensions-reflect.js"));
});
describe("namespace", () => {
it("await-ns-prop-descs.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-prop-descs.js"));
});
describe("namespace", () => {
it("await-ns-prototype.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-prototype.js"));
});
describe("namespace", () => {
it("await-ns-set-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-set-no-strict.js"));
});
describe("namespace", () => {
it("await-ns-set-prototype-of-null.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-set-prototype-of-null.js"));
});
describe("namespace", () => {
it("await-ns-set-prototype-of.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-set-prototype-of.js"));
});
describe("namespace", () => {
it("await-ns-set-same-values-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-set-same-values-no-strict.js"));
});
describe("namespace", () => {
it("await-ns-set-same-values-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-set-same-values-strict.js"));
});
describe("namespace", () => {
it("await-ns-set-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/await-ns-set-strict.js"));
});
describe("namespace", () => {
it("default-property-not-set-own.js", createTestHandler("language/expressions/dynamic-import/namespace/default-property-not-set-own.js"));
});
describe("namespace", () => {
it("promise-then-ns-Symbol-toStringTag.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-Symbol-toStringTag.js"));
});
describe("namespace", () => {
it("promise-then-ns-define-own-property.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-define-own-property.js"));
});
describe("namespace", () => {
it("promise-then-ns-delete-exported-init-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-delete-exported-init-no-strict.js"));
});
describe("namespace", () => {
it("promise-then-ns-delete-exported-init-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-delete-exported-init-strict.js"));
});
describe("namespace", () => {
it("promise-then-ns-delete-non-exported-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-delete-non-exported-no-strict.js"));
});
describe("namespace", () => {
it("promise-then-ns-delete-non-exported-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-delete-non-exported-strict.js"));
});
describe("namespace", () => {
it("promise-then-ns-extensible.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-extensible.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-nested-namespace-dflt-direct.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-nested-namespace-dflt-direct.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-nested-namespace-dflt-indirect.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-nested-namespace-dflt-indirect.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-nested-namespace-props-nrml.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-nested-namespace-props-nrml.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-own-property-str-found-init.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-own-property-str-found-init.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-own-property-str-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-own-property-str-not-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-own-property-sym.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-own-property-sym.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-str-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-str-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-str-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-str-not-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-sym-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-sym-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-get-sym-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-get-sym-not-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-has-property-str-found-init.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-has-property-str-found-init.js"));
});
describe("namespace", () => {
it("promise-then-ns-has-property-str-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-has-property-str-not-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-has-property-sym-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-has-property-sym-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-has-property-sym-not-found.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-has-property-sym-not-found.js"));
});
describe("namespace", () => {
it("promise-then-ns-no-iterator.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-no-iterator.js"));
});
describe("namespace", () => {
it("promise-then-ns-own-property-keys-sort.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-own-property-keys-sort.js"));
});
describe("namespace", () => {
it("promise-then-ns-prevent-extensions-object.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-prevent-extensions-object.js"));
});
describe("namespace", () => {
it("promise-then-ns-prevent-extensions-reflect.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-prevent-extensions-reflect.js"));
});
describe("namespace", () => {
it("promise-then-ns-prop-descs.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-prop-descs.js"));
});
describe("namespace", () => {
it("promise-then-ns-prototype.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-prototype.js"));
});
describe("namespace", () => {
it("promise-then-ns-set-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-set-no-strict.js"));
});
describe("namespace", () => {
it("promise-then-ns-set-prototype-of-null.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-set-prototype-of-null.js"));
});
describe("namespace", () => {
it("promise-then-ns-set-prototype-of.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-set-prototype-of.js"));
});
describe("namespace", () => {
it("promise-then-ns-set-same-values-no-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-set-same-values-no-strict.js"));
});
describe("namespace", () => {
it("promise-then-ns-set-same-values-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-set-same-values-strict.js"));
});
describe("namespace", () => {
it("promise-then-ns-set-strict.js", createTestHandler("language/expressions/dynamic-import/namespace/promise-then-ns-set-strict.js"));
});
it("returns-promise.js", createTestHandler("language/expressions/dynamic-import/returns-promise.js"));
it("reuse-namespace-object-from-import.js", createTestHandler("language/expressions/dynamic-import/reuse-namespace-object-from-import.js"));
it("reuse-namespace-object-from-script.js", createTestHandler("language/expressions/dynamic-import/reuse-namespace-object-from-script.js"));
it("reuse-namespace-object.js", createTestHandler("language/expressions/dynamic-import/reuse-namespace-object.js"));
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-1-update-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-1-update-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-10-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-10-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-11-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-11-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-12-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-12-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-13-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-13-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-14-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-14-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-15-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-15-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-16-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-16-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-17-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-17-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-2-update-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-2-update-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-3-update-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-3-update-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-4-update-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-4-update-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-5-lhs-equals-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-5-lhs-equals-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-6-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-6-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-7-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-7-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-8-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-8-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("invalid-assignmenttargettype-syntax-error-9-lhs-assignment-operator-assignment-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/invalid-assignmenttargettype-syntax-error-9-lhs-assignment-operator-assignment-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-assignment-expression-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-arrow-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-arrow-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-await-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-arrow-function-return-await-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-await-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-return-await-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-function-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-function-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-async-gen-await-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-labeled-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-block-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-block-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-do-while-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-do-while-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-braceless-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-else-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-else-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-return-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-return-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-function-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-function-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-braceless-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-if-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-if-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-while-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-while-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-expression-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-expression-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("nested-with-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/nested-with-typeof-import.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-import-call-unknown.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-import-call-unknown.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-import-defer-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-import-defer-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-import-defer-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-import-defer-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-import-defer-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-import-defer-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-import-source-assignment-expr-not-optional.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-import-source-assignment-expr-not-optional.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-import-source-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-import-source-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-import-source-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-import-source-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-no-new-call-expression.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-no-new-call-expression.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-no-rest-param.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-no-rest-param.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-not-extensible-args.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-not-extensible-args.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-typeof-import-call-source-property.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-typeof-import-call-source-property.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-typeof-import-source.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-typeof-import-source.js"));
});
});
describe("syntax", () => {
describe("invalid", () => {
it("top-level-typeof-import.js", createTestHandler("language/expressions/dynamic-import/syntax/invalid/top-level-typeof-import.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("callexpression-arguments.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/callexpression-arguments.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("callexpression-templateliteral.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/callexpression-templateliteral.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-assignment-expression-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-assignment-expression-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-arrow-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-arrow-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-await-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-await-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-arrow-function-return-await-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-arrow-function-return-await-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-await-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-await-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-return-await-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-return-await-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-function-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-function-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-async-gen-await-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-async-gen-await-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-labeled-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-labeled-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-block-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-block-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-do-while-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-do-while-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-braceless-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-braceless-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-else-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-else-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-return-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-return-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-function-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-function-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-braceless-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-braceless-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-if-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-if-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-while-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-while-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-expression-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-expression-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("nested-with-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/nested-with-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("new-covered-expression-is-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/new-covered-expression-is-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-import-attributes-trailing-comma-first.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-import-attributes-trailing-comma-first.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-import-attributes-trailing-comma-second.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-import-attributes-trailing-comma-second.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-import-defer-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-import-defer-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-import-defer-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-import-defer-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-import-source-empty-str-is-valid-assign-expr.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-import-source-empty-str-is-valid-assign-expr.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-import-source-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-import-source-script-code-valid.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-nested-imports.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-nested-imports.js"));
});
});
describe("syntax", () => {
describe("valid", () => {
it("top-level-script-code-valid.js", createTestHandler("language/expressions/dynamic-import/syntax/valid/top-level-script-code-valid.js"));
});
});
it("update-to-dynamic-import.js", createTestHandler("language/expressions/dynamic-import/update-to-dynamic-import.js"));
describe("usage", () => {
it("nested-arrow-assignment-expression-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-assignment-expression-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-arrow-assignment-expression-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-assignment-expression-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-arrow-assignment-expression-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-assignment-expression-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-arrow-assignment-expression-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-assignment-expression-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-arrow-assignment-expression-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-assignment-expression-returns-thenable.js"));
});
describe("usage", () => {
it("nested-arrow-assignment-expression-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-assignment-expression-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-arrow-import-then-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-import-then-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-arrow-import-then-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-import-then-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-arrow-import-then-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-import-then-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-arrow-import-then-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-import-then-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-arrow-import-then-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-import-then-returns-thenable.js"));
});
describe("usage", () => {
it("nested-arrow-import-then-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-arrow-import-then-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-await-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-await-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-await-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-await-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-await-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-await-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-await-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-await-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-await-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-await-returns-thenable.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-await-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-await-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-return-await-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-return-await-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-return-await-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-return-await-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-return-await-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-return-await-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-return-await-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-return-await-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-return-await-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-return-await-returns-thenable.js"));
});
describe("usage", () => {
it("nested-async-arrow-function-return-await-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-arrow-function-return-await-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-async-function-await-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-await-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-async-function-await-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-await-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-async-function-await-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-await-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-async-function-await-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-await-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-async-function-await-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-await-returns-thenable.js"));
});
describe("usage", () => {
it("nested-async-function-await-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-await-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-async-function-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-async-function-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-async-function-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-async-function-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-async-function-return-await-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-return-await-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-async-function-return-await-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-return-await-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-async-function-return-await-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-return-await-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-async-function-return-await-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-return-await-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-async-function-return-await-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-return-await-returns-thenable.js"));
});
describe("usage", () => {
it("nested-async-function-return-await-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-return-await-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-async-function-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-returns-thenable.js"));
});
describe("usage", () => {
it("nested-async-function-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-function-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-async-gen-await-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-await-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-async-gen-await-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-await-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-async-gen-await-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-await-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-async-gen-await-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-await-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-async-gen-await-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-await-returns-thenable.js"));
});
describe("usage", () => {
it("nested-async-gen-await-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-await-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-async-gen-return-await-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-return-await-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-async-gen-return-await-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-return-await-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-async-gen-return-await-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-return-await-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-async-gen-return-await-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-return-await-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-async-gen-return-await-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-return-await-returns-thenable.js"));
});
describe("usage", () => {
it("nested-async-gen-return-await-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-async-gen-return-await-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-block-import-then-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-block-import-then-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-block-import-then-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-block-import-then-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-block-import-then-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-block-import-then-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-block-import-then-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-block-import-then-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-block-import-then-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-block-import-then-returns-thenable.js"));
});
describe("usage", () => {
it("nested-block-import-then-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-block-import-then-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-do-while-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-do-while-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-do-while-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-do-while-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-do-while-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-do-while-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-do-while-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-do-while-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-do-while-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-do-while-returns-thenable.js"));
});
describe("usage", () => {
it("nested-do-while-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-do-while-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-else-import-then-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-else-import-then-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-else-import-then-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-else-import-then-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-else-import-then-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-else-import-then-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-else-import-then-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-else-import-then-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-else-import-then-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-else-import-then-returns-thenable.js"));
});
describe("usage", () => {
it("nested-else-import-then-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-else-import-then-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-function-import-then-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-function-import-then-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-function-import-then-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-function-import-then-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-function-import-then-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-function-import-then-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-function-import-then-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-function-import-then-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-function-import-then-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-function-import-then-returns-thenable.js"));
});
describe("usage", () => {
it("nested-function-import-then-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-function-import-then-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-if-braceless-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-braceless-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-if-braceless-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-braceless-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-if-braceless-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-braceless-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-if-braceless-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-braceless-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-if-braceless-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-braceless-returns-thenable.js"));
});
describe("usage", () => {
it("nested-if-braceless-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-braceless-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-if-import-then-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-import-then-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-if-import-then-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-import-then-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-if-import-then-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-import-then-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-if-import-then-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-import-then-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-if-import-then-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-import-then-returns-thenable.js"));
});
describe("usage", () => {
it("nested-if-import-then-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-if-import-then-specifier-tostring.js"));
});
describe("usage", () => {
it("nested-while-import-then-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/nested-while-import-then-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("nested-while-import-then-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/nested-while-import-then-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("nested-while-import-then-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/nested-while-import-then-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("nested-while-import-then-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/nested-while-import-then-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("nested-while-import-then-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/nested-while-import-then-returns-thenable.js"));
});
describe("usage", () => {
it("nested-while-import-then-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/nested-while-import-then-specifier-tostring.js"));
});
describe("usage", () => {
it("syntax-nested-block-labeled-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/syntax-nested-block-labeled-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("syntax-nested-block-labeled-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/syntax-nested-block-labeled-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("syntax-nested-block-labeled-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/syntax-nested-block-labeled-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("syntax-nested-block-labeled-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/syntax-nested-block-labeled-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("syntax-nested-block-labeled-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/syntax-nested-block-labeled-returns-thenable.js"));
});
describe("usage", () => {
it("syntax-nested-block-labeled-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/syntax-nested-block-labeled-specifier-tostring.js"));
});
describe("usage", () => {
it("top-level-import-then-eval-gtbndng-indirect-update-dflt.js", createTestHandler("language/expressions/dynamic-import/usage/top-level-import-then-eval-gtbndng-indirect-update-dflt.js"));
});
describe("usage", () => {
it("top-level-import-then-eval-gtbndng-indirect-update.js", createTestHandler("language/expressions/dynamic-import/usage/top-level-import-then-eval-gtbndng-indirect-update.js"));
});
describe("usage", () => {
it("top-level-import-then-eval-script-code-host-resolves-module-code.js", createTestHandler("language/expressions/dynamic-import/usage/top-level-import-then-eval-script-code-host-resolves-module-code.js"));
});
describe("usage", () => {
it("top-level-import-then-is-call-expression-square-brackets.js", createTestHandler("language/expressions/dynamic-import/usage/top-level-import-then-is-call-expression-square-brackets.js"));
});
describe("usage", () => {
it("top-level-import-then-returns-thenable.js", createTestHandler("language/expressions/dynamic-import/usage/top-level-import-then-returns-thenable.js"));
});
describe("usage", () => {
it("top-level-import-then-specifier-tostring.js", createTestHandler("language/expressions/dynamic-import/usage/top-level-import-then-specifier-tostring.js"));
});
it("usage-from-eval.js", createTestHandler("language/expressions/dynamic-import/usage-from-eval.js"));
});
