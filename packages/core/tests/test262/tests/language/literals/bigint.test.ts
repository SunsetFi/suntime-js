import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("bigint", () => {
  it(
    "binary-invalid-digit.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/binary-invalid-digit.js"),
  );
  it(
    "exponent-part.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/exponent-part.js"),
  );
  it(
    "hexadecimal-invalid-digit.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/hexadecimal-invalid-digit.js"),
  );
  it(
    "legacy-octal-like-invalid-00n.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/legacy-octal-like-invalid-00n.js"),
  );
  it(
    "legacy-octal-like-invalid-01n.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/legacy-octal-like-invalid-01n.js"),
  );
  it(
    "legacy-octal-like-invalid-07n.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/legacy-octal-like-invalid-07n.js"),
  );
  it(
    "mv-is-not-integer-dil-dot-dds.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/mv-is-not-integer-dil-dot-dds.js"),
  );
  it(
    "mv-is-not-integer-dot-dds.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/mv-is-not-integer-dot-dds.js"),
  );
  it(
    "non-octal-like-invalid-0008n.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/non-octal-like-invalid-0008n.js"),
  );
  it(
    "non-octal-like-invalid-012348n.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/non-octal-like-invalid-012348n.js"),
  );
  it(
    "non-octal-like-invalid-08n.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/non-octal-like-invalid-08n.js"),
  );
  it(
    "non-octal-like-invalid-09n.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/non-octal-like-invalid-09n.js"),
  );
  describe("numeric-separators", () => {
    it(
      "numeric-separator-literal-bil-bd-nsl-bd-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-bil-bd-nsl-bd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bd-nsl-bd.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-bil-bd-nsl-bd.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bd-nsl-bds.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-bil-bd-nsl-bds.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bds-nsl-bd.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-bil-bds-nsl-bd.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-bds-nsl-bds.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-bil-bds-nsl-bds.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-nsl-bd-dunder-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-bil-nsl-bd-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-bil-nsl-bd-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-bil-nsl-bd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-nsl-dd-one-of.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-dd-nsl-dd-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-nsl-dds-dunder-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-dd-nsl-dds-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dd-nsl-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-dd-nsl-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dds-nsl-dd.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-dds-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-dds-nsl-dds-dunder-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-dds-nsl-dds-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-dds-nsl-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-dds-nsl-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hd-nsl-hd-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-hd-nsl-hd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hd-nsl-hd.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-hd-nsl-hd.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hd-nsl-hds.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-hd-nsl-hds.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hds-nsl-hd.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-hds-nsl-hd.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-hds-nsl-hds.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-hds-nsl-hds.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-nsl-hd-dunder-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-nsl-hd-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-nsl-hd-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-nsl-hd-err.js",
      ),
    );
    it(
      "numeric-separator-literal-hil-od-nsl-od-one-of.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-hil-od-nsl-od-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-00-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-lol-00-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-01-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-lol-01-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-07-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-lol-07-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-0_0-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-lol-0_0-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-0_1-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-lol-0_1-err.js",
      ),
    );
    it(
      "numeric-separator-literal-lol-0_7-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-lol-0_7-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-08-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nonoctal-08-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-09-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nonoctal-09-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-0_8-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nonoctal-0_8-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nonoctal-0_9-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nonoctal-0_9-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dd-one-of.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nzd-nsl-dd-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dd.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nzd-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dds-dunder-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nzd-nsl-dds-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dds-leading-zero-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nzd-nsl-dds-leading-zero-err.js",
      ),
    );
    it(
      "numeric-separator-literal-nzd-nsl-dds.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-nzd-nsl-dds.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-nsl-od-dunder-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-nsl-od-dunder-err.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-nsl-od-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-nsl-od-err.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-od-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-od-nsl-od-err.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-od-one-of.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-od-nsl-od-one-of.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-od.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-od-nsl-od.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-od-nsl-ods.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-od-nsl-ods.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-ods-nsl-od.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-ods-nsl-od.js",
      ),
    );
    it(
      "numeric-separator-literal-oil-ods-nsl-ods.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-oil-ods-nsl-ods.js",
      ),
    );
    it(
      "numeric-separator-literal-sign-minus-dds-nsl-dd.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-sign-minus-dds-nsl-dd.js",
      ),
    );
    it(
      "numeric-separator-literal-unicode-err.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/literals/bigint/numeric-separators/numeric-separator-literal-unicode-err.js",
      ),
    );
  });
  it(
    "octal-invalid-digit.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/bigint/octal-invalid-digit.js"),
  );
});
