import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("escape", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/cross-realm.js"),
  );
  it(
    "escaped-control-characters.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-control-characters.js"),
  );
  it(
    "escaped-lineterminator.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-lineterminator.js"),
  );
  it(
    "escaped-otherpunctuators.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-otherpunctuators.js"),
  );
  it(
    "escaped-solidus-character-mixed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-solidus-character-mixed.js"),
  );
  it(
    "escaped-solidus-character-simple.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-solidus-character-simple.js"),
  );
  it(
    "escaped-surrogates.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-surrogates.js"),
  );
  it(
    "escaped-syntax-characters-mixed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-syntax-characters-mixed.js"),
  );
  it(
    "escaped-syntax-characters-simple.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-syntax-characters-simple.js"),
  );
  it(
    "escaped-utf16encodecodepoint.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-utf16encodecodepoint.js"),
  );
  it(
    "escaped-whitespace.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/escaped-whitespace.js"),
  );
  it(
    "initial-char-escape.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/initial-char-escape.js"),
  );
  it(
    "is-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/is-function.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/RegExp/escape/name.js"));
  it(
    "non-string-inputs.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/non-string-inputs.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/not-a-constructor.js"),
  );
  it(
    "not-escaped-underscore.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/not-escaped-underscore.js"),
  );
  it(
    "not-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/not-escaped.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/escape/prop-desc.js"),
  );
});
