import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Symbol.asyncDispose", () => {
it("invokes-return.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/invokes-return.js"));
it("is-function.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/is-function.js"));
it("length.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/length.js"));
it("name.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/name.js"));
it("prop-desc.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/prop-desc.js"));
it("return-val.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/return-val.js"));
it("throw-rejected-return.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/throw-rejected-return.js"));
it("throw-return-getter.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/throw-return-getter.js"));
it("throw-return.js", createTestHandler("built-ins/AsyncIteratorPrototype/Symbol.asyncDispose/throw-return.js"));
});
