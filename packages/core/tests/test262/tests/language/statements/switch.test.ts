import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("switch", () => {
it("S12.11_A1_T1.js", createTestHandler("language/statements/switch/S12.11_A1_T1.js"));
it("S12.11_A1_T2.js", createTestHandler("language/statements/switch/S12.11_A1_T2.js"));
it("S12.11_A1_T3.js", createTestHandler("language/statements/switch/S12.11_A1_T3.js"));
it("S12.11_A1_T4.js", createTestHandler("language/statements/switch/S12.11_A1_T4.js"));
it("S12.11_A2_T1.js", createTestHandler("language/statements/switch/S12.11_A2_T1.js"));
it("S12.11_A3_T1.js", createTestHandler("language/statements/switch/S12.11_A3_T1.js"));
it("S12.11_A3_T2.js", createTestHandler("language/statements/switch/S12.11_A3_T2.js"));
it("S12.11_A3_T3.js", createTestHandler("language/statements/switch/S12.11_A3_T3.js"));
it("S12.11_A3_T4.js", createTestHandler("language/statements/switch/S12.11_A3_T4.js"));
it("S12.11_A3_T5.js", createTestHandler("language/statements/switch/S12.11_A3_T5.js"));
it("S12.11_A4_T1.js", createTestHandler("language/statements/switch/S12.11_A4_T1.js"));
it("cptn-a-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-a-abrupt-empty.js"));
it("cptn-a-fall-thru-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-a-fall-thru-abrupt-empty.js"));
it("cptn-a-fall-thru-nrml.js", createTestHandler("language/statements/switch/cptn-a-fall-thru-nrml.js"));
it("cptn-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-abrupt-empty.js"));
it("cptn-b-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-b-abrupt-empty.js"));
it("cptn-b-fall-thru-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-b-fall-thru-abrupt-empty.js"));
it("cptn-b-fall-thru-nrml.js", createTestHandler("language/statements/switch/cptn-b-fall-thru-nrml.js"));
it("cptn-b-final.js", createTestHandler("language/statements/switch/cptn-b-final.js"));
it("cptn-dflt-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-dflt-abrupt-empty.js"));
it("cptn-dflt-b-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-dflt-b-abrupt-empty.js"));
it("cptn-dflt-b-fall-thru-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-dflt-b-fall-thru-abrupt-empty.js"));
it("cptn-dflt-b-fall-thru-nrml.js", createTestHandler("language/statements/switch/cptn-dflt-b-fall-thru-nrml.js"));
it("cptn-dflt-b-final.js", createTestHandler("language/statements/switch/cptn-dflt-b-final.js"));
it("cptn-dflt-fall-thru-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-dflt-fall-thru-abrupt-empty.js"));
it("cptn-dflt-fall-thru-nrml.js", createTestHandler("language/statements/switch/cptn-dflt-fall-thru-nrml.js"));
it("cptn-dflt-final.js", createTestHandler("language/statements/switch/cptn-dflt-final.js"));
it("cptn-no-dflt-match-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-no-dflt-match-abrupt-empty.js"));
it("cptn-no-dflt-match-fall-thru-abrupt-empty.js", createTestHandler("language/statements/switch/cptn-no-dflt-match-fall-thru-abrupt-empty.js"));
it("cptn-no-dflt-match-fall-thru-nrml.js", createTestHandler("language/statements/switch/cptn-no-dflt-match-fall-thru-nrml.js"));
it("cptn-no-dflt-match-final.js", createTestHandler("language/statements/switch/cptn-no-dflt-match-final.js"));
it("cptn-no-dflt-no-match.js", createTestHandler("language/statements/switch/cptn-no-dflt-no-match.js"));
it("scope-lex-async-function.js", createTestHandler("language/statements/switch/scope-lex-async-function.js"));
it("scope-lex-async-generator.js", createTestHandler("language/statements/switch/scope-lex-async-generator.js"));
it("scope-lex-class.js", createTestHandler("language/statements/switch/scope-lex-class.js"));
it("scope-lex-close-case.js", createTestHandler("language/statements/switch/scope-lex-close-case.js"));
it("scope-lex-close-dflt.js", createTestHandler("language/statements/switch/scope-lex-close-dflt.js"));
it("scope-lex-const.js", createTestHandler("language/statements/switch/scope-lex-const.js"));
it("scope-lex-generator.js", createTestHandler("language/statements/switch/scope-lex-generator.js"));
it("scope-lex-let.js", createTestHandler("language/statements/switch/scope-lex-let.js"));
it("scope-lex-open-case.js", createTestHandler("language/statements/switch/scope-lex-open-case.js"));
it("scope-lex-open-dflt.js", createTestHandler("language/statements/switch/scope-lex-open-dflt.js"));
it("scope-var-none-case.js", createTestHandler("language/statements/switch/scope-var-none-case.js"));
it("scope-var-none-dflt.js", createTestHandler("language/statements/switch/scope-var-none-dflt.js"));
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-function-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-var.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("async-generator-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-var.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("class-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-var.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("const-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-var.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("function-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-var.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("generator-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-var.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("let-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-var.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-async-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-async-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-async-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-async-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-class.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-class.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-const.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-const.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-function.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-function.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-generator.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-generator.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-let.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-let.js"));
});
});
describe("syntax", () => {
describe("redeclaration", () => {
it("var-name-redeclaration-attempt-with-var.js", createTestHandler("language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-var.js"));
});
});
it("tco-case-body-dflt.js", createTestHandler("language/statements/switch/tco-case-body-dflt.js"));
it("tco-case-body.js", createTestHandler("language/statements/switch/tco-case-body.js"));
it("tco-dftl-body.js", createTestHandler("language/statements/switch/tco-dftl-body.js"));
});
