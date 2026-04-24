import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("named-groups", () => {
  it(
    "duplicate-names-exec.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-exec.js"),
  );
  it(
    "duplicate-names-group-property-enumeration-order.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/named-groups/duplicate-names-group-property-enumeration-order.js",
    ),
  );
  it(
    "duplicate-names-match-indices.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-match-indices.js"),
  );
  it(
    "duplicate-names-match.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-match.js"),
  );
  it(
    "duplicate-names-matchall.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-matchall.js"),
  );
  it(
    "duplicate-names-replace.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-replace.js"),
  );
  it(
    "duplicate-names-replaceall.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-replaceall.js"),
  );
  it(
    "duplicate-names-search.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-search.js"),
  );
  it(
    "duplicate-names-split.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-split.js"),
  );
  it(
    "duplicate-names-test.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/duplicate-names-test.js"),
  );
  it(
    "functional-replace-global.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/functional-replace-global.js"),
  );
  it(
    "functional-replace-non-global.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/functional-replace-non-global.js"),
  );
  it(
    "groups-object-subclass-sans.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/groups-object-subclass-sans.js"),
  );
  it(
    "groups-object-subclass.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/groups-object-subclass.js"),
  );
  it(
    "groups-object-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/groups-object-undefined.js"),
  );
  it(
    "groups-object-unmatched.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/groups-object-unmatched.js"),
  );
  it(
    "groups-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/groups-object.js"),
  );
  it(
    "groups-properties.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/groups-properties.js"),
  );
  it(
    "lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/lookbehind.js"),
  );
  it(
    "non-unicode-match.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/non-unicode-match.js"),
  );
  it(
    "non-unicode-property-names-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/non-unicode-property-names-invalid.js"),
  );
  it(
    "non-unicode-property-names-valid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/non-unicode-property-names-valid.js"),
  );
  it(
    "non-unicode-property-names.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/non-unicode-property-names.js"),
  );
  it(
    "non-unicode-references.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/non-unicode-references.js"),
  );
  it(
    "string-replace-escaped.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/string-replace-escaped.js"),
  );
  it(
    "string-replace-get.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/string-replace-get.js"),
  );
  it(
    "string-replace-missing.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/string-replace-missing.js"),
  );
  it(
    "string-replace-nocaptures.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/string-replace-nocaptures.js"),
  );
  it(
    "string-replace-numbered.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/string-replace-numbered.js"),
  );
  it(
    "string-replace-unclosed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/string-replace-unclosed.js"),
  );
  it(
    "string-replace-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/string-replace-undefined.js"),
  );
  it(
    "unicode-match.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/unicode-match.js"),
  );
  it(
    "unicode-property-names-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/unicode-property-names-invalid.js"),
  );
  it(
    "unicode-property-names-valid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/unicode-property-names-valid.js"),
  );
  it(
    "unicode-property-names.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/unicode-property-names.js"),
  );
  it(
    "unicode-references.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/named-groups/unicode-references.js"),
  );
});
