import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("next", () => {
it("iterator-result-prototype.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/iterator-result-prototype.js"));
it("length.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/length.js"));
it("name.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/name.js"));
it("prop-desc.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/prop-desc.js"));
it("request-queue-await-order.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/request-queue-await-order.js"));
it("request-queue-order-state-executing.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/request-queue-order-state-executing.js"));
it("request-queue-order.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/request-queue-order.js"));
it("request-queue-promise-resolve-order.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/request-queue-promise-resolve-order.js"));
it("return-promise.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/return-promise.js"));
it("this-val-not-async-generator.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/this-val-not-async-generator.js"));
it("this-val-not-object.js", createTestHandler("built-ins/AsyncGeneratorPrototype/next/this-val-not-object.js"));
});
