import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("continue", () => {
it("12.7-1.js", createTestHandler("language/statements/continue/12.7-1.js"));
it("S12.7_A1_T1.js", createTestHandler("language/statements/continue/S12.7_A1_T1.js"));
it("S12.7_A1_T2.js", createTestHandler("language/statements/continue/S12.7_A1_T2.js"));
it("S12.7_A1_T3.js", createTestHandler("language/statements/continue/S12.7_A1_T3.js"));
it("S12.7_A1_T4.js", createTestHandler("language/statements/continue/S12.7_A1_T4.js"));
it("S12.7_A5_T1.js", createTestHandler("language/statements/continue/S12.7_A5_T1.js"));
it("S12.7_A5_T2.js", createTestHandler("language/statements/continue/S12.7_A5_T2.js"));
it("S12.7_A5_T3.js", createTestHandler("language/statements/continue/S12.7_A5_T3.js"));
it("S12.7_A6.js", createTestHandler("language/statements/continue/S12.7_A6.js"));
it("S12.7_A7.js", createTestHandler("language/statements/continue/S12.7_A7.js"));
it("S12.7_A8_T1.js", createTestHandler("language/statements/continue/S12.7_A8_T1.js"));
it("S12.7_A8_T2.js", createTestHandler("language/statements/continue/S12.7_A8_T2.js"));
it("S12.7_A9_T1.js", createTestHandler("language/statements/continue/S12.7_A9_T1.js"));
it("S12.7_A9_T2.js", createTestHandler("language/statements/continue/S12.7_A9_T2.js"));
it("labeled-continue.js", createTestHandler("language/statements/continue/labeled-continue.js"));
it("line-terminators.js", createTestHandler("language/statements/continue/line-terminators.js"));
it("nested-let-bound-for-loops-inner-continue.js", createTestHandler("language/statements/continue/nested-let-bound-for-loops-inner-continue.js"));
it("nested-let-bound-for-loops-labeled-continue.js", createTestHandler("language/statements/continue/nested-let-bound-for-loops-labeled-continue.js"));
it("nested-let-bound-for-loops-outer-continue.js", createTestHandler("language/statements/continue/nested-let-bound-for-loops-outer-continue.js"));
it("no-label-continue.js", createTestHandler("language/statements/continue/no-label-continue.js"));
it("shadowing-loop-variable-in-same-scope-as-continue.js", createTestHandler("language/statements/continue/shadowing-loop-variable-in-same-scope-as-continue.js"));
it("simple-and-labeled.js", createTestHandler("language/statements/continue/simple-and-labeled.js"));
it("static-init-with-label.js", createTestHandler("language/statements/continue/static-init-with-label.js"));
it("static-init-without-label.js", createTestHandler("language/statements/continue/static-init-without-label.js"));
});
