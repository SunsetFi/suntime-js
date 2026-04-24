import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("try", () => {
it("args.js", createTestHandler("built-ins/Promise/try/args.js"));
it("ctx-ctor-throws.js", createTestHandler("built-ins/Promise/try/ctx-ctor-throws.js"));
it("ctx-ctor.js", createTestHandler("built-ins/Promise/try/ctx-ctor.js"));
it("ctx-non-ctor.js", createTestHandler("built-ins/Promise/try/ctx-non-ctor.js"));
it("ctx-non-object.js", createTestHandler("built-ins/Promise/try/ctx-non-object.js"));
it("length.js", createTestHandler("built-ins/Promise/try/length.js"));
it("name.js", createTestHandler("built-ins/Promise/try/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Promise/try/not-a-constructor.js"));
it("promise.js", createTestHandler("built-ins/Promise/try/promise.js"));
it("prop-desc.js", createTestHandler("built-ins/Promise/try/prop-desc.js"));
it("return-value.js", createTestHandler("built-ins/Promise/try/return-value.js"));
it("throws.js", createTestHandler("built-ins/Promise/try/throws.js"));
});
