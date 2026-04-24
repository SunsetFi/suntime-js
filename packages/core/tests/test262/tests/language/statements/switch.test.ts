import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("switch", () => {
  it(
    "S12.11_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A1_T1.js"),
  );
  it(
    "S12.11_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A1_T2.js"),
  );
  it(
    "S12.11_A1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A1_T3.js"),
  );
  it(
    "S12.11_A1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A1_T4.js"),
  );
  it(
    "S12.11_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A2_T1.js"),
  );
  it(
    "S12.11_A3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A3_T1.js"),
  );
  it(
    "S12.11_A3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A3_T2.js"),
  );
  it(
    "S12.11_A3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A3_T3.js"),
  );
  it(
    "S12.11_A3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A3_T4.js"),
  );
  it(
    "S12.11_A3_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A3_T5.js"),
  );
  it(
    "S12.11_A4_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/S12.11_A4_T1.js"),
  );
  it(
    "cptn-a-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-a-abrupt-empty.js"),
  );
  it(
    "cptn-a-fall-thru-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-a-fall-thru-abrupt-empty.js"),
  );
  it(
    "cptn-a-fall-thru-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-a-fall-thru-nrml.js"),
  );
  it(
    "cptn-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-abrupt-empty.js"),
  );
  it(
    "cptn-b-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-b-abrupt-empty.js"),
  );
  it(
    "cptn-b-fall-thru-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-b-fall-thru-abrupt-empty.js"),
  );
  it(
    "cptn-b-fall-thru-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-b-fall-thru-nrml.js"),
  );
  it(
    "cptn-b-final.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-b-final.js"),
  );
  it(
    "cptn-dflt-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-abrupt-empty.js"),
  );
  it(
    "cptn-dflt-b-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-b-abrupt-empty.js"),
  );
  it(
    "cptn-dflt-b-fall-thru-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-b-fall-thru-abrupt-empty.js"),
  );
  it(
    "cptn-dflt-b-fall-thru-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-b-fall-thru-nrml.js"),
  );
  it(
    "cptn-dflt-b-final.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-b-final.js"),
  );
  it(
    "cptn-dflt-fall-thru-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-fall-thru-abrupt-empty.js"),
  );
  it(
    "cptn-dflt-fall-thru-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-fall-thru-nrml.js"),
  );
  it(
    "cptn-dflt-final.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-dflt-final.js"),
  );
  it(
    "cptn-no-dflt-match-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-no-dflt-match-abrupt-empty.js"),
  );
  it(
    "cptn-no-dflt-match-fall-thru-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-no-dflt-match-fall-thru-abrupt-empty.js"),
  );
  it(
    "cptn-no-dflt-match-fall-thru-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-no-dflt-match-fall-thru-nrml.js"),
  );
  it(
    "cptn-no-dflt-match-final.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-no-dflt-match-final.js"),
  );
  it(
    "cptn-no-dflt-no-match.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/cptn-no-dflt-no-match.js"),
  );
  it(
    "scope-lex-async-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-async-function.js"),
  );
  it(
    "scope-lex-async-generator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-async-generator.js"),
  );
  it(
    "scope-lex-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-class.js"),
  );
  it(
    "scope-lex-close-case.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-close-case.js"),
  );
  it(
    "scope-lex-close-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-close-dflt.js"),
  );
  it(
    "scope-lex-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-const.js"),
  );
  it(
    "scope-lex-generator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-generator.js"),
  );
  it(
    "scope-lex-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-let.js"),
  );
  it(
    "scope-lex-open-case.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-open-case.js"),
  );
  it(
    "scope-lex-open-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-lex-open-dflt.js"),
  );
  it(
    "scope-var-none-case.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-var-none-case.js"),
  );
  it(
    "scope-var-none-dflt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/switch/scope-var-none-dflt.js"),
  );
  describe("syntax", () => {
    describe("redeclaration", () => {
      it(
        "async-function-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "async-function-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "async-function-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "async-function-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "async-function-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "async-function-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "async-function-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "async-function-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-function-name-redeclaration-attempt-with-var.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "async-generator-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/async-generator-name-redeclaration-attempt-with-var.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "class-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/class-name-redeclaration-attempt-with-var.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "const-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/const-name-redeclaration-attempt-with-var.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "function-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/function-name-redeclaration-attempt-with-var.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "generator-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/generator-name-redeclaration-attempt-with-var.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "let-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/let-name-redeclaration-attempt-with-var.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-async-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-async-function.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-async-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-async-generator.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-class.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-class.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-const.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-const.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-function.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-function.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-generator.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-generator.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-let.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-let.js",
        ),
      );
      it(
        "var-name-redeclaration-attempt-with-var.js",
        { tags: ["known-passing"] },
        createTestHandler(
          "language/statements/switch/syntax/redeclaration/var-name-redeclaration-attempt-with-var.js",
        ),
      );
    });
  });
  it.skip("tco-case-body-dflt.js", () => {
    /* Ignored Test */
  });
  it.skip("tco-case-body.js", () => {
    /* Ignored Test */
  });
  it.skip("tco-dftl-body.js", () => {
    /* Ignored Test */
  });
});
