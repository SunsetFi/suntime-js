import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("withResolvers", () => {
it("ctx-ctor.js", createTestHandler("built-ins/Promise/withResolvers/ctx-ctor.js"));
it("ctx-non-ctor.js", createTestHandler("built-ins/Promise/withResolvers/ctx-non-ctor.js"));
it("ctx-non-object.js", createTestHandler("built-ins/Promise/withResolvers/ctx-non-object.js"));
it("promise.js", createTestHandler("built-ins/Promise/withResolvers/promise.js"));
it("resolvers.js", createTestHandler("built-ins/Promise/withResolvers/resolvers.js"));
it("result.js", createTestHandler("built-ins/Promise/withResolvers/result.js"));
});
