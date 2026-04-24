import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("typeof", () => {
it("bigint.js", createTestHandler("language/expressions/typeof/bigint.js"));
it("boolean.js", createTestHandler("language/expressions/typeof/boolean.js"));
it("built-in-exotic-objects-no-call.js", createTestHandler("language/expressions/typeof/built-in-exotic-objects-no-call.js"));
it("built-in-functions.js", createTestHandler("language/expressions/typeof/built-in-functions.js"));
it("built-in-ordinary-objects-no-call.js", createTestHandler("language/expressions/typeof/built-in-ordinary-objects-no-call.js"));
it("get-value-ref-err.js", createTestHandler("language/expressions/typeof/get-value-ref-err.js"));
it("get-value.js", createTestHandler("language/expressions/typeof/get-value.js"));
it("native-call.js", createTestHandler("language/expressions/typeof/native-call.js"));
it("null.js", createTestHandler("language/expressions/typeof/null.js"));
it("number.js", createTestHandler("language/expressions/typeof/number.js"));
it("proxy.js", createTestHandler("language/expressions/typeof/proxy.js"));
it("string.js", createTestHandler("language/expressions/typeof/string.js"));
it("symbol.js", createTestHandler("language/expressions/typeof/symbol.js"));
it("syntax.js", createTestHandler("language/expressions/typeof/syntax.js"));
it("undefined.js", createTestHandler("language/expressions/typeof/undefined.js"));
it("unresolvable-reference.js", createTestHandler("language/expressions/typeof/unresolvable-reference.js"));
});
