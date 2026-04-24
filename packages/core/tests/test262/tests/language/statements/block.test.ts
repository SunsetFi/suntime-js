import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("block", () => {
it("12.1-1.js", createTestHandler("language/statements/block/12.1-1.js"));
it("12.1-2.js", createTestHandler("language/statements/block/12.1-2.js"));
it("12.1-3.js", createTestHandler("language/statements/block/12.1-3.js"));
it("12.1-4.js", createTestHandler("language/statements/block/12.1-4.js"));
it("12.1-5.js", createTestHandler("language/statements/block/12.1-5.js"));
it("12.1-6.js", createTestHandler("language/statements/block/12.1-6.js"));
it("12.1-7.js", createTestHandler("language/statements/block/12.1-7.js"));
it("S12.1_A2.js", createTestHandler("language/statements/block/S12.1_A2.js"));
it("S12.1_A4_T1.js", createTestHandler("language/statements/block/S12.1_A4_T1.js"));
it("S12.1_A4_T2.js", createTestHandler("language/statements/block/S12.1_A4_T2.js"));
it("S12.1_A5.js", createTestHandler("language/statements/block/S12.1_A5.js"));
describe("early-errors", () => {
it("invalid-names-call-expression-bad-reference.js", createTestHandler("language/statements/block/early-errors/invalid-names-call-expression-bad-reference.js"));
it("invalid-names-call-expression-this.js", createTestHandler("language/statements/block/early-errors/invalid-names-call-expression-this.js"));
it("invalid-names-member-expression-bad-reference.js", createTestHandler("language/statements/block/early-errors/invalid-names-member-expression-bad-reference.js"));
it("invalid-names-member-expression-this.js", createTestHandler("language/statements/block/early-errors/invalid-names-member-expression-this.js"));
});
it("labeled-continue.js", createTestHandler("language/statements/block/labeled-continue.js"));
it("scope-lex-close.js", createTestHandler("language/statements/block/scope-lex-close.js"));
it("scope-lex-open.js", createTestHandler("language/statements/block/scope-lex-open.js"));
it("scope-var-none.js", createTestHandler("language/statements/block/scope-var-none.js"));
it.skip("tco-stmt-list.js", () => { /* Ignored Test */ });
it.skip("tco-stmt.js", () => { /* Ignored Test */ });
});
