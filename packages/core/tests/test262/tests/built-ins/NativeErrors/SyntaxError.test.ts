import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("SyntaxError", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/SyntaxError/constructor.js"));
it("instance-proto.js", createTestHandler("built-ins/NativeErrors/SyntaxError/instance-proto.js"));
it("is-a-constructor.js", createTestHandler("built-ins/NativeErrors/SyntaxError/is-a-constructor.js"));
it("is-error-object.js", createTestHandler("built-ins/NativeErrors/SyntaxError/is-error-object.js"));
it("length.js", createTestHandler("built-ins/NativeErrors/SyntaxError/length.js"));
it("name.js", createTestHandler("built-ins/NativeErrors/SyntaxError/name.js"));
it("prop-desc.js", createTestHandler("built-ins/NativeErrors/SyntaxError/prop-desc.js"));
it("proto-from-ctor-realm.js", createTestHandler("built-ins/NativeErrors/SyntaxError/proto-from-ctor-realm.js"));
it("proto.js", createTestHandler("built-ins/NativeErrors/SyntaxError/proto.js"));
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/constructor.js"));
});
describe("prototype", () => {
it("message.js", createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/message.js"));
});
describe("prototype", () => {
it("name.js", createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/name.js"));
});
describe("prototype", () => {
it("not-error-object.js", createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/not-error-object.js"));
});
describe("prototype", () => {
it("proto.js", createTestHandler("built-ins/NativeErrors/SyntaxError/prototype/proto.js"));
});
it("prototype.js", createTestHandler("built-ins/NativeErrors/SyntaxError/prototype.js"));
});
