import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("TypeError", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/TypeError/constructor.js"));
it("instance-proto.js", createTestHandler("built-ins/NativeErrors/TypeError/instance-proto.js"));
it("is-a-constructor.js", createTestHandler("built-ins/NativeErrors/TypeError/is-a-constructor.js"));
it("is-error-object.js", createTestHandler("built-ins/NativeErrors/TypeError/is-error-object.js"));
it("length.js", createTestHandler("built-ins/NativeErrors/TypeError/length.js"));
it("name.js", createTestHandler("built-ins/NativeErrors/TypeError/name.js"));
it("prop-desc.js", createTestHandler("built-ins/NativeErrors/TypeError/prop-desc.js"));
it("proto-from-ctor-realm.js", createTestHandler("built-ins/NativeErrors/TypeError/proto-from-ctor-realm.js"));
it("proto.js", createTestHandler("built-ins/NativeErrors/TypeError/proto.js"));
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/NativeErrors/TypeError/prototype/constructor.js"));
});
describe("prototype", () => {
it("message.js", createTestHandler("built-ins/NativeErrors/TypeError/prototype/message.js"));
});
describe("prototype", () => {
it("name.js", createTestHandler("built-ins/NativeErrors/TypeError/prototype/name.js"));
});
describe("prototype", () => {
it("not-error-object.js", createTestHandler("built-ins/NativeErrors/TypeError/prototype/not-error-object.js"));
});
describe("prototype", () => {
it("proto.js", createTestHandler("built-ins/NativeErrors/TypeError/prototype/proto.js"));
});
it("prototype.js", createTestHandler("built-ins/NativeErrors/TypeError/prototype.js"));
});
