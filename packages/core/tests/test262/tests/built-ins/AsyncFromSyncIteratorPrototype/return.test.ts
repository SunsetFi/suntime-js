import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("return", () => {
it("absent-value-not-passed.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/absent-value-not-passed.js"));
it("iterator-result-poisoned-done.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result-poisoned-done.js"));
it("iterator-result-poisoned-value.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result-poisoned-value.js"));
it("iterator-result-unwrap-promise.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result-unwrap-promise.js"));
it("iterator-result.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/iterator-result.js"));
it("poisoned-get-return.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/poisoned-get-return.js"));
it("poisoned-return.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/poisoned-return.js"));
it("result-object-error.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/result-object-error.js"));
it("return-null.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/return-null.js"));
it("return-undefined.js", createTestHandler("built-ins/AsyncFromSyncIteratorPrototype/return/return-undefined.js"));
});
