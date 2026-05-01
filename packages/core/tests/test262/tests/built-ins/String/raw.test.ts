import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/String/raw/length.js"));

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/String/raw/name.js"));

it(
  "nextkey-is-symbol-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/raw/nextkey-is-symbol-throws.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/not-a-constructor.js"),
);

it("raw.js", { tags: ["known-failing"] }, createTestHandler("built-ins/String/raw/raw.js"));

it(
  "return-empty-string-from-empty-array-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-from-empty-array-length.js"),
);

it(
  "return-empty-string-if-length-is-negative-infinity.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-negative-infinity.js"),
);

it(
  "return-empty-string-if-length-is-not-defined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-not-defined.js"),
);

it(
  "return-empty-string-if-length-is-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-undefined.js"),
);

it(
  "return-empty-string-if-length-is-zero-NaN.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-zero-NaN.js"),
);

it(
  "return-empty-string-if-length-is-zero-boolean.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-zero-boolean.js"),
);

it(
  "return-empty-string-if-length-is-zero-null.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-zero-null.js"),
);

it(
  "return-empty-string-if-length-is-zero-or-less-number.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-zero-or-less-number.js"),
);

it(
  "return-empty-string-if-length-is-zero-or-less-string.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-empty-string-if-length-is-zero-or-less-string.js"),
);

it(
  "return-the-string-value-from-template.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-the-string-value-from-template.js"),
);

it(
  "return-the-string-value.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/return-the-string-value.js"),
);

it(
  "returns-abrupt-from-next-key-toString.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/returns-abrupt-from-next-key-toString.js"),
);

it(
  "returns-abrupt-from-next-key.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/returns-abrupt-from-next-key.js"),
);

it(
  "returns-abrupt-from-substitution-symbol.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/raw/returns-abrupt-from-substitution-symbol.js"),
);

it(
  "returns-abrupt-from-substitution.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/returns-abrupt-from-substitution.js"),
);

it(
  "special-characters.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/special-characters.js"),
);

it(
  "substitutions-are-appended-on-same-index.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/substitutions-are-appended-on-same-index.js"),
);

it(
  "substitutions-are-limited-to-template-raw-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/substitutions-are-limited-to-template-raw-length.js"),
);

it(
  "template-length-is-symbol-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/raw/template-length-is-symbol-throws.js"),
);

it(
  "template-length-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/template-length-throws.js"),
);

it(
  "template-not-object-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/raw/template-not-object-throws.js"),
);

it(
  "template-raw-not-object-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/String/raw/template-raw-not-object-throws.js"),
);

it(
  "template-raw-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/template-raw-throws.js"),
);

it(
  "template-substitutions-are-appended-on-same-index.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/template-substitutions-are-appended-on-same-index.js"),
);

it(
  "zero-literal-segments.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/String/raw/zero-literal-segments.js"),
);
