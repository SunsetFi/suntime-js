import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("throw", () => {
it("length.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/length.js"));
it("name.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/name.js"));
it("prop-desc.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/prop-desc.js"));
it("request-queue-order-state-executing.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/request-queue-order-state-executing.js"));
it("return-rejected-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/return-rejected-promise.js"));
it("this-val-not-async-generator.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/this-val-not-async-generator.js"));
it("this-val-not-object.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/this-val-not-object.js"));
it("throw-state-completed.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-state-completed.js"));
it("throw-suspendedStart-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedStart-promise.js"));
it("throw-suspendedStart.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedStart.js"));
it("throw-suspendedYield-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedYield-promise.js"));
it("throw-suspendedYield-try-catch.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedYield-try-catch.js"));
it("throw-suspendedYield-try-finally-return.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedYield-try-finally-return.js"));
it("throw-suspendedYield-try-finally-throw.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedYield-try-finally-throw.js"));
it("throw-suspendedYield-try-finally.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedYield-try-finally.js"));
it("throw-suspendedYield.js", createTestHandler("built-ins/AsyncGeneratorPrototype/throw/throw-suspendedYield.js"));
});
