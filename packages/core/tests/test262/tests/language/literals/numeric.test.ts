import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("numeric", () => {
  it(
    "7.8.3-1gs.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/7.8.3-1gs.js"),
  );
  it(
    "7.8.3-2gs.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/7.8.3-2gs.js"),
  );
  it(
    "7.8.3-3gs.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/7.8.3-3gs.js"),
  );
  it(
    "S7.8.3_A1.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.1_T1.js"),
  );
  it(
    "S7.8.3_A1.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.1_T2.js"),
  );
  it(
    "S7.8.3_A1.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T1.js"),
  );
  it(
    "S7.8.3_A1.2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T2.js"),
  );
  it(
    "S7.8.3_A1.2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T3.js"),
  );
  it(
    "S7.8.3_A1.2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T4.js"),
  );
  it(
    "S7.8.3_A1.2_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T5.js"),
  );
  it(
    "S7.8.3_A1.2_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T6.js"),
  );
  it(
    "S7.8.3_A1.2_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T7.js"),
  );
  it(
    "S7.8.3_A1.2_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A1.2_T8.js"),
  );
  it(
    "S7.8.3_A2.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.1_T1.js"),
  );
  it(
    "S7.8.3_A2.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.1_T2.js"),
  );
  it(
    "S7.8.3_A2.1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.1_T3.js"),
  );
  it(
    "S7.8.3_A2.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T1.js"),
  );
  it(
    "S7.8.3_A2.2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T2.js"),
  );
  it(
    "S7.8.3_A2.2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T3.js"),
  );
  it(
    "S7.8.3_A2.2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T4.js"),
  );
  it(
    "S7.8.3_A2.2_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T5.js"),
  );
  it(
    "S7.8.3_A2.2_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T6.js"),
  );
  it(
    "S7.8.3_A2.2_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T7.js"),
  );
  it(
    "S7.8.3_A2.2_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A2.2_T8.js"),
  );
  it(
    "S7.8.3_A3.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.1_T1.js"),
  );
  it(
    "S7.8.3_A3.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.1_T2.js"),
  );
  it(
    "S7.8.3_A3.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.2_T1.js"),
  );
  it(
    "S7.8.3_A3.2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.2_T2.js"),
  );
  it(
    "S7.8.3_A3.2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.2_T3.js"),
  );
  it(
    "S7.8.3_A3.3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T1.js"),
  );
  it(
    "S7.8.3_A3.3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T2.js"),
  );
  it(
    "S7.8.3_A3.3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T3.js"),
  );
  it(
    "S7.8.3_A3.3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T4.js"),
  );
  it(
    "S7.8.3_A3.3_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T5.js"),
  );
  it(
    "S7.8.3_A3.3_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T6.js"),
  );
  it(
    "S7.8.3_A3.3_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T7.js"),
  );
  it(
    "S7.8.3_A3.3_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.3_T8.js"),
  );
  it(
    "S7.8.3_A3.4_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T1.js"),
  );
  it(
    "S7.8.3_A3.4_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T2.js"),
  );
  it(
    "S7.8.3_A3.4_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T3.js"),
  );
  it(
    "S7.8.3_A3.4_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T4.js"),
  );
  it(
    "S7.8.3_A3.4_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T5.js"),
  );
  it(
    "S7.8.3_A3.4_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T6.js"),
  );
  it(
    "S7.8.3_A3.4_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T7.js"),
  );
  it(
    "S7.8.3_A3.4_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A3.4_T8.js"),
  );
  it(
    "S7.8.3_A4.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T1.js"),
  );
  it(
    "S7.8.3_A4.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T2.js"),
  );
  it(
    "S7.8.3_A4.1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T3.js"),
  );
  it(
    "S7.8.3_A4.1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T4.js"),
  );
  it(
    "S7.8.3_A4.1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T5.js"),
  );
  it(
    "S7.8.3_A4.1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T6.js"),
  );
  it(
    "S7.8.3_A4.1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T7.js"),
  );
  it(
    "S7.8.3_A4.1_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.1_T8.js"),
  );
  it(
    "S7.8.3_A4.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T1.js"),
  );
  it(
    "S7.8.3_A4.2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T2.js"),
  );
  it(
    "S7.8.3_A4.2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T3.js"),
  );
  it(
    "S7.8.3_A4.2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T4.js"),
  );
  it(
    "S7.8.3_A4.2_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T5.js"),
  );
  it(
    "S7.8.3_A4.2_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T6.js"),
  );
  it(
    "S7.8.3_A4.2_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T7.js"),
  );
  it(
    "S7.8.3_A4.2_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A4.2_T8.js"),
  );
  it(
    "S7.8.3_A5.1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T1.js"),
  );
  it(
    "S7.8.3_A5.1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T2.js"),
  );
  it(
    "S7.8.3_A5.1_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T3.js"),
  );
  it(
    "S7.8.3_A5.1_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T4.js"),
  );
  it(
    "S7.8.3_A5.1_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T5.js"),
  );
  it(
    "S7.8.3_A5.1_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T6.js"),
  );
  it(
    "S7.8.3_A5.1_T7.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T7.js"),
  );
  it(
    "S7.8.3_A5.1_T8.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A5.1_T8.js"),
  );
  it(
    "S7.8.3_A6.1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A6.1_T1.js"),
  );
  it(
    "S7.8.3_A6.1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A6.1_T2.js"),
  );
  it(
    "S7.8.3_A6.2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A6.2_T1.js"),
  );
  it(
    "S7.8.3_A6.2_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/S7.8.3_A6.2_T2.js"),
  );
  it(
    "binary-invalid-digit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/binary-invalid-digit.js"),
  );
  it(
    "binary-invalid-leading.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/binary-invalid-leading.js"),
  );
  it(
    "binary-invalid-truncated.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/binary-invalid-truncated.js"),
  );
  it(
    "binary-invalid-unicode.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/binary-invalid-unicode.js"),
  );
  it(
    "binary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/binary.js"),
  );
  it(
    "legacy-octal-integer-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integer-strict.js"),
  );
  it(
    "legacy-octal-integer.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integer.js"),
  );
  it(
    "legacy-octal-integery-000-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integery-000-strict.js"),
  );
  it(
    "legacy-octal-integery-005-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integery-005-strict.js"),
  );
  it(
    "legacy-octal-integery-01-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integery-01-strict.js"),
  );
  it(
    "legacy-octal-integery-010-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integery-010-strict.js"),
  );
  it(
    "legacy-octal-integery-06-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integery-06-strict.js"),
  );
  it(
    "legacy-octal-integery-07-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/legacy-octal-integery-07-strict.js"),
  );
  it(
    "non-octal-decimal-integer-strict.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/non-octal-decimal-integer-strict.js"),
  );
  it(
    "non-octal-decimal-integer.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/non-octal-decimal-integer.js"),
  );
  it(
    "numeric-followed-by-ident.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/numeric-followed-by-ident.js"),
  );
  describe("numeric-separators", () => {
    it(
      "numeric-separator-literal-bil-bd-nsl-bd-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-bil-bd-nsl-bd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bd-nsl-bd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-bil-bd-nsl-bd.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bd-nsl-bds.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-bil-bd-nsl-bds.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bds-nsl-bd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-bil-bds-nsl-bd.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bds-nsl-bds.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-bil-bds-nsl-bds.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-nsl-bd-dunder-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-bil-nsl-bd-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-nsl-bd-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-bil-nsl-bd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-dot-dd-ep-sign-minus-dd-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dd-dot-dd-ep-sign-minus-dd-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-dot-dd-ep-sign-minus-dds-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dd-dot-dd-ep-sign-minus-dds-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-dot-dd-ep-sign-plus-dd-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dd-dot-dd-ep-sign-plus-dd-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-dot-dd-ep-sign-plus-dds-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dd-dot-dd-ep-sign-plus-dds-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-nsl-dd-one-of.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dd-nsl-dd-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-nsl-dds-dunder-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dd-nsl-dds-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-nsl-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dd-nsl-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dds-dot-dd-nsl-dd-ep-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dds-dot-dd-nsl-dd-ep-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-dds-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dds-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-dds-nsl-dds-dunder-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dds-nsl-dds-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dds-nsl-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dds-nsl-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dil-dot-dds-nsl-ep-dd-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dil-dot-dds-nsl-ep-dd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dil-dot-nsl-dd-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dil-dot-nsl-dd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dil-dot-nsl-ep-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dil-dot-nsl-ep-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dil-dot-nsl-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dil-dot-nsl-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dot-dd-nsl-dd-ep.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dot-dd-nsl-dd-ep.js",
      ),
    );
    it(
      "numeric-separator-literal-dot-dd-nsl-dds-ep.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dot-dd-nsl-dds-ep.js",
      ),
    );
    it(
      "numeric-separator-literal-dot-dds-nsl-dd-ep.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dot-dds-nsl-dd-ep.js",
      ),
    );
    it(
      "numeric-separator-literal-dot-dds-nsl-dds-ep.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dot-dds-nsl-dds-ep.js",
      ),
    );
    it(
      "numeric-separator-literal-dot-dds-nsl-ep-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dot-dds-nsl-ep-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dot-nsl-ep-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dot-nsl-ep-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dot-nsl-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-dot-nsl-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hd-nsl-hd-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-hd-nsl-hd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hd-nsl-hd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-hd-nsl-hd.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hd-nsl-hds.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-hd-nsl-hds.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hds-nsl-hd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-hds-nsl-hd.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hds-nsl-hds.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-hds-nsl-hds.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-nsl-hd-dunder-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-nsl-hd-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-nsl-hd-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-nsl-hd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-od-nsl-od-one-of.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-hil-od-nsl-od-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-00-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-lol-00-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-01-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-lol-01-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-07-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-lol-07-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-0_0-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-lol-0_0-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-0_1-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-lol-0_1-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-0_7-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-lol-0_7-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-08-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nonoctal-08-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-09-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nonoctal-09-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-0_8-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nonoctal-0_8-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-0_9-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nonoctal-0_9-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dd-one-of.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nzd-nsl-dd-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nzd-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dds-dunder-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nzd-nsl-dds-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dds-leading-zero-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nzd-nsl-dds-leading-zero-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dds.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-nzd-nsl-dds.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-nsl-od-dunder-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-nsl-od-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-nsl-od-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-nsl-od-err.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-od-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-od-nsl-od-err.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-od-one-of.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-od-nsl-od-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-od.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-od-nsl-od.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-ods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-od-nsl-ods.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-ods-nsl-od.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-ods-nsl-od.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-ods-nsl-ods.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-oil-ods-nsl-ods.js",
      ),
    );
    it(
      "numeric-separator-literal-sign-minus-dds-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-sign-minus-dds-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-sign-plus-dds-nsl-dd.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-sign-plus-dds-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-unicode-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/numeric/numeric-separators/numeric-separator-literal-unicode-err.js",
      ),
    );
  });
  it(
    "octal-invalid-digit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/octal-invalid-digit.js"),
  );
  it(
    "octal-invalid-leading.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/octal-invalid-leading.js"),
  );
  it(
    "octal-invalid-truncated.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/octal-invalid-truncated.js"),
  );
  it(
    "octal-invalid-unicode.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/numeric/octal-invalid-unicode.js"),
  );
  it(
    "octal.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/numeric/octal.js"),
  );
});
