import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("construct", () => {
it("arguments-list-is-not-array-like.js", createTestHandler("built-ins/Reflect/construct/arguments-list-is-not-array-like.js"));
it("construct.js", createTestHandler("built-ins/Reflect/construct/construct.js"));
it("length.js", createTestHandler("built-ins/Reflect/construct/length.js"));
it("name.js", createTestHandler("built-ins/Reflect/construct/name.js"));
it("newtarget-is-not-constructor-throws.js", createTestHandler("built-ins/Reflect/construct/newtarget-is-not-constructor-throws.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Reflect/construct/not-a-constructor.js"));
it("return-with-newtarget-argument.js", createTestHandler("built-ins/Reflect/construct/return-with-newtarget-argument.js"));
it("return-without-newtarget-argument.js", createTestHandler("built-ins/Reflect/construct/return-without-newtarget-argument.js"));
it("target-is-not-constructor-throws.js", createTestHandler("built-ins/Reflect/construct/target-is-not-constructor-throws.js"));
it("use-arguments-list.js", createTestHandler("built-ins/Reflect/construct/use-arguments-list.js"));
});
