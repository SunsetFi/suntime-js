import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("of", () => {
it("invoked-as-func.js", createTestHandler("built-ins/TypedArray/of/invoked-as-func.js"));
it("invoked-as-method.js", createTestHandler("built-ins/TypedArray/of/invoked-as-method.js"));
it("length.js", createTestHandler("built-ins/TypedArray/of/length.js"));
it("name.js", createTestHandler("built-ins/TypedArray/of/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/TypedArray/of/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/TypedArray/of/prop-desc.js"));
it("resized-with-out-of-bounds-and-in-bounds-indices.js", createTestHandler("built-ins/TypedArray/of/resized-with-out-of-bounds-and-in-bounds-indices.js"));
it("this-is-not-constructor.js", createTestHandler("built-ins/TypedArray/of/this-is-not-constructor.js"));
});
