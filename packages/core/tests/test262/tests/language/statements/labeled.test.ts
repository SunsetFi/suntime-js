import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("labeled", () => {
it("S12.12_A1_T1.js", createTestHandler("language/statements/labeled/S12.12_A1_T1.js"));
it("continue.js", createTestHandler("language/statements/labeled/continue.js"));
it("cptn-break.js", createTestHandler("language/statements/labeled/cptn-break.js"));
it("cptn-nrml.js", createTestHandler("language/statements/labeled/cptn-nrml.js"));
it("decl-async-function.js", createTestHandler("language/statements/labeled/decl-async-function.js"));
it("decl-async-generator.js", createTestHandler("language/statements/labeled/decl-async-generator.js"));
it("decl-cls.js", createTestHandler("language/statements/labeled/decl-cls.js"));
it("decl-const.js", createTestHandler("language/statements/labeled/decl-const.js"));
it("decl-fun-strict.js", createTestHandler("language/statements/labeled/decl-fun-strict.js"));
it("decl-gen.js", createTestHandler("language/statements/labeled/decl-gen.js"));
it("decl-let.js", createTestHandler("language/statements/labeled/decl-let.js"));
it("let-array-with-newline.js", createTestHandler("language/statements/labeled/let-array-with-newline.js"));
it("let-block-with-newline.js", createTestHandler("language/statements/labeled/let-block-with-newline.js"));
it("let-identifier-with-newline.js", createTestHandler("language/statements/labeled/let-identifier-with-newline.js"));
it("static-init-invalid-await.js", createTestHandler("language/statements/labeled/static-init-invalid-await.js"));
it("tco.js", createTestHandler("language/statements/labeled/tco.js"));
it("value-await-module-escaped.js", createTestHandler("language/statements/labeled/value-await-module-escaped.js"));
it("value-await-module.js", createTestHandler("language/statements/labeled/value-await-module.js"));
it("value-await-non-module-escaped.js", createTestHandler("language/statements/labeled/value-await-non-module-escaped.js"));
it("value-await-non-module.js", createTestHandler("language/statements/labeled/value-await-non-module.js"));
it("value-yield-non-strict-escaped.js", createTestHandler("language/statements/labeled/value-yield-non-strict-escaped.js"));
it("value-yield-non-strict.js", createTestHandler("language/statements/labeled/value-yield-non-strict.js"));
it("value-yield-strict-escaped.js", createTestHandler("language/statements/labeled/value-yield-strict-escaped.js"));
it("value-yield-strict.js", createTestHandler("language/statements/labeled/value-yield-strict.js"));
});
