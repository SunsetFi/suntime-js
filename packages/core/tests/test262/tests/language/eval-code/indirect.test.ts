import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("indirect", () => {
  it(
    "always-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/always-non-strict.js"),
  );
  it(
    "block-decl-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/block-decl-strict.js"),
  );
  it(
    "cptn-nrml-empty-block.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-block.js"),
  );
  it(
    "cptn-nrml-empty-do-while.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-do-while.js"),
  );
  it(
    "cptn-nrml-empty-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-empty.js"),
  );
  it(
    "cptn-nrml-empty-for.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-for.js"),
  );
  it(
    "cptn-nrml-empty-if.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-if.js"),
  );
  it(
    "cptn-nrml-empty-switch.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-switch.js"),
  );
  it(
    "cptn-nrml-empty-var.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-var.js"),
  );
  it(
    "cptn-nrml-empty-while.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-empty-while.js"),
  );
  it(
    "cptn-nrml-expr-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-expr-obj.js"),
  );
  it(
    "cptn-nrml-expr-prim.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/cptn-nrml-expr-prim.js"),
  );
  it(
    "export.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/export.js"),
  );
  it(
    "global-env-rec-catch.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/global-env-rec-catch.js"),
  );
  it(
    "global-env-rec-eval.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/global-env-rec-eval.js"),
  );
  it(
    "global-env-rec-fun.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/global-env-rec-fun.js"),
  );
  it(
    "global-env-rec-with.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/global-env-rec-with.js"),
  );
  it(
    "global-env-rec.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/global-env-rec.js"),
  );
  it(
    "import.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/import.js"),
  );
  it(
    "lex-env-distinct-cls.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/lex-env-distinct-cls.js"),
  );
  it(
    "lex-env-distinct-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/lex-env-distinct-const.js"),
  );
  it(
    "lex-env-distinct-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/lex-env-distinct-let.js"),
  );
  it(
    "lex-env-heritage.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/lex-env-heritage.js"),
  );
  it(
    "lex-env-no-init-cls.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/lex-env-no-init-cls.js"),
  );
  it(
    "lex-env-no-init-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/lex-env-no-init-const.js"),
  );
  it(
    "lex-env-no-init-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/lex-env-no-init-let.js"),
  );
  it(
    "new.target.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/new.target.js"),
  );
  it(
    "non-definable-function-with-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/non-definable-function-with-function.js"),
  );
  it(
    "non-definable-function-with-variable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/non-definable-function-with-variable.js"),
  );
  it(
    "non-definable-global-function.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/non-definable-global-function.js"),
  );
  it(
    "non-definable-global-generator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/non-definable-global-generator.js"),
  );
  it(
    "non-definable-global-var.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/non-definable-global-var.js"),
  );
  it(
    "non-string-object.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/non-string-object.js"),
  );
  it(
    "non-string-primitive.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/non-string-primitive.js"),
  );
  it(
    "parse-failure-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/parse-failure-1.js"),
  );
  it(
    "parse-failure-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/parse-failure-2.js"),
  );
  it(
    "parse-failure-3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/parse-failure-3.js"),
  );
  it(
    "parse-failure-4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/parse-failure-4.js"),
  );
  it(
    "parse-failure-5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/parse-failure-5.js"),
  );
  it(
    "parse-failure-6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/parse-failure-6.js"),
  );
  it(
    "realm.js",
    { tags: ["known-failing"] },
    createTestHandler("language/eval-code/indirect/realm.js"),
  );
  it(
    "super-call.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/super-call.js"),
  );
  it(
    "super-prop.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/super-prop.js"),
  );
  it(
    "switch-case-decl-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/switch-case-decl-strict.js"),
  );
  it(
    "switch-dflt-decl-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/switch-dflt-decl-strict.js"),
  );
  it(
    "this-value-func.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/this-value-func.js"),
  );
  it(
    "this-value-global.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/this-value-global.js"),
  );
  it(
    "var-env-func-init-global-new.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-func-init-global-new.js"),
  );
  it(
    "var-env-func-init-global-update-configurable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/eval-code/indirect/var-env-func-init-global-update-configurable.js",
    ),
  );
  it(
    "var-env-func-init-global-update-non-configurable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/eval-code/indirect/var-env-func-init-global-update-non-configurable.js",
    ),
  );
  it(
    "var-env-func-init-multi.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-func-init-multi.js"),
  );
  it(
    "var-env-func-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-func-non-strict.js"),
  );
  it(
    "var-env-func-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-func-strict.js"),
  );
  it(
    "var-env-global-lex-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-global-lex-non-strict.js"),
  );
  it(
    "var-env-global-lex-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-global-lex-strict.js"),
  );
  it(
    "var-env-lower-lex-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-lower-lex-non-strict.js"),
  );
  it(
    "var-env-lower-lex-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-lower-lex-strict.js"),
  );
  it(
    "var-env-var-init-global-exstng.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-var-init-global-exstng.js"),
  );
  it(
    "var-env-var-init-global-new.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-var-init-global-new.js"),
  );
  it(
    "var-env-var-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-var-non-strict.js"),
  );
  it(
    "var-env-var-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/eval-code/indirect/var-env-var-strict.js"),
  );
});
