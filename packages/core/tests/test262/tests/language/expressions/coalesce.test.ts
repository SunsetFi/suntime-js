import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("coalesce", () => {
it("abrupt-is-a-short-circuit.js", createTestHandler("language/expressions/coalesce/abrupt-is-a-short-circuit.js"));
it("cannot-chain-head-with-logical-and.js", createTestHandler("language/expressions/coalesce/cannot-chain-head-with-logical-and.js"));
it("cannot-chain-head-with-logical-or.js", createTestHandler("language/expressions/coalesce/cannot-chain-head-with-logical-or.js"));
it("cannot-chain-tail-with-logical-and.js", createTestHandler("language/expressions/coalesce/cannot-chain-tail-with-logical-and.js"));
it("cannot-chain-tail-with-logical-or.js", createTestHandler("language/expressions/coalesce/cannot-chain-tail-with-logical-or.js"));
it("chainable-if-parenthesis-covered-logical-and.js", createTestHandler("language/expressions/coalesce/chainable-if-parenthesis-covered-logical-and.js"));
it("chainable-if-parenthesis-covered-logical-or.js", createTestHandler("language/expressions/coalesce/chainable-if-parenthesis-covered-logical-or.js"));
it("chainable-with-bitwise-and.js", createTestHandler("language/expressions/coalesce/chainable-with-bitwise-and.js"));
it("chainable-with-bitwise-or.js", createTestHandler("language/expressions/coalesce/chainable-with-bitwise-or.js"));
it("chainable-with-bitwise-xor.js", createTestHandler("language/expressions/coalesce/chainable-with-bitwise-xor.js"));
it("chainable.js", createTestHandler("language/expressions/coalesce/chainable.js"));
it("follows-null.js", createTestHandler("language/expressions/coalesce/follows-null.js"));
it("follows-undefined.js", createTestHandler("language/expressions/coalesce/follows-undefined.js"));
it("short-circuit-number-0.js", createTestHandler("language/expressions/coalesce/short-circuit-number-0.js"));
it("short-circuit-number-42.js", createTestHandler("language/expressions/coalesce/short-circuit-number-42.js"));
it("short-circuit-number-empty-string.js", createTestHandler("language/expressions/coalesce/short-circuit-number-empty-string.js"));
it("short-circuit-number-false.js", createTestHandler("language/expressions/coalesce/short-circuit-number-false.js"));
it("short-circuit-number-object.js", createTestHandler("language/expressions/coalesce/short-circuit-number-object.js"));
it("short-circuit-number-string.js", createTestHandler("language/expressions/coalesce/short-circuit-number-string.js"));
it("short-circuit-number-symbol.js", createTestHandler("language/expressions/coalesce/short-circuit-number-symbol.js"));
it("short-circuit-number-true.js", createTestHandler("language/expressions/coalesce/short-circuit-number-true.js"));
it("short-circuit-prevents-evaluation.js", createTestHandler("language/expressions/coalesce/short-circuit-prevents-evaluation.js"));
it("tco-pos-null.js", createTestHandler("language/expressions/coalesce/tco-pos-null.js"));
it("tco-pos-undefined.js", createTestHandler("language/expressions/coalesce/tco-pos-undefined.js"));
});
