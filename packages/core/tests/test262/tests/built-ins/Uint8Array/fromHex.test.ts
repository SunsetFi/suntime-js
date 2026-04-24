import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("fromHex", () => {
it("descriptor.js", createTestHandler("built-ins/Uint8Array/fromHex/descriptor.js"));
it("ignores-receiver.js", createTestHandler("built-ins/Uint8Array/fromHex/ignores-receiver.js"));
it("illegal-characters.js", createTestHandler("built-ins/Uint8Array/fromHex/illegal-characters.js"));
it("length.js", createTestHandler("built-ins/Uint8Array/fromHex/length.js"));
it("name.js", createTestHandler("built-ins/Uint8Array/fromHex/name.js"));
it("nonconstructor.js", createTestHandler("built-ins/Uint8Array/fromHex/nonconstructor.js"));
it("odd-length-input.js", createTestHandler("built-ins/Uint8Array/fromHex/odd-length-input.js"));
it("results.js", createTestHandler("built-ins/Uint8Array/fromHex/results.js"));
it("string-coercion.js", createTestHandler("built-ins/Uint8Array/fromHex/string-coercion.js"));
});
