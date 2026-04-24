import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("reject", () => {
it("S25.4.4.4_A1.1_T1.js", createTestHandler("built-ins/Promise/reject/S25.4.4.4_A1.1_T1.js"));
it("S25.4.4.4_A2.1_T1.js", createTestHandler("built-ins/Promise/reject/S25.4.4.4_A2.1_T1.js"));
it("S25.4.4.4_A3.1_T1.js", createTestHandler("built-ins/Promise/reject/S25.4.4.4_A3.1_T1.js"));
it("capability-executor-called-twice.js", createTestHandler("built-ins/Promise/reject/capability-executor-called-twice.js"));
it("capability-executor-not-callable.js", createTestHandler("built-ins/Promise/reject/capability-executor-not-callable.js"));
it("capability-invocation-error.js", createTestHandler("built-ins/Promise/reject/capability-invocation-error.js"));
it("capability-invocation.js", createTestHandler("built-ins/Promise/reject/capability-invocation.js"));
it("ctx-ctor-throws.js", createTestHandler("built-ins/Promise/reject/ctx-ctor-throws.js"));
it("ctx-ctor.js", createTestHandler("built-ins/Promise/reject/ctx-ctor.js"));
it("ctx-non-ctor.js", createTestHandler("built-ins/Promise/reject/ctx-non-ctor.js"));
it("ctx-non-object.js", createTestHandler("built-ins/Promise/reject/ctx-non-object.js"));
it("length.js", createTestHandler("built-ins/Promise/reject/length.js"));
it("name.js", createTestHandler("built-ins/Promise/reject/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Promise/reject/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Promise/reject/prop-desc.js"));
});
