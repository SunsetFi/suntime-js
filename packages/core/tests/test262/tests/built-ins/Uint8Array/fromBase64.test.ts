import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("fromBase64", () => {
it("alphabet.js", createTestHandler("built-ins/Uint8Array/fromBase64/alphabet.js"));
it("descriptor.js", createTestHandler("built-ins/Uint8Array/fromBase64/descriptor.js"));
it("ignores-receiver.js", createTestHandler("built-ins/Uint8Array/fromBase64/ignores-receiver.js"));
it("illegal-characters.js", createTestHandler("built-ins/Uint8Array/fromBase64/illegal-characters.js"));
it("last-chunk-handling.js", createTestHandler("built-ins/Uint8Array/fromBase64/last-chunk-handling.js"));
it("last-chunk-invalid.js", createTestHandler("built-ins/Uint8Array/fromBase64/last-chunk-invalid.js"));
it("length.js", createTestHandler("built-ins/Uint8Array/fromBase64/length.js"));
it("name.js", createTestHandler("built-ins/Uint8Array/fromBase64/name.js"));
it("nonconstructor.js", createTestHandler("built-ins/Uint8Array/fromBase64/nonconstructor.js"));
it("option-coercion.js", createTestHandler("built-ins/Uint8Array/fromBase64/option-coercion.js"));
it("results.js", createTestHandler("built-ins/Uint8Array/fromBase64/results.js"));
it("string-coercion.js", createTestHandler("built-ins/Uint8Array/fromBase64/string-coercion.js"));
it("whitespace.js", createTestHandler("built-ins/Uint8Array/fromBase64/whitespace.js"));
});
