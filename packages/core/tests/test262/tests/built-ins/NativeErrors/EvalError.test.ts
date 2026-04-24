import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("EvalError", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/EvalError/constructor.js"));
it("instance-proto.js", createTestHandler("built-ins/NativeErrors/EvalError/instance-proto.js"));
it("is-a-constructor.js", createTestHandler("built-ins/NativeErrors/EvalError/is-a-constructor.js"));
it("is-error-object.js", createTestHandler("built-ins/NativeErrors/EvalError/is-error-object.js"));
it("length.js", createTestHandler("built-ins/NativeErrors/EvalError/length.js"));
it("name.js", createTestHandler("built-ins/NativeErrors/EvalError/name.js"));
it("prop-desc.js", createTestHandler("built-ins/NativeErrors/EvalError/prop-desc.js"));
it("proto-from-ctor-realm.js", createTestHandler("built-ins/NativeErrors/EvalError/proto-from-ctor-realm.js"));
it("proto.js", createTestHandler("built-ins/NativeErrors/EvalError/proto.js"));
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/EvalError/prototype/constructor.js"));
it("message.js", createTestHandler("built-ins/NativeErrors/EvalError/prototype/message.js"));
it("name.js", createTestHandler("built-ins/NativeErrors/EvalError/prototype/name.js"));
it("not-error-object.js", createTestHandler("built-ins/NativeErrors/EvalError/prototype/not-error-object.js"));
it("proto.js", createTestHandler("built-ins/NativeErrors/EvalError/prototype/proto.js"));
});
it("prototype.js", createTestHandler("built-ins/NativeErrors/EvalError/prototype.js"));
});
