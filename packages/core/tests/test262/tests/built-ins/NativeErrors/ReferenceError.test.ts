import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ReferenceError", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/ReferenceError/constructor.js"));
it("instance-proto.js", createTestHandler("built-ins/NativeErrors/ReferenceError/instance-proto.js"));
it("is-a-constructor.js", createTestHandler("built-ins/NativeErrors/ReferenceError/is-a-constructor.js"));
it("is-error-object.js", createTestHandler("built-ins/NativeErrors/ReferenceError/is-error-object.js"));
it("length.js", createTestHandler("built-ins/NativeErrors/ReferenceError/length.js"));
it("name.js", createTestHandler("built-ins/NativeErrors/ReferenceError/name.js"));
it("prop-desc.js", createTestHandler("built-ins/NativeErrors/ReferenceError/prop-desc.js"));
it("proto-from-ctor-realm.js", createTestHandler("built-ins/NativeErrors/ReferenceError/proto-from-ctor-realm.js"));
it("proto.js", createTestHandler("built-ins/NativeErrors/ReferenceError/proto.js"));
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/constructor.js"));
it("message.js", createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/message.js"));
it("name.js", createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/name.js"));
it("not-error-object.js", createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/not-error-object.js"));
it("proto.js", createTestHandler("built-ins/NativeErrors/ReferenceError/prototype/proto.js"));
});
it("prototype.js", createTestHandler("built-ins/NativeErrors/ReferenceError/prototype.js"));
});
