import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("escape", () => {
it("cross-realm.js", createTestHandler("built-ins/RegExp/escape/cross-realm.js"));
it("escaped-control-characters.js", createTestHandler("built-ins/RegExp/escape/escaped-control-characters.js"));
it("escaped-lineterminator.js", createTestHandler("built-ins/RegExp/escape/escaped-lineterminator.js"));
it("escaped-otherpunctuators.js", createTestHandler("built-ins/RegExp/escape/escaped-otherpunctuators.js"));
it("escaped-solidus-character-mixed.js", createTestHandler("built-ins/RegExp/escape/escaped-solidus-character-mixed.js"));
it("escaped-solidus-character-simple.js", createTestHandler("built-ins/RegExp/escape/escaped-solidus-character-simple.js"));
it("escaped-surrogates.js", createTestHandler("built-ins/RegExp/escape/escaped-surrogates.js"));
it("escaped-syntax-characters-mixed.js", createTestHandler("built-ins/RegExp/escape/escaped-syntax-characters-mixed.js"));
it("escaped-syntax-characters-simple.js", createTestHandler("built-ins/RegExp/escape/escaped-syntax-characters-simple.js"));
it("escaped-utf16encodecodepoint.js", createTestHandler("built-ins/RegExp/escape/escaped-utf16encodecodepoint.js"));
it("escaped-whitespace.js", createTestHandler("built-ins/RegExp/escape/escaped-whitespace.js"));
it("initial-char-escape.js", createTestHandler("built-ins/RegExp/escape/initial-char-escape.js"));
it("is-function.js", createTestHandler("built-ins/RegExp/escape/is-function.js"));
it("length.js", createTestHandler("built-ins/RegExp/escape/length.js"));
it("name.js", createTestHandler("built-ins/RegExp/escape/name.js"));
it("non-string-inputs.js", createTestHandler("built-ins/RegExp/escape/non-string-inputs.js"));
it("not-a-constructor.js", createTestHandler("built-ins/RegExp/escape/not-a-constructor.js"));
it("not-escaped-underscore.js", createTestHandler("built-ins/RegExp/escape/not-escaped-underscore.js"));
it("not-escaped.js", createTestHandler("built-ins/RegExp/escape/not-escaped.js"));
it("prop-desc.js", createTestHandler("built-ins/RegExp/escape/prop-desc.js"));
});
