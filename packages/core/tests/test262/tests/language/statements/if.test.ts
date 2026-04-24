import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("if", () => {
  it(
    "S12.5_A1.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A1.1_T1.js"),
  );
  it(
    "S12.5_A1.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A1.1_T2.js"),
  );
  it(
    "S12.5_A1.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A1.2_T1.js"),
  );
  it(
    "S12.5_A1.2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A1.2_T2.js"),
  );
  it(
    "S12.5_A10_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A10_T1.js"),
  );
  it(
    "S12.5_A10_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A10_T2.js"),
  );
  it(
    "S12.5_A11.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/S12.5_A11.js"),
  );
  it(
    "S12.5_A12_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A12_T1.js"),
  );
  it(
    "S12.5_A12_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A12_T2.js"),
  );
  it(
    "S12.5_A12_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A12_T3.js"),
  );
  it(
    "S12.5_A12_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A12_T4.js"),
  );
  it(
    "S12.5_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A1_T1.js"),
  );
  it(
    "S12.5_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A1_T2.js"),
  );
  it(
    "S12.5_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A2.js"),
  );
  it(
    "S12.5_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A3.js"),
  );
  it(
    "S12.5_A4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A4.js"),
  );
  it(
    "S12.5_A5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/S12.5_A5.js"),
  );
  it(
    "S12.5_A6_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/S12.5_A6_T1.js"),
  );
  it(
    "S12.5_A6_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/S12.5_A6_T2.js"),
  );
  it(
    "S12.5_A8.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/S12.5_A8.js"),
  );
  it(
    "cptn-else-false-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-else-false-abrupt-empty.js"),
  );
  it(
    "cptn-else-false-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-else-false-nrml.js"),
  );
  it(
    "cptn-else-true-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-else-true-abrupt-empty.js"),
  );
  it(
    "cptn-else-true-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-else-true-nrml.js"),
  );
  it(
    "cptn-empty-statement.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-empty-statement.js"),
  );
  it(
    "cptn-no-else-false.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-no-else-false.js"),
  );
  it(
    "cptn-no-else-true-abrupt-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-no-else-true-abrupt-empty.js"),
  );
  it(
    "cptn-no-else-true-nrml.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/cptn-no-else-true-nrml.js"),
  );
  it(
    "empty-statement.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/empty-statement.js"),
  );
  it(
    "if-async-fun-else-async-fun.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-async-fun-else-async-fun.js"),
  );
  it(
    "if-async-fun-else-stmt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-async-fun-else-stmt.js"),
  );
  it(
    "if-async-fun-no-else.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-async-fun-no-else.js"),
  );
  it(
    "if-async-gen-else-async-gen.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-async-gen-else-async-gen.js"),
  );
  it(
    "if-async-gen-else-stmt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-async-gen-else-stmt.js"),
  );
  it(
    "if-async-gen-no-else.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-async-gen-no-else.js"),
  );
  it(
    "if-cls-else-cls.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-cls-else-cls.js"),
  );
  it(
    "if-cls-else-stmt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-cls-else-stmt.js"),
  );
  it(
    "if-cls-no-else.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-cls-no-else.js"),
  );
  it(
    "if-const-else-const.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-const-else-const.js"),
  );
  it(
    "if-const-else-stmt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-const-else-stmt.js"),
  );
  it(
    "if-const-no-else.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-const-no-else.js"),
  );
  it(
    "if-decl-else-decl-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-decl-else-decl-strict.js"),
  );
  it(
    "if-decl-else-stmt-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-decl-else-stmt-strict.js"),
  );
  it(
    "if-decl-no-else-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-decl-no-else-strict.js"),
  );
  it(
    "if-fun-else-fun-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-fun-else-fun-strict.js"),
  );
  it(
    "if-fun-else-stmt-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-fun-else-stmt-strict.js"),
  );
  it(
    "if-fun-no-else-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-fun-no-else-strict.js"),
  );
  it(
    "if-gen-else-gen.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-gen-else-gen.js"),
  );
  it(
    "if-gen-else-stmt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-gen-else-stmt.js"),
  );
  it(
    "if-gen-no-else.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-gen-no-else.js"),
  );
  it(
    "if-let-else-let.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-let-else-let.js"),
  );
  it(
    "if-let-else-stmt.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-let-else-stmt.js"),
  );
  it(
    "if-let-no-else.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-let-no-else.js"),
  );
  it(
    "if-stmt-else-async-fun.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-async-fun.js"),
  );
  it(
    "if-stmt-else-async-gen.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-async-gen.js"),
  );
  it(
    "if-stmt-else-cls.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-cls.js"),
  );
  it(
    "if-stmt-else-const.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-const.js"),
  );
  it(
    "if-stmt-else-decl-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-decl-strict.js"),
  );
  it(
    "if-stmt-else-fun-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-fun-strict.js"),
  );
  it(
    "if-stmt-else-gen.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-gen.js"),
  );
  it(
    "if-stmt-else-let.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/if-stmt-else-let.js"),
  );
  it(
    "labelled-fn-stmt-first.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/labelled-fn-stmt-first.js"),
  );
  it(
    "labelled-fn-stmt-lone.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/labelled-fn-stmt-lone.js"),
  );
  it(
    "labelled-fn-stmt-second.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/labelled-fn-stmt-second.js"),
  );
  it(
    "let-array-with-newline.js",
    { tags: ["known-failing"] },
    createTestHandler("language/statements/if/let-array-with-newline.js"),
  );
  it(
    "let-block-with-newline.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/let-block-with-newline.js"),
  );
  it(
    "let-identifier-with-newline.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/if/let-identifier-with-newline.js"),
  );
  it.skip("tco-else-body.js", () => {
    /* Ignored Test */
  });
  it.skip("tco-if-body.js", () => {
    /* Ignored Test */
  });
});
