import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("new.target", () => {
it("asi.js", createTestHandler("language/expressions/new.target/asi.js"));
it("escaped-new.js", createTestHandler("language/expressions/new.target/escaped-new.js"));
it("escaped-target.js", createTestHandler("language/expressions/new.target/escaped-target.js"));
it("unary-expr.js", createTestHandler("language/expressions/new.target/unary-expr.js"));
it("value-via-call.js", createTestHandler("language/expressions/new.target/value-via-call.js"));
it("value-via-fpapply.js", createTestHandler("language/expressions/new.target/value-via-fpapply.js"));
it("value-via-fpcall.js", createTestHandler("language/expressions/new.target/value-via-fpcall.js"));
it("value-via-member.js", createTestHandler("language/expressions/new.target/value-via-member.js"));
it("value-via-new.js", createTestHandler("language/expressions/new.target/value-via-new.js"));
it("value-via-reflect-apply.js", createTestHandler("language/expressions/new.target/value-via-reflect-apply.js"));
it("value-via-reflect-construct.js", createTestHandler("language/expressions/new.target/value-via-reflect-construct.js"));
it("value-via-super-call.js", createTestHandler("language/expressions/new.target/value-via-super-call.js"));
it("value-via-super-property.js", createTestHandler("language/expressions/new.target/value-via-super-property.js"));
it("value-via-tagged-template.js", createTestHandler("language/expressions/new.target/value-via-tagged-template.js"));
});
