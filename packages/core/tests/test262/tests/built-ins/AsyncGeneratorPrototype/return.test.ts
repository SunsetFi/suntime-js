import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("return", () => {
it("iterator-result-prototype.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/iterator-result-prototype.js"));
it("length.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/length.js"));
it("name.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/name.js"));
it("prop-desc.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/prop-desc.js"));
it("request-queue-order-state-executing.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/request-queue-order-state-executing.js"));
it("return-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-promise.js"));
it("return-state-completed-broken-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-state-completed-broken-promise.js"));
it("return-state-completed.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-state-completed.js"));
it("return-suspendedStart-broken-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedStart-broken-promise.js"));
it("return-suspendedStart-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedStart-promise.js"));
it("return-suspendedStart.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedStart.js"));
it("return-suspendedYield-broken-promise-try-catch.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-broken-promise-try-catch.js"));
it("return-suspendedYield-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-promise.js"));
it("return-suspendedYield-try-finally-return.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-try-finally-return.js"));
it("return-suspendedYield-try-finally-throw.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-try-finally-throw.js"));
it("return-suspendedYield-try-finally.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield-try-finally.js"));
it("return-suspendedYield.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/return-suspendedYield.js"));
it("this-val-not-async-generator.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/this-val-not-async-generator.js"));
it("this-val-not-object.js", createTestHandler("built-ins/AsyncGeneratorPrototype/return/this-val-not-object.js"));
});
