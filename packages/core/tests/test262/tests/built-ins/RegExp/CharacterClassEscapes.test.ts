import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("CharacterClassEscapes", () => {
it("character-class-digit-class-escape-negative-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-digit-class-escape-negative-cases.js"));
it("character-class-digit-class-escape-positive-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-digit-class-escape-positive-cases.js"));
it("character-class-non-digit-class-escape-negative-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-non-digit-class-escape-negative-cases.js"));
it("character-class-non-digit-class-escape-positive-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-non-digit-class-escape-positive-cases.js"));
it("character-class-non-whitespace-class-escape-negative-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-non-whitespace-class-escape-negative-cases.js"));
it("character-class-non-whitespace-class-escape-positive-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-non-whitespace-class-escape-positive-cases.js"));
it("character-class-non-word-class-escape-negative-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-non-word-class-escape-negative-cases.js"));
it("character-class-non-word-class-escape-positive-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-non-word-class-escape-positive-cases.js"));
it("character-class-whitespace-class-escape-negative-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-whitespace-class-escape-negative-cases.js"));
it("character-class-whitespace-class-escape-positive-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-whitespace-class-escape-positive-cases.js"));
it("character-class-word-class-escape-negative-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-word-class-escape-negative-cases.js"));
it("character-class-word-class-escape-positive-cases.js", createTestHandler("built-ins/RegExp/CharacterClassEscapes/character-class-word-class-escape-positive-cases.js"));
});
